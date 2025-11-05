import React from 'react'
import { motion } from 'framer-motion'
import { timeline } from '../../data/timeline'

const Timeline = () => {
  return (
    <>
      <style>{`
        .timeline-section {
          max-width: 1536px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .timeline-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .timeline-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #8B5CF6;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .timeline-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
        }

        .timeline-title-gradient {
          background: linear-gradient(90deg, #8B5CF6, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .timeline-container {
          position: relative;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, #6366F1, #8B5CF6, #EC4899);
          display: none;
        }

        @media (min-width: 768px) {
          .timeline-line {
            display: block;
          }
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        @media (min-width: 768px) {
          .timeline-item-left {
            flex-direction: row;
          }

          .timeline-item-right {
            flex-direction: row-reverse;
          }
        }

        .timeline-card {
          width: 100%;
          padding: 1.5rem;
          border-radius: 16px;
          border: 2px solid;
          background: #1E293B;
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .timeline-card {
            width: calc(50% - 3rem);
          }

          .timeline-item-left .timeline-card {
            text-align: right;
            margin-right: 6rem;
          }

          .timeline-item-right .timeline-card {
            text-align: left;
            margin-left: 6rem;
          }
        }

        .timeline-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .timeline-year {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .timeline-card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .timeline-subtitle {
          color: #94A3B8;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .timeline-description {
          color: #CBD5E1;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .timeline-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @media (min-width: 768px) {
          .timeline-item-left .timeline-technologies {
            justify-content: flex-end;
          }

          .timeline-item-right .timeline-technologies {
            justify-content: flex-start;
          }
        }

        .timeline-tech-tag {
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          background: #0F172A;
          color: #CBD5E1;
          font-size: 0.75rem;
          border: 1px solid #334155;
        }

        .timeline-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 2rem;
        }

        .timeline-icon-desktop {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 64px;
          height: 64px;
          z-index: 10;
          display: none;
        }

        @media (min-width: 768px) {
          .timeline-icon-desktop {
            display: flex;
          }
        }

        .timeline-icon-mobile {
          width: 48px;
          height: 48px;
          margin-bottom: 1rem;
          display: flex;
        }

        @media (min-width: 768px) {
          .timeline-icon-mobile {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .timeline-header {
            margin-bottom: 2rem;
          }

          .timeline-items {
            gap: 2rem;
          }

          .timeline-card {
            text-align: left;
          }

          .timeline-technologies {
            justify-content: flex-start;
          }
        }
      `}</style>

      <section id="timeline" className="section-padding">
        <div className="timeline-section">
          <div className="timeline-header">
            <span className="timeline-badge">The Timeline</span>
            <h2 className="timeline-title">
              <span className="timeline-title-gradient">The Journey So Far</span>
            </h2>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>

            <div className="timeline-items">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`timeline-item ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="timeline-card"
                    style={{
                      borderColor: item.color + '40',
                      boxShadow: `0 0 30px ${item.color}20`
                    }}
                  >
                    <span
                      className="timeline-year"
                      style={{
                        backgroundColor: item.color + '20',
                        border: `1px solid ${item.color}40`,
                        color: item.color
                      }}
                    >
                      {item.year}
                    </span>

                    <h3 className="timeline-card-title" style={{ color: item.color }}>
                      {item.title}
                    </h3>

                    <p className="timeline-subtitle">{item.subtitle}</p>
                    <p className="timeline-description">{item.description}</p>

                    <div className="timeline-technologies">
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="timeline-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <div
                    className="timeline-icon timeline-icon-desktop"
                    style={{
                      backgroundColor: '#0F172A',
                      border: `3px solid ${item.color}`,
                      boxShadow: `0 0 20px ${item.color}60`
                    }}
                  >
                    {item.icon}
                  </div>

                  <div
                    className="timeline-icon timeline-icon-mobile"
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

export default Timeline