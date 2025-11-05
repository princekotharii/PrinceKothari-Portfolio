# Prince Kothari - Portfolio Website

A modern, story-telling style portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with neon color scheme
- **Story-Telling Flow**: Your journey presented as an engaging narrative
- **Smooth Animations**: Framer Motion animations throughout
- **Fully Responsive**: Works seamlessly on all devices
- **Fast Performance**: Built with Vite for lightning-fast load times
- **Contact Form**: Integrated with EmailJS for easy communication
- **SEO Friendly**: Optimized for search engines

## 🎨 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Email**: EmailJS

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/princekotharii/my-portfolio.git
cd my-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up EmailJS** (Optional, for contact form)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Update `src/utils/constants.js` with your credentials:
   ```javascript
   export const EMAILJS_CONFIG = {
     serviceId: 'YOUR_SERVICE_ID',
     templateId: 'YOUR_TEMPLATE_ID',
     userId: 'YOUR_USER_ID',
   }
   ```

4. **Run development server**
```bash
npm run dev
```

5. **Open your browser**
   - Navigate to `http://localhost:3000`

## 🛠️ Customization

### Personal Information
Update your details in `src/data/personalInfo.js`:
- Name, tagline, bio
- Contact information
- Social media links
- Profile image
- Resume link

### Timeline/Journey
Edit your developer journey in `src/data/timeline.js`:
- Add your milestones
- Update technologies learned
- Customize icons and colors

### Skills
Modify your skills in `src/data/skills.js`:
- Add/remove skill categories
- Update proficiency levels
- Change icons and colors

### Projects
Showcase your work in `src/data/projects.js`:
- Add project details
- Include screenshots
- Link to GitHub repos and live demos
- Describe tech stack and challenges

### Images
Add your images to `src/assets/images/`:
- `profile.jpg` - Your photo
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots
- `hero-bg.jpg` - Hero background (optional)

### Colors
Customize the neon color scheme in `src/utils/constants.js`:
```javascript
export const COLORS = {
  neonBlue: '#00f0ff',
  neonPurple: '#b000ff',
  neonPink: '#ff006e',
  neonGreen: '#39ff14',
  // Add more colors...
}
```

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/       # React components
│   │   ├── layout/      # Navbar, Footer, PageTransition
│   │   ├── home/        # Hero, ScrollIndicator, ParticleBackground
│   │   ├── about/       # AboutStory, Timeline, StatsCard
│   │   ├── skills/      # SkillsGrid, SkillCard, SkillCategory
│   │   ├── projects/    # ProjectsGrid, ProjectCard, ProjectModal
│   │   ├── contact/     # ContactForm, SocialLinks, ContactInfo
│   │   └── common/      # Button, SectionTitle, LoadingSpinner, NeonCard
│   ├── pages/           # Page components
│   ├── routes/          # Routing configuration
│   ├── data/            # Content data files
│   ├── utils/           # Utility functions and constants
│   ├── styles/          # Custom CSS
│   ├── assets/          # Images and static files
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Public assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
└── README.md           # This file
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repo for automatic deployments

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Prince Kothari**
- GitHub: [@princekotharii](https://github.com/princekotharii)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ and React