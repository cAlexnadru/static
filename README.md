# Alexandru-Tudor Chiujdea — Portfolio

A static portfolio website built with vanilla HTML, CSS, and JavaScript. No build tools required.

## Structure

```
portfolio/
├── index.html              ← Main page (rarely needs editing)
├── css/
│   └── style.css           ← All styles
├── js/
│   ├── projects.js         ← ⭐ PROJECT DATA — edit this to add/remove projects
│   └── app.js              ← App logic (rarely needs editing)
├── assets/
│   └── images/
│       └── portrait.png    ← Profile photo
├── robots.txt
└── README.md
```

## How to Add a New Project

1. Open `js/projects.js`
2. Add a new object to either the `concepts` or `useCases` array:

```js
{
  id: "p-my-project",                    // Unique ID (prefix with p-)
  title: "My New Project",              // Displayed on homepage
  description: "Short one-liner.",       // Subtitle on homepage
  meta: "2024",                          // Right-side label (year, industry, etc.)
  html: `
    <h1>My New Project</h1>
    <p>Your case study content here...</p>
    <h2>Section</h2>
    <p>More detail...</p>
    <blockquote>A key quote or takeaway.</blockquote>
  `
},
```

3. Save. Done. It appears automatically.

## How to Deploy

This is a static site — just upload the `portfolio/` folder contents to any host:

| Host | How |
|------|-----|
| **Netlify** | Drag & drop the folder, or connect a Git repo |
| **Vercel** | `npx vercel` from this folder |
| **GitHub Pages** | Push to a repo, enable Pages in Settings |
| **Cloudflare Pages** | Connect repo or direct upload |
| **Any web server** | Upload files via FTP/SFTP |

### Custom Domain

After deploying, point your domain's DNS to the host. Each platform has docs for this:
- Add a CNAME record pointing to your deploy URL
- Or an A record pointing to the host's IP

## Before Going Live Checklist

- [ ] Replace `portrait.png` if needed
- [ ] Add an `og-image.png` (1200×630) in `assets/images/` for social sharing
- [ ] Add favicon files in `assets/` (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`)
- [ ] Update the `<link rel="canonical">` and OG URLs in `index.html` with your domain
- [ ] Update `robots.txt` sitemap URL with your domain
- [ ] Test dark/light mode toggle
- [ ] Test on mobile

## Tech

- Vanilla HTML/CSS/JS — zero dependencies, zero build step
- Dark/light theme with system preference detection
- Responsive down to 320px
- Accessible (ARIA, focus management, keyboard navigation)
- Scroll-reveal animations via IntersectionObserver
