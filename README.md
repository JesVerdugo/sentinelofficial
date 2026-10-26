# Sentinel Official

Static local rebuild of https://www.sentinelofficial.com/.

## Run locally

From this folder, the easiest local preview is:

```powershell
node server.mjs
```



If Python is installed normally on your machine, this also works:

```powershell
py -m http.server 8000
```

## Structure

- `index.html` - site markup and content
- `styles.css` - responsive layout and visual styling
- `script.js` - mobile menu and photo preview modal
- `assets/photos/` - local images pulled from the current hosted site
- `assets/icons/` - original Wix social/music icons and matching Instagram and merch store icons

This is intentionally buildless, so it can be served by GitHub Pages, a static
web server on a Zima box, nginx, Caddy, Apache, or any basic file server.

The Our Music section includes Spotify's embedded album player and a compact
player for "Last Moment of Clarity" below it. They provide playback controls
without local audio files or API keys. The players require an internet connection,
and Spotify determines playback availability for each listener. Update the album
or track IDs in `index.html` to feature different releases.
