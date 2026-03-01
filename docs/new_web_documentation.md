# New cj-web Documentation

## Overview
The `cj-web` project has been completely rebuilt using **Next.js 14+ (App Router)** and **Tailwind CSS**. This transition from static HTML/CSS to a modern framework provides better performance, maintainability, and SEO capabilities.

## Technical Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Utility-first CSS)
- **Language:** TypeScript (Type safety)
- **Components:** Modular React components
- **Optimization:** Next.js Image component for optimized asset loading

## New Structure
```text
src/
  app/
    layout.tsx       # Root layout with Navbar and Footer
    page.tsx         # Home page
    about/           # About / For Business page
    services/        # Services page
    contact/         # Contact page
  components/
    layout/          # Shared components (Navbar, Footer)
    sections/        # Page-specific sections (Hero, Steps, LoanTable, etc.)
  public/
    assets/          # Optimized SVGs and PNGs
```

## Key Features & Improvements
### 1. Modern Design
Replicated the original design using Tailwind CSS, ensuring a clean, modern, and fully responsive UI. The primary brand color (#0d4d3d) is integrated throughout the theme.

### 2. Component-Based Architecture
The website is now broken down into reusable components:
- `Navbar`: Shared navigation with mobile-friendly design.
- `Hero`: High-impact landing section with optimized illustrations.
- `LoanTable`: Responsive comparison of loan products.
- `PaymentPlans`: Clear visualization of repayment options.
- `Activity`: Engaging section highlighting credit limit growth.
- `Footer`: Comprehensive footer with contact info and social links.

### 3. SEO Best Practices
- **Metadata API:** Unique titles and descriptions for each page.
- **Semantic HTML:** Proper use of `<header>`, `<main>`, `<footer>`, and heading hierarchies (H1-H4).
- **Performance:** Automatic code splitting and image optimization via Next.js.
- **Mobile First:** Tailwind's responsive utilities ensure a seamless experience across all devices.

### 4. Maintainability
- Shared layouts (Navbar/Footer) are defined once.
- Theme colors and fonts are centralized in `globals.css` and `tailwind.config.ts`.
- TypeScript provides robust error checking and better developer experience.

## Pages
- **Home:** Main landing page promoting the core value proposition and products.
- **About (For Business):** Detailed look into mission, vision, and values.
- **Services:** In-depth explanation of micro-loans, financial systems, and consultancy.
- **Contact:** Interactive contact form with office locations and social media integration.
