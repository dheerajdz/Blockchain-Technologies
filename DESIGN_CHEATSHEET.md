# Design Cheatsheet — Quick Reference
## Web3 Company Website

---

## COLORS (memorize these 5)

| What | Value |
|---|---|
| Background | `#080808` |
| Card surface | `#141414` |
| **Accent (use everywhere)** | **`#1B4FD8`** |
| Body text | `#A0A0A0` |
| Headings | `#FFFFFF` |

---

## FONTS (3 fonts, 3 roles)

| Role | Font | When |
|---|---|---|
| Headings, H1–H3 | **Space Grotesk** | All section titles, nav logo |
| Body, UI, labels | **Inter** | Paragraphs, buttons, nav links |
| Numbers, stats, code | **JetBrains Mono** | All numeric stats, code blocks |

---

## BUTTONS

```
Primary  → bg #1B4FD8, text black, glow shadow, rounded-sm
Outline  → transparent, navy border 35% opacity, navy text
Ghost    → no bg/border, navy text, underline on hover
```

---

## CARD RULE

Every card must have:
1. `background: rgba(20,20,20,0.75)`
2. `border: 1px solid rgba(255,255,255,0.06)`
3. `border-radius: 16px`
4. `backdrop-filter: blur(12px)`
5. Top-edge gradient highlight (1px navy line at top via `::before`)

On hover: border-color → `rgba(27,79,216,0.18)` + soft glow

---

## SECTION STRUCTURE (copy this pattern every time)

```jsx
<section className="section">
  <div className="container">
    <div className="badge">SECTION LABEL</div>         {/* eyebrow */}
    <h2 className="display-lg">Section Heading</h2>   {/* main title */}
    <p className="text-secondary body-lg">Subtitle</p> {/* sub */}
    {/* content grid */}
  </div>
</section>
```

---

## ANIMATION (copy this on every div that should reveal)

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  viewport={{ once: true }}
>
  {/* content */}
</motion.div>
```

For staggered children:
```jsx
<motion.div
  variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## FIREBASE COLLECTIONS

| Collection | Key fields |
|---|---|
| `blogs` | id, title, slug, category, content, excerpt, author, createdAt |
| `projects` | id, title, description, technologies[], image, github, demo, category |
| `team` | id, name, role, image, linkedin, tier (leadership/core/intern) |
| `contacts` | id, name, email, message, timestamp |

---

## GLOW CHEATSHEET

```css
/* Button glow (default) */
box-shadow: 0 0 16px rgba(27,79,216,0.45), 0 0 40px rgba(27,79,216,0.20);

/* Button glow (hover) */
box-shadow: 0 0 24px rgba(27,79,216,0.65), 0 0 60px rgba(27,79,216,0.30);

/* Hero ambient (top of page) */
background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(27,79,216,0.08), transparent 70%), #080808;

/* CTA section (bottom glow) */
background: radial-gradient(ellipse 100% 80% at 50% 100%, rgba(27,79,216,0.35), rgba(0,168,150,0.15) 35%, transparent 70%), #080808;
```

---

## DON'TS

- ❌ Never use white/light background
- ❌ Never use any accent color except navy `#1B4FD8`
- ❌ Never use `<img>` (use `next/image`)
- ❌ Never use inline styles
- ❌ Never skip scroll-reveal animation on sections
- ❌ Never use rounded-full on cards (max 16px radius)
- ❌ Never mix font roles (Inter for headings = wrong)
