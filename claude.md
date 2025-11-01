# Vishnuu Portfolio - Technical Specifications

## Project Overview

A modern, interactive portfolio website for Vishnuu, a Senior Software Engineer specializing in full-stack development, AI/ML, and cloud infrastructure.

**Live URL:** TBD
**Owner:** Vishnuu (cvishnuu01@gmail.com)
**GitHub:** https://github.com/cvvishnuu/
**LeetCode:** https://leetcode.com/u/Vishnuu/

---

## Tech Stack

### Core Framework
- **React 18** with TypeScript
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS v3.4.1** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **CSS Variables** - For theme customization

### Animation Libraries
- **Framer Motion** - Advanced animations and gestures
- **react-type-animation** - Typing effect animations
- **react-parallax-tilt** - 3D tilt effects on cards
- **react-intersection-observer** - Scroll-based visibility detection

### Icons & Assets
- **Lucide React** - Icon library
- **Custom SVG** - Logo and decorative elements

### Email Integration
- **EmailJS** - Client-side email service (no backend needed)
  - Service ID: `service_0t2jrwo`
  - Notification Template: `template_d7lv5a8` (sends to you)
  - Auto-Reply Template: `template_kyibkld` (sends to visitor)

---

## Project Structure

```
vishnuu-portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components (Button, Card, Input, etc.)
│   │   ├── Navbar.tsx      # Navigation bar with branding
│   │   ├── Footer.tsx      # Footer with social links
│   │   └── ThemeProvider.tsx
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Landing section with profile photo
│   │   ├── About.tsx       # About me with animated counters
│   │   ├── Experience.tsx  # Work experience with climbing animation
│   │   ├── Projects.tsx    # Featured projects with bounce cards
│   │   ├── Skills.tsx      # Technical skills with progress bars
│   │   └── Contact.tsx     # Contact form with EmailJS
│   ├── data/
│   │   └── portfolio-data.ts  # All portfolio content (SINGLE SOURCE OF TRUTH)
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles
├── public/
│   └── profile.jpg         # Profile photo
├── .env                    # Environment variables (NOT committed)
├── .env.example            # Template for environment variables
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── EMAILJS_SETUP.md        # Detailed EmailJS setup guide
└── CONTACT_FORM_SETUP.md   # Quick setup guide
```

---

## Data Architecture

### Single Source of Truth: `/src/data/portfolio-data.ts`

All portfolio content is centralized in this file. **To update any content, edit this file.**

**Structure:**
```typescript
export const portfolioData = {
  personal: {
    name: "Vishnuu",
    title: "Senior Software Engineer",
    email: "cvishnuu01@gmail.com",
    phone: "+1 (567) 239-3983",
    location: "Ohio, USA",
    github: "https://github.com/cvvishnuu/",
    linkedin: "https://www.linkedin.com/in/vishnuu-sivaramakrish/",
    leetcode: "https://leetcode.com/u/Vishnuu/",
    profileImage: "/profile.jpg"
  },

  hero: {
    greeting: "Hi, I'm",
    tagline: "Coffee Powered ☕",  // Humorous, doesn't say "available for work"
    typingDescriptions: [
      "Full Stack Developer",
      "AI/ML Enthusiast",
      "Cloud Architect",
      "Problem Solver"
    ]
  },

  about: {
    description: "...",
    yearsExperience: 6,
    projectsCompleted: 50,
    certifications: 8
  },

  experience: [
    {
      title: "Senior Software Engineer",
      company: "Numed",
      period: "2023 - Present",
      description: "...",
      technologies: ["React", "Python", ...]
    },
    // ... more experiences
  ],

  projects: [
    {
      title: "Numed - Healthcare Platform",
      description: "...",
      image: "/numed.jpg",
      technologies: ["React", "Python", ...],
      link: "https://numedlabs.com/login",  // Clickable
      github: null  // Optional
    },
    // ... more projects
  ],

  skills: {
    "Frontend Development": [
      { name: "React/Next.js", proficiency: 95 },
      // ...
    ],
    "Backend Development": [...],
    "AI/ML": [...],
    "Cloud & DevOps": [...]
  }
}
```

---

## Section-by-Section Specifications

### 1. Navbar (`/src/components/Navbar.tsx`)

