import React from 'react'
import { motion } from 'framer-motion'

/**
 * Reusable Button Component
 * 
 * Usage:
 * <Button variant="primary" size="md">Click Me</Button>
 * <Button variant="outline" icon={<Icon />}>With Icon</Button>
 * 
 * Props:
 * - variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
 * - size: 'sm' | 'md' | 'lg'
 * - icon: React component (optional)
 * - disabled: boolean
 * - onClick: function
 */

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon,
  disabled = false,
  className = '',
  ...props 
}) => {
  return (
    <>
      <style>{`
        .btn-base {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 600;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .btn-base:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Variants */
        .btn-primary {
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
          background: #1E293B;
          color: #6366F1;
          border: 2px solid #6366F1;
        }

        .btn-secondary:hover:not(:disabled) {
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: #6366F1;
          border: 2px solid #6366F1;
        }

        .btn-outline:hover:not(:disabled) {
          background: rgba(99, 102, 241, 0.1);
        }

        .btn-ghost {
          background: transparent;
          color: #94A3B8;
        }

        .btn-ghost:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.05);
          color: #F1F5F9;
        }

        .btn-danger {
          background: linear-gradient(135deg, #EF4444, #DC2626);
          color: #ffffff;
        }

        .btn-danger:hover:not(:disabled) {
          background: linear-gradient(135deg, #DC2626, #B91C1C);
          transform: translateY(-2px);
        }

        /* Sizes */
        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .btn-md {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.125rem;
        }

        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <motion.button
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        disabled={disabled}
        className={`btn-base btn-${variant} btn-${size} ${className}`}
        {...props}
      >
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </motion.button>
    </>
  )
}

export default Button