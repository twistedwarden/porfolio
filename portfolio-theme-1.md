# Portfolio Theme Definition
> Stack: React · Tailwind CSS · shadcn/ui · ReactBits  
> Aesthetic: Editorial / Swiss-Grid — refined, typographic, intentional

---

## 1. Tech Stack

| Layer | Technology | Role |
|---|---|---|
| Framework | React 18 (Vite) | Component architecture, state, routing |
| Styling | Tailwind CSS v3+ | Utility-first styling, dark mode via `dark:` variant |
| UI Primitives | shadcn/ui | Accessible base components (Switch, Badge, Card, etc.) |
| Animations | ReactBits | High-quality animated text, scroll reveals, interactive components |
| Theme switching | `useState` + `localStorage` | Lightweight, no SSR dependency |
| Routing | React Router v6 | Single-page scroll or multi-route |

> **Why Vite over Next.js?** No SSR overhead, no `"use client"` friction, instant HMR. ReactBits components are client-side by nature — Vite is the cleaner fit.

---

## 2. Installation

```bash
# Scaffold
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio

# Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# shadcn (init without Next.js)
npx shadcn@latest init

# ReactBits — copy-paste via shadcn CLI (no monolithic install)
npx shadcn@latest add @react-bits/BlurText-TS-TW
npx shadcn@latest add @react-bits/SplitText-TS-TW
npx shadcn@latest add @react-bits/AnimatedContent-TS-TW
npx shadcn@latest add @react-bits/ScrollReveal-TS-TW
npx shadcn@latest add @react-bits/TiltedCard-TS-TW
npx shadcn@latest add @react-bits/DecryptedText-TS-TW
npx shadcn@latest add @react-bits/AnimatedList-TS-TW
npx shadcn@latest add @react-bits/MagneticButton-TS-TW
```

ReactBits uses a **copy-paste model** — each component lands in `/components/ui/` and is fully yours to customize. No version lock, no black-box imports.

---

## 3. Color Tokens

### `globals.css`

```css
:root {
  --bg:           #fafaf8;   /* warm white */
  --surface:      #ffffff;
  --border:       #e8e8e4;
  --text:         #1a1a18;
  --muted:        #8a8a82;
  --accent:       #d97706;   /* amber — same in both modes */
  --accent-wash:  rgba(217, 119, 6, 0.08);
}

.dark {
  --bg:           #111110;   /* warm near-black */
  --surface:      #1c1c1a;
  --border:       #2e2e2b;
  --text:         #f0efe9;
  --muted:        #7a7a72;
  --accent-wash:  rgba(217, 119, 6, 0.12);
}

/* Silky global theme transition */
* {
  transition: background-color 0.4s ease, border-color 0.4s ease, color 0.4s ease;
}
```

### `tailwind.config.js`

```js
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg:            "var(--bg)",
        surface:       "var(--surface)",
        border:        "var(--border)",
        text:          "var(--text)",
        muted:         "var(--muted)",
        accent:        "var(--accent)",
        "accent-wash": "var(--accent-wash)",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans:  ["Helvetica Neue", "Arial", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
}
```

---

## 4. Typography

| Role | Font | Style |
|---|---|---|
| Display / Hero name | Georgia serif | Normal, `-0.02em` tracking |
| Subheadings | Georgia serif | Italic |
| Section labels | Helvetica Neue | Uppercase, `0.14em` spacing, 11px |
| Body copy | Helvetica Neue | Light (300), `1.7` line-height |
| Nav links | Helvetica Neue | Uppercase, `0.08em` spacing, 13px |

Serif = personality. Sans = clarity. Never collapse the two into one.

---

## 5. Theme Toggle — No `next-themes`

```tsx
// hooks/useTheme.ts
import { useEffect, useState } from "react"

export function useTheme() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  return { dark, toggle: () => setDark(d => !d) }
}

// ThemeToggle.tsx — uses shadcn Switch
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/hooks/useTheme"

export function ThemeToggle() {
  const { dark, toggle } = useTheme()
  return (
    <Switch
      checked={dark}
      onCheckedChange={toggle}
      aria-label="Toggle dark mode"
    />
  )
}
```

