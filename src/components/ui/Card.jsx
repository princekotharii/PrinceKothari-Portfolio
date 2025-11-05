import React from 'react'
import { motion } from 'framer-motion'

/**
 * Reusable Card Component
 * 
 * Usage:
 * <Card>Content here</Card>
 * <Card hover glow>With effects</Card>
 * 
 * Props:
 * - hover: boolean (hover effect)
 * - glow: boolean (glow on hover)
 * - padding: 'sm' | 'md' | 'lg'
 * - className: string
 */

const Card = ({ 
  children, 
  hover = false,
  glow = false,
  padding = 'md',
  className = '',
  ...props 
}) => {
  return (
    <>
      <style>{`
        .card-base {
          background: #1E293B;
          border: 1px solid #334155;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          border-color: rgba(99, 102, 241, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .card-glow:hover {
          box-shadow: 0 0 40px rgba(99, 102, 241, 0.3);
        }

        .card-padding-sm {
          padding: 1rem;
        }

        .card-padding-md {
          padding: 1.5rem;
        }

        .card-padding-lg {
          padding: 2rem;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`card-base ${hover ? 'card-hover' : ''} ${glow ? 'card-glow' : ''} card-padding-${padding} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    </>
  )
}

export default Card