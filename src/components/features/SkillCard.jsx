import React from 'react'
import { motion } from 'framer-motion'

const SkillCard = ({ skill, categoryColor, delay = 0 }) => {
  const Icon = skill.icon

  return (
    <>
      <style>{`
        .skill-card {
          position: relative;
          padding: 1.5rem;
          border-radius: 12px;
          background: #1E293B;
          border: 1px solid #334155;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .skill-card:hover {
          border-color: rgba(99, 102, 241, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .skill-card-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .skill-card:hover .skill-card-glow {
          opacity: 1;
        }

        .skill-card-content {
          position: relative;
          z-index: 10;
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .skill-icon {
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: #F1F5F9;
          margin: 0;
        }

        .skill-progress {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-progress-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.875rem;
        }

        .skill-progress-label {
          color: #94A3B8;
        }

        .skill-progress-value {
          font-weight: 600;
        }

        .skill-progress-bar {
          height: 8px;
          background: #0F172A;
          border-radius: 50px;
          overflow: hidden;
        }

        .skill-progress-fill {
          height: 100%;
          border-radius: 50px;
          position: relative;
        }

        .skill-progress-glow {
          position: absolute;
          inset: 0;
          opacity: 0.5;
          animation: pulseGlow 2s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .skill-card-accent {
          position: absolute;
          top: 0;
          right: 0;
          width: 80px;
          height: 80px;
          opacity: 0.1;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .skill-card {
            padding: 1.25rem;
          }

          .skill-icon {
            font-size: 1.75rem;
          }

          .skill-name {
            font-size: 1rem;
          }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="skill-card"
      >
        <div
          className="skill-card-glow"
          style={{
            background: `radial-gradient(circle at center, ${skill.color || categoryColor}15, transparent 70%)`
          }}
        ></div>

        <div className="skill-card-content">
          <div className="skill-header">
            {Icon && (
              <div
                className="skill-icon"
                style={{ color: skill.color || categoryColor }}
              >
                <Icon />
              </div>
            )}
            <h4 className="skill-name">{skill.name}</h4>
          </div>

          <div className="skill-progress">
            <div className="skill-progress-header">
              <span className="skill-progress-label">Proficiency</span>
              <span
                className="skill-progress-value"
                style={{ color: skill.color || categoryColor }}
              >
                {skill.level}%
              </span>
            </div>

            <div className="skill-progress-bar">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.3, duration: 1, ease: 'easeOut' }}
                className="skill-progress-fill"
                style={{
                  background: `linear-gradient(90deg, ${skill.color || categoryColor}, ${skill.color || categoryColor}dd)`
                }}
              >
                <div
                  className="skill-progress-glow"
                  style={{
                    boxShadow: `0 0 10px ${skill.color || categoryColor}`
                  }}
                ></div>
              </motion.div>
            </div>
          </div>
        </div>

        <div
          className="skill-card-accent"
          style={{
            background: `radial-gradient(circle at top right, ${skill.color || categoryColor}, transparent 70%)`
          }}
        ></div>
      </motion.div>
    </>
  )
}

export default SkillCard