# Droidan1 Website

Static portfolio website for Brian Howard, focused on operator-led systems and custom
software for multi-location retail. Independent mobile and web products are presented
as supporting evidence in the Product Lab.

- Website: https://www.droidan1.dev
- Email: brian@droidan1.dev
- GitHub: https://github.com/Droidan1

## Project structure

- `index.html` — page content and semantic structure
- `styles.css` — responsive layout and visual design
- `script.js` — navigation, carousel, and GSAP motion
- `assets/` — project screenshots
- `vendor/` — local GSAP and ScrollTrigger builds
- `vercel.json` — production cache headers
- `Brian-Howard-Media-Kit.pdf` — downloadable media kit
- `droidan1-logo-20260823.webp` — optimized header and footer logo
- `droidan1-social-preview-20260823.jpg` — social sharing image

## Local preview

From the project directory, run:

```sh
python3 -m http.server 8767
```

Then open http://localhost:8767.

## Updating the site

1. Edit the HTML, CSS, JavaScript, or project assets.
2. When `styles.css` or `script.js` changes, update its version query in `index.html`.
3. Keep replacement images optimized and give long-cached assets a new versioned filename.
4. Preview at desktop and mobile sizes before publishing.
5. Push a feature branch and review the Vercel preview deployment.

## Deployment

Vercel deploys every branch as a preview. Merging a pull request into `main`
triggers the production deployment at https://www.droidan1.dev.
