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

This is a dependency-free static site. On Vercel, use the repository root with the **Other** framework preset, no build command, and `.` as the output directory. No environment variables are required.

The current Vercel account must be active and in good billing standing before project creation or deployment can complete.

## Preview locally

Open `index.html` in a browser or serve the repository with any static web server.
