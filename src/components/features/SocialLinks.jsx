import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { personalInfo } from '../../data/personalInfo'

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: personalInfo.social.github,
      color: '#F1F5F9',
      hoverColor: '#6366F1'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: personalInfo.social.linkedin,
      color: '#0077b5',
      hoverColor: '#00a0dc'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: personalInfo.social.twitter,
      color: '#1da1f2',
      hoverColor: '#1a91da'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: personalInfo.social.instagram,
      color: '#e4405f',
      hoverColor: '#d62976'
    },
    {
      name: 'Email',
      icon: HiMail,
      url: `mailto:${personalInfo.email}`,
      color: '#6366F1',
      hoverColor: '#8B5CF6'
    },
  ]

  return (
    <>
      <style>{`
        .social-links-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .social-links-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #F1F5F9;
          margin-bottom: 1rem;
          text-align: center;
        }

        .social-links-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .social-links-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 768px) {
          .social-links-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        .social-link-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          border-radius: 12px;
          background: #0F172A;
          border: 1px solid #334155;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-link-card:hover {
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .social-icon {
          width: 2rem;
          height: 2rem;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .social-link-name {
          font-size: 0.875rem;
          color: #94A3B8;
          transition: color 0.3s ease;
        }

        .social-link-card:hover .social-link-name {
          color: #F1F5F9;
        }

        .social-link-card:hover .social-icon {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .social-links-title {
            font-size: 1.125rem;
          }

          .social-link-card {
            padding: 1.25rem;
          }

          .social-icon {
            width: 1.75rem;
            height: 1.75rem;
          }
        }
      `}</style>

      <div className="social-links-section">
        <h3 className="social-links-title">Connect With Me</h3>
        <div className="social-links-grid">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="social-link-card"
            >
              <social.icon
                className="social-icon"
                style={{ color: social.color }}
              />
              <span className="social-link-name">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </>
  )
}

export default SocialLinks