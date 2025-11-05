import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiHome, HiArrowLeft } from 'react-icons/hi'

const NotFound = () => {
  return (
    <>
      <style>{`
        .not-found-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: #0F172A;
          position: relative;
          overflow: hidden;
        }

        .not-found-bg {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }

        .not-found-container {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 600px;
        }

        .not-found-code {
          font-size: clamp(6rem, 15vw, 10rem);
          font-weight: 900;
          line-height: 1;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 8s ease infinite;
        }

        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .not-found-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: #F1F5F9;
          margin-bottom: 1rem;
        }

        .not-found-description {
          font-size: 1.125rem;
          color: #94A3B8;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .not-found-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .not-found-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          color: #ffffff;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
          background: #1E293B;
          color: #6366F1;
          border: 2px solid #6366F1;
        }

        .btn-secondary:hover {
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-3px);
        }

        .btn-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          animation: float 10s ease-in-out infinite;
        }

        .circle-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .circle-2 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          right: 15%;
          animation-delay: 2s;
        }

        .circle-3 {
          width: 100px;
          height: 100px;
          top: 60%;
          left: 80%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -20px) rotate(90deg);
          }
          50% {
            transform: translate(-10px, 10px) rotate(180deg);
          }
          75% {
            transform: translate(-20px, -10px) rotate(270deg);
          }
        }

        @media (max-width: 768px) {
          .not-found-page {
            padding: 1.5rem;
          }

          .not-found-code {
            margin-bottom: 0.75rem;
          }

          .not-found-title {
            margin-bottom: 0.75rem;
          }

          .not-found-description {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .not-found-actions {
            flex-direction: column;
          }

          .not-found-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="not-found-page">
        <div className="not-found-bg"></div>

        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="not-found-container"
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="not-found-code"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="not-found-title"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="not-found-description"
          >
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, let's get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="not-found-actions"
          >
            <Link to="/" className="not-found-btn btn-primary">
              <HiHome className="btn-icon" />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="not-found-btn btn-secondary"
            >
              <HiArrowLeft className="btn-icon" />
              <span>Go Back</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default NotFound