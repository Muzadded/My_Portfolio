# Md Muzadded Chowdhury — Portfolio

Next.js 14 portfolio with Thames-inspired dark theme (charcoal `#252836` + coral-red `#e05c4b`).

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| tsparticles | Particle canvas |
| EmailJS | Contact form |
| Lucide + React Icons | Icons |
| next/font (Syne, IBM Plex Mono, Space Mono) | Typography |

## Animations

1. **Page load** — staggered fade-in + slide-up (Framer Motion variants)
2. **Typewriter** — infinite looping with blinking cursor in Hero
3. **Particle canvas** — neural network nodes connected by lines, mouse-reactive
4. **Scroll reveals** — `whileInView` on every section
5. **Skill badges** — glow pulse + scale on hover
6. **Project cards** — CSS `perspective` 3D tilt on `mousemove`
7. **Navbar** — glassmorphism blur, hides on scroll down, reappears on scroll up
8. **Custom cursor** — dot + outer ring, ring expands on hoverable elements
9. **Stat counters** — count-up animation when About section enters viewport
10. **Timeline** — experience items slide in from alternating sides
11. **Publication cards** — shimmer/glint effect on hover

## Setup

### 1. Install dependencies
```bash
cd portfolio
npm install
```

### 2. Add your assets
Copy these files into `public/`:
- `profile.jpg` — your profile photo (use `Docs/thumbnail_IMG-28266crop.jpg`)
- `resume.pdf`  — your resume (use `Docs/MuzaddedChowdhury_Resume.pdf`)

### 3. Configure EmailJS (optional — for the contact form)
```bash
cp .env.local.example .env.local
```
Then fill in your EmailJS credentials in `.env.local`.

Your EmailJS template should use these variables:
- `{{from_name}}` — sender name
- `{{from_email}}` — sender email
- `{{subject}}` — email subject
- `{{message}}` — message body

### 4. Update social links
Edit `lib/constants.ts` → `PERSONAL.github` and `PERSONAL.linkedin` with your real URLs.

### 5. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

### 6. Build for production
```bash
npm run build
npm start
```

## Deployment

Deploy instantly on **Vercel**:
1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Add environment variables from `.env.local`
4. Deploy

## File Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Section order
│   └── globals.css      # CSS vars, animations, shimmer, glow
├── components/          # All UI components
├── hooks/
│   ├── useScrollDirection.ts
│   └── useCountUp.ts
├── lib/
│   └── constants.ts     # All resume data (edit this to update content)
└── public/
    ├── profile.jpg      # ← copy your photo here
    └── resume.pdf       # ← copy your resume here
```

## Customisation

All content lives in **`lib/constants.ts`** — edit that single file to update any text, links, experience, projects, or publications.
