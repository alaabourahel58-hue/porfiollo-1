# Alex Morgan — Modern Developer Portfolio

A modern, responsive, and production-ready personal developer portfolio website designed for a computer science student interested in software development, modern web technologies, computer networks, and cybersecurity.

Built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, featuring centralized configuration, dark/light theme switching, anti-AI-slop design discipline, accessible micro-interactions, and instant deployment compatibility with **Vercel**.

---

## 1. Project Overview

This project serves as a clean, authentic digital showcase for computer science students and aspiring developers. Rather than relying on fake metrics or exaggerated career claims, this portfolio emphasizes **genuine learning progression**, **system architecture exploration**, and **algorithmic problem solving**.

All profile data, projects, skills, education, and learning milestones are maintained in centralized configuration files for zero-duplication maintenance.

---

## 2. Main Features

- **Sophisticated Dark & Light Themes**: Dark mode by default (`#09090B`) with subtle violet and cyan accents; smooth light mode with persistent `localStorage` and zero flash.
- **Top Bar Contract**: Minimalist "AM" monogram, clean single-line navigation links with active scroll spy, theme toggle, and "Let's Talk" CTA.
- **Interactive Hero Visual**: Developer workstation card featuring an interactive code viewer, terminal simulation with executable commands (`whoami`, `interests`, `ping lab`), and security lab overview.
- **Honest Skills Directory**: Categorized into *Programming*, *Web Development*, *Systems & Networking*, and *Cybersecurity*. Unverified skills default to "Learning"—no arbitrary percentage bars. Includes real-time search and category filtering.
- **Interactive Projects Showcase**: Categorized portfolio grid with domain-tailored technical illustrations, technology tags, and an in-depth **Architecture & Details Modal**. Links to GitHub and Live Demos are hidden or annotated when not configured, preventing dead `#` links.
- **Learning Journey Roadmap**: Structured three-stage milestone timeline (*Foundations*, *Building*, *Exploring Cybersecurity*) communicating active habits and computer science concepts.
- **Education & Coursework Tracking**: Academic degree representation with representative coursework and a verified certifications subsection (with empty-state guidance).
- **Accessible Contact Section**: Contact form with client-side validation, error handling, clipboard email copying, and a direct `mailto:` fallback.
- **CV / Resume Protocol**: Guided modal explaining how to provide a verified `public/cv.pdf` file without generating fake credentials.
- **Fully Responsive & Accessible**: Mobile drawer navigation, keyboard focus rings (`focus-visible`), WCAG AA contrast, and reduced-motion consideration.

---

## 3. Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Language**: TypeScript 5.8+ (Strict type checking)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 4. Requirements

- **Node.js**: `v18.0.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm` (v9+), `pnpm`, or `yarn`

---

## 5. Installation Instructions

1. Clone or download the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/developer-portfolio.git
   cd developer-portfolio
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

---

## 6. Local Development Instructions

Start the Vite development server on port 3000:
```bash
npm run dev
```

Open your browser at `http://localhost:3000` to preview the site with instant hot-reloading.

---

## 7. Project Structure

```text
developer-portfolio/
├── public/
│   ├── cv.pdf               # Your resume PDF (optional)
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Top bar with logo, nav links, theme toggle, and mobile menu
│   │   ├── Hero.tsx         # Hero section with interactive developer terminal
│   │   ├── About.tsx        # Biography and 4 core values/focus cards
│   │   ├── Skills.tsx       # Skills filter tabs, search, and status badges
│   │   ├── Projects.tsx     # Project grid with custom illustrations and links
│   │   ├── ProjectModal.tsx # Architectural details and CS concept modal
│   │   ├── LearningJourney.tsx # 3-stage vertical learning roadmap
│   │   ├── Education.tsx    # Academic degree, courses, and certifications
│   │   ├── Contact.tsx      # Contact cards and validated form
│   │   ├── Footer.tsx       # Minimalist footer with attribution
│   │   ├── CvModal.tsx      # Resume download and configuration dialog
│   │   └── ConfigGuideModal.tsx # Centralized configuration helper
│   ├── config/
│   │   ├── profile.ts       # Central personal profile, biography, links, and contact
│   │   ├── skills.ts        # Technical skills and status definitions
│   │   ├── projects.ts      # Project gallery, technical highlights, and links
│   │   ├── learning.ts      # Roadmap stages, milestones, and reflections
│   │   └── education.ts     # Academic institution, coursework, and certifications
│   ├── context/
│   │   └── ThemeContext.tsx # Dark/Light theme provider with localStorage persistence
│   ├── App.tsx              # Main application layout
│   ├── index.css            # Tailwind CSS v4 setup and typography tokens
│   └── main.tsx             # React DOM entry point
├── .env.example             # Example environment variables
├── index.html               # Semantic HTML shell with SEO meta tags
├── package.json             # NPM dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite bundler configuration
└── README.md                # Comprehensive documentation
```

---

## 8. Instructions for Editing the Profile

