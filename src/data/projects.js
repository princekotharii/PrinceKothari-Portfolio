/**
 * Portfolio Projects
 * 
 * 👉 ADD YOUR PROJECTS HERE
 * 
 * Each project should include:
 * - title, description, image
 * - tags, techStack
 * - links (github, live)
 * - features, challenges, learnings
 */

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDescription: "Full-featured online shopping platform with admin dashboard",
    longDescription: "A comprehensive e-commerce solution built with MERN stack, featuring user authentication, product management, cart functionality, payment integration, and admin dashboard for managing orders and inventory.",
    category: "Full Stack",
    status: "completed",
    featured: true,
    image: "/images/project1.jpg", // Add image to public/images/
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    techStack: {
      frontend: ["React", "Redux", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express", "MongoDB", "JWT"],
      other: ["Stripe API", "Cloudinary", "Nodemailer"]
    },
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and wishlist",
      "Payment integration with Stripe",
      "Order tracking and management",
      "Admin dashboard for inventory",
      "Responsive design for all devices",
      "Email notifications"
    ],
    stats: {
      users: "1000+",
      sales: "$50K+",
      rating: "4.8/5"
    },
    challenges: [
      {
        challenge: "Handling complex state management",
        solution: "Implemented Redux with Redux Toolkit for efficient state handling"
      },
      {
        challenge: "Optimizing image loading",
        solution: "Used Cloudinary for image optimization and lazy loading"
      }
    ],
    learnings: [
      "Advanced React patterns and hooks",
      "Payment gateway integration",
      "Database optimization techniques",
      "Security best practices"
    ],
    github: "https://github.com/princekotharii/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    date: "2024-10-15"
  },
  {
    id: 2,
    title: "Task Management App",
    shortDescription: "Collaborative project management tool with real-time updates",
    longDescription: "A powerful task management application that enables teams to collaborate effectively with features like real-time updates, task assignments, progress tracking, and team communication.",
    category: "Full Stack",
    status: "completed",
    featured: true,
    image: "/images/project2.jpg",
    tags: ["React", "Firebase", "Tailwind", "Real-time"],
    techStack: {
      frontend: ["React", "Context API", "Tailwind CSS", "React Query"],
      backend: ["Firebase", "Firestore", "Firebase Auth"],
      other: ["Socket.io", "PWA"]
    },
    features: [
      "Real-time task updates",
      "Team collaboration",
      "Task prioritization",
      "Progress tracking",
      "Notifications",
      "File attachments",
      "Activity timeline"
    ],
    stats: {
      teams: "500+",
      tasks: "10K+",
      uptime: "99.9%"
    },
    github: "https://github.com/princekotharii/task-manager",
    live: "https://taskmanager-demo.vercel.app",
    date: "2024-08-20"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    shortDescription: "Beautiful weather app with forecast and location search",
    longDescription: "An elegant weather dashboard that provides current weather conditions, hourly forecasts, and 7-day predictions with beautiful visualizations and intuitive user interface.",
    category: "Frontend",
    status: "completed",
    featured: false,
    image: "/images/project3.jpg",
    tags: ["React", "API", "Charts", "Responsive"],
    techStack: {
      frontend: ["React", "Chart.js", "CSS3", "Axios"],
      backend: ["OpenWeather API", "Geolocation API"],
      other: ["PWA", "Local Storage"]
    },
    features: [
      "Current weather conditions",
      "7-day forecast",
      "Hourly predictions",
      "Location search",
      "Favorite locations",
      "Weather charts",
      "Dark mode"
    ],
    stats: {
      users: "2000+",
      locations: "100K+",
      accuracy: "95%"
    },
    github: "https://github.com/princekotharii/weather-dashboard",
    live: "https://weather-demo.vercel.app",
    date: "2024-06-10"
  },
  {
    id: 4,
    title: "Blog Platform",
    shortDescription: "Modern blogging platform with markdown support",
    longDescription: "A feature-rich blogging platform that allows users to create, edit, and publish blog posts with markdown support, syntax highlighting, and SEO optimization.",
    category: "Full Stack",
    status: "in-progress",
    featured: false,
    image: "/images/project4.jpg",
    tags: ["Next.js", "MDX", "PostgreSQL", "SEO"],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API", "PostgreSQL", "Prisma"],
      other: ["MDX", "SEO", "Analytics"]
    },
    features: [
      "Markdown editor",
      "Syntax highlighting",
      "SEO optimization",
      "Draft system",
      "Categories and tags",
      "Comments system",
      "Reading time"
    ],
    github: "https://github.com/princekotharii/blog-platform",
    live: null,
    date: "2024-11-01"
  },
  {
    id: 5,
    title: "Portfolio Website",
    shortDescription: "Modern portfolio with animations and dark mode",
    longDescription: "A sleek and modern portfolio website showcasing projects, skills, and experience with smooth animations, dark mode support, and responsive design.",
    category: "Frontend",
    status: "completed",
    featured: true,
    image: "/images/project5.jpg",
    tags: ["React", "Framer Motion", "Tailwind", "Responsive"],
    techStack: {
      frontend: ["React", "Framer Motion", "Tailwind CSS"],
      backend: ["EmailJS"],
      other: ["Vite", "React Router"]
    },
    features: [
      "Smooth animations",
      "Dark mode",
      "Project showcase",
      "Skills section",
      "Contact form",
      "Responsive design"
    ],
    github: "https://github.com/princekotharii/portfolio",
    live: "https://princekotharii.vercel.app",
    date: "2024-11-05"
  },
  {
    id: 6,
    title: "Chat Application",
    shortDescription: "Real-time messaging app with group chats",
    longDescription: "A real-time chat application with features like private messaging, group chats, file sharing, and online status indicators.",
    category: "Full Stack",
    status: "completed",
    featured: false,
    image: "/images/project6.jpg",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    techStack: {
      frontend: ["React", "Socket.io Client", "Tailwind CSS"],
      backend: ["Node.js", "Socket.io", "MongoDB", "Express"],
      other: ["JWT", "Multer", "Cloudinary"]
    },
    features: [
      "Real-time messaging",
      "Group chats",
      "File sharing",
      "Online status",
      "Message history",
      "Typing indicators"
    ],
    github: "https://github.com/princekotharii/chat-app",
    live: "https://chat-demo.vercel.app",
    date: "2024-05-15"
  }
]

// Filter functions
export const getFeaturedProjects = () => projects.filter(p => p.featured)
export const getProjectsByCategory = (category) => projects.filter(p => p.category === category)
export const getProjectById = (id) => projects.find(p => p.id === id)