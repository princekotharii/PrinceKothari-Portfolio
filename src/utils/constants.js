/**
 * Application Constants
 * 
 * 👉 CONFIGURE YOUR APP SETTINGS HERE
 */

// Ocean Breeze Color Palette
export const COLORS = {
  primary: '#0EA5E9',
  primaryDark: '#0284C7',
  secondary: '#06B6D4',
  accent: '#8B5CF6',
  success: '#10B981',
  warning: '#F59E0B',
  info: '#06B6D4',
  danger: '#EF4444',
  dark: '#0F172A',
  card: '#1E293B',
  border: '#334155',
  text: '#F1F5F9',
  textMuted: '#94A3B8',
}

// Breakpoints (for responsive design)
export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  wide: '1536px',
}

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: '#home', chapter: 'Prologue' },
  { name: 'About', path: '#about', chapter: 'Chapter I' },
  { name: 'Journey', path: '#timeline', chapter: 'Chapter II' },
  { name: 'Skills', path: '#skills', chapter: 'Chapter III' },
  { name: 'Projects', path: '#projects', chapter: 'Chapter IV' },
  { name: 'Contact', path: '#contact', chapter: 'Epilogue' },
]

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/princekotharii',
  linkedin: 'https://linkedin.com/in/princekotharii',
  twitter: 'https://www.linkedin.com/in/princekothari/',
  instagram: 'https://instagram.com/princekotharii',
  email: 'prince.kothari@example.com',
}

// EmailJS Configuration
// 👉 Sign up at https://www.emailjs.com/ and get your credentials
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVIVE_ID,      // Replace with your EmailJS service ID
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,    // Replace with your EmailJS template ID
  userId: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,            // Replace with your EmailJS user ID
}

// API Endpoints (if you have backend)
export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
}

// SEO Meta Tags
export const SEO = {
  title: 'Prince Kothari | Full Stack Developer',
  description: 'Full Stack Developer crafting exceptional digital experiences with modern technologies. Explore my portfolio, projects, and skills.',
  keywords: 'Prince Kothari, Full Stack Developer, React Developer, Node.js Developer, Web Developer, Portfolio',
  author: 'Prince Kothari',
  siteUrl: 'https://princekotharii.com',
  image: '/og-image.jpg',
}

// Animation Durations
export const ANIMATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
}

// Project Categories
export const PROJECT_CATEGORIES = [
  'All',
  'Full Stack',
  'Frontend',
  'Backend',
  'Mobile',
  'Design',
]

// Skill Levels
export const SKILL_LEVELS = {
  beginner: { min: 0, max: 40, label: 'Beginner' },
  intermediate: { min: 41, max: 70, label: 'Intermediate' },
  advanced: { min: 71, max: 90, label: 'Advanced' },
  expert: { min: 91, max: 100, label: 'Expert' },
}

// Contact Form Settings
export const CONTACT_FORM = {
  maxMessageLength: 1000,
  minMessageLength: 10,
  successMessage: 'Thank you for your message! I will get back to you soon.',
  errorMessage: 'Oops! Something went wrong. Please try again.',
}