Open `src/config/profile.ts` to customize:
- `fullName`: Your display name (e.g. `"Alex Morgan"`).
- `initials`: 2-letter monogram for the logo (e.g. `"AM"`).
- `professionalTitle`: Header title (e.g. `"Computer Science Student | Aspiring Software Developer"`).
- `roleBadge`: Small pill label in the Hero (e.g. `"COMPUTER SCIENCE STUDENT"`).
- `shortIntro`: 1-sentence introduction.
- `extendedBiography`: Array of biography paragraphs for the About section.
- `location`: City and country (`city`, `country`, `isDemo`).
- `contact.email`: Your contact email address.
- `social`: URLs for your GitHub and LinkedIn profiles.
- `interests`: Array of technical interests.
- `languages`: Spoken languages with proficiency levels.

---

## 9. Instructions for Adding Projects

Open `src/config/projects.ts` and append or edit objects in the `projectsData` array:

```typescript
{
  id: 'my-new-project',
  title: 'Network Packet Analyzer',
  description: 'A lightweight packet inspection utility built in Python.',
  longDescription: 'Detailed explanation of how the project captures and parses packets...',
  category: 'Cybersecurity', // 'Web Development' | 'Programming' | 'Cybersecurity'
  technologies: ['Python', 'Scapy', 'Wireshark'],
  status: 'Learning project', // 'Demo project' | 'Learning project' | 'Educational demonstration'
  githubUrl: 'https://github.com/your-username/packet-analyzer', // Set to undefined if unconfigured
  liveUrl: undefined,
  themeColor: 'emerald',
  architectureDetails: {
    purpose: 'Understand low-level TCP/IP headers.',
    keyConcepts: ['Socket programming', 'Packet parsing', 'Bitwise operations'],
    technicalHighlights: ['Multithreaded capture buffer', 'CLI report generation'],
    fileStructurePreview: ['src/sniffer.py', 'src/parser.py', 'requirements.txt']
  }
}
```

---

## 10. Instructions for Updating Skills

Open `src/config/skills.ts` to edit or add skills to `skillsData`:

```typescript
{
  id: 'rust-lang',
  name: 'Rust',
  category: 'Programming',
  status: 'Learning', // 'Learning' | 'Practiced' | 'Proficient'
  description: 'Ownership model, memory safety, and concurrent programming.',
  focusArea: 'Systems Programming'
}
```

---

## 11. Instructions for Adding a Real CV

1. Export your verified resume as a PDF file named `cv.pdf`.
2. Copy the file into the `public/` directory:
   ```bash
   cp /path/to/my-resume.pdf public/cv.pdf
   ```
3. Open `src/config/profile.ts` and set `isConfigured: true`:
   ```typescript
   cv: {
     filePath: "/cv.pdf",
     isConfigured: true
   }
   ```
4. The "Resume / CV" button will now directly download your PDF!

---

## 12. Instructions for Configuring Contact Functionality

The built-in contact form includes real-time client-side validation and immediate `mailto:` draft generation.

To integrate an automated backend email service (such as [Resend](https://resend.com/)):
1. Create a free account at Resend.
2. Obtain an API key from the Resend dashboard.
3. Configure an Express or Serverless function endpoint to forward messages securely.
4. Pass your verified domain as the sender address.

---

## 13. Environment Variable Documentation

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Available variables:
```env
# Optional: External contact API service (e.g., Resend)
RESEND_API_KEY=""
CONTACT_FROM_EMAIL="portfolio@yourverifieddomain.com"
CONTACT_TO_EMAIL="hello@yourverifieddomain.com"
```

*Note: In static client-side mode, no environment variables are required.*

---

## 14. Production Build Instructions

To test a production build locally:

```bash
# 1. Type-check and lint
npm run lint

# 2. Compile static production bundle into dist/
npm run build

# 3. Preview production bundle
npm run preview
```

---

## 15. GitHub Repository Setup

1. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "feat: Initial commit of developer portfolio"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Connect and push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

---

## 16. Vercel Deployment Instructions

Deploying this portfolio on Vercel takes under 2 minutes:

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New...** -> **Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.
6. Your portfolio is live with free HTTPS and global edge CDN caching!

---

## 17. Custom Domain Configuration

1. In your Vercel Project Dashboard, navigate to **Settings** -> **Domains**.
2. Enter your custom domain (e.g., `alexmorgan.dev` or `portfolio.yourname.com`).
3. Add the displayed DNS records (CNAME or A record) at your domain registrar (Namecheap, Cloudflare, Google Domains, etc.).
4. Vercel will automatically generate a free SSL certificate.

---

## 18. Troubleshooting Common Errors

### "Module not found" or dependency issues
Run a clean install:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails on Vercel
Ensure your Node.js version in Vercel project settings (Settings > General > Node.js Version) is set to `20.x` or `22.x`.

### Theme flashes on reload
The application reads stored preferences from `localStorage` synchronously during mount and sets CSS classes directly on `document.documentElement` to prevent visual flashes.

---

## License

MIT License. Designed with care as an open-source template for aspiring software engineers and computer science students.
