# Siddartha Posam Portfolio

Personal portfolio site built with Astro and Tailwind CSS, deployed as a static site to GitHub Pages.

## Tech Stack

- Astro 5
- Tailwind CSS 4
- Static output (`astro build`)
- GitHub Actions Pages deployment

## Structure

```text
.
├── public/                 # static assets (favicons, profile images, resume)
├── src/
│   ├── components/         # modular sections used by home page
│   ├── data/profile.ts     # shared profile, experience, skills, education data
│   ├── layouts/            # shared HTML shell + global scripts
│   ├── pages/
│   │   ├── index.astro     # primary portfolio route
│   │   └── *.astro         # visual experiments/prototypes
│   └── styles/global.css   # theme + reusable styles
└── .github/workflows/deploy.yml
```

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # preview built site
npm run verify    # static-asset link validation (expects dist/)
```

## Deployment

- Pushes to `main` trigger `/Users/sidreddy/dev/personal/portfolio/.github/workflows/deploy.yml`.
- The workflow builds the site and publishes `dist/` to GitHub Pages.

## Content Updates

- Edit shared profile information in `/Users/sidreddy/dev/personal/portfolio/src/data/profile.ts`.
- Replace the downloadable resume at `/Users/sidreddy/dev/personal/portfolio/public/SiddarthaPosam-Resume.docx`.
