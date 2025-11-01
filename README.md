# C V Vishnuu - Professional Portfolio

A modern, responsive, and immersive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Beautiful scroll animations and transitions using Framer Motion
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive Sections**:
  - Hero section with animated introduction
  - About section with key achievements
  - Timeline-based experience section
  - Featured projects showcase
  - Skills categorization with animated cards
  - Contact form with EmailJS integration
- **SEO Optimized**: Meta tags for better search engine visibility
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd vishnuu-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

Edit the file: `src/data/portfolio-data.ts`

Update your:
- Personal details (name, email, phone, links)
- About section and highlights
- Work experience
- Projects
- Skills
- Education

### Setup EmailJS (Contact Form)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Update the credentials in `src/sections/Contact.tsx` (lines 36-38)

### Change Theme Colors

Edit the CSS variables in `src/index.css` to customize colors:
- Light mode: `:root` section
- Dark mode: `.dark` section

## Project Structure

```
vishnuu-portfolio/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── theme-provider.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── data/             # Data files
│   │   └── portfolio-data.ts
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Deployment

You can deploy this portfolio to various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Import the repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## License

This project is open source and available for personal use.

## Contact

**C V Vishnuu**
- Email: cvishnuu01@gmail.com
- LinkedIn: [linkedin.com/in/vishnuu-chirayil](https://www.linkedin.com/in/vishnuu-chirayil/)
- GitHub: [github.com/cvishnuu](https://github.com/cvishnuu)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
