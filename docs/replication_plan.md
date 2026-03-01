# Replication Plan: Next.js + Tailwind CSS

## Goal
Transform the static `cj-web` into a modern, performant, and SEO-optimized web application using Next.js and Tailwind CSS.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons/Assets:** Lucide React (for common icons) + existing SVGs
- **SEO:** Next.js Metadata API

## Architecture
### 1. Project Structure
```text
src/
  app/
    layout.tsx (Shared Layout: Navbar + Footer)
    page.tsx (Home Page)
    about/page.tsx (For Business / About)
    services/page.tsx (Services)
    contact/page.tsx (Contact)
  components/
    ui/ (Reusable atomic components like Buttons, Cards)
    sections/ (Page sections like Hero, LoanTable, etc.)
    layout/ (Navbar, Footer)
  public/
    assets/ (Existing landing-assets)
```

### 2. Implementation Steps
1.  **Initialize Next.js Project:** Setup with Tailwind and TypeScript.
2.  **Shared Components:** Extract and implement `Navbar` and `Footer` as shared layout components.
3.  **Home Page:**
    - Implement `Hero` section with Tailwind animations.
    - Implement `Steps` and `PaymentPlans` sections.
    - Implement `LoanComparisonTable` using a responsive Tailwind table or grid.
    - Implement `Testimonials` and `DownloadCTA`.
4.  **About/Services/Contact Pages:** Migrate content from respective HTML files into Next.js pages.
5.  **SEO Optimization:**
    - Use `generateMetadata` for dynamic titles and descriptions.
    - Implement Open Graph and Twitter cards.
    - Ensure semantic HTML (h1-h6 usage, alt text for images).
    - Sitemap and robots.txt generation.
6.  **Performance:**
    - Use `next/image` for optimized image loading.
    - Leverage Next.js font optimization.

## Best Practices for SEO
- **Semantic HTML:** Use proper tags (`<header>`, `<main>`, `<footer>`, `<section>`, `<article>`).
- **Metadata:** Unique title and description for every page.
- **Accessibility:** ARIA labels where necessary, high contrast ratios.
- **Mobile First:** Ensure the design is perfectly responsive using Tailwind's `sm:`, `md:`, `lg:` prefixes.
- **Speed:** Next.js's automatic code splitting and image optimization.
- **Canonical Tags:** Prevent duplicate content issues.
