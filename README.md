# Sahil's Portfolio

A modern, responsive, and beautifully designed personal portfolio website built with React, Vite, and Framer Motion.

## 🎨 Features

- **Modern UI Design** - Clean and attractive interface with gradient backgrounds
- **Smooth Animations** - Framer Motion animations for smooth transitions and interactions
- **Fully Responsive** - Mobile-friendly design that works on all devices
- **Fast Performance** - Built with Vite for fast development and production builds
- **Multiple Sections**:
  - Hero Section with CTA buttons
  - About Me with personal introduction
  - Education details (School & College)
  - Skills showcase with icons
  - Projects portfolio with tags
  - Contact information with social links
- **Navigation** - Fixed sticky navigation bar with smooth scrolling
- **Dark Blue Theme** - Professional color scheme with gradient accents

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **CSS3** - Modern styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🚀 Installation

1. **Clone or Extract the project**
   ```bash
   cd sahil-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 📦 Project Structure

```
sahil-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with mobile menu
│   │   ├── Hero.jsx            # Hero section with intro
│   │   ├── About.jsx           # About section with education
│   │   ├── Skills.jsx          # Skills showcase
│   │   ├── Projects.jsx        # Projects portfolio
│   │   └── Contact.jsx         # Contact information
│   ├── assets/
│   │   ├── profile.jpg         # Profile picture
│   │   ├── Sahil_Resume.pdf    # Resume file
│   │   └── ...
│   ├── App.jsx                 # Main App component
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── public/                      # Static files
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
└── README.md                    # This file
```

## 🎯 Components Overview

### Navbar
- Fixed sticky navigation
- Smooth scroll to sections
- Mobile-friendly hamburger menu
- Gradient brand name

### Hero
- Welcome badge animation
- Large heading with gradient text
- Call-to-action buttons
- Profile image with glow effect
- Social media links

### About
- Personal introduction
- Career goals and interests
- Education section with:
  - School: Jaihind Polytechnic Kuran (Diploma, 2019-2022)
  - College: PES Modern College of Engineering Pune (B.E in AIML, 2022-Present)
- Card-based layout with hover effects

### Skills
- 12+ technical skills displayed as cards
- Skills include:
  - Frontend: HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap
  - Backend: Node.js, Express, MongoDB
  - Tools: GitHub, Git
  - Security: Auth API, SQL
- Hover animations and scaling effects
- Icon emojis for visual appeal

### Projects
- Project portfolio with cards
- Features project tags
- Links to project repositories
- Hover effects with shadow enhancement
- Current projects:
  - Blood Connect - MERN stack blood donation platform
  - Driver Drowsiness Detection - ML-based fatigue detection system

### Contact
- Contact information cards with icons
- Email, GitHub, and LinkedIn links
- External links in new tabs
- Styled cards with hover effects

## 🎨 Customization

### Update Personal Information

**Hero Section** (`src/components/Hero.jsx`):
```javascript
<h1>Hi, I'm [Your Name]</h1>
<p className="hero-subtitle">Your Title | Your Specialty | Your Focus</p>
```

**About Section** (`src/components/About.jsx`):
- Update introduction text
- Modify education details (college names, years)

**Skills** (`src/components/Skills.jsx`):
```javascript
const skills = [
  { name: "Your Skill", icon: "emoji" },
  // Add more skills...
];
```

**Projects** (`src/components/Projects.jsx`):
```javascript
<Project
  title="Project Name"
  desc="Project description"
  tags={["tech1", "tech2"]}
/>
```

**Contact** (`src/components/Contact.jsx`):
- Update email address
- Update GitHub profile link
- Update LinkedIn profile link

### Customize Colors

Edit the primary color in `src/index.css`:
```css
:root {
  /* Change from #2563eb to your preferred color */
  --primary-color: #2563eb;
}
```

Replace all `#2563eb` occurrences with your desired color.

### Update Resume

Replace the file at `src/assets/Sahil_Resume.pdf` with your resume.

### Update Profile Image

Replace `src/assets/profile.jpg` with your profile picture.

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: Full layout with 2-column grids
- **Tablet (768px and below)**: Single column layouts, adjusted spacing
- **Mobile (480px and below)**: Optimized for small screens, larger touch targets

## ✨ Animation Features

- **Page Load Animations** - Smooth fade-in effects on scroll
- **Hover Effects** - Cards lift up and change shadows on hover
- **Navigation Animations** - Smooth link underline animations
- **Image Glow** - Continuous glow animation on profile image
- **Staggered Animations** - Elements animate in sequence

## 🔗 Navigation Links

The portfolio uses smooth scrolling for internal navigation:
- Home (Top)
- About
- Skills
- Projects
- Contact

## 📲 Social Links

Quick access to:
- GitHub Profile
- LinkedIn Profile
- Email Contact

All links open in new tabs except email which opens the default email client.

## 🎯 Performance Tips

- Images are optimized and use modern formats
- CSS is minified in production
- JavaScript is bundled and minified
- Vite provides fast HMR (Hot Module Replacement)

## 🐛 Troubleshooting

**Port already in use:**
```bash
npm run dev -- --port 3000
```

**Dependencies issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
- Clear `.next` or `dist` folder
- Reinstall dependencies
- Check Node.js version (v14+)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Sahil Shinde**
- Email: sahilshinde2402@email.com
- GitHub: [@Sahil3299](https://github.com/Sahil3299)
- LinkedIn: [Sahil Shinde](https://www.linkedin.com/in/sahil-shinde-a30948329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [Vite](https://vitejs.dev/) - For fast build tooling
- [React](https://react.dev/) - For UI library

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the code comments
3. Open an issue on GitHub
4. Contact via email

---

**Happy coding! 🚀**

Last updated: January 2026
