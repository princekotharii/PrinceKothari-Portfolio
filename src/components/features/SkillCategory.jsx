import React from 'react'
import { motion } from 'framer-motion'
import SkillCard from './SkillCard'

const SkillCategory = ({ category, index, mousePosition }) => {
  return (
    <>
      <style>{`
        .skill-category {
          width: 100%;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .category-icon-box {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .category-icon {
          font-size: 2rem;
        }

        .category-info {
          flex: 1;
        }

        .category-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .category-description {
          color: #94A3B8;
          font-size: 0.875rem;
          margin: 0;
        }

        .category-skills {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .category-skills {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .category-skills {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .category-header {
            gap: 0.75rem;
            margin-bottom: 1.5rem;
          }

          .category-icon-box {
            width: 56px;
            height: 56px;
          }

          .category-icon {
            font-size: 1.75rem;
          }

          .category-name {
            font-size: 1.25rem;
          }

          .category-skills {
            gap: 1rem;
          }
        }
      `}</style>

      <div className="skill-category">
        <div className="category-header">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="category-icon-box"
            style={{
              backgroundColor: category.color + '20',
              border: `2px solid ${category.color}40`,
              boxShadow: `0 0 30px ${category.color}30`
            }}
          >
            <span className="category-icon">{category.icon}</span>
          </motion.div>
          <div className="category-info">
            <h3 className="category-name" style={{ color: category.color }}>
              {category.name}
            </h3>
            <p className="category-description">{category.description}</p>
          </div>
        </div>

        <div className="category-skills">
          {category.skills.map((skill, skillIndex) => (
            <SkillCard
              key={skillIndex}
              skill={skill}
              categoryColor={category.color}
              delay={skillIndex * 0.1}
              mousePosition={mousePosition}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default SkillCategory