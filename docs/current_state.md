# Current State of cj-web

## Overview
The current `cj-web` project is a static multi-page website for **Credit Jambo**, a financial service provider licensed by the National Bank of Rwanda. The website serves as a landing page to promote their micro-loan products, mobile app, and other financial services.

## Project Structure
The project consists of several HTML files and corresponding CSS files:
- `home.html` & `home.css`: The main landing page.
- `about.html` & `about.css`: Information about the company, mission, vision, and business offerings.
- `service.html` & `service.css`: Detailed description of services including micro-loans and software development.
- `contact.html` & `contact.css`: Contact information and a lead generation form.
- `landing-assets/`: A directory containing SVGs, PNGs, and other visual assets.
- `logo.png`: The company logo.

## Key Features
1. **Hero Section:** Clear value proposition ("Small Loans. Big Impact. Real Growth.") with a "Get started" CTA.
2. **Loan Process:** A 4-step guide to getting a loan.
3. **Repayment Plans:** Explanation of daily, weekly, and monthly payment options.
4. **Loan Comparison Table:** Detailed breakdown of different loan products (Jambo Cash, Igisubizo, Kura, etc.).
5. **Requirements:** Specific KYC requirements for individuals and businesses.
6. **Testimonials:** Community feedback and testimonials.
7. **Contact Form:** Functional-looking contact form with address and social media links.
8. **Responsive Design:** Basic meta tags for viewport and scaling are present.

## Technical Debt / Observations
- **Redundancy:** Each page has its own CSS file, leading to duplicated styles (e.g., header and footer).
- **Maintenance:** Being static HTML, updating common elements like the navigation or footer requires manual changes across all files.
- **Performance:** Assets are served directly; no optimization or bundling is in place.
- **SEO:** Basic description meta tags exist but could be significantly improved with structured data, better semantic HTML, and Next.js optimizations.
- **Interactivity:** Limited interactivity beyond basic HTML forms and links.
