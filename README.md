# Md Farahbi Ishrak Famous — Personal Portfolio

A responsive personal portfolio website presenting my software development, artificial intelligence, education, professional experience, leadership, awards, and community involvement.


## About the project

This portfolio was created to provide a clear overview of my background as a Bachelor of ICT student majoring in Artificial Intelligence at the University of Tasmania. It brings my technical work, education, employment, leadership, awards, and selected memories together in one accessible website.

The site uses a dark, amber-accented visual style and is designed to work across desktop, tablet, and mobile devices.

## Main sections

- **About** — introduction, professional summary, location, social links, and portfolio statistics
- **Projects** — featured AI, cloud, and full-stack projects with detailed modal views
- **Timeline** — education, employment, volunteering, and leadership experience
- **Skills** — programming, web development, databases, cloud technologies, and machine learning
- **Leadership** — selected leadership and community contributions
- **Awards** — academic, technical, sporting, and extracurricular achievements
- **Gallery** — a visual collection of professional, community, educational, and personal milestones
- **Contact and resume** — modal-based contact information and resume access

## Features

- Responsive single-page layout
- Smooth section navigation with active-section highlighting
- Desktop and mobile navigation menus
- Dark and light theme toggle
- Animated content and transitions
- Project detail modals
- Resume and contact modals
- Accessible buttons, image descriptions, and keyboard interactions
- Responsive masonry-style image gallery
- Full-screen gallery viewer with previous and next controls
- Keyboard support for the gallery using the arrow and Escape keys
- Lazy-loaded WebP gallery images for better performance

## Gallery update completed

The original portfolio has been extended with a complete **Making Memories** gallery containing 37 optimized photographs.

The gallery update included:

- A new `Memories` component
- A dark masonry/collage layout that preserves different image proportions
- Selective captions for important milestones
- A click-to-expand full-screen image viewer
- Previous and next image navigation
- Keyboard navigation and close controls
- Responsive behaviour across mobile and desktop screens
- A new Gallery link in the main navigation
- Gallery integration after the Awards section
- WebP image conversion and optimization

Files involved in this update:

```text
src/components/Memories.tsx
src/components/Header.tsx
src/App.tsx
public/memories/01.webp ... 37.webp
```

## Built with

- [React 19](https://react.dev/) — component-based user interface
- [TypeScript](https://www.typescriptlang.org/) — typed application code
- [Vite](https://vite.dev/) — development server and production build tool
- [Tailwind CSS 4](https://tailwindcss.com/) — responsive styling
- [Motion](https://motion.dev/) — animations and transitions
- [Lucide React](https://lucide.dev/) — interface icons

## Getting started

### Prerequisites

Install [Node.js](https://nodejs.org/) before running the project. The current Node.js LTS version is recommended.

Confirm that Node.js and npm are available:

```bash
node --version
npm --version
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/farahbi2048/Farahbi_Personal-Website-folder.git
   ```

2. Open the project folder:

   ```bash
   cd Farahbi_Personal-Website-folder
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local address shown in the terminal. By default, this project runs at:

   ```text
   http://localhost:3000
   ```

No API key or environment variable is currently required to run the portfolio.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the TypeScript checks without generating files |

## Project structure

```text
Farahbi_Personal-Website-folder/
├── public/
│   └── memories/              # Optimized gallery photographs
├── src/
│   ├── components/            # Portfolio sections, navigation, and modals
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── TimelineSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── LeadershipSection.tsx
│   │   ├── AwardsSection.tsx
│   │   ├── Memories.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolioData.ts   # Personal details and portfolio content
│   ├── App.tsx                # Main layout and section integration
│   ├── index.css              # Tailwind CSS entry point
│   ├── main.tsx               # React application entry point
│   └── types.ts               # Shared TypeScript types
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Updating the portfolio

Most personal details, projects, timeline entries, skills, and awards can be edited in:

```text
src/data/portfolioData.ts
```

The navigation links and name displayed in the header can be edited in:

```text
src/components/Header.tsx
```

Gallery descriptions and selected captions can be edited in:

```text
src/components/Memories.tsx
```

Gallery photographs are stored in `public/memories/` and follow a two-digit naming pattern such as `01.webp`, `02.webp`, and `03.webp`.

## Production build and deployment

Create a production build before deployment:

```bash
npm run lint
npm run build
```

The generated `dist/` directory can be deployed to a static hosting service. When using Vercel, connect the GitHub repository and use these settings:

```text
Build command: npm run build
Output directory: dist
```

Vercel will rebuild and redeploy the portfolio automatically after new changes are pushed to the connected branch.

## Author

**Md Farahbi Ishrak Famous**  
Bachelor of ICT (Artificial Intelligence), University of Tasmania  
Hobart, Tasmania, Australia

- [LinkedIn](https://www.linkedin.com/in/md-farahbi-ishrak-0149461ba/)
- [GitHub](https://github.com/farahbi2048)

## Repository

[Farahbi Personal Website on GitHub](https://github.com/farahbi2048/Farahbi_Personal-Website-folder)

---

This portfolio is maintained as a living record of my technical development, professional journey, leadership, and community involvement.
