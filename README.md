# Jake Riina - Personal Portfolio Website

A modern personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a home page with hero section and a projects page with advanced multi-category filtering.

## Features

- **Home Page**: Hero section with profile photo, name, and navigation to projects
- **Projects Page**: Showcase projects with filtering by:
  - Discipline (Product Design, UX/UI, Engineering, Business / Strategy)
  - Project Type (Physical Product, App / Software, Research, Startup / Concept)
  - Skills (CAD, Prototyping, Figma, User Research, Manufacturing, Data)
  - Context (Academic, Internship, Startup)
- **Navigation**: Header with links to Home, Projects, Experience, Contact, and About
- **Dark Theme**: Black background with white text for a modern look

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React** - UI library

## Getting Started

### Prerequisites

- Node.js 18+ installed on your computer
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your profile photo:**
   - Place your photo in the `public` folder
   - Name it `profile-placeholder.jpg` (or update the path in `app/page.tsx`)

3. **Add project images:**
   - Place project images in the `public` folder
   - Update the image paths in `data/projects.ts` to match your image filenames

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/
├── app/
│   ├── page.tsx              # Home page
│   ├── projects/
│   │   └── page.tsx          # Projects page with filters
│   ├── layout.tsx            # Root layout with navbar
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation header
│   ├── ProjectCard.tsx       # Individual project card
│   └── FilterPills.tsx       # Filter toggle component
├── data/
│   └── projects.ts           # Project data (edit this to add your projects)
└── public/
    └── [your-images]         # Place images here
```

## Customizing Your Projects

Edit `data/projects.ts` to add, remove, or modify projects. Each project has:

- `id`: Unique identifier
- `title`: Project name
- `description`: Project description
- `image`: Path to project image (in `/public` folder)
- `disciplines`: Array of disciplines (Product Design, UX/UI, Engineering, Business / Strategy)
- `projectTypes`: Array of project types (Physical Product, App / Software, Research, Startup / Concept)
- `skills`: Array of skills used (CAD, Prototyping, Figma, User Research, Manufacturing, Data)
- `contexts`: Array of contexts (Academic, Internship, Startup)
- `link`: Optional URL to project (use "#" for placeholder)

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [your-github-repo-url]
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy
   - Your site will be live in minutes!

### Alternative: Deploy to GitHub Pages

1. Install `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "next build && next export && gh-pages -d out"
   }
   ```

3. Update `next.config.js`:
   ```js
   module.exports = {
     output: 'export',
     basePath: '/your-repo-name',
     assetPrefix: '/your-repo-name/',
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Adding New Pages

To add the Experience, Contact, or About pages:

1. Create a new folder in `app/` (e.g., `app/experience/`)
2. Create a `page.tsx` file inside that folder
3. The navbar will automatically link to it (links are already set up)

Example for `app/experience/page.tsx`:
```tsx
export default function Experience() {
  return (
    <main className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white">Experience</h1>
        {/* Add your content here */}
      </div>
    </main>
  );
}
```

## Troubleshooting

- **Images not showing**: Make sure images are in the `public` folder and paths in `projects.ts` start with `/`
- **Build errors**: Run `npm install` again to ensure all dependencies are installed
- **Styling issues**: Make sure Tailwind CSS is properly configured (should be automatic)

## License

This project is open source and available for personal use.

