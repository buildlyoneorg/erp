import { next } from '@vercel/functions';

const AUTH_REALM = 'Buildlyone ERP Scope Review';
const AUTH_USERNAME = 'review';

// Only the SHA-256 digest is committed. The shared password is kept outside Git.
const AUTH_PASSWORD_SHA256 =
  '68c37ff1d855432781a0d605c5ac4d0c2f2373ed3f7f4cc277cc697e5579485c';

function unauthorized() {
  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'Cache-Control': 'no-store',
      'WWW-Authenticate': `Basic realm="${AUTH_REALM}", charset="UTF-8"`,
    },
  });
}

function timingSafeEqual(left, right) {
  const length = Math.max(left.length, right.length);
  let mismatch = left.length ^ right.length;

  for (let index = 0; index < length; index += 1) {
    mismatch |= (left.charCodeAt(index) || 0) ^ (right.charCodeAt(index) || 0);
  }

  return mismatch === 0;
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);

  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('');
}

export default async function middleware(request) {
  const authorization = request.headers.get('authorization');

  if (!authorization?.startsWith('Basic ')) {
    return unauthorized();
  }

  let credentials;

  try {
    credentials = atob(authorization.slice('Basic '.length));
  } catch {
    return unauthorized();
  }

  const separator = credentials.indexOf(':');

  if (separator < 0) {
    return unauthorized();
  }

  const username = credentials.slice(0, separator);
  const password = credentials.slice(separator + 1);
  const passwordDigest = await sha256(password);
  const validUsername = timingSafeEqual(username, AUTH_USERNAME);
  const validPassword = timingSafeEqual(passwordDigest, AUTH_PASSWORD_SHA256);

  return validUsername && validPassword ? next() : unauthorized();
}
