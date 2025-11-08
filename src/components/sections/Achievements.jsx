import React from 'react'
import { motion } from 'framer-motion'
import { HiStar, HiAcademicCap, HiCode, HiLightningBolt, HiSparkles, HiBeaker } from 'react-icons/hi'

const Achievements = () => {
  // Add your achievements here
  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner",
      description: "Won 1st place in State Level Hackathon 2023 with innovative web application",
      year: "2023",
      icon: HiLightningBolt, // Changed from HiTrophy
      color: "#F59E0B",
      category: "Competition"
    },
    {
      id: 2,
      title: "Best Final Year Project",
      description: "Awarded Best Project for developing a comprehensive full-stack application",
      year: "2023",
      icon: HiStar,
      color: "#0EA5E9",
      category: "Academic"
    },
    {
      id: 3,
      title: "Published Research Paper",
      description: "Published paper on 'Modern Web Development Technologies' in international journal",
      year: "2022",
      icon: HiAcademicCap,
      color: "#8B5CF6",
      category: "Research"
    },
    {
      id: 4,
      title: "Open Source Contributor",
      description: "100+ contributions to popular open-source projects on GitHub",
      year: "2021-Present",
      icon: HiCode,
      color: "#10B981",
      category: "Development"
    },
    {
      id: 5,
      title: "Coding Competition Winner",
      description: "Secured top positions in multiple national level coding competitions",
      year: "2020-2023",
      icon: HiSparkles, // Changed
      color: "#EC4899",
      category: "Competition"
    },
    {
      id: 6,
      title: "College Coding Club Lead",
      description: "Led a team of 200+ members, organized workshops and hackathons",
      year: "2021-2023",
      icon: HiBeaker, // Changed
      color: "#06B6D4",
      category: "Leadership"
    }
  ]

  return (
    <>
      <style>{`
        .achievements-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .achievements-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .achievements-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #F59E0B;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .achievements-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
        }

        .achievements-title-gradient {
          background: linear-gradient(90deg, #F59E0B, #EF4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .achievements-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .achievement-card {
          position: relative;
          padding: 2rem;
          background: #1E293B;
          border: 2px solid;
          border-radius: 20px;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .achievement-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          transition: height 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .achievement-card:hover::before {
          height: 8px;
        }

        .achievement-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .achievement-card:hover .achievement-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .achievement-category {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .achievement-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #F1F5F9;
        }

        .achievement-description {
          color: #CBD5E1;
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .achievement-year {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.875rem;
          border-radius: 50px;
          background: #0F172A;
          border: 1px solid #334155;
          color: #94A3B8;
          font-size: 0.875rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .achievements-header {
            margin-bottom: 2rem;
          }

          .achievements-grid {
            gap: 1.5rem;
          }

          .achievement-card {
            padding: 1.5rem;
          }

          .achievement-icon-wrapper {
            width: 56px;
            height: 56px;
            font-size: 1.75rem;
          }

          .achievement-title {
            font-size: 1.25rem;
          }
        }
      `}</style>

      <section id="achievements" className="section-padding">
        <div className="achievements-section">
          <div className="achievements-header">
            <span className="achievements-badge">🏆 Hall of Fame</span>
            <h2 className="achievements-title">
              <span className="achievements-title-gradient">Achievements</span>
            </h2>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="achievement-card"
                style={{
                  borderColor: achievement.color + '40',
                  boxShadow: `0 0 30px ${achievement.color}20`
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: achievement.color
                  }}
                ></div>

                <div
                  className="achievement-icon-wrapper"
                  style={{
                    background: achievement.color + '20',
                    border: `2px solid ${achievement.color}40`,
                    color: achievement.color
                  }}
                >
                  <achievement.icon />
                </div>

                <span
                  className="achievement-category"
                  style={{
                    background: achievement.color + '20',
                    border: `1px solid ${achievement.color}40`,
                    color: achievement.color
                  }}
                >
                  {achievement.category}
                </span>

                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>

                <span className="achievement-year">
                  📅 {achievement.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Achievements