**Features:**
- Professional branding: "Vishnuu Portfolio" with code icon
- Rotating code icon with sparkle effect on hover
- Smooth scroll navigation to sections
- Theme toggle (light/dark mode) with animated sun/moon icons
- Responsive mobile menu

**Key Animations:**
- Code icon rotates 360° on hover
- Sparkle pulses in top-right corner
- Theme toggle icons spin in/out on toggle

**Navigation Links:**
- Home, About, Experience, Projects, Skills, Contact

---

### 2. Hero Section (`/src/sections/Hero.tsx`)

**Features:**
- Large profile photo with advanced animations
- Typing animation with fun job titles
- "Coffee Powered ☕" badge (humorous availability indicator)
- CTA buttons: "View My Work" and "Get In Touch"
- Social links (GitHub, LinkedIn, LeetCode)

**Profile Photo Effects:**
- **Pulsing glow rings** - Blue and purple shadows that breathe
- **Orbiting particles** - 6 particles that circle the photo
- **Shimmer effect** - Light sweep across photo
- **Static gradient border** - Blue to purple gradient

**Key Code:**
```typescript
// Pulsing glow
animate={{
  boxShadow: [
    "0 0 20px 5px rgba(59, 130, 246, 0.3), 0 0 40px 10px rgba(147, 51, 234, 0.2)",
    "0 0 30px 10px rgba(59, 130, 246, 0.4), 0 0 60px 20px rgba(147, 51, 234, 0.3)",
    "0 0 20px 5px rgba(59, 130, 246, 0.3), 0 0 40px 10px rgba(147, 51, 234, 0.2)",
  ],
}}

// Orbiting particles (6 particles, evenly spaced)
animate={{
  x: [
    Math.cos((i * 60 * Math.PI) / 180) * 150,
    Math.cos(((i * 60 + 360) * Math.PI) / 180) * 150,
  ],
  y: [
    Math.sin((i * 60 * Math.PI) / 180) * 150,
    Math.sin(((i * 60 + 360) * Math.PI) / 180) * 150,
  ],
}}
```

---

### 3. About Section (`/src/sections/About.tsx`)

**Features:**
- About description with parallax text animations
- Animated stat counters (Years Experience, Projects, Certifications)
- Parallax background blobs
- Floating particles

**Animated Counters:**
Uses custom `useCounter` hook with `requestAnimationFrame` for smooth counting from 0 to target value.

**Key Code:**
```typescript
const useCounter = (end: number, duration: number, shouldStart: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);

  return count;
};
```

---

### 4. Experience Section (`/src/sections/Experience.tsx`)

**Features:**
- Vertical timeline with glowing line
- Climbing person emoji (🧗) that moves with scroll
- Experience cards with company, role, period, and technologies
- Animated background blobs and particles

**Climbing Animation:**
Uses `useScroll` and `useTransform` to sync emoji position with scroll progress.

**Key Code:**
```typescript
const sectionRef = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"],
});

// Climber moves from bottom (100%) to top (0%) as you scroll down
const climberY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
const climberRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, -5]);

<motion.div
  style={{ top: climberY, rotate: climberRotate }}
  className="absolute left-1/2 -translate-x-1/2"
>
  <div className="text-5xl">🧗</div>
</motion.div>
```

**Timeline:**
- Glowing vertical line with gradient (blue to purple)
- Cards appear on alternating sides (left/right)
- Hover effects with scale and shadow

---

### 5. Projects Section (`/src/sections/Projects.tsx`)

**Features:**
- Bounce cards with spring physics
- Entire card is clickable (opens project link in new tab)
- "Click to Visit" badge appears on hover for clickable cards
- Ripple effect on hover
- Technology tags with icons

**Bounce Card Implementation:**
```typescript
const handleCardClick = (link: string | null) => {
  if (link) {
    window.open(link, "_blank", "noopener,noreferrer");
  }
};

<motion.div
  whileHover={{
    y: -12,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }}
  whileTap={{ scale: 0.98, y: -8 }}
  onClick={() => handleCardClick(project.link)}
  className={project.link ? "cursor-pointer" : ""}
>
```

**Numed Project:**
- Links to: https://numedlabs.com/login
- Entire card is clickable
- Shows "Click to Visit" badge on hover

---

### 6. Skills Section (`/src/sections/Skills.tsx`)

