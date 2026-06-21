# MASTER AGENT PROMPT
## Web3 Company Website — Full Build Brief

> Paste this entire file into Antigravity, Copilot, Cursor, v0, Bolt, or any AI coding agent.

---

## YOUR MISSION

Build a full **Next.js 14** company website using the **App Router**, styled with **Tailwind CSS**, backed by **Firebase**. The visual design is a **dark, glassmorphic Web3 aesthetic** inspired by MultiversX — navy blue on near-black. Every page must feel like a premium blockchain product, not a generic SaaS site.

---

## TECH STACK (NON-NEGOTIABLE)

```
Framework:     Next.js 14 (App Router, /app directory)
Styling:       Tailwind CSS v3 — use the custom config below
Fonts:         Space Grotesk (headings) + Inter (body) + JetBrains Mono (stats)
               → from next/font/google
Animation:     Framer Motion (scroll reveals, countUp, hover micro-interactions)
Icons:         lucide-react
Backend:       Firebase (Firestore + Storage)
State:         React hooks only, no Redux
Images:        next/image for all <img> tags
Linting:       ESLint + Prettier
```

---

## DESIGN SYSTEM — IMPLEMENT EXACTLY AS WRITTEN

### Tailwind Config (`tailwind.config.js`)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base:    '#080808',
          surface: '#0F0F0F',
          card:    '#141414',
          border:  '#1E1E1E',
        },
        accent: {
          DEFAULT: '#1B4FD8',
          mid:     '#1E40AF',
          deep:    '#1E3A8A',
          glow:    '#2563EB',
        },
        text: {
          primary:   '#FFFFFF',
          secondary: '#A0A0A0',
          muted:     '#555555',
          accent:    '#1B4FD8',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        sm:   '8px',
        md:   '12px',
        lg:   '16px',
        xl:   '24px',
        pill: '999px',
      },
      boxShadow: {
        'glow-sm': '0 0 16px rgba(27,79,216,0.45), 0 0 40px rgba(27,79,216,0.20)',
        'glow-md': '0 0 24px rgba(27,79,216,0.65), 0 0 60px rgba(27,79,216,0.30)',
        'glow-lg': '0 0 80px rgba(27,79,216,0.15)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(27,79,216,0.08) 0%, transparent 70%)',
        'cta-glow':  'radial-gradient(ellipse 100% 80% at 50% 100%, rgba(27,79,216,0.35) 0%, rgba(30,58,138,0.15) 35%, transparent 70%)',
        'brand-gradient': 'linear-gradient(135deg, #60A5FA 0%, #1B4FD8 50%, #1E3A8A 100%)',
        'page-gradient': 'linear-gradient(180deg, #080808 0%, #0A0A0A 40%, #0D0D0D 65%, #0A0F1E 80%, #07101F 90%, #04091A 100%)',
      },
    },
  },
  plugins: [],
}
```

### Global CSS (`app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-accent: #1B4FD8;
  --color-bg-base: #080808;
  --font-heading: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

* { box-sizing: border-box; }

body {
  background: #080808;
  color: #FFFFFF;
  font-family: var(--font-body);
  overflow-x: hidden;
}

/* Reusable card styles */
.card {
  background: rgba(20,20,20,0.75);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0; left: 10%; right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(27,79,216,0.35), transparent);
}

.card-accent {
  background: rgba(15,15,15,0.80);
  border: 1px solid rgba(27,79,216,0.18);
  border-radius: 16px;
  backdrop-filter: blur(16px);
}

