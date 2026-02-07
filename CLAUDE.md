# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for LC Fabricating, Inc. (Jim McDairmant, Warsaw, Indiana). Static HTML/CSS/JS — no build step, no framework, no dependencies.

## Architecture

Single-page scrolling site with five sections: Hero, About, Outdoor Living Solutions (3 cards), Design & Fabrication Solutions (3 cards), and Contact.

- `index.html` — all page content in one file
- `css/style.css` — all styles; CSS custom properties in `:root`; responsive breakpoints at 1024px, 768px, 480px
- `js/main.js` — mobile nav toggle and scroll behavior only
- `images/` — production images referenced by the site (logo.png, favicon.png, hero.jpg, headshot.jpg, service card photos)
- `Jim's Assets/` — source image library from Jim, organized in subfolders (Stairs & Glass, Roll Up Curtains, Renderings, Residential Design Prints). Select images from here, copy to `images/` with clean filenames.

## Development

Open `index.html` directly in a browser. No server required. No build, lint, or test commands.

## Design Decisions

- **Color palette:** Dark charcoal (`#333`/`#222`) alternating with white sections. Two accent colors: teal (`#4a90a4`) for Outdoor Living, warm gold (`#c4873b`) for Design & Fabrication.
- **Fonts:** Google Fonts — Montserrat for headings, Inter for body text.
- **Logo:** Transparent PNG (`LC Fab Logo with sub.png`) with CSS `drop-shadow` filter for visibility on dark hero background. Jim prefers this over the white-background version.
- **Contact:** All "Contact Jim" buttons use `mailto:lcfabricatinginc@gmail.com`. Phone: 574-334-7625.
- **Hosting:** TBD. Static files work on any host (Network Solutions, Netlify, GitHub Pages).

## Image Workflow

When adding new images: copy from `Jim's Assets/` to `images/` with a short lowercase filename, then reference in HTML. The `Jim's Assets/` folder also contains .zip archives of the original collections from Google Drive.
