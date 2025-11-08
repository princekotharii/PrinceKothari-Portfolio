import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { HiMail } from 'react-icons/hi'
import { personalInfo } from '../../data/personalInfo'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { name: 'Home', path: '#home', chapter: 'Prologue' },
    { name: 'About', path: '#about', chapter: 'Chapter I' },
    { name: 'Education', path: '#education', chapter: 'Chapter II' },
    { name: 'Achievements', path: '#achievements', chapter: 'Chapter III' },
    { name: 'Skills', path: '#skills', chapter: 'Chapter IV' },
    { name: 'Projects', path: '#projects', chapter: 'Chapter V' },
    { name: 'Contact', path: '#contact', chapter: 'Epilogue' },
  ]

  const quickLinks = [
    { 
      name: 'GitHub', 
      url: personalInfo.social?.github || 'https://github.com/princekotharii',
      icon: FaGithub,
      color: '#6366F1'
    },
    { 
      name: 'LinkedIn', 
      url: personalInfo.social?.linkedin || 'https://linkedin.com/in/princekotharii',
      icon: FaLinkedin,
      color: '#0EA5E9'
    },
    { 
      name: 'X', 
      url: personalInfo.social?.twitter || 'https://twitter.com/princekotharii',
      icon: FaXTwitter,
      color: '#94A3B8'
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ['home', 'about', 'education', 'achievements', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = (e, path) => {
    e.preventDefault()
    const targetId = path.replace('#', '')

    const scrollToTarget = () => {
      const element = document.getElementById(targetId)

      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
        return
      }

      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.getElementById(targetId)
          if (el) {
            const offsetTop2 = el.getBoundingClientRect().top + window.scrollY - 80
            window.scrollTo({
              top: offsetTop2,
              behavior: 'smooth'
            })
          }
        }, 350)
      }
    }

    setIsOpen(false)
    requestAnimationFrame(() => {
      setTimeout(scrollToTarget, 60)
    })
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="logo-wrapper"
            >
              <div className="logo-box">PK</div>
              <div className="logo-glow"></div>
            </motion.div>
            <span className="logo-text">Prince Kothari</span>
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            {navLinks.map((link) => {
              const sectionId = link.path.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  <span className="nav-link-text">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="nav-link-indicator"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                  <span className="nav-link-underline"></span>
                </a>
              )
            })}
          </div>

          {/* Quick Links & Hire Me */}
          <div className="nav-actions desktop-nav">
            {quickLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={link.name}
              >
                <link.icon style={{ color: link.color }} />
              </motion.a>
            ))}
            <motion.button
              onClick={scrollToContact}
              className="hire-me-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <HiX className="menu-icon" />
            ) : (
              <HiMenu className="menu-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
          >
            <div className="mobile-menu-content">
              {navLinks.map((link, index) => {
                const sectionId = link.path.replace('#', '')
                const isActive = activeSection === sectionId

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.path}
                      onClick={(e) => handleNavClick(e, link.path)}
                      className={`mobile-nav-link ${
                        isActive ? 'mobile-nav-link-active' : ''
                      }`}
                    >
                      <div className="mobile-nav-link-content">
                        <span className="mobile-nav-name">{link.name}</span>
                        <span className="mobile-nav-chapter">{link.chapter}</span>
                      </div>
                    </a>
                  </motion.div>
                )
              })}

              {/* Mobile Quick Links */}
              <div className="mobile-quick-links">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-quick-link"
                  >
                    <link.icon style={{ color: link.color }} />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>

              {/* Mobile Hire Me Button */}
              <button onClick={scrollToContact} className="mobile-hire-btn">
                <HiMail />
                <span>Hire Me</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar