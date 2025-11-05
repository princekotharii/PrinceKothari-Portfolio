import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

const ProjectsGrid = () => {
  const [filter, setFilter] = useState('all')

  const categories = ['all', ...new Set(projects.map(p => p.category.toLowerCase()))]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === filter)

  return (
    <>
      <style>{`
        .projects-grid {
          max-width: 1280px;
          margin: 0 auto;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .projects-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10B981;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .projects-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .projects-title-gradient {
          background: linear-gradient(90deg, #10B981, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .projects-subtitle {
          color: #94A3B8;
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .projects-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid transparent;
          background: transparent;
          color: #94A3B8;
          font-size: 0.875rem;
        }

        .filter-btn:hover {
          color: #F1F5F9;
        }

        .filter-btn-active {
          background: linear-gradient(90deg, #6366F1, #8B5CF6);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .filter-btn-inactive {
          background: #1E293B;
          border: 1px solid #334155;
        }

        .filter-btn-inactive:hover {
          border-color: rgba(99, 102, 241, 0.5);
        }

        .projects-grid-container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .projects-grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .projects-grid-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .no-results {
          text-align: center;
          padding: 5rem 0;
        }

        .no-results-text {
          color: #94A3B8;
          font-size: 1.125rem;
        }

        @media (max-width: 768px) {
          .projects-header {
            margin-bottom: 2rem;
          }

          .projects-filters {
            margin-bottom: 2rem;
          }

          .projects-grid-container {
            gap: 1.5rem;
          }
        }
      `}</style>

      <div className="projects-grid">
        <div className="projects-header">
          <span className="projects-badge">Chapter IV: The Creations</span>
          <h2 className="projects-title">
            <span className="projects-title-gradient">Featured Projects</span>
          </h2>
          <p className="projects-subtitle">
            A showcase of my work - from concept to deployment
          </p>
        </div>

        <div className="projects-filters">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`filter-btn ${
                filter === category ? 'filter-btn-active' : 'filter-btn-inactive'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="projects-grid-container">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-results">
            <p className="no-results-text">No projects found in this category.</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ProjectsGrid