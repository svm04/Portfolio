# Senithi Malalanayake — Portfolio

A personal portfolio site built with React, Vite, Tailwind CSS, Framer Motion, GSAP (ScrollTrigger), and Lenis smooth-scroll.

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173/portfolio-website/`).

## Editing content

Almost everything on the site — your bio, education, certifications, skills, the five projects, and your extracurricular activities — lives in one file:

```
src/data/content.js
```

Edit the text there and the site updates automatically while `npm run dev` is running. You don't need to touch any component file to change copy.

## Adding real project screenshots

Right now each project card shows a placeholder ("Add a screenshot of X here") because there are no images yet. To add real ones:

1. Drop an image (screenshot, mockup, logo, whatever) into `src/assets/projects/`, e.g. `src/assets/projects/interlink.png`.
2. In `src/data/content.js`, import it at the top:
   ```js
   import interlinkImg from '../assets/projects/interlink.png'
   ```
3. Set it on that project's `image` field (currently `null`):
   ```js
   { id: 'interlink', ..., image: interlinkImg }
   ```

Repeat for Interlink, TalentLens, Pocketly, Race-Track Circuit, and Quill. Landscape screenshots around 1200×900px (4:3) work best.

## Updating your headshot

Your processed (background-removed) photo lives at `src/assets/headshot.png`. Swap the file to replace it — keep it a transparent PNG for the same floating effect in the hero section.

## Updating your CV

`public/Senithi_Malalanayake_CV.pdf` is what the "Download CV" button on the Contact section serves. Replace that file (keep the same name, or update the path in `src/components/Contact.jsx`) whenever your CV changes.

## Deploying to GitHub Pages

### First, check `vite.config.js`

Open `vite.config.js` and look at the `base` setting:

- If your repo will be named **`portfolio-website`** and the site lives at `https://svm04.github.io/portfolio-website/`, leave it as `base: '/portfolio-website/'` (or rename to match whatever you actually call the repo).
- If instead you create a repo named exactly **`svm04.github.io`** (a GitHub "user site"), change it to `base: '/'`.

### Option A — GitHub Actions (recommended, already set up)

This repo already includes `.github/workflows/deploy.yml`, which builds and deploys the site automatically every time you push to `main`.

1. Create a new repository on GitHub (e.g. `portfolio-website`), don't initialize it with a README.
2. In this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/svm04/portfolio-website.git
   git push -u origin main
   ```
3. On GitHub, go to your repo → **Settings → Pages** → under "Build and deployment", set **Source** to **GitHub Actions**.
4. Push again (or re-run the workflow from the **Actions** tab) — after a minute or two your site will be live at `https://svm04.github.io/portfolio-website/`.

Every future `git push` to `main` redeploys automatically.

### Option B — gh-pages package (manual, one command)

If you'd rather deploy by hand without GitHub Actions:

```bash
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch. Then in **Settings → Pages**, set **Source** to **Deploy from a branch**, and pick the `gh-pages` branch.

## Tech stack

- **React 19 + Vite** — component structure, fast dev server, static build
- **Tailwind CSS v4** — utility styling, custom theme tokens in `src/index.css`
- **Framer Motion** — section reveal-on-scroll animations
- **GSAP + ScrollTrigger** — hero parallax
- **Lenis** — smooth-scroll physics (the "buttery" inertia feel)
- **lucide-react** — icon set

## Project structure

```
src/
  components/     UI sections (Hero, About, Projects, Extracurricular, Contact, Navbar, Footer...)
  data/
    content.js    All site copy — edit this to update the site
  assets/
    headshot.png  Your processed headshot
    projects/     Put project screenshots here
  index.css       Theme tokens (colors, fonts) + global styles
public/
  Senithi_Malalanayake_CV.pdf   Served by the "Download CV" button
```
