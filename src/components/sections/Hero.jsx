import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiDownload, HiArrowRight, HiArrowDown } from 'react-icons/hi'
import { personalInfo } from '../../data/personalInfo'
import ParticleBackground from '../features/ParticleBackground'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <style>{`
        /* ==================== HERO CONTAINER ==================== */
        .hero-wrapper {
          position: relative;
          min-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #0F172A;
        }

        /* ==================== ANIMATED BACKGROUND ==================== */
        .hero-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }

        /* Grid Pattern */
        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }

        /* Gradient Orbs */
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          pointer-events: none;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.5), transparent 70%);
          top: -10%;
          left: -10%;
          animation: float 8s ease-in-out infinite;
        }

        .orb-2 {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.5), transparent 70%);
          bottom: -15%;
          right: -15%;
          animation: float 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.4), transparent 70%);
          top: 40%;
          left: 40%;
          animation: float 12s ease-in-out infinite;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, -30px) scale(1.05); }
        }

        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.8) 100%);
          pointer-events: none;
        }

        /* ==================== HERO CONTENT ==================== */
        .hero-container {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          width: 100%;
          padding: 0 2rem;
          text-align: center;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.625rem 1.5rem;
          background: #1E293B;
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 100px;
          margin-bottom: 2.5rem;
          animation: fadeInDown 0.8s ease-out 0.2s both;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #10B981;
          border-radius: 50%;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }

        .status-text {
          font-size: 0.875rem;
          font-weight: 500;
          color: #F1F5F9;
          letter-spacing: 0.5px;
        }

        .hero-title-container {
          margin-bottom: 2rem;
        }

        .hero-greeting {
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 500;
          color: #94A3B8;
          margin-bottom: 1rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          animation: fadeInDown 0.8s ease-out 0.4s both;
        }

        .hero-name {
          font-size: clamp(3.5rem, 10vw, 8rem);
          font-weight: 900;
          line-height: 1;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 8s ease infinite, fadeInUp 0.8s ease-out 0.6s both;
        }

        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-role {
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: 700;
          color: #F1F5F9;
          animation: fadeInUp 0.8s ease-out 0.8s both;
          position: relative;
          display: inline-block;
        }

        .hero-role::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899);
          border-radius: 2px;
          animation: lineExpand 1s ease-out 1.2s both;
        }

        @keyframes lineExpand {
          from { width: 0; left: 50%; }
          to { width: 100%; left: 0; }
        }

        .hero-tagline {
          max-width: 800px;
          margin: 3rem auto 3rem;
          font-size: clamp(1.125rem, 2vw, 1.5rem);
          color: #CBD5E1;
          line-height: 1.8;
          animation: fadeInUp 0.8s ease-out 1s both;
        }

        .highlight-text {
          color: #6366F1;
          font-weight: 600;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 4rem;
          animation: fadeInUp 0.8s ease-out 1.2s both;
        }

        .cta-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .cta-primary {
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          color: #ffffff;
        }

        .cta-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }

        .cta-secondary {
          background: #1E293B;
          color: #6366F1;
          border: 2px solid #6366F1;
        }

        .cta-secondary:hover {
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-4px);
        }

        .btn-text {
          position: relative;
          z-index: 1;
        }

        .btn-icon {
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .cta-btn:hover .btn-icon {
          transform: translateX(5px);
        }

        .cta-btn:hover .btn-icon-download {
          transform: translateY(3px);
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
          animation: fadeInUp 0.8s ease-out 1.4s both;
        }

        .stat-card {
          position: relative;
          padding: 2rem 1.5rem;
          background: #1E293B;
          border: 1px solid #334155;
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          border-color: rgba(99, 102, 241, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .stat-value {
          position: relative;
          z-index: 1;
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .stat-label {
          position: relative;
          z-index: 1;
          font-size: 0.875rem;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        /* ==================== SCROLL INDICATOR (ARROW ONLY) ==================== */
        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          animation: fadeIn 0.8s ease-out 2s both;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .scroll-indicator:hover {
          transform: translateX(-50%) translateY(-5px);
        }

        .scroll-text {
          font-size: 0.75rem;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
        }

        .scroll-arrow-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .scroll-arrow {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.1);
          border: 2px solid rgba(99, 102, 241, 0.5);
          transition: all 0.3s ease;
        }

        .scroll-indicator:hover .scroll-arrow {
          background: rgba(99, 102, 241, 0.2);
          border-color: #6366F1;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }

        .scroll-arrow-icon {
          width: 24px;
          height: 24px;
          color: #6366F1;
          animation: bounceArrow 2s ease-in-out infinite;
        }

        @keyframes bounceArrow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-container { padding: 0 1.5rem; }
          .status-badge { padding: 0.5rem 1.25rem; margin-bottom: 2rem; }
          .hero-greeting { font-size: 0.875rem; margin-bottom: 0.75rem; }
          .hero-role::after { height: 2px; bottom: -8px; }
          .hero-tagline { margin: 2rem auto; font-size: 1rem; }
          .hero-cta { flex-direction: column; gap: 0.75rem; margin-bottom: 3rem; }
          .cta-btn { width: 100%; padding: 0.875rem 2rem; font-size: 1rem; justify-content: center; }
          .hero-stats { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .stat-card { padding: 1.5rem 1rem; }
          .stat-value { font-size: 2.25rem; }
          .stat-label { font-size: 0.75rem; }
          .scroll-indicator { bottom: 2rem; }
          .scroll-arrow { width: 36px; height: 36px; }
          .scroll-arrow-icon { width: 20px; height: 20px; }
          .gradient-orb { filter: blur(60px); opacity: 0.2; }
          .grid-pattern { background-size: 40px 40px; }
        }

        @media (max-width: 480px) {
          .hero-container { padding: 0 1rem; }
          .status-badge { padding: 0.4rem 1rem; font-size: 0.8125rem; }
          .status-dot { width: 6px; height: 6px; }
          .hero-stats { grid-template-columns: 1fr; gap: 0.875rem; }
          .stat-card { padding: 1.25rem 0.875rem; }
          .stat-value { font-size: 2rem; }
          .grid-pattern { background-size: 30px 30px; }
          .scroll-indicator { bottom: 1.5rem; }
          .scroll-text { font-size: 0.625rem; }
        }
      `}</style>

      <motion.section 
        className="hero-wrapper"
        style={{ opacity, scale }}
      >
        <div className="hero-bg">
          <ParticleBackground />
          <div className="grid-pattern"></div>
          <motion.div 
            className="gradient-orb orb-1"
            style={{ x: mousePosition.x, y: mousePosition.y }}
          />
          <motion.div 
            className="gradient-orb orb-2"
            style={{ x: -mousePosition.x, y: -mousePosition.y }}
          />
          <div className="gradient-orb orb-3"></div>
          <div className="vignette"></div>
        </div>

        <div className="hero-container">
          <div className="status-badge">
            <div className="status-dot"></div>
            <span className="status-text">Available for opportunities</span>
          </div>

          <div className="hero-title-container">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">{personalInfo.name}</h1>
            <h2 className="hero-role">{personalInfo.tagline}</h2>
          </div>

          <p className="hero-tagline">
            I craft <span className="highlight-text">exceptional digital experiences</span> by
            combining elegant code with stunning design. Let's build something amazing together.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="cta-btn cta-primary">
              <span className="btn-text">View My Work</span>
              <HiArrowRight className="btn-icon" />
            </a>
            <button onClick={scrollToContact} className="cta-btn cta-secondary">
              <span className="btn-text">Get In Touch</span>
              <HiArrowRight className="btn-icon" />
            </button>
            <a 
              href={personalInfo.resume} 
              download 
              className="cta-btn cta-secondary"
            >
              <span className="btn-text">Download CV</span>
              <HiDownload className="btn-icon btn-icon-download" />
            </a>
          </div>

          <div className="hero-stats">
            {Object.entries(personalInfo.stats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="stat-card"
              >
                <div className="stat-value">{value}</div>
                <div className="stat-label">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Updated Scroll Indicator - Arrow Only */}
        <div className="scroll-indicator" onClick={scrollToAbout}>
          <span className="scroll-text">Scroll Down</span>
          <div className="scroll-arrow-wrapper">
            <div className="scroll-arrow">
              <HiArrowDown className="scroll-arrow-icon" />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Hero