import React from 'react'
import { motion } from 'framer-motion'
import { education } from '../../data/education'
import { HiAcademicCap, HiLocationMarker, HiStar } from 'react-icons/hi'

const Education = () => {
  return (
    <>
      <style>{`
        .education-section {
          max-width: 1536px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .education-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .education-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid rgba(14, 165, 233, 0.3);
          color: #0EA5E9;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .education-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
        }

        .education-title-gradient {
          background: linear-gradient(90deg, #0EA5E9, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .education-container {
          position: relative;
        }

        .education-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, #0EA5E9, #06B6D4, #8B5CF6);
          display: none;
        }

        @media (min-width: 768px) {
          .education-line {
            display: block;
          }
        }

        .education-items {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .education-item {
          position: relative;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        @media (min-width: 768px) {
          .education-item-left {
            flex-direction: row;
          }

          .education-item-right {
            flex-direction: row-reverse;
          }
        }

        .education-card {
          width: 100%;
          padding: 2rem;
          border-radius: 20px;
          border: 2px solid;
          background: #1E293B;
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .education-card {
            width: calc(50% - 3rem);
          }

          .education-item-left .education-card {
            text-align: right;
            margin-right: 6rem;
          }

          .education-item-right .education-card {
            text-align: left;
            margin-left: 6rem;
          }
        }

        .education-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .education-year {
          display: inline-block;
          padding: 0.375rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .education-card-degree {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .education-institution {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94A3B8;
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        @media (min-width: 768px) {
          .education-item-left .education-institution {
            justify-content: flex-end;
          }
        }

        .education-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748B;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        @media (min-width: 768px) {
          .education-item-left .education-location {
            justify-content: flex-end;
          }
        }

        .education-gpa {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
          border: 1px solid rgba(16, 185, 129, 0.3);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .education-description {
          color: #CBD5E1;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .education-achievements {
          margin-bottom: 1.5rem;
        }

        .education-achievements-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #F59E0B;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        @media (min-width: 768px) {
          .education-item-left .education-achievements-title {
            justify-content: flex-end;
          }
        }

        .education-achievements-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .education-achievement {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: #CBD5E1;
          font-size: 0.875rem;
        }

        @media (min-width: 768px) {
          .education-item-left .education-achievement {
            flex-direction: row-reverse;
            text-align: right;
          }
        }

        .achievement-bullet {
          color: #10B981;
          font-size: 0.75rem;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .education-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @media (min-width: 768px) {
          .education-item-left .education-technologies {
            justify-content: flex-end;
          }

          .education-item-right .education-technologies {
            justify-content: flex-start;
          }
        }

        .education-tech-tag {
          padding: 0.375rem 0.875rem;
          border-radius: 50px;
          background: #0F172A;
          color: #CBD5E1;
          font-size: 0.75rem;
          border: 1px solid #334155;
          font-weight: 500;
        }

        .education-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 2.5rem;
        }

        .education-icon-desktop {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 80px;
          z-index: 10;
          display: none;
        }

        @media (min-width: 768px) {
          .education-icon-desktop {
            display: flex;
          }
        }

        .education-icon-mobile {
          width: 64px;
          height: 64px;
          margin-bottom: 1.5rem;
          display: flex;
        }

        @media (min-width: 768px) {
          .education-icon-mobile {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .education-header {
            margin-bottom: 2rem;
          }

          .education-items {
            gap: 2rem;
          }

          .education-card {
            text-align: left;
            padding: 1.5rem;
          }

          .education-technologies {
            justify-content: flex-start;
          }

          .education-institution,
          .education-location,
          .education-achievements-title {
            justify-content: flex-start;
          }
        }
      `}</style>

      <section id="education" className="section-padding">
        <div className="education-section">
          <div className="education-header">
            <span className="education-badge">📖 Academic Journey</span>
            <h2 className="education-title">
              <span className="education-title-gradient">Education</span>
            </h2>
          </div>

          <div className="education-container">
            <div className="education-line"></div>

            <div className="education-items">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`education-item ${index % 2 === 0 ? 'education-item-left' : 'education-item-right'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    className="education-card"
                    style={{
                      borderColor: item.color + '40',
                      boxShadow: `0 0 30px ${item.color}20`
                    }}
                  >
                    <span
                      className="education-year"
                      style={{
                        backgroundColor: item.color + '20',
                        border: `1px solid ${item.color}40`,
                        color: item.color
                      }}
                    >
                      {item.year}
                    </span>

                    <h3 className="education-card-degree" style={{ color: item.color }}>
                      {item.degree}
                    </h3>

                    <div className="education-institution">
                      <HiAcademicCap />
                      <span>{item.institution}</span>
                    </div>

                    <div className="education-location">
                      <HiLocationMarker />
                      <span>{item.location}</span>
                    </div>

                    <span className="education-gpa">
                      GPA: {item.gpa}
                    </span>

                    <p className="education-description">{item.description}</p>

                    <div className="education-achievements">
                      <div className="education-achievements-title">
                        <HiStar />
                        <span>Key Achievements</span>
                      </div>
                      <ul className="education-achievements-list">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="education-achievement">
                            <span className="achievement-bullet">●</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="education-technologies">
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="education-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <div
                    className="education-icon education-icon-desktop"
                    style={{
                      backgroundColor: '#0F172A',
                      border: `3px solid ${item.color}`,
                      boxShadow: `0 0 20px ${item.color}60`
                    }}
                  >
                    {item.icon}
                  </div>

                  <div
                    className="education-icon education-icon-mobile"
                    style={{
                      backgroundColor: '#1E293B',
                      border: `2px solid ${item.color}`,
                      boxShadow: `0 0 15px ${item.color}40`
                    }}
                  >
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Education