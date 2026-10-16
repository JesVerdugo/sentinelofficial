# Sentinel Official

Static local rebuild of https://www.sentinelofficial.com/.

## Run locally

From this folder, the easiest local preview is:

```powershell
node server.mjs
```

Then open http://127.0.0.1:8000/.

If Python is installed normally on your machine, this also works:

```powershell
py -m http.server 8000
```

## Structure

- `index.html` - site markup and content
- `styles.css` - responsive layout and visual styling
- `script.js` - mobile menu and photo preview modal
- `assets/photos/` - local images pulled from the current hosted site

This is intentionally buildless, so it can be served by GitHub Pages, a static
web server on a Zima box, nginx, Caddy, Apache, or any basic file server.
