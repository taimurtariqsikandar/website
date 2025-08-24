# Software House Website

A modern, responsive website for a software house built with Next.js 14 (App Router), TailwindCSS, shadcn/ui, and Framer Motion.

## 🎨 Features

- **Modern Design**: Clean, professional design with Indigo, Emerald, and Amber branding
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Beautiful Framer Motion animations throughout
- **Dark Mode Support**: Built-in dark mode with CSS variables
- **SEO Optimized**: Comprehensive metadata, Open Graph, and Twitter cards
- **Accessible**: Semantic HTML and proper ARIA labels
- **Performance**: Optimized for speed and Core Web Vitals

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd software-house-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.jsx           # Root layout with SEO metadata
│   └── page.jsx             # Main page component
├── components/
│   └── ui/                  # shadcn/ui components
│       ├── button.jsx
│       ├── card.jsx
│       ├── input.jsx
│       └── textarea.jsx
├── lib/
│   └── utils.js             # Utility functions
├── package.json
├── tailwind.config.js       # TailwindCSS configuration
├── postcss.config.js        # PostCSS configuration
└── next.config.js           # Next.js configuration
```

## 🎯 Sections

1. **Hero Section**: Gradient Indigo background with bold headline and CTA
2. **About Us**: Mission and vision description
3. **Services**: Grid of service cards (Web Development, Mobile Apps, AI Solutions)
4. **Portfolio**: Project showcase with Amber accents
5. **Contact Form**: Accessible contact form with proper labels
6. **Footer**: Company information and social links

## 🎨 Brand Colors

- **Primary**: Indigo (#6366f1) - Trust, Innovation
- **Secondary**: Emerald (#10b981) - Growth, Success  
- **Accent**: Amber (#f59e0b) - Energy, Creativity

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js` and `app/globals.css`.

### Content
Modify the content in `app/page.jsx` to match your business needs.

### SEO
Update metadata in `app/layout.jsx` with your company information.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email hello@softwarehouse.com or create an issue in this repository.
