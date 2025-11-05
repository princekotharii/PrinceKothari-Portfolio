/**
 * Skills & Technologies
 * 
 * 👉 ADD YOUR SKILLS HERE
 * 
 * Organize your skills by categories
 */

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiNextdotjs,
  SiVite,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiAmazon,
} from 'react-icons/si'

export const skillCategories = [
  {
    id: 1,
    name: "Frontend Development",
    description: "Building beautiful and responsive user interfaces",
    icon: "🎨",
    color: "#6366F1",
    skills: [
      { name: "React", level: 95, icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", level: 90, icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", level: 88, icon: SiNextdotjs, color: "#000000" },
      { name: "HTML5", level: 95, icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", level: 90, icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", level: 92, icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", level: 85, icon: SiVite, color: "#646CFF" },
    ]
  },
  {
    id: 2,
    name: "Backend Development",
    description: "Creating robust and scalable server-side applications",
    icon: "⚙️",
    color: "#8B5CF6",
    skills: [
      { name: "Node.js", level: 88, icon: FaNodeJs, color: "#339933" },
      { name: "Express", level: 90, icon: SiExpress, color: "#000000" },
      { name: "MongoDB", level: 85, icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", level: 82, icon: SiPostgresql, color: "#4169E1" },
      { name: "GraphQL", level: 78, icon: SiGraphql, color: "#E10098" },
      { name: "Redis", level: 75, icon: SiRedis, color: "#DC382D" },
      { name: "Python", level: 70, icon: FaPython, color: "#3776AB" },
    ]
  },
  {
    id: 3,
    name: "Tools & Technologies",
    description: "Essential tools for modern development workflow",
    icon: "🛠️",
    color: "#EC4899",
    skills: [
      { name: "Git", level: 92, icon: FaGitAlt, color: "#F05032" },
      { name: "Docker", level: 80, icon: FaDocker, color: "#2496ED" },
      { name: "Postman", level: 88, icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", level: 85, icon: FaFigma, color: "#F24E1E" },
      { name: "Firebase", level: 82, icon: SiFirebase, color: "#FFCA28" },
      { name: "AWS", level: 75, icon: SiAmazon, color: "#FF9900" },
      { name: "Vercel", level: 90, icon: SiVercel, color: "#000000" },
      { name: "Netlify", level: 88, icon: SiNetlify, color: "#00C7B7" },
    ]
  },
  {
    id: 4,
    name: "Soft Skills",
    description: "Essential skills for professional growth",
    icon: "🎯",
    color: "#10B981",
    skills: [
      { name: "Problem Solving", level: 95, icon: null, color: "#10B981" },
      { name: "Team Collaboration", level: 90, icon: null, color: "#6366F1" },
      { name: "Communication", level: 88, icon: null, color: "#8B5CF6" },
      { name: "Time Management", level: 85, icon: null, color: "#EC4899" },
      { name: "Adaptability", level: 92, icon: null, color: "#F59E0B" },
      { name: "Leadership", level: 87, icon: null, color: "#06B6D4" },
    ]
  }
]

// Flat list of all skills (useful for search/filter)
export const allSkills = skillCategories.flatMap(category => 
  category.skills.map(skill => ({
    ...skill,
    category: category.name,
    categoryColor: category.color
  }))
)