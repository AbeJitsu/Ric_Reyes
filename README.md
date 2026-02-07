# ITSX Website Redesign

Modern, responsive website for ITSX global logistics company built with Next.js 15, TypeScript, and Tailwind CSS.

## Company Info

**ITSX**
- **Phone:** 877-894-3700 (Toll Free) | 718-752-0757 (Local)
- **Address:** 43-49 10th St., Suite 502, Long Island City, NY 11101
- **Email:** info@its-xpress.com

## Project Overview

Transforming the outdated 2005-era website into a modern, competitive platform with:
- **Real-time tracking** (no login required)
- **Instant quote calculator**
- **Mobile-responsive design**
- **Modern UI** with vibrant blue gradients and clean design
- **Fast performance** (target: <2s load time)
- **Accessibility** (WCAG 2.1 AA)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Inter + Poppins
- **Deployment:** Vercel

## Project Structure

```
its-xpress/
├── app/
│   ├── page.tsx              # Homepage
│   ├── roadmap/page.tsx      # Roadmap page
│   ├── tracking/page.tsx     # Tracking portal
│   ├── quote/page.tsx        # Quote calculator
│   ├── about/page.tsx        # About us
│   ├── contact/page.tsx      # Contact page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   ├── layout/
│   │   ├── Header.tsx        # Navigation header
│   │   └── Footer.tsx        # Footer
│   ├── home/                 # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── TrustIndicators.tsx
│   │   ├── Testimonials.tsx
│   │   └── ContactCTA.tsx
│   └── roadmap/
│       └── RoadmapTimeline.tsx
├── lib/
│   ├── constants.ts          # Site data and configuration
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Color Scheme & Design

**Modern Blue Gradient Palette:**
- **Sky Blue:** `#0ea5e9` - primary action elements
- **Blue:** `#3b82f6` - interactive elements, CTAs
- **Royal Blue:** `#2563eb` - hover states, emphasis
- **Navy:** `#1e3a8a` - headers, dark text
- **Dark Navy:** `#0f172a` - deepest backgrounds

**Gradient Effects:**
- Hero gradient: `135deg, #0ea5e9 0%, #0284c7 50%, #1e40af 100%`
- Primary gradient: `135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%`
- Soft gradient backgrounds on sections for depth and visual interest
- Hover effects with subtle scale and shadow transitions

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Pages

- **Home** (`/`) - Landing page with hero, services, testimonials, trust indicators
- **Roadmap** (`/roadmap`) - Product development phases
- **Tracking** (`/tracking`) - Track packages (placeholder)
- **Quote** (`/quote`) - Get instant quotes (placeholder)
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form and info

## Implementation Phases

### Phase 1: Frontend (Weeks 1-2) ✅
- [x] Next.js project setup
- [x] Design system implementation
- [x] Homepage with all sections
- [x] Navigation and footer
- [x] Placeholder pages
- [x] Responsive design

### Phase 2: Backend (Weeks 3-4)
- [ ] API routes setup
- [ ] Database integration (PostgreSQL + Prisma)
- [ ] Authentication (NextAuth.js)
- [ ] Tracking functionality
- [ ] Quote calculator

### Phase 3: Advanced Features (Weeks 5-8)
- [ ] Live chat integration
- [ ] Email notifications
- [ ] Payment processing (Stripe)
- [ ] Customer dashboard
- [ ] Blog/CMS

## Performance Targets

- [ ] Lighthouse Score: 90+
- [ ] Core Web Vitals: Green
- [ ] First Contentful Paint: <1.5s
- [ ] Largest Contentful Paint: <2.5s
- [ ] Cumulative Layout Shift: <0.1

## Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatible
- 4.5:1 color contrast ratio

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy with automatic preview deployments

## Future Enhancements

- [ ] API integrations
- [ ] White-label tracking pages
- [ ] Multi-language support
- [ ] Bulk shipping tools
- [ ] Analytics dashboard
- [ ] Advanced tracking with photo/signature proof

## Support

For questions or issues, contact info@its-xpress.com or call +1 (800) XPRESS-1

## License

© 2024 ITS-Xpress. All rights reserved.
