import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
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
    { name: 'Journey', path: '#timeline', chapter: 'Chapter II' },
    { name: 'Skills', path: '#skills', chapter: 'Chapter III' },
    { name: 'Projects', path: '#projects', chapter: 'Chapter IV' },
    { name: 'Contact', path: '#contact', chapter: 'Epilogue' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ['home', 'about', 'timeline', 'skills', 'projects', 'contact']
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

    // Close the menu first so layout stabilizes, then scroll.
    // Small delay ensures animations/layout collapse finish before computing offsets.
    const scrollToTarget = () => {
      const element = document.getElementById(targetId)

      if (element) {
        // compute a reliable top (accounting for page scroll)
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
        return
      }

      // If target isn't on this page (e.g., on another route), navigate to home then scroll.
      if (location.pathname !== '/') {
        // navigate to home, then wait a moment and scroll
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
        }, 350) // allow time for route change/render
      }
    }

    // Close menu, allow next frame and a small timeout for CSS collapse/animation to complete
    setIsOpen(false)
    requestAnimationFrame(() => {
      // slight timeout to let AnimatePresence / CSS transitions finish
      setTimeout(scrollToTarget, 60)
    })
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar