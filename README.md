# 💓 Heartbeam Showcase

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

**A Modern Web Showcase Platform Built with Next.js & TypeScript**

[Live Demo](https://heartbeam-showcase.vercel.app) • [Features](#-features) • [Installation](#-installation) • [Tech Stack](#-tech-stack)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Live Demo](#-live-demo)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

**Heartbeam Showcase** is a modern, responsive web application built with cutting-edge technologies. It serves as a showcase platform demonstrating best practices in:

- ✨ Modern web design and UX
- 🎨 Beautiful UI components
- ⚡ High performance optimization
- 📱 Responsive mobile-first design
- 🔒 Security best practices
- 🚀 Production-ready code

Perfect for portfolios, product showcases, or service presentations!

---

## ✨ Features

### 🎨 Design & UI
- **Modern Interface** - Clean, intuitive design
- **Responsive Layout** - Works perfectly on all devices
- **Smooth Animations** - Engaging visual transitions
- **Dark/Light Mode** - User preference support
- **Accessible Components** - WCAG compliance

### 🚀 Performance
- **Fast Loading** - Optimized asset delivery
- **Code Splitting** - Efficient bundle management
- **Image Optimization** - Automatic compression
- **SEO Friendly** - Meta tags and structured data
- **Lighthouse Ready** - High performance scores

### 💻 Developer Experience
- **TypeScript** - Full type safety
- **Modern Stack** - Latest tech standards
- **Clean Code** - Well-organized structure
- **Hot Reload** - Fast development feedback
- **ESLint & Prettier** - Code quality tools

### 🔧 Functionality
- ⚙️ Configurable sections
- 🎯 Call-to-action buttons
- 📊 Analytics integration ready
- 🔗 Social media links
- 📧 Contact forms

---

## 🌐 Live Demo

**Explore the live application:**

🔗 **[https://heartbeam-showcase.vercel.app](https://heartbeam-showcase.vercel.app)**

---

## 📦 Installation

### Prerequisites
```
Node.js >= 16.x
npm or yarn
Git
```

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/SubhamKhandual007/heartbeam-showcase.git
cd heartbeam-showcase
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Create environment file** (if needed)
```bash
cp .env.example .env.local
```

4. **Run development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open in browser**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
heartbeam-showcase/
│
├── public/                    # Static assets
│   ├── images/               # Image files
│   ├── icons/                # Icon files
│   └── favicon.ico           # Favicon
│
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   │
│   ├── components/           # Reusable components
│   │   ├── Header.tsx        # Header component
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Features.tsx      # Features section
│   │   ├── CTA.tsx           # Call-to-action
│   │   └── Footer.tsx        # Footer component
│   │
│   ├── styles/               # CSS modules
│   │   ├── components.module.css
│   │   └── animations.css
│   │
│   └── types/                # TypeScript types
│       └── index.ts          # Type definitions
│
├── .env.example              # Environment variables template
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── next.config.js           # Next.js configuration
├── tailwind.config.js        # Tailwind CSS config
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project metadata
└── README.md                # This file
```

---

## 🧠 Technologies Used

### Frontend Framework
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) - React framework for production

### Language & Types
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) - Type-safe JavaScript

### Styling
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) - Utility-first CSS framework
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) - Custom styling

### UI Components
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) - Component library

### Development Tools
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) - Hosting & deployment

---

## 🚀 Development

### Available Scripts

**Development server**
```bash
npm run dev
```

**Production build**
```bash
npm run build
npm run start
```

**Linting & formatting**
```bash
npm run lint
npm run format
```

**Type checking**
```bash
npm run type-check
```

---

## 📊 Component Overview

### Header Component
- Navigation menu
- Logo/branding
- Responsive hamburger menu (mobile)
- Theme toggle

### Hero Section
- Eye-catching headline
- Subheadline with value proposition
- Call-to-action button
- Hero image/video

### Features Section
- Feature cards with icons
- Description text
- Visual elements
- Grid layout (responsive)

### CTA Section
- Promotional message
- Primary action button
- Secondary links

### Footer Component
- Company information
- Quick links
- Social media links
- Copyright notice

---

## 🎨 Customization

### Colors & Branding
Edit `tailwind.config.js` to customize:
```javascript
theme: {
  colors: {
    primary: '#your-color',
    secondary: '#your-color',
  }
}
```

### Content
Update content in component files:
```typescript
// src/components/Hero.tsx
const heroContent = {
  title: "Your title here",
  subtitle: "Your subtitle here"
}
```

### Images
Replace images in `public/images/` directory

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Configure environment variables
- Deploy!

3. **Custom Domain**
- Add domain in Vercel dashboard
- Update DNS records
- Enable HTTPS

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
netlify deploy --prod --dir=.next
```

**Docker:**
```bash
docker build -t heartbeam-showcase .
docker run -p 3000:3000 heartbeam-showcase
```

---

## 🔍 Performance Optimization

### Image Optimization
- Using Next.js `<Image>` component
- Automatic WebP conversion
- Lazy loading enabled

### Code Splitting
- Dynamic imports for components
- Route-based code splitting
- Optimized bundle size

### SEO
- Meta tags in layout
- Open Graph support
- Sitemap generation
- Robots.txt configuration

---

## 🔐 Security Best Practices

- ✅ Content Security Policy headers
- ✅ CORS properly configured
- ✅ Input sanitization
- ✅ Environment variables protected
- ✅ Regular dependency updates

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork the repository**
```bash
git clone https://github.com/yourusername/heartbeam-showcase.git
```

2. **Create feature branch**
```bash
git checkout -b feature/your-feature-name
```

3. **Make changes**
- Follow existing code style
- Write meaningful commit messages
- Keep changes focused

4. **Commit & Push**
```bash
git commit -m "Add: your feature description"
git push origin feature/your-feature-name
```

5. **Open Pull Request**
- Describe your changes
- Link related issues
- Request review

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# On macOS/Linux
lsof -i :3000
kill -9 <PID>

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Environment Variables
- Ensure `.env.local` file exists
- Restart dev server after changes
- Check Vercel dashboard for production env vars

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## 🎓 Author

**Subham Khandual**

B.Tech Computer Science Student | Full Stack Developer | AI/ML Enthusiast

- 🔗 [GitHub](https://github.com/SubhamKhandual007)
- 💼 [LinkedIn](https://www.linkedin.com/in/subham-khandual)
- 📧 [Email](mailto:subhamkhandual215@gmail.com)
- 🌐 [Portfolio](https://portfolio-nine-alpha-8nkzp7nnk6.vercel.app)

---

## 📄 License

This project is open source and available under the MIT License.

---

## ⭐ Show Your Support

If you find this project helpful:

- ⭐ **Star this repository**
- 🔗 **Share with others**
- 💬 **Provide feedback**
- 🤝 **Contribute improvements**

---

## 🙏 Acknowledgments

- Built with ❤️ using Next.js
- Inspired by modern web design trends
- Thanks to the open-source community

---

<div align="center">

### 🚀 Ready to showcase your ideas?

[View Live Demo](https://heartbeam-showcase.vercel.app) • [Report Bug](https://github.com/SubhamKhandual007/heartbeam-showcase/issues) • [Request Feature](https://github.com/SubhamKhandual007/heartbeam-showcase/issues)

**Made with ❤️ by Subham Khandual**

[⬆ Back to Top](#-heartbeam-showcase)

</div>
