import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { personalInfo } from '../../data/personalInfo'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ]

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: personalInfo.social.github, color: '#F1F5F9' },
    { name: 'LinkedIn', icon: FaLinkedin, url: personalInfo.social.linkedin, color: '#0077b5' },
    { name: 'Twitter', icon: FaTwitter, url: personalInfo.social.twitter, color: '#1da1f2' },
    { name: 'Instagram', icon: FaInstagram, url: personalInfo.social.instagram, color: '#e4405f' },
    { name: 'Email', icon: HiMail, url: `mailto:${personalInfo.email}`, color: '#6366F1' },
  ]

  const handleNavClick = (e, path) => {
    e.preventDefault()
    const targetId = path.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo">PK</div>
              <span className="footer-brand-name">Prince Kothari</span>
            </div>
            <p className="footer-description">
              Full Stack Developer crafting elegant digital solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <a 
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Connect With Me</h3>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-icon"
                  aria-label={social.name}
                  style={{ '--hover-color': social.color }}
                >
                  <social.icon className="social-icon-svg" />
                </motion.a>
              ))}
            </div>
            <p className="footer-contact-text">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Prince Kothari. All rights reserved.
          </p>
          <p className="footer-made-with">
            <span>Built with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="heart-icon"
            >
              <FaHeart />
            </motion.span>
            <span>and</span>
            <span className="react-text">React</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer