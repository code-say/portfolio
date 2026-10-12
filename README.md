# Sayan Mandal · Portfolio

**Live:** https://sayan-mandal-portfolio.vercel.app

My developer portfolio: a .NET Core developer at Capgemini building secure, scalable backend systems with ASP.NET Core, EF Core, SQL Server and Microsoft Azure.

Built on the [Simplefolio](https://github.com/cobidev/simplefolio) template by Jacobo Martinez (2021), refreshed in 2026.

## What changed in 2026

- Replaced the webpack 4 + node-sass build (no longer installs on current Node) with **Vite** and **Dart Sass**
- Removed jQuery, Popper and Bootstrap JS; smooth scrolling is native and the project tilt uses `vanilla-tilt`
- ScrollReveal is installed from npm (pinned) instead of an unversioned CDN script
- Real content: About section, six projects with working live and source links, a working contact link
- Fixed malformed HTML (nested paragraphs, duplicate `class` attributes, an unclosed comment)
- Images converted to WebP; the hero background went from 9.7 MB to under 1 MB
- Respects `prefers-reduced-motion`

## Run locally

Requires Node.js 22.

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build in dist/
```
