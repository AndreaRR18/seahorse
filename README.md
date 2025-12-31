# Cavalluccio Marino - Asilo Nido Famiglia Website

![Cavalluccio Marino](https://www.nido-cavallucciomarino.it/assets/logo-placeholder.svg)

**Family Daycare Website** for Cavalluccio Marino di Serena in Lodi, Italy

## 🌐 Live Website

👉 [https://www.nido-cavallucciomarino.it](https://www.nido-cavallucciomarino.it)

**GitHub Pages URL (redirects to custom domain):**
👉 [https://andreaperinu.github.io/seahorse/](https://andreaperinu.github.io/seahorse/)

## 📋 About

Cavalluccio Marino is a family daycare (asilo nido famiglia) located in San Bernardo, Lodi, Italy. We provide personalized care for children aged 0-3 years with a maximum of 5 children at a time to ensure individual attention and a family-like environment.

## 🚀 Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/andreaperinu/seahorse.git
   cd seahorse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   The app will be available at `http://localhost:5173/seahorse/`

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (TypeScript + Vite) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run lint:fix` | Run ESLint and automatically fix issues |
| `npm run type-check` | Run TypeScript type checker |
| `npm run deploy` | Build and deploy to GitHub Pages |

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/       # Layout components (Header, Footer, Navigation)
│   ├── sections/     # Page sections (Hero, About, Services, Schedule, Gallery, etc.)
│   │   ├── About.tsx          # About the daycare section
│   │   ├── Contact.tsx        # Contact form and information
│   │   ├── Gallery.tsx        # Auto-scrolling image gallery
│   │   ├── Hero.tsx           # Hero section with main heading
│   │   ├── Location.tsx       # Location and map information
│   │   ├── Schedule.tsx       # Schedule and pricing information
│   │   ├── Services.tsx       # Services offered
│   │   ├── Testimonials.tsx   # Customer testimonials
│   │   └── Training.tsx       # Staff training information
│   ├── ui/           # Reusable UI components (Button, Card, Form)
│   └── seo/          # SEO components (StructuredData)
├── styles/
│   ├── components/   # CSS modules for each component
│   ├── global.css    # Global styles
│   ├── typography.css # Typography styles
│   └── variables.css # CSS variables
├── utils/
│   └── constants.ts # Application constants and data
├── types/
│   └── index.ts     # TypeScript type definitions
├── App.tsx          # Main application component
└── main.tsx         # React entry point

public/
├── assets/          # Static assets (images, favicon)
├── robots.txt       # Search engine crawling rules
├── sitemap.xml      # XML sitemap for search engines
└── manifest.json    # PWA manifest

CNAME                # Custom domain configuration (www.nido-cavallucciomarino.it)
```

## 🎨 Features

### SEO Optimization
- ✅ Comprehensive meta tags (20+ tags)
- ✅ Schema markup (Organization, LocalBusiness, Service, WebPage, Breadcrumb)
- ✅ XML sitemap and robots.txt
- ✅ Local SEO (NAP, geo coordinates, local keywords)
- ✅ PWA manifest for mobile experience

### Code Quality
- ✅ Strict TypeScript (100% type coverage)
- ✅ ESLint configuration with React and TypeScript rules
- ✅ CSS Modules for scoped styling
- ✅ Comprehensive type definitions

### Accessibility
- ✅ Semantic HTML
- ✅ ARIA attributes (aria-required, aria-invalid, etc.)
- ✅ Keyboard navigable forms
- ✅ Descriptive alt text on all images
- ✅ Proper focus management

### Performance
- ✅ Lazy loading on all images
- ✅ Preconnect to external domains
- ✅ Preload for critical resources
- ✅ Gzip compression
- ✅ Optimized build size (204KB JS, 27KB CSS)

### Security
- ✅ Input validation on all form fields
- ✅ Secure external links (rel="noopener noreferrer")
- ✅ No XSS vulnerabilities
- ✅ Safe regex patterns

## 📝 SEO Information

### Keywords Targeted

**Primary:**
- asilo nido Lodi
- asilo nido famiglia Lodi
- asilo nido San Bernardo
- nido famiglia Lodi

**Secondary:**
- asilo nido privato Lodi
- educatrice infanzia Lodi
- asilo piccolo gruppo Lodi
- nido bambini Lodi

**Long-tail:**
- asilo nido 5 bambini Lodi
- asilo nido accogliente San Bernardo
- tata professionale Lodi
- nido famiglia prezzi Lodi

## 📞 Contact Information

- **Business Owner**: Serena Massarani
- **Email**: [sere.massarani@gmail.com](mailto:sere.massarani@gmail.com)
- **Phone**: +39 345 4131977
- **WhatsApp**: [https://wa.me/393454131977](https://wa.me/393454131977)
- **Facebook**: [https://www.facebook.com/nidocavallucciomarino/](https://www.facebook.com/nidocavallucciomarino/)

## 📊 SEO Metrics

- **Technical SEO**: 24/25
- **Content SEO**: 23/25
- **Local SEO**: 23/25
- **Performance**: 22/25
- **Overall**: 92/100

## 🌍 Custom Domain Setup

The website is configured to use a custom domain: **www.nido-cavallucciomarino.it**

### Domain Configuration

1. **CNAME File**: Contains `www.nido-cavallucciomarino.it` for GitHub Pages
2. **DNS Settings**: Configured to point to GitHub Pages servers
3. **HTTPS**: Enabled with automatic SSL certificate from GitHub

### DNS Configuration Requirements

To set up the custom domain:

```bash
# CNAME Record (for www subdomain)
www.nido-cavallucciomarino.it CNAME andreaperinu.github.io

# OR A Records (for root domain)
nido-cavallucciomarino.it A 185.199.108.153
nido-cavallucciomarino.it A 185.199.109.153
nido-cavallucciomarino.it A 185.199.110.153
nido-cavallucciomarino.it A 185.199.111.153
```

### GitHub Pages Settings

- **Custom domain**: `www.nido-cavallucciomarino.it`
- **HTTPS**: Enabled (automatic certificate provisioning)
- **Source**: GitHub Actions or `gh-pages` branch
- **Build**: Vite + TypeScript production build

### Website Structure

The website features these main sections:

1. **Hero**: Main heading and call-to-action
2. **About**: Information about the daycare philosophy
3. **Services**: Detailed service offerings
4. **Schedule**: Daily schedule and pricing information
5. **Gallery**: Auto-scrolling image carousel
6. **Testimonials**: Customer reviews and feedback
7. **Training**: Staff qualifications and training
8. **Location**: Map and contact information
9. **Contact**: Contact form for inquiries

## 🔧 Technology Stack

- **Framework**: React 18
- **Language**: TypeScript (strict mode)
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Icons**: React Icons
- **Scroll**: react-scroll
- **Deployment**: GitHub Pages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎓 Learning Resources

### TypeScript Patterns Used

1. **Interface Segregation**: Small, focused interfaces for different domains
2. **Type Inference**: Leveraging TypeScript's type inference
3. **Readonly Arrays**: Using `readonly` for immutable data
4. **Union Types**: Proper use of union types for event handlers
5. **Type Guards**: Implicit type narrowing in validation

### React Patterns Used

1. **Function Components**: Modern React function components
2. **Hooks**: Proper use of `useState`, `useEffect`
3. **Controlled Components**: Form inputs with controlled state
4. **CSS Modules**: Scoped styling with CSS modules
5. **Accessibility**: Proper ARIA attributes and semantic HTML

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📜 Changelog

See [CHANGELOG.md](CHANGELOG.md) for the list of changes.

## 📚 Documentation

- [CODE_REVIEW_REPORT.md](CODE_REVIEW_REPORT.md) - Comprehensive code review
- [COMPREHENSIVE_REVIEW_SUMMARY.md](COMPREHENSIVE_REVIEW_SUMMARY.md) - SEO and code review summary
- [SEO_OPTIMIZATION.md](SEO_OPTIMIZATION.md) - Detailed SEO optimization report

---

**Last Updated**: December 2024
**Version**: 1.1.0
**SEO Health Score**: 92/100
**Code Quality Score**: 92/100
**Custom Domain**: www.nido-cavallucciomarino.it
**GitHub Pages URL**: https://andreaperinu.github.io/seahorse/