**Features:**
- Skills grouped by category (Frontend, Backend, AI/ML, Cloud & DevOps)
- Animated progress bars with proficiency percentages
- 3D tilt effect on skill cards
- Glow effect on hover
- Shimmer animation across progress bars

**Progress Bar Animation:**
```typescript
<motion.div
  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
  initial={{ width: 0 }}
  animate={inView ? { width: `${skill.proficiency}%` } : {}}
  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
>
  {/* Glow effect */}
  <motion.div
    className="absolute inset-0 blur-sm"
    animate={{
      opacity: hoveredSkill === skill.name ? [0.5, 1, 0.5] : 0.3,
    }}
    transition={{ duration: 2, repeat: Infinity }}
  />

  {/* Shimmer effect */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
    animate={{ x: ["-100%", "200%"] }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  />
</motion.div>
```

---

### 7. Contact Section (`/src/sections/Contact.tsx`)

**Features:**
- Contact form with name, email, message fields
- EmailJS integration (sends 2 emails)
- Contact information cards (email, phone, location)
- Animated background blobs
- Success/error status messages

**Email Flow:**
1. **Notification Email to You** (template_d7lv5a8)
   - Variables: `name`, `message`
   - Message format: `{email} messaged you - {message}`
   - Sent to: Your inbox (via EmailJS template settings)

2. **Auto-Reply to Sender** (template_kyibkld)
   - Variables: `name`, `to_email`
   - Sent to: The person who submitted the form

**Key Code:**
```typescript
// 1. Send notification to you
await emailjs.send(
  serviceId,
  "template_d7lv5a8",
  {
    name: formData.name,
    message: `${formData.email} messaged you - ${formData.message}`,
  },
  publicKey
);

// 2. Send auto-reply to sender
await emailjs.send(
  serviceId,
  "template_kyibkld",
  {
    name: formData.name,
    to_email: formData.email,
  },
  publicKey
);
```

---

### 8. Footer (`/src/components/Footer.tsx`)

**Features:**
- 3-column layout: Brand, Quick Links, Social Links
- Rotating code icon with sparkle
- Social links in 2x2 grid with icons
- "Back to Top" button with bouncing arrow
- Animated background blobs and particles
- Designer signature: "Turning bugs into features since 2021"

**Social Links:**
- GitHub, LinkedIn, LeetCode, Email
- Each with icon + label
- Hover effects with scale and glow

---

## Environment Variables

### `.env` (NOT committed to git)
```env
VITE_EMAILJS_SERVICE_ID=service_0t2jrwo
VITE_EMAILJS_TEMPLATE_ID=template_kyibkld  # Not used directly anymore
VITE_EMAILJS_PUBLIC_KEY=BQkx09zmg7Ppt-d5_
```

### `.env.example` (Template for others)
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important:**
- `.env` is in `.gitignore` to prevent credential leaks
- Restart dev server after changing `.env` (environment variables only load on startup)

---

## EmailJS Configuration

### Templates

**1. Notification Template (template_d7lv5a8)**
- **Purpose:** Sends you the contact form submission
- **Variables:** `name`, `message`
- **Message Format:** `{email} messaged you - {message}`
- **To Email:** Set in EmailJS dashboard (should be cvishnuu01@gmail.com)

**2. Auto-Reply Template (template_kyibkld)**
- **Purpose:** Sends automatic reply to the person who contacted you
- **Variables:** `name`, `to_email`
- **To Email:** `{{to_email}}` (dynamic, goes to the sender)
- **Example Content:**
  ```
  Hi {{name}},

  Thank you for reaching out! I've received your message and will get back to you as soon as possible.

  Best regards,
  Vishnuu
  ```

### Free Tier Limits
- 200 emails/month
- Unlimited templates
- No backend needed
- Client-side only

---

## Theme System

### Dark/Light Mode
- Uses Tailwind's `dark:` variant
- Theme toggle in Navbar
- Persists in localStorage (via ThemeProvider)

### Color Scheme
**Primary Colors:**
- Blue: `#3b82f6` (blue-600)
- Purple: `#9333ea` (purple-600)
- Gradients: `from-blue-600 to-purple-600`

**Dark Mode:**
- Background: `gray-900`, `gray-800`
- Text: `gray-100`, `gray-200`

**Light Mode:**
- Background: `white`, `blue-50`, `purple-50`
- Text: `gray-900`, `gray-800`

---

## Animation Patterns

### Common Animations

