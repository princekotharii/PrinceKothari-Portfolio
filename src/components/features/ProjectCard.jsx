import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiExternalLink, HiCode, HiStar } from 'react-icons/hi'
import ProjectModal from './ProjectModal'

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <style>{`
        .project-card {
          position: relative;
          height: 100%;
          background: #1E293B;
          border: 1px solid #334155;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(99, 102, 241, 0.5);
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 10;
          background: linear-gradient(90deg, #F59E0B, #EF4444);
          color: #ffffff;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .project-image {
          position: relative;
          height: 192px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          font-weight: 700;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent, #0F172A);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .project-category {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          background: rgba(99, 102, 241, 0.1);
          color: #6366F1;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .project-status {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
        }

        .status-completed {
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .status-in-progress {
          background: rgba(245, 158, 11, 0.1);
          color: #F59E0B;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .status-planned {
          background: rgba(236, 72, 153, 0.1);
          color: #EC4899;
          border: 1px solid rgba(236, 72, 153, 0.3);
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #F1F5F9;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }

        .project-card:hover .project-title {
          color: #6366F1;
        }

        .project-description {
          color: #94A3B8;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .project-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          background: #0F172A;
          color: #CBD5E1;
          border: 1px solid #334155;
        }

        .project-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          color: #94A3B8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #6366F1;
        }

        .project-link-icon {
          width: 1rem;
          height: 1rem;
        }

        .project-card-border {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
        }

        .project-card:hover .project-card-border {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .project-content {
            padding: 1.25rem;
          }

          .project-title {
            font-size: 1.125rem;
          }
        }
      `}</style>

      <motion.div
        whileHover={{ y: -10 }}
        className="project-card"
        onClick={() => setIsModalOpen(true)}
      >
        {project.featured && (
          <div className="featured-badge">
            <HiStar />
            <span>Featured</span>
          </div>
        )}

        <div className="project-image">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="project-placeholder">
              {project.title.charAt(0)}
            </div>
          )}
          <div className="project-overlay"></div>
        </div>

        <div className="project-content">
          <div className="project-meta">
            <span className="project-category">{project.category}</span>
            <span className={`project-status ${
              project.status === 'completed' ? 'status-completed' :
              project.status === 'in-progress' ? 'status-in-progress' :
              'status-planned'
            }`}>
              {project.status === 'in-progress' ? 'In Progress' : project.status}
            </span>
          </div>

          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.shortDescription}</p>

          <div className="project-tags">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="project-tag">{tag}</span>
            ))}
            {project.tags.length > 3 && (
              <span className="project-tag">+{project.tags.length - 3}</span>
            )}
          </div>

          <div className="project-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="project-link"
              >
                <HiCode className="project-link-icon" />
                <span>Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="project-link"
              >
                <HiExternalLink className="project-link-icon" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        <div className="project-card-border"></div>
      </motion.div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default ProjectCard