.stat-badge {
  background: rgba(27,79,216,0.08);
  border: 1px solid rgba(27,79,216,0.20);
  border-radius: 999px;
  padding: 4px 12px;
  color: #1B4FD8;
  font-size: 12px;
  font-weight: 500;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #080808; }
::-webkit-scrollbar-thumb { background: rgba(27,79,216,0.3); border-radius: 3px; }
```

### Typography Rules

- **Headings** → `font-heading` (Space Grotesk), weight 700
- **Body** → `font-body` (Inter), weight 400–500
- **Stats/numbers** → `font-mono` (JetBrains Mono), weight 600
- **Type scale:**
  - Hero H1: `text-[64px]` on desktop, `text-[36px]` on mobile, `leading-[1.1]`, `tracking-[-0.02em]`, weight 700
  - H2: `text-[48px]` desktop, `text-[28px]` mobile
  - H3: `text-[28px]`
  - Body lg: `text-[18px]`, `leading-[1.6]`
  - Body md: `text-[16px]`
  - Label: `text-[12px]`, `tracking-[0.04em]`, uppercase
  - Stat numbers: `text-[32px]`, mono font

---

## COMPLETE FOLDER STRUCTURE

```
/app
  /layout.tsx              ← Root layout (fonts, metadata, nav, footer)
  /page.tsx                ← Home page
  /about/page.tsx
  /services/page.tsx
  /services/blockchain/page.tsx
  /projects/page.tsx
  /team/page.tsx
  /blog/page.tsx
  /blog/[slug]/page.tsx
  /careers/page.tsx
  /contact/page.tsx
  /globals.css

/components
  /ui                      ← Primitives
    Button.tsx
    Card.tsx
    Badge.tsx
    SectionLabel.tsx       ← Eyebrow text component
    StatCounter.tsx        ← Animated number countUp
    GlowDivider.tsx
  /layout
    Navbar.tsx
    Footer.tsx
    PageWrapper.tsx        ← Scroll animation wrapper
  /sections                ← Home page sections
    Hero.tsx
    StatsBar.tsx
    ServicesGrid.tsx
    FeaturedProjects.tsx
    TechStack.tsx
    TeamPreview.tsx
    LatestBlogs.tsx
    ContactCTA.tsx
  /pages                   ← Page-specific components
    AboutTimeline.tsx
    ServiceCard.tsx
    ProjectCard.tsx
    TeamMemberCard.tsx
    BlogCard.tsx
    ContactForm.tsx

/lib
  firebase.ts              ← Firebase init
  firestore.ts             ← DB helpers (getBlogs, getProjects, getTeam)
  animations.ts            ← Shared Framer Motion variants

/types
  index.ts                 ← Blog, Project, TeamMember, Contact interfaces
```

---

## COMPONENT SPECS

### `<Navbar />`
```
- Sticky top, z-50
- Background: rgba(8,8,8,0.85) + backdrop-filter: blur(20px)
- Border-bottom: 1px solid rgba(255,255,255,0.06)
- Height: 72px
- Left: Company logo/wordmark (text-white font-heading font-bold text-xl)
- Center: nav links → Home | About | Services | Projects | Team | Blog | Careers
  - color: text-text-secondary, hover: text-white, transition-colors
- Right: "Contact Us" → primary navy button
- Mobile: hamburger → slide-down drawer with same links
- On scroll past 80px: add blur background (already set) and subtle border
```

### `<Button />` variants
```tsx
// Primary
<Button variant="primary">Start Building</Button>
// → bg-accent text-bg-base font-semibold px-6 py-3 rounded-sm shadow-glow-sm
// → hover: shadow-glow-md scale-[1.02] transition-all

// Outline
<Button variant="outline">Learn More</Button>
// → border border-accent/35 text-accent bg-transparent px-6 py-3 rounded-sm
// → hover: border-accent/60 bg-accent/5

// Ghost
<Button variant="ghost">Read More →</Button>
// → text-accent underline-offset-4 hover:underline
```

### `<Card />` variants
```tsx
// Standard glassmorphic
<Card>...</Card>
// → className="card p-6 hover:border-accent/20 transition-colors"

// Accent bordered
<Card variant="accent">...</Card>
// → className="card-accent p-6"

// Stat card
<Card variant="stat">...</Card>
// → bg-bg-surface border border-bg-border rounded-lg p-6
```

### `<StatCounter />` (animated countUp)
```tsx
// Triggers when scrolled into view via IntersectionObserver
// Uses requestAnimationFrame to count from 0 to target
// Props: value (number), suffix (string e.g. "M", "+"), duration (ms, default 1500)
// Font: font-mono text-[32px] font-semibold text-white
// Label below: text-sm text-text-secondary font-body
```

### `<SectionLabel />` (eyebrow)
```tsx
// Small label shown above every section heading
// Style: uppercase text-[11px] tracking-[0.1em] text-accent font-medium
// Often wrapped in stat-badge pill
```

---

## HOME PAGE — SECTION BY SECTION

### Hero Section
```
Layout: min-h-screen, flex flex-col justify-center, relative overflow-hidden
Background: bg-hero-glow on top of bg-bg-base

CONTENT (centered, max-w-3xl mx-auto text-center):
  - Badge pill: "BLOCKCHAIN · WEB3 · INNOVATION"
  - H1 (Space Grotesk 700, 64px desktop):
      Line 1: "[Company Name]"  ← text-white
      Line 2: "Building The"    ← text-white  
      Line 3: "Internet-Scale"  ← text-accent (navy)
      Line 4: "Future"          ← text-white
  - Subtitle (Inter 400, 18px, text-text-secondary, max-w-xl):
      "We design and build blockchain infrastructure, Web3 solutions,
       and next-gen applications that redefine what's possible."
  - CTA row: [Primary Button "Explore Our Work"] [Ghost Button "Our Services →"]
  - Scroll indicator: small animated chevron-down in navy

BACKGROUND DECORATION:
  - 3D blob / orb mesh gradient SVG (abstract, dark navy tones) positioned 
    top-right at 40% opacity — use a CSS radial gradient blob as fallback
  - Particle dots: subtle CSS animation, 20–30 small dots fading in/out

ANIMATION (Framer Motion staggerChildren):
  - Badge → fade up (delay 0)
  - H1 lines → each line fades up with 80ms stagger
  - Subtitle → fade up (delay 400ms)
  - CTA buttons → fade up (delay 600ms)
```

### Stats Bar
```
Layout: border-y border-bg-border bg-bg-surface py-8
Content: 4 stats in a row (responsive: 2x2 on mobile)
  "582M"    Total Transactions
  "~$0.02"  Cost per Transaction  
  "9.16M"   On-chain Addresses
  "3,672"   Validator Nodes

Each stat:
  - Number: font-mono text-[32px] font-semibold text-white (animate countUp on enter)
  - Label: text-sm text-text-secondary mt-1
  - Divider: border-r border-bg-border on all except last (hidden on mobile)
```

### Services Grid (Homepage Overview)
```
Layout: py-24 container mx-auto
Header:
  - SectionLabel: "WHAT WE DO"
  - H2: "Our Core Services" (Space Grotesk 700 48px)
  - Subtitle: text-text-secondary max-w-lg

Grid: 3 columns desktop, 1 col mobile — gap-4
Service cards (6 cards):
  1. Blockchain Development — Smart contracts, DApps, protocols
  2. Web3 Solutions         — Wallets, DeFi, NFT platforms
  3. Full-Stack Engineering — Scalable modern web applications
  4. UI/UX Design           — Pixel-perfect product interfaces
  5. Cloud & DevOps         — Infrastructure, CI/CD, deployment
  6. Technical Consulting   — Architecture, audits, strategy

Each card:
  - Icon (lucide-react, 24px, text-accent)
  - Title: font-heading font-semibold text-lg
  - Description: text-text-secondary text-sm leading-relaxed
  - "Learn more →" text-accent text-sm hover:underline
  - hover: border-accent/20, shadow-glow-lg transition-all
```

### Featured Projects
```
Layout: py-24, bg-page-gradient section
Header: SectionLabel + H2 "Work That Speaks" + subtitle

Grid: 2 columns desktop, 1 col mobile
Project card:
  - Full-width image (aspect-video, rounded-lg, overflow-hidden)
  - Tags row: tech stack badges (stat-badge style)
  - Title: font-heading font-semibold text-lg mt-3
  - Description: text-text-secondary text-sm
  - Links row: [GitHub icon] [Demo icon] both text-accent
  - hover: image slight scale(1.02) zoom

Show 4 projects max, "View All Projects →" button below
Data from Firebase /projects collection
```

### Tech Stack Section
```
Eyebrow + H2 "Technologies We Use"
Scrolling marquee row of tech logos (white/gray, hover→navy)
Techs: Next.js, React, Solidity, Ethereum, Firebase, TypeScript,
       Node.js, Docker, Tailwind CSS, Web3.js, Ethers.js, IPFS
```

### Team Preview
```
H2 "Meet the Team"
3 cards (leadership only), "View Full Team →" CTA
TeamMemberCard:
  - Avatar: rounded-full 80px, border-2 border-accent/30
  - Name: font-heading font-semibold
  - Role: text-text-secondary text-sm
  - LinkedIn icon: text-accent hover:text-accent-deep
```

### Latest Blogs
```
H2 "From Our Blog"
3 blog cards in a row
BlogCard:
  - Category badge (stat-badge)
  - Title: font-heading font-semibold text-lg
  - Excerpt: text-text-secondary text-sm 2-line clamp
  - Author + date: text-text-muted text-xs mt-auto
  - "Read more →" text-accent
Data from Firebase /blogs collection
```

### Contact CTA Section
```
Full-width section with bg-cta-glow (navy radial burst from bottom)
Centered content:
  - H2 (Space Grotesk 700 48px): "Ready to Build the Future?"
  - Subtitle: text-text-secondary
  - Two buttons: [Primary "Get In Touch"] [Outline "View Our Work"]
position: relative overflow: hidden
::before pseudo → adds ambient glow layer
```

---

## ALL OTHER PAGES

### `/about`
Sections: Company Overview hero → Mission/Vision/Values (3-col cards) → 
Timeline (company journey, vertical line + milestones)

### `/services`
Hero with badge + H1. Grid of all service cards (same as homepage but expanded detail).
Each card links to sub-page.

### `/services/blockchain`
Detailed page: Hero → What we offer → Our process → Case studies → CTA
Include: Smart Contracts, DApps, Web3 Solutions sub-sections

### `/projects`
Grid of ALL projects from Firebase. Filter by category (All / Blockchain / Web / Mobile).
ProjectCard: image + tags + title + description + links

### `/team`
Three sections: Leadership → Core Team → Interns
TeamMemberCard grid (4-col desktop, 2-col tablet, 1-col mobile)
Data from Firebase /team collection

### `/blog`
Blog listing: search bar (filter client-side by title) + category filter tabs
BlogCard grid
Individual blog `/blog/[slug]`: full article page, author card, back link

### `/careers`
Open positions list (static for now): 
  - Full Stack Developer (Remote)
  - Blockchain Engineer (Remote)
  - UI/UX Design Intern
JobCard: title + type badge + description + "Apply" button (opens mailto:)
Intern section below with separate cards

### `/contact`
Two-column layout:
  Left: H2 + description + email + social links (X, LinkedIn) with icons
  Right: ContactForm component
ContactForm:
  - Fields: Name, Email, Message (textarea)
  - Validation: required fields, email format
  - On submit: write to Firebase /contacts collection
  - Success state: navy checkmark + "Message sent!" text
  - Error state: red text with retry prompt
  - Button: Primary "Send Message" with loading spinner

---

## FIREBASE SETUP

### `lib/firebase.ts`
```ts
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

### Firestore Collections & Interfaces
```ts
// types/index.ts
export interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  content: string;      // markdown or HTML string
  excerpt: string;
  author: string;
  createdAt: Timestamp;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;        // Firebase Storage URL
  github?: string;
  demo?: string;
  category: 'blockchain' | 'web' | 'mobile' | 'other';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  tier: 'leadership' | 'core' | 'intern';
}

export interface Contact {
  id?: string;
  name: string;
  email: string;
  message: string;
  timestamp: Timestamp;
}
```

### `lib/firestore.ts`
```ts
import { collection, getDocs, doc, getDoc, addDoc, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

export const getBlogs = async (): Promise<Blog[]> => {
  const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Blog));
};

export const getBlog = async (slug: string): Promise<Blog | null> => {
  // query by slug field
};

export const getProjects = async (): Promise<Project[]> => { ... };

export const getTeam = async (): Promise<TeamMember[]> => { ... };

export const submitContact = async (data: Omit<Contact, 'id' | 'timestamp'>) => {
  await addDoc(collection(db, 'contacts'), {
    ...data,
    timestamp: Timestamp.now(),
  });
};
```

---

## ANIMATION LIBRARY (`lib/animations.ts`)

```ts
import { Variants } from 'framer-motion';

export const fadeUpVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const cardHoverVariants = {
  rest:  { scale: 1, boxShadow: '0 0 0px rgba(27,79,216,0)' },
  hover: { scale: 1.01, boxShadow: '0 0 40px rgba(27,79,216,0.12)' },
};

// Use with:
// <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
```

---

## `.env.local` TEMPLATE

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

---

## PACKAGE.JSON DEPENDENCIES

```json
{
  "dependencies": {
    "next": "14.2.0",
    "react": "^18",
    "react-dom": "^18",
    "typescript": "^5",
    "tailwindcss": "^3",
    "framer-motion": "^11",
    "lucide-react": "^0.383.0",
    "firebase": "^10",
    "clsx": "^2",
    "tailwind-merge": "^2"
  }
}
```

---

## RULES FOR THE AGENT

1. **NEVER** use a white or light background anywhere. Every surface is dark.
2. **NEVER** use any accent color other than navy (`#1B4FD8` and its variants).
3. **NEVER** use `<img>` — always use `next/image`.
4. **NEVER** use inline styles — everything via Tailwind or globals.css.
5. **ALWAYS** add `motion.div` scroll reveal on every section (fadeUpVariants + whileInView).
6. **ALWAYS** make components mobile-first responsive.
7. **ALWAYS** use `'use client'` directive on any component with hooks or Framer Motion.
8. **ALWAYS** use the three-font system: Space Grotesk / Inter / JetBrains Mono.
9. Stat numbers on home page and about page **MUST** animate countUp on scroll enter.
10. Cards **MUST** have the top-edge navy gradient highlight (`::before` pseudo-element).
11. Primary buttons **MUST** have the glow box-shadow (`shadow-glow-sm`).
12. Every page should have an `<SEO>` metadata export with title and description.
13. Firebase reads should use **server components** where possible (no 'use client' overhead).
14. Contact form submit should be **client component** with loading + success + error states.
