# Buildlyone Manufacturing ERP Scope

An interactive, management-facing functional-scope proposal for a future manufacturing ERP. This repository currently communicates the operating model and implementation direction; it is not yet the configured ERP application.

## What it covers

- End-to-end operating flow from planning and procurement through production, sales, delivery, and accounting
- Core ERP groups and the functions contained in each group
- Initial operating ERP scope and future expansion
- A controlled implementation roadmap from discovery through go-live
- Document numbering, batch tracking, and cross-department traceability
- Management visibility and control outcomes
- Explicit management decisions required before technical design
- Browser-based printing and PDF export

## Intended address

`https://erp.buildlyone.com`

The custom hostname is connected separately through the hosting platform and the Buildlyone DNS provider.

## Deployment

This is a static site with a small Vercel Routing Middleware dependency. On Vercel, use the repository root with the **Other** framework preset, no build command, and `.` as the output directory. No environment variables are required.

The current Vercel account must be active and in good billing standing before project creation or deployment can complete.

### Access protection

The Vercel deployment is protected by HTTP Basic Authentication in `middleware.js`.

- Username: `review`
- The shared password is not stored in Git; only its SHA-256 digest is committed.
- To rotate the password, generate a new digest with `printf %s 'NEW_PASSWORD' | shasum -a 256`, replace `AUTH_PASSWORD_SHA256` in `middleware.js`, and redeploy.
- Browsers usually remember Basic Authentication for the current session. To sign out, close all browser windows or clear the site's saved data.

## Preview locally

Open `index.html` in a browser or serve the repository with any static web server.