The shadcn `Switch` still gives you the spring-animated knob — no extra animation code needed.

---

## 6. ReactBits — Recommended Components

These are picked specifically for the editorial aesthetic. Every one of them works with Tailwind and drops into `/components/ui/`.

---

### 6.1 `BlurText` — Hero Name Reveal
**Where:** Hero section, animating the portfolio name on load.  
**Why:** The blur-in effect is refined and slow — it reads as intentional, not flashy. Perfect for a single large display word.

```tsx
import BlurText from "@/components/ui/BlurText"

<BlurText
  text="Alex Mercer"
  delay={120}
  animateBy="words"
  direction="top"
  className="font-serif text-7xl text-text tracking-tight"
/>
```

---

### 6.2 `SplitText` — Tagline Animation
**Where:** The one-liner below the name (`"I craft interfaces that feel inevitable."`).  
**Why:** Characters or words animate in sequentially, giving the tagline a typewriter-adjacent feel without looking retro. More editorial, less terminal.

```tsx
import SplitText from "@/components/ui/SplitText"

<SplitText
  text="I craft interfaces that feel inevitable."
  className="font-sans font-light text-lg text-muted"
  delay={80}
  animationFrom={{ opacity: 0, transform: "translateY(8px)" }}
  animationTo={{ opacity: 1, transform: "translateY(0)" }}
  threshold={0.2}
/>
```

---

### 6.3 `ScrollReveal` — Section Text Reveal
**Where:** About paragraph and any body copy that enters on scroll.  
**Why:** Words reveal as you scroll past them — feels like a magazine article coming alive. Restrained and readable, not distracting.

```tsx
import ScrollReveal from "@/components/ui/ScrollReveal"

<ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={2}
  containerClassName="font-sans font-light text-base text-muted leading-relaxed"
>
  Five years of turning ambiguous problems into polished products...
</ScrollReveal>
```

---

### 6.4 `AnimatedContent` — Section Wrapper
**Where:** Every section block — hero, projects, about, contact.  
**Why:** This is the scroll-triggered wrapper, ReactBits-native. Fade + slide with zero boilerplate. Replaces a custom `IntersectionObserver` hook entirely.

```tsx
import AnimatedContent from "@/components/ui/AnimatedContent"

<AnimatedContent
  direction="vertical"
  distance={20}
  delay={100}
  threshold={0.1}
>
  <ProjectList />
</AnimatedContent>
```

---

### 6.5 `TiltedCard` — Project Cards
**Where:** Project showcase grid or featured work section.  
**Why:** Subtle 3D tilt on hover adds tactility to what would otherwise be flat cards. Keep amplitude low (`8–10`) for elegance.

```tsx
import TiltedCard from "@/components/ui/TiltedCard"

<TiltedCard
  imageSrc="/projects/meridian.jpg"
  captionText="Meridian OS · 2024"
  containerHeight="280px"
  rotateAmplitude={8}
  scaleOnHover={1.03}
  showMobileWarning={false}
  className="border border-border rounded"
/>
```

---

### 6.6 `DecryptedText` — Skills or Nav Hover Effect
**Where:** Skills list items on hover, or nav links.  
**Why:** On hover, characters scramble then resolve to the real word — feels like a cipher decoding. Subtle, memorable, very on-brand for a developer/designer portfolio.

```tsx
import DecryptedText from "@/components/ui/DecryptedText"

<DecryptedText
  text="Design Systems"
  speed={40}
  maxIterations={12}
  revealDirection="start"
  enableHoverEffect={true}
  animateOn="hover"
  className="font-sans text-text"
/>
```

---

### 6.7 `AnimatedList` — Project Row List
**Where:** The project index list (01, 02, 03...).  
**Why:** Each row staggers into view on load with a clean slide. Delay between items is prop-controlled — no `animation-delay` hacks.

```tsx
import AnimatedList from "@/components/ui/AnimatedList"

<AnimatedList
  items={projects.map(p => <ProjectRow key={p.id} {...p} />)}
  delay={150}
  className="flex flex-col divide-y divide-border"
/>
```

