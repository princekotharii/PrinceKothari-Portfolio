import React from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { personalInfo } from '../../data/personalInfo'

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: HiMail,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: '#6366F1'
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      color: '#8B5CF6'
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: personalInfo.location,
      link: null,
      color: '#EC4899'
    },
  ]

  return (
    <>
      <style>{`
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-info-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #F1F5F9;
          margin-bottom: 1rem;
        }

        .contact-info-description {
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-detail-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          background: #0F172A;
          border: 1px solid #334155;
          transition: all 0.3s ease;
        }

        .contact-detail-card:hover {
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateX(5px);
        }

        .contact-icon-box {
          padding: 0.75rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        .contact-detail-info {
          flex: 1;
        }

        .contact-detail-label {
          font-size: 0.875rem;
          color: #94A3B8;
          margin-bottom: 0.25rem;
        }

        .contact-detail-value {
          color: #F1F5F9;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease;
          display: block;
        }

        .contact-detail-value:hover {
          color: #6366F1;
        }

        .contact-detail-text {
          color: #F1F5F9;
          font-weight: 500;
        }

        .availability-badge {
          padding: 1rem;
          border-radius: 12px;
          background: linear-gradient(90deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1));
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .availability-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .availability-dot {
          width: 10px;
          height: 10px;
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
            transform: scale(1.3);
            opacity: 0.7;
          }
        }

        .availability-title {
          color: #10B981;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .availability-text {
          font-size: 0.875rem;
          color: #CBD5E1;
          margin: 0;
        }

        @media (max-width: 768px) {
          .contact-info-title {
            font-size: 1.125rem;
          }

          .contact-detail-card {
            padding: 0.875rem;
          }

          .contact-icon-box {
            padding: 0.625rem;
          }

          .contact-icon {
            width: 1.25rem;
            height: 1.25rem;
          }
        }
      `}</style>

      <div className="contact-info">
        <h3 className="contact-info-title">Get In Touch</h3>
        <p className="contact-info-description">
          I'm always open to discussing new projects, creative ideas, or opportunities
          to be part of your vision. Feel free to reach out!
        </p>

        <div className="contact-details">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="contact-detail-card"
            >
              <div
                className="contact-icon-box"
                style={{
                  backgroundColor: detail.color + '20',
                  color: detail.color
                }}
              >
                <detail.icon className="contact-icon" />
              </div>
              <div className="contact-detail-info">
                <p className="contact-detail-label">{detail.label}</p>
                {detail.link ? (
                  <a href={detail.link} className="contact-detail-value">
                    {detail.value}
                  </a>
                ) : (
                  <p className="contact-detail-text">{detail.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {personalInfo.status.available && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="availability-badge"
          >
            <div className="availability-header">
              <div className="availability-dot"></div>
              <span className="availability-title">Available for work</span>
            </div>
            <p className="availability-text">
              {personalInfo.status.lookingFor}
            </p>
          </motion.div>
        )}
      </div>
    </>
  )
}

export default ContactInfo