**1. Fade In + Slide Up (Section Entries)**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
```

**2. Bounce Card (Project Cards)**
```typescript
<motion.div
  whileHover={{
    y: -12,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }}
  whileTap={{ scale: 0.98, y: -8 }}
>
```

**3. Rotating Icon**
```typescript
<motion.div
  animate={{ rotate: [0, 360] }}
  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
>
```

**4. Pulsing Glow**
```typescript
<motion.div
  animate={{
    boxShadow: [
      "0 0 20px rgba(..., 0.3)",
      "0 0 40px rgba(..., 0.5)",
      "0 0 20px rgba(..., 0.3)",
    ]
  }}
  transition={{ duration: 3, repeat: Infinity }}
>
```

**5. Shimmer Sweep**
```typescript
<motion.div
  className="bg-gradient-to-r from-transparent via-white/30 to-transparent"
  animate={{ x: ["-100%", "200%"] }}
  transition={{ duration: 2, repeat: Infinity }}
>
```

---

## Responsive Design

### Breakpoints (Tailwind)
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

### Mobile Considerations
- Navbar collapses to hamburger menu
- Timeline switches to single column
- Stats stack vertically
- Reduced animation complexity on mobile
- Touch-friendly button sizes

---

## Performance Optimizations

1. **Lazy Loading:**
   - Images loaded with proper sizing
   - Intersection Observer for scroll animations

2. **Animation Performance:**
   - GPU-accelerated transforms (translate, scale, rotate)
   - Avoid layout-triggering animations
   - Use `will-change` sparingly

3. **Code Splitting:**
   - Vite handles automatic code splitting
   - Lazy load heavy components if needed

---

## How to Modify Common Elements

### 1. Update Personal Information
**File:** `/src/data/portfolio-data.ts`
```typescript
personal: {
  name: "Vishnuu",
  email: "newemail@example.com",  // Change here
  // ...
}
```

### 2. Add New Project
**File:** `/src/data/portfolio-data.ts`
```typescript
projects: [
  {
    title: "New Project",
    description: "Project description",
    image: "/new-project.jpg",  // Add image to /public
    technologies: ["React", "Node.js"],
    link: "https://project-url.com",  // Optional
    github: "https://github.com/user/repo"  // Optional
  },
  // ... existing projects
]
```

### 3. Update Skills
**File:** `/src/data/portfolio-data.ts`
```typescript
skills: {
  "Frontend Development": [
    { name: "React/Next.js", proficiency: 95 },
    { name: "New Skill", proficiency: 80 },  // Add here
  ]
}
```

### 4. Change Colors
**File:** `/tailwind.config.js`
```javascript
colors: {
  primary: "#3b82f6",  // Change primary color
  // ...
}
```

### 5. Modify Animations
**Speed:** Change `duration` in `transition` prop
```typescript
transition={{ duration: 1.5 }}  // Slower
transition={{ duration: 0.3 }}  // Faster
```

**Delay:** Add `delay` to stagger animations
```typescript
transition={{ delay: 0.2 }}
```

**Spring Physics:** Adjust `stiffness` and `damping`
```typescript
transition={{ type: "spring", stiffness: 400, damping: 10 }}
```

### 6. Update EmailJS Templates
**File:** `/src/sections/Contact.tsx`
```typescript
const notificationTemplateId = "template_d7lv5a8";  // Change template ID
const autoReplyTemplateId = "template_kyibkld";
```

---

## Common Issues & Solutions

### Issue: Contact form not working
**Solution:**
1. Check `.env` file has correct credentials
2. Restart dev server: `npm run dev`
3. Check browser console for errors
4. Verify EmailJS templates are active
5. Check EmailJS dashboard for monthly limit

### Issue: Profile photo not showing
**Solution:**
1. Ensure image is in `/public/profile.jpg`
2. Check file name matches in `portfolio-data.ts`
3. Clear browser cache

### Issue: Animations not smooth
**Solution:**
1. Check if browser supports GPU acceleration
2. Reduce number of animated elements
3. Use `will-change` CSS property
4. Simplify animation complexity

### Issue: Environment variables not loading
**Solution:**
1. Ensure `.env` file is in project root
2. Restart dev server (required after `.env` changes)
3. Check variable names start with `VITE_`
4. Use `import.meta.env.VITE_VARIABLE_NAME`

---

## Development Workflow

### 1. Start Dev Server
```bash
npm run dev
```
Opens at: http://localhost:5173/

### 2. Build for Production
```bash
npm run build
```
Output: `/dist` folder

### 3. Preview Production Build
```bash
npm run preview
```

### 4. Type Check
```bash
npx tsc --noEmit
```

---

## Deployment

### Recommended Platforms
1. **Vercel** (Recommended for Vite/React)
   - Automatic deployments from GitHub
   - Environment variables in dashboard
   - Free tier available

2. **Netlify**
   - Drag & drop deployment
   - Environment variables in dashboard
   - Free tier available

3. **GitHub Pages**
   - Free hosting
   - Requires `gh-pages` package
   - Set base URL in `vite.config.ts`

### Environment Variables in Production
Add these to your hosting platform's environment variable settings:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

---

## Git Workflow

### Important Files NOT to Commit
- `.env` (contains secrets)
- `node_modules/`
- `dist/`
- `.DS_Store`

### Files TO Commit
- `.env.example` (template)
- All source code
- `package.json` and `package-lock.json`
- Documentation files

---

## Key Design Decisions

1. **Why EmailJS instead of backend?**
   - No server costs
   - No backend maintenance
   - Free tier is generous (200 emails/month)
   - Client-side only, secure with rate limiting

2. **Why Tailwind CSS v3.4.1 instead of v4?**
   - Better compatibility with shadcn/ui
   - Stable, well-documented
   - Fewer breaking changes

3. **Why Framer Motion?**
   - Best React animation library
   - Declarative API
   - Spring physics built-in
   - Excellent TypeScript support

4. **Why single `portfolio-data.ts` file?**
   - Single source of truth
   - Easy to update content
   - No database needed
   - Version controlled

5. **Why "Coffee Powered ☕" instead of "Available for Work"?**
   - User's current employer might see the portfolio
   - Adds personality and humor
   - Still implies professionalism

---

## Future Enhancement Ideas

1. **Blog Section**
   - Add MDX support for blog posts
   - Syntax highlighting for code blocks
   - Categories and tags

2. **Case Studies**
   - Detailed project breakdowns
   - Before/after comparisons
   - Technical challenges and solutions

3. **Resume Download**
   - Generate PDF from portfolio data
   - Button in navbar or hero section

4. **Analytics**
   - Google Analytics integration
   - Track button clicks and form submissions

5. **Testimonials**
   - Add testimonials section
   - Carousel with client reviews

6. **Internationalization (i18n)**
   - Multi-language support
   - Language switcher in navbar

---

## Dependencies

### Production
```json
{
  "@emailjs/browser": "^4.x",
  "framer-motion": "^11.x",
  "lucide-react": "^0.x",
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-intersection-observer": "^9.x",
  "react-parallax-tilt": "^1.x",
  "react-type-animation": "^3.x"
}
```

### Development
```json
{
  "@types/react": "^18.x",
  "@types/react-dom": "^18.x",
  "@vitejs/plugin-react": "^4.x",
  "autoprefixer": "^10.x",
  "postcss": "^8.x",
  "tailwindcss": "^3.4.1",
  "typescript": "^5.x",
  "vite": "^5.x"
}
```

---

## Contact Information for Support

**Owner:** Vishnuu
**Email:** cvishnuu01@gmail.com
**GitHub:** https://github.com/cvvishnuu/
**LinkedIn:** https://www.linkedin.com/in/vishnuu-sivaramakrish/

---

## License

This portfolio is personal property. Reuse of code for learning purposes is allowed, but direct copying of content and design is not permitted.

---

## Last Updated

January 2025

---

## Quick Reference: File Locations

| What to Update | File Path |
|----------------|-----------|
| Personal info, projects, skills | `/src/data/portfolio-data.ts` |
| Profile photo | `/public/profile.jpg` |
| EmailJS credentials | `.env` |
| Navbar branding | `/src/components/Navbar.tsx` |
| Footer content | `/src/components/Footer.tsx` |
| Hero animations | `/src/sections/Hero.tsx` |
| Contact form logic | `/src/sections/Contact.tsx` |
| Theme colors | `/tailwind.config.js` |
| Global styles | `/src/index.css` |

---

**Pro Tip:** Always update `portfolio-data.ts` first before modifying component files. The data drives the UI!
