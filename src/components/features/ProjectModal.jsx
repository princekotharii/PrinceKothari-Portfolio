import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiExternalLink, HiCode } from 'react-icons/hi'

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project) return null

  return (
    <>
      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(8px);
          z-index: 50;
        }

        .modal-container {
          position: fixed;
          inset: 0;
          z-index: 50;
          overflow-y: auto;
          padding: 1rem;
        }

        .modal-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          position: relative;
          width: 100%;
          max-width: 1024px;
          background: #1E293B;
          border: 1px solid #334155;
          border-radius: 20px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          margin: 2rem 0;
        }

        .modal-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 10;
          padding: 0.5rem;
          border-radius: 8px;
          background: #0F172A;
          border: none;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .modal-close-btn:hover {
          background: #334155;
        }

        .modal-close-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #94A3B8;
        }

        .modal-close-btn:hover .modal-close-icon {
          color: #F1F5F9;
        }

        .modal-scroll {
          max-height: 80vh;
          overflow-y: auto;
        }

        .modal-header-image {
          position: relative;
          height: 256px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
        }

        .modal-header-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
          font-weight: 700;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .modal-body {
          padding: 2rem;
        }

        .modal-title-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .modal-title-section {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .modal-title-info h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #F1F5F9;
          margin-bottom: 0.5rem;
        }

        .modal-badges {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .modal-badge {
          font-size: 0.875rem;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
        }

        .badge-category {
          background: rgba(99, 102, 241, 0.1);
          color: #6366F1;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .badge-completed {
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .badge-in-progress {
          background: rgba(245, 158, 11, 0.1);
          color: #F59E0B;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .modal-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .modal-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid;
        }

        .modal-btn-code {
          background: #0F172A;
          color: #F1F5F9;
          border-color: #334155;
        }

        .modal-btn-code:hover {
          background: #334155;
        }

        .modal-btn-live {
          background: linear-gradient(90deg, #6366F1, #8B5CF6);
          color: #ffffff;
          border-color: transparent;
        }

        .modal-btn-live:hover {
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .modal-btn-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .modal-section {
          margin-bottom: 1.5rem;
        }

        .modal-section-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #F1F5F9;
          margin-bottom: 0.75rem;
        }

        .modal-text {
          color: #CBD5E1;
          line-height: 1.8;
        }

        .tech-stack-section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .tech-stack-label {
          font-size: 0.875rem;
          color: #94A3B8;
          text-transform: capitalize;
          margin-bottom: 0.5rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          border-radius: 8px;
          background: #0F172A;
          color: #CBD5E1;
          font-size: 0.875rem;
          border: 1px solid #334155;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 0.75rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        @media (min-width: 768px) {
          .features-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: #CBD5E1;
        }

        .feature-arrow {
          color: #6366F1;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .stat-box {
          padding: 1rem;
          border-radius: 8px;
          background: #0F172A;
          border: 1px solid #334155;
          text-align: center;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #6366F1;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #94A3B8;
          text-transform: capitalize;
        }

        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .challenges-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .challenge-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #F1F5F9;
          margin-bottom: 0.75rem;
        }

        .challenge-item {
          padding: 1rem;
          border-radius: 8px;
          background: #0F172A;
          border: 1px solid #334155;
          margin-bottom: 0.75rem;
        }

        .challenge-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #EC4899;
          margin-bottom: 0.25rem;
        }

        .challenge-text {
          font-size: 0.875rem;
          color: #94A3B8;
          margin: 0;
        }

        .learnings-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .learning-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #CBD5E1;
        }

        .learning-check {
          color: #10B981;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .modal-body {
            padding: 1.5rem;
          }

          .modal-title-info h2 {
            font-size: 1.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="modal-backdrop"
            />

            <div className="modal-container">
              <div className="modal-wrapper">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button onClick={onClose} className="modal-close-btn">
                    <HiX className="modal-close-icon" />
                  </button>

                  <div className="modal-scroll">
                    <div className="modal-header-image">
                      {project.image ? (
                        <img src={project.image} alt={project.title} />
                      ) : (
                        <div className="modal-placeholder">
                          {project.title.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div className="modal-body">
                      <div className="modal-title-section">
                        <div className="modal-title-info">
                          <h2>{project.title}</h2>
                          <div className="modal-badges">
                            <span className="modal-badge badge-category">
                              {project.category}
                            </span>
                            <span className={`modal-badge ${
                              project.status === 'completed' ? 'badge-completed' : 'badge-in-progress'
                            }`}>
                              {project.status === 'in-progress' ? 'In Progress' : 'Completed'}
                            </span>
                          </div>
                        </div>

                        <div className="modal-actions">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="modal-btn modal-btn-code"
                            >
                              <HiCode className="modal-btn-icon" />
                              <span>Code</span>
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="modal-btn modal-btn-live"
                            >
                              <HiExternalLink className="modal-btn-icon" />
                              <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="modal-section">
                        <h3 className="modal-section-title">About This Project</h3>
                        <p className="modal-text">{project.longDescription}</p>
                      </div>

                      {project.techStack && (
                        <div className="modal-section">
                          <h3 className="modal-section-title">Tech Stack</h3>
                          <div className="tech-stack-section">
                            {Object.entries(project.techStack).map(([key, technologies]) => (
                              <div key={key}>
                                <p className="tech-stack-label">{key}:</p>
                                <div className="tech-tags">
                                  {technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.features && project.features.length > 0 && (
                        <div className="modal-section">
                          <h3 className="modal-section-title">Key Features</h3>
                          <ul className="features-list">
                            {project.features.map((feature, index) => (
                              <li key={index} className="feature-item">
                                <span className="feature-arrow">▹</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.stats && (
                        <div className="modal-section">
                          <h3 className="modal-section-title">Project Stats</h3>
                          <div className="stats-grid">
                            {Object.entries(project.stats).map(([key, value]) => (
                              <div key={key} className="stat-box">
                                <div className="stat-value">{value}</div>
                                <div className="stat-label">{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {(project.challenges || project.learnings) && (
                        <div className="challenges-grid">
                          {project.challenges && (
                            <div className="challenge-section">
                              <h3>Challenges</h3>
                              {project.challenges.map((item, index) => (
                                <div key={index} className="challenge-item">
                                  <p className="challenge-title">{item.challenge}</p>
                                  <p className="challenge-text">{item.solution}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {project.learnings && (
                            <div className="challenge-section">
                              <h3>What I Learned</h3>
                              <ul className="learnings-list">
                                {project.learnings.map((learning, index) => (
                                  <li key={index} className="learning-item">
                                    <span className="learning-check">✓</span>
                                    <span>{learning}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectModal