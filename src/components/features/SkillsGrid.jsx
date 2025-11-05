import React from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import SkillCategory from './SkillCategory'

const SkillsGrid = () => {
  return (
    <>
      <style>{`
        .skills-grid {
          max-width: 1280px;
          margin: 0 auto;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .skills-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          background: rgba(236, 72, 153, 0.1);
          border: 1px solid rgba(236, 72, 153, 0.3);
          color: #EC4899;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .skills-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .skills-title-gradient {
          background: linear-gradient(90deg, #EC4899, #10B981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skills-subtitle {
          color: #94A3B8;
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .skills-categories {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        @media (max-width: 768px) {
          .skills-header {
            margin-bottom: 2rem;
          }

          .skills-categories {
            gap: 3rem;
          }

          .skills-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="skills-grid">
        <div className="skills-header">
          <span className="skills-badge">Chapter III: The Arsenal</span>
          <h2 className="skills-title">
            <span className="skills-title-gradient">Skills & Technologies</span>
          </h2>
          <p className="skills-subtitle">
            A collection of tools and technologies I've mastered throughout my journey
          </p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillCategory category={category} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SkillsGrid