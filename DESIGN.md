# Design Brief

**Purpose**: Professional B.Tech portfolio for Laxman Patel (SISTec GN Bhopal, Computer Science), college project evaluation. Dual-theme system: premium dark mode and vibrant colorful mode with seamless toggle. Inspired by modern portfolio design patterns (Rounak Jain style).

## Tone & Aesthetic
Premium tech + educational distinction. Sophisticated micro-interactions, professional credibility through intentional visual hierarchy, memorable without generic AI aesthetics. Tech-forward, bold typography, refined depth.

## Color Palette

| Token | Dark (L C H) | Colorful (L C H) | Purpose |
|-------|--------------|------------------|---------|
| Background | `0.08 0.01 280` | `0.97 0.005 270` | Main surface |
| Foreground | `0.95 0.005 270` | `0.15 0.02 280` | Text, high contrast |
| Primary | `0.73 0.22 280` | `0.55 0.22 280` | Actions, headlines (purple) |
| Secondary | `0.69 0.19 190` | `0.65 0.18 190` | Accents (cyan) |
| Accent | `0.71 0.21 190` | `0.62 0.2 190` | Highlights, CTAs (cyan bright) |
| Border | `0.26 0.02 280` | `0.88 0.02 280` | Subtle dividers |
| Destructive | `0.66 0.20 22` | `0.55 0.22 25` | Alerts, errors (red) |

**Gradients**: Hero dark (purple→navy→cyan), Hero colorful (purple→cyan→orange→pink), text accents (purple→cyan), cards (subtle blue tint).

## Typography
- **Display**: General Sans (geometric sans-serif, 600–700 weights for headlines, modern + distinctive)
- **Body**: DM Sans (humanist sans, 400–600, highly legible at all sizes, warm contrast to display)
- **Mono**: Geist Mono (monospace technical blocks, consistent metrics)

**Scale**: H1 3.5rem, H2 2.25rem, H3 1.875rem, body 1rem (base), small 0.875rem. Maintain 1.5–1.65 line-height for readability.

## Structural Zones

| Zone | Dark Mode | Colorful Mode | Hierarchy |
|------|-----------|---------------|-----------|
| Header/Nav | `bg-card` border-b at `border/60` | `bg-background` border-b lighter | Anchors all sections |
| Hero | Gradient hero dark (135°) full viewport | Gradient hero colorful vibrant 135° | Primary entrance, profile photo circular 120px with glow |
| Skills | Grid cards `bg-card` `shadow-xs` hover lift | Same + accent borders on hover | 5 skills (C, C++, Python, HTML, CSS) animated bars |
| Projects | Alternating `bg-background` / `bg-card/40` | Same + colorful accents | 5 project cards, `card-elevated` on hover |
| Contact | CTA button `bg-primary` text-white | CTA button `bg-secondary` with colorful glow | Newsletter signup, form inputs with ring |
| Footer | `bg-card/60` border-t `border/40` | `bg-muted/30` border-t lighter | Socials, copyright, links in muted foreground |

## Component Patterns
- **Cards**: `card-elevated` utility (border + shadow + translate-y -1 on hover, glow accent in colorful mode)
- **Buttons**: Primary (solid bg-primary no-border), Secondary (border-accent ghost), CTA (gradient or primary bg)
- **Links**: accent color, underline on hover, transition-smooth
- **Inputs**: border-input focus:ring-2 ring-ring, placeholder muted, no box-shadow

## Motion & Animation
- `transition-smooth` (0.3s cubic-bezier(0.4, 0, 0.2, 1)): all interactive elements, hover states
- `fade-in` (0.6s ease-out): section stagger reveals on scroll
- `slide-up` (0.6s ease-out): hero content, 20px offset
- `pulse-glow` (3s ease-in-out infinite): accent highlights, skill badges
- No bouncy animations; all motion feels intentional, refined

## Spacing & Rhythm
- **Base radius**: 0.75rem (12px) default, 0.5rem (8px) for inputs, full (100%) for profile photo
- **Padding**: 2rem sections, 1.5rem cards internal, 0.75rem buttons
- **Gap**: 1.5rem grid, 2rem major section breaks, 1rem component spacing
- **Breakpoints**: mobile-first sm: 640px, md: 768px, lg: 1024px, xl: 1280px

## Signature Detail
**Dual-Theme Toggle Button** (top-right header): Smooth transition between dark professional and vibrant colorful. Button itself animates gradient on colorful theme. No layout shift; single unified component set.

## Constraints
- OKLCH color values ONLY (no hex, no rgba, no linear-rgb)
- No default Bootstrap/Tailwind shadows; all shadows tuned to theme
- AA+ contrast: dark mode text min 0.95 lightness on 0.08 background (delta 0.87)
- Fonts from `/assets/fonts/` with `font-display: swap`
- Zero arbitrary classes; Tailwind theme keys only
- Profile photo display: hero section (circular 120px), about section (circular 160px), always with glow accent

## Differentiation
Tight visual system (2 fonts, 5 core colors, 4 type tiers), zero decoration that doesn't serve structure. Hero gradient animates momentum on colorful mode. Cards elevate on hover with proportional shadow + glow. Typography hierarchy is crystal clear: display font for H1, muted foreground for supporting text. Professional polish for college evaluation: intentional every pixel.
