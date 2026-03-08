# Saturday Hack Night — Project Context

## Overview
Product landing page for TinkerHub Foundation's "Saturday Hack Night" maker initiative.
A visitor landing here should immediately understand the program and be able to register for events.

## Program
- 5 bi-weekly online hack nights (every 2nd Saturday, 6 PM IST)
- Projects must be pushed to GitHub by midnight to qualify
- Top builders get invited to a 24-hour physical hackathon at TinkerSpace Kochi

## Tech Stack
- Next.js 16 (App Router, `output: 'export'` for GitHub Pages)
- Tailwind CSS 4.x — NO tailwind.config.js; all tokens in `app/globals.css @theme`
- Framer Motion 12.x (scroll-reveal + hover animations)
- Lucide React (icons)
- Fonts: Inter (UI) via `--font-inter`, JetBrains Mono (code/data) via `--font-jetbrains`
- clsx + tailwind-merge via `lib/utils.ts`

## Critical Config
- `next.config.ts`: `output:'export'`, `basePath:'/saturday-hack-night'`, `images.unoptimized:true`, `trailingSlash:true`
- `postcss.config.mjs`: `@tailwindcss/postcss` plugin (NOT `tailwindcss` directly)
- `"use client"` required on: Navbar, Hero, Blueprint, Timeline, HallOfFame, Experience, Community, LiveCountdown, TerminalBox, StepConnector, HackNightCard, ProjectBentoGrid, TestimonialCard

## Design System
- Dark mode only — background `#090909`, surface `#111111`
- Neon green `#00ff87` (primary), cyan `#00d4ff` (secondary), amber `#ffb800` (warning/advanced)
- Glassmorphism: `glass-card` utility = `bg-white/3 backdrop-blur-12 border border-white/8`
- All counters/dates/code: `font-mono` (JetBrains Mono)

## Key Files
- `lib/data.ts` — all dummy data, TypeScript types, `REGISTER_URL`, `DISCORD_URL`
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `app/globals.css` — Tailwind 4 @theme tokens + utility classes
- `components/ui/` — atomic components
- `components/sections/` — page sections
- `components/layout/` — Navbar, Footer
- `.github/workflows/deploy.yml` — GitHub Actions → GitHub Pages

## Deployment
- GitHub Actions builds and deploys on push to `main`
- Static output in `./out/`
- Live URL: https://appukurian.github.io/saturday-hack-night

## TODO (real content to swap in)
- Replace `REGISTER_URL` in `lib/data.ts` with actual hub.app event links per event
- Replace `DISCORD_URL` with actual TinkerHub Discord invite
- Add real photos to Experience section (replace placeholder slots)
- Add actual TinkerHub logo to Navbar + Footer
