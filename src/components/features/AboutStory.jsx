import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../../data/personalInfo'

const AboutStory = () => {
  return (
    <>
      <style>{`
        .about-story {
          max-width: 1024px;
          margin: 0 auto;
        }

        .about-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .about-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          color: #06B6D4;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .about-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .about-title-gradient {
          background: linear-gradient(90deg, #06B6D4, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-content {
          margin-bottom: 3rem;
        }

        .story-card {
          background: #1E293B;
          border: 1px solid #334155;
          border-radius: 20px;
          padding: 2rem;
        }

        @media (min-width: 768px) {
          .story-card {
            padding: 2.5rem;
          }
        }

        .story-text {
          font-size: 1.125rem;
          color: #CBD5E1;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .story-text:last-child {
          margin-bottom: 0;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .about-stats {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .about-stat-card {
          text-align: center;
          padding: 1.5rem;
          border-radius: 16px;
          background: #1E293B;
          border: 1px solid #334155;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .about-stat-card:hover {
          transform: translateY(-8px);
          border-color: rgba(6, 182, 212, 0.5);
          box-shadow: 0 10px 40px rgba(6, 182, 212, 0.2);
        }

        .stat-value-gradient {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(90deg, #06B6D4, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label-text {
          font-size: 0.875rem;
          color: #94A3B8;
          text-transform: capitalize;
        }

        .availability-card {
          padding: 1.5rem;
          border-radius: 16px;
          background: linear-gradient(90deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1));
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .availability-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .availability-dot {
          width: 12px;
          height: 12px;
          background: #10B981;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        .availability-text {
          color: #10B981;
          font-weight: 600;
        }

        .availability-description {
          color: #CBD5E1;
          margin: 0;
        }

        .role-highlight {
          color: #06B6D4;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .about-header {
            margin-bottom: 2rem;
          }

          .story-card {
            padding: 1.5rem;
          }

          .story-text {
            font-size: 1rem;
          }

          .about-stats {
            gap: 1rem;
          }

          .about-stat-card {
            padding: 1.25rem 1rem;
          }

          .stat-value-gradient {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="about-story">
        <div className="about-header">
          <span className="about-badge">Chapter I: The Journey</span>
          <h2 className="about-title">
            <span className="about-title-gradient">My Story</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="story-card">
            <p className="story-text">{personalInfo.story}</p>
            <p className="story-text">{personalInfo.longBio}</p>
          </div>
        </div>

        <div className="about-stats">
          {Object.entries(personalInfo.stats).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="about-stat-card"
            >
              <div className="stat-value-gradient">{value}</div>
              <div className="stat-label-text">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </motion.div>
          ))}
        </div>

        {personalInfo.status.available && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="availability-card"
          >
            <div className="availability-header">
              <div className="availability-dot"></div>
              <span className="availability-text">Available for work</span>
            </div>
            <p className="availability-description">
              Currently working as a <span className="role-highlight">{personalInfo.status.currentRole}</span> and 
              looking for {personalInfo.status.lookingFor}.
            </p>
          </motion.div>
        )}
      </div>
    </>
  )
}

export default AboutStory