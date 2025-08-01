# Muhammad Hasnain - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode
- **Responsive**: Fully responsive across all devices
- **Animations**: Smooth animations and 3D effects
- **Interactive**: Dynamic sections with smooth scrolling
- **Resume Download**: Direct PDF download functionality
- **Contact Form**: Working contact form with Formspree integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Shadcn/ui
- **Icons**: Lucide React
- **Animations**: Custom CSS animations
- **Form Handling**: Formspree
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── resume/
│       └── page.tsx         # Resume viewer page
├── components/
│   ├── ui/                  # Shadcn/ui components
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact section
│   ├── Footer.tsx           # Footer component
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   └── Projects.tsx         # Projects section
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/
│   └── hasnain_resume.pdf   # Resume PDF file
└── styles/                  # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muhammadhasnain100/myportfolio.git
   cd muhammad-hasnain-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment on Vercel

### Automatic Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site automatically

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Confirm deployment settings
   - Wait for build and deployment

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Formspree (if using contact form)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint
```

### Build Settings

The project is configured for optimal Vercel deployment:

- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 📝 Customization

### Personal Information

Update the following files with your information:

- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section and experience
- `components/Projects.tsx` - Project details
- `components/Contact.tsx` - Contact information
- `public/hasnain_resume.pdf` - Your resume PDF

### Styling

- **Colors**: Update Tailwind config in `tailwind.config.ts`
- **Animations**: Modify CSS animations in `app/globals.css`
- **Components**: Customize UI components in `components/ui/`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Features

### Dark/Light Mode
- Toggle between dark and light themes
- Persistent theme preference
- Smooth transitions

### Smooth Scrolling
- Navigation between sections
- Active section highlighting
- Smooth scroll behavior

### Animations
- Fade-in animations
- 3D hover effects
- Floating elements
- Staggered animations

### Interactive Elements
- Hover effects on cards
- Animated buttons
- Responsive navigation
- Dynamic content loading

## 🚀 Performance

- **Optimized Images**: Next.js Image optimization
- **Code Splitting**: Automatic code splitting
- **Lazy Loading**: Components load on demand
- **Minified CSS**: Production-ready styles

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: hasnainnaseer987@gmail.com


---

Built with ❤️ using Next.js and Tailwind CSS 
