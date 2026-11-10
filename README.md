# Nolan Hughes: Hire Me (Modern)

A modern, eye-catching personal "Hire Me" portfolio site built with:

- **Next.js 14** (App Router)
- **Mantine UI** (Component library)
- **Framer Motion** (Animations)
- **TypeScript**

## ✨ Features

- **Modern Design**: Animated gradients, hover effects, random color interactions
- **Customizable**: All data pulled from `constants/data.ts` for easy updates
- **Responsive**: Works beautifully on mobile, tablet, and desktop
- **Fast**: Optimized with Next.js App Router
- **GitHub Integration**: Automatically fetches and displays your repos

## Setup

```bash
yarn install  # or npm install / pnpm install
yarn dev       # Start development server
```

## Customization

### Update Your Info

Edit `constants/data.ts`:

- Personal info (name, email, LinkedIn)
- Work experience and achievements
- Skills and technologies
- Selected GitHub repos
- Hover color palette

### Avatar Image

Place your headshot at `public/avatar.jpg` (or use `?img=<url>` query param for testing)

### Testing

- Use `?gh=yourusername` to change GitHub user for testing
- Use `?img=https://...` to override avatar temporarily
- Use `?repos=repo1,repo2,repo3` to test specific repos

## Project Structure

```
app/
  (site)/
    page.tsx          # Main page
  layout.tsx          # Root layout
components/
  Hero.tsx            # Hero section
  HoverableCard.tsx   # Reusable card
  sections/
    StatsSection.tsx
    ContactSection.tsx
constants/
  data.ts             # All your data
hooks/
  useGitHubRepos.ts   # GitHub API hook
```
