# Frentex Tech · Company website

Arabic B2B software solutions website for Frentex Tech, Jeddah, Saudi Arabia.

**Official website:** https://frntextech.com
**Business enquiries:** INFO@frntextech.com
**Phone / WhatsApp:** +966 59 200 5751
**LinkedIn:** https://www.linkedin.com/company/frentex-tech/

## Project

Static HTML, CSS and JavaScript. Includes solution pages, delivery process, company information and interactive demonstration concepts.

Demonstrations use fictional local data; they are not client case studies. This repository does not provide a production backend or a database.

## Local preview

```sh
python3 -m http.server 8765
```

Open http://localhost:8765. Check desktop and mobile layouts and relevant links before submitting a change.

## Hosting

The official company domain is hosted separately. Publishing a commit to this repository does not by itself confirm a deployment to the external hosting account.

The existing GitHub Pages deployment is a separate preview: https://frentex-tech.github.io/frentex-tech/

## Development workflow

Create a branch, make a focused change, and open a pull request. The Engineering team reviews changes. Include what changed, how it was checked, and any deployment requirements.

- [Contribution guide](https://github.com/frentex-tech/.github/blob/main/CONTRIBUTING.md)
- [Private security reporting](https://github.com/frentex-tech/.github/blob/main/SECURITY.md)

Keep credentials, hosting keys and customer information out of this public repository.

## Fonts

IBM Plex Sans Arabic. OFL license: `assets/OFL.txt`.

## Hostinger production deployment (2026-10-25)

Production uses `npm run build` to prepare `dist/`. The build has no external package dependencies. Node 24.x, root `./`, output `dist`, Vite static preset on Hostinger. `npm start` also serves the built output for local verification; it is a static file server, not a business API. Source-only documentation and the internal reference presentation are excluded from the deployment.

Official contacts: INFO@frntextech.com, +966 59 200 5751, Jeddah, Saudi Arabia. The project brief is generated locally and is not submitted to a backend.

Original Hostinger source and compiled files were backed up before replacement in the private organization repository `hostinger-website-backup`. Rollback instructions and ZIP hash are recorded there.
