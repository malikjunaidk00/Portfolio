# Muhammad Junaid Khalil Portfolio

A modern React, Vite, Tailwind CSS, Framer Motion, and Lucide React portfolio for Muhammad Junaid Khalil. It is built for software engineering, Java backend, AI automation, technical support, GIS/data, QA, and graduate IT roles.

## Features

- Responsive dark/light theme with persisted preference
- Recruiter-friendly sections for experience, education, thesis, projects, skills, resume, GitHub, blog, timeline, and contact
- Project filtering by All, AI, Backend, Frontend, GIS, Automation, and Full Stack
- Animated counters and Framer Motion section reveals
- SEO and Open Graph metadata
- Embedded optimized portrait image and linked downloadable resume
- GitHub Pages deployment through GitHub Actions

## Setup

```bash
npm install
npm run dev
```

If PowerShell blocks the npm shim on Windows, use:

```bash
npm.cmd install
npm.cmd run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Replace Later

- The page uses a fixed CSS/SVG animated background plus an embedded optimized portrait image.
- Update the resume link in `src/components/Hero.jsx` when a newer public CV is available.
- Update project GitHub and demo links in `src/data/portfolio.js` as repositories and demos become public.
- Add a real LinkedIn URL in `src/data/portfolio.js`.
