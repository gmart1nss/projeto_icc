<!-- Purpose: concise agent guidance for this small static site repo -->
# Copilot / AI Agent Instructions for this repository

- Purpose: help an AI coding agent be immediately productive with this project: a minimal static website anchored at [index.html](index.html).

**Big Picture**
- Single-page static site. The entry point is [index.html](index.html). There is no build system or package manifest in the repository.
- Expected assets: CSS/JS/images should live alongside `index.html` or under an `assets/`, `styles/`, or `scripts/` subfolder. If you add a toolchain, document it here.

**Quick local workflow**
- Run a static file server to test pages locally: `python -m http.server 8000` (then open http://localhost:8000) or `npx http-server`.
- Live reload: use an editor extension (e.g. Live Server) or `live-server` if added to project tooling.

**Project-specific conventions**
- Encoding and meta: files use UTF-8 and include a viewport meta tag (see [index.html](index.html)).
- Filenames: prefer lowercase, hyphen-separated tokens (e.g., `style.css`, `main.js`, `assets/logo.png`).
- Layout: keep the root directory minimal — move bulk assets into `assets/` or `static/` to keep `index.html` readable.

**What to modify and how**
- Adding CSS: create or update `style.css` at repo root or `styles/style.css` and update the `<link>` in [index.html](index.html).
- Adding JS: place scripts in `scripts/` and reference them with relative paths in the HTML; avoid introducing a bundler unless necessary — if you add one, update this file with build/run commands.

**Testing & Debugging**
- Manual: open the served page, use browser devtools console and network tab.
- When adding dynamic behavior, include a minimal reproducible example and instructions to reproduce the issue (URL + steps + expected vs actual).

**Integration & External deps**
- This repo currently has no external service integrations or package manifests. If you add CDN libraries, ensure they are referenced explicitly in the HTML and note them here.

**Merging guidance**
- If `.github/copilot-instructions.md` already exists in a fork, merge by preserving any project-specific notes under **Big Picture** and **Conventions**. Keep examples that reference real files present in the repo.

If anything here is unclear or you want agents to follow stricter rules (tooling, linting, or commit conventions), tell me what to add and I'll update this file.
