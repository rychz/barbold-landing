# BarBold iOS App Landing Page

A modern, responsive landing page for an iOS app built with Next.js and Tailwind CSS, optimized for GitHub Pages deployment.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with gradient backgrounds and smooth animations
- **iOS App Store Integration**: Ready-to-use App Store download buttons
- **Performance Optimized**: Built with Next.js for optimal performance
- **GitHub Pages Ready**: Pre-configured for seamless GitHub Pages deployment

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety and better developer experience
- **GitHub Actions** - Automated deployment to GitHub Pages

## 🚦 Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/your-username/barbold-landing.git
cd barbold-landing
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

### Building for Production

```bash
npm run build
```

This will create an optimized static export in the `out` directory.

## 🌐 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Navigate to "Pages" section
4. Under "Source", select "GitHub Actions"
5. The deployment will trigger automatically on pushes to the main branch

Your site will be available at: `https://barbold.app`

### Manual Deployment:

If you prefer manual deployment:

```bash
npm run build
# The static files will be in the 'out' directory
# Upload the contents of 'out' to your hosting service
```

## 📱 Customization

### App Information
Edit `src/app/page.tsx` to customize:
- App name and branding
- Feature descriptions
- App Store links
- Contact information

### Styling
- Tailwind CSS classes are used throughout
- Custom colors and gradients can be modified in the component files
- The design is fully responsive with mobile-first approach

### Images
Add your app screenshots, icons, or other images to the `public` directory and reference them in your components.

## 🔧 Configuration

### Next.js Configuration
The `next.config.ts` file is configured for static export:
- `output: 'export'` - Enables static site generation
- `trailingSlash: true` - Adds trailing slashes to URLs
- `images: { unoptimized: true }` - Disables image optimization for static export

### GitHub Actions
The `.github/workflows/deploy.yml` file handles automatic deployment to GitHub Pages.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/barbold-landing/issues).

## 📞 Support

If you have any questions or need help with deployment, please [open an issue](https://github.com/your-username/barbold-landing/issues) on GitHub.
