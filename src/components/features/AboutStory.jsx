import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../../data/personalInfo'
import { Book, User } from 'lucide-react'

const AboutStory = () => {
  return (
    <>
      <style>{`
        .about-story {
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-header {
          text-align: center;
          margin-bottom: 4rem;
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

        /* Profile Image Section */
        .profile-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 4rem;
        }

        .profile-image-wrapper {
          position: relative;
          width: 250px;
          height: 250px;
          margin-bottom: 2rem;
        }

        .profile-image-border {
          position: absolute;
          inset: -4px;
          background: linear-gradient(135deg, #06B6D4, #8B5CF6, #EC4899);
          border-radius: 50%;
          animation: rotate 8s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .profile-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #1E293B;
          border: 4px solid #0F172A;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .profile-image-wrapper:hover .profile-image {
          transform: scale(1.1);
        }

        .profile-image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2));
          color: #06B6D4;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .section-title-icon {
          color: #06B6D4;
        }

        /* About Me Section */
        .about-me-section {
          margin-bottom: 4rem;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .story-card {
          background: #1E293B;
          border: 1px solid #334155;
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .story-card:hover {
          border-color: rgba(6, 182, 212, 0.5);
          box-shadow: 0 10px 40px rgba(6, 182, 212, 0.15);
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

        /* Stats Section */
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

        /* Availability Card */
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

        /* Responsive */
        @media (max-width: 768px) {
          .about-header {
            margin-bottom: 2rem;
          }

          .profile-image-wrapper {
            width: 200px;
            height: 200px;
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

          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="about-story">
        {/* Header */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-badge">Get to Know Me</span>
          <h2 className="about-title">
            <span className="about-title-gradient">About Me</span>
          </h2>
        </motion.div>

        {/* Profile Image Section */}
        {personalInfo.profileImage && (
          <motion.div 
            className="profile-section"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-image-wrapper">
              <div className="profile-image-border"></div>
              <div className="profile-image-container">
                {personalInfo.profileImage ? (
                  <img 
                    src={personalInfo.profileImage} 
                    alt={`${personalInfo.name} - Profile`}
                    className="profile-image"
                  />
                ) : (
                  <div className="profile-image-placeholder">
                    <User size={100} />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* About Me Section */}
        <motion.div 
          className="about-me-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="section-title">
            <Book className="section-title-icon" size={32} />
            My Story
          </h3>
          <div className="about-grid">
            <div className="story-card">
              <p className="story-text">{personalInfo.story}</p>
            </div>
            <div className="story-card">
              <p className="story-text">{personalInfo.longBio}</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
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

        {/* Availability */}
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