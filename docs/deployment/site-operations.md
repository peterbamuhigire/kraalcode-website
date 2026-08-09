# Site operations and deployment

**Audience:** Maintainers, hosting operators, and release reviewers
**Status:** Current runbook
**Last reviewed:** 2026-08-09

## Deployment model

This is a static Astro build. The deployment unit is the generated `dist/` directory. The server must serve directory routes with their `index.html` files and must expose the generated `_assets/`, `fonts/`, `icons/`, `static/`, and image paths.

There are no database migrations, queue workers, application secrets, or runtime API services in this repository.

## Release procedure

1. Confirm the working tree and current branch.

   ```bash
   git status --short --branch
   git log -1 --oneline
   ```

2. Pull the approved commit.

   ```bash
   git pull --ff-only origin main
   ```

3. Install the lockfile-defined dependencies.

   ```bash
   npm ci
   ```

4. Run the typecheck.

   ```bash
   npm run typecheck
   ```

5. Build the static output.

   ```bash
   npm run build
   ```

6. Confirm the build reports `Complete!` and the output exists.

   ```bash
   test -f dist/en/index.html
   test -f dist/fr/index.html
   test -f dist/sw/index.html
   test -f dist/sitemap-index.xml
   ```

7. Publish `dist/` using the hosting provider's atomic or staged directory release mechanism when available.

8. Record the deployed commit SHA, build result, operator, and deployment time in the release record.

## Local smoke test

Use the production build locally before publishing:

```bash
npm run preview -- --host 127.0.0.1 --port 4321
```

Check these routes in a browser:

- `/en/`
- `/fr/`
- `/sw/`
- `/en/capabilities/procurement/`
- `/fr/capacites/inventaire/`
- `/sw/sekta/elimu/`
- `/sitemap-index.xml`
- an intentionally missing path for the branded 404 page

For every changed template, confirm the header locale links, primary CTA, imagery, fonts, and trailing-slash route work.

## Web server requirements

The server should:

- use `dist/` as the document root;
- serve `index.html` for directory routes;
- return the branded `404.html` for missing routes;
- serve `/fonts/` and `/_assets/` with long-lived cache headers when filenames are content-hashed or immutable;
- use HTTPS in production;
- send at least `X-Content-Type-Options: nosniff` and a restrictive `Referrer-Policy`.

Example Nginx shape:

```nginx
server {
    listen 443 ssl;
    server_name kraalcode.com www.kraalcode.com;
    root /srv/kraalcode-website/dist;
    index index.html;

    location / {
        try_files $uri $uri/ $uri/index.html =404;
    }

    location ~* \.(?:css|js|woff2|jpg|jpeg|png|svg)$ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
```

Adapt the server block to the actual host, certificate paths, and proxy/CDN policy. Do not copy this example into production without checking the hosting environment.

## Rollback

If a release fails smoke testing or causes a material content, routing, or asset regression:

1. Stop promoting the new `dist/` directory.
2. Restore the previous known-good generated directory or previous release artifact.
3. Confirm `/en/`, `/fr/`, `/sw/`, one capability detail, one sector detail, and the 404 route.
4. Record the failing commit, symptom, detection time, and restored release.
5. Open a corrective change against `main`; do not patch production files without a matching repository change.

When the host only supports Git-based rollback, use the release commit recorded by the operator and deploy that exact revision. Avoid `git reset --hard` on a shared working tree.

## Post-deploy watch list

For the first 30 minutes after a release, check:

- homepage and locale response status;
- capability and sector detail hero images;
- fonts and `_assets` responses;
- sitemap and robots files;
- contact route and CTA links;
- server error logs and CDN cache errors.

## Current operational limitations

- There is no committed CI/CD workflow in this repository.
- ESLint is referenced by `package.json` but is not installed.
- Automated browser tests are not committed; visual checks are currently run with the available local Playwright environment.
- Image rights and model-release evidence remain open in the asset register.