---

### 6.8 `MagneticButton` — Contact CTA
**Where:** The contact button or email link at the bottom.  
**Why:** The button subtly follows the cursor within a radius — makes the single CTA feel alive without visual noise. One magnetic element per page is the rule.

```tsx
import MagneticButton from "@/components/ui/MagneticButton"

<MagneticButton
  className="font-serif italic text-2xl text-text border-b-2 border-accent hover:text-accent transition-colors duration-200"
>
  alex@mercer.studio
</MagneticButton>
```

---

## 7. shadcn/ui — Supporting Components

ReactBits handles animation. shadcn handles accessible UI structure. No overlap, no conflict.

| Component | Role |
|---|---|
| `Switch` | Theme toggle — spring-animated knob built-in |
| `Badge` | Project category tags — `bg-accent-wash text-accent border-0` |
| `Card` | Surface container for project rows |
| `Separator` | Section dividers |
| `Button` (ghost) | Nav links with built-in focus ring |
| `Tooltip` | Hover labels on skills or nav icons |
| `NavigationMenu` | Top nav with keyboard accessibility |

---

## 8. Animation Map

| Moment | ReactBits Component | Notes |
|---|---|---|
| Hero name loads | `BlurText` | Per-word, blur from top |
| Tagline loads | `SplitText` | Per-character, fade + slide |
| Sections enter viewport | `AnimatedContent` | Replaces custom IntersectionObserver |
| Body copy reads | `ScrollReveal` | Word-by-word on scroll |
| Project cards hover | `TiltedCard` | Low amplitude (8–10) for elegance |
| Skills list hover | `DecryptedText` | Cipher scramble on hover |
| Project rows mount | `AnimatedList` | Staggered slide-in |
| Contact CTA hover | `MagneticButton` | Cursor-following pull |
| Theme switch | shadcn `Switch` + CSS vars | Spring knob + `0.4s` color transition |

---

## 9. Component Structure

```
/src
  /components
    /ui                 ← shadcn + ReactBits (all copy-pasted here)
    Navbar.tsx          ← NavigationMenu + ThemeToggle
    HeroSection.tsx     ← BlurText + SplitText
    ProjectRow.tsx      ← Card + TiltedCard + Badge
    ProjectList.tsx     ← AnimatedList wrapping ProjectRows
    SkillsList.tsx      ← DecryptedText per skill
    AboutSection.tsx    ← ScrollReveal for body copy
    ContactSection.tsx  ← MagneticButton on email
    ThemeToggle.tsx     ← Switch + useTheme hook

  /hooks
    useTheme.ts         ← localStorage dark mode, no next-themes

  /lib
    utils.ts            ← cn() helper
    projects.ts         ← typed project data
```

---

## 10. How to Maximize the Stack

**ReactBits:** Install only what you need via the shadcn CLI — no monolithic import. Each component is plain TypeScript in your codebase; customize colors, timing, and easing directly in the file to match the amber accent and token system. Since they're copy-pasted, they inherit your Tailwind tokens automatically.

**Tailwind:** All color tokens map to CSS variables — `dark:` variants are handled at the `:root` / `.dark` level, so ReactBits components inherit the theme automatically without any prop threading.

**shadcn:** Let it own structure and accessibility. Let ReactBits own motion. They're both copy-paste first, so you control the integration point exactly.

**The one rule:** One `MagneticButton`, one `DecryptedText` zone, one `BlurText` moment. ReactBits effects land hardest when used with restraint. Every animation should feel earned.

---

## 11. One Memorable Detail

A static amber bottom-border on the contact email. No animation. No hover transform. Just a `2px` line in `#d97706` — always visible, always there. In a layout full of motion, the one thing that doesn't move becomes the thing people remember.

```tsx
<a className="border-b-2 border-accent pb-0.5 hover:text-accent transition-colors duration-200">
  your@email.com
</a>
```

---

*Stack: React 18 + Vite · Tailwind CSS 3 · shadcn/ui · ReactBits (reactbits.dev)*
