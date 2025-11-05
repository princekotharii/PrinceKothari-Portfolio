import React from 'react'

/**
 * Reusable Badge Component
 * 
 * Usage:
 * <Badge>Default</Badge>
 * <Badge variant="primary">Primary</Badge>
 * <Badge variant="success">Success</Badge>
 * 
 * Props:
 * - variant: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
 * - size: 'sm' | 'md' | 'lg'
 */

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '',
  ...props 
}) => {
  return (
    <>
      <style>{`
        .badge-base {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
          font-weight: 500;
          border: 1px solid;
        }

        /* Variants */
        .badge-default {
          background: rgba(148, 163, 184, 0.1);
          color: #94A3B8;
          border-color: rgba(148, 163, 184, 0.3);
        }

        .badge-primary {
          background: rgba(99, 102, 241, 0.1);
          color: #6366F1;
          border-color: rgba(99, 102, 241, 0.3);
        }

        .badge-success {
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
          border-color: rgba(16, 185, 129, 0.3);
        }

        .badge-warning {
          background: rgba(245, 158, 11, 0.1);
          color: #F59E0B;
          border-color: rgba(245, 158, 11, 0.3);
        }

        .badge-danger {
          background: rgba(239, 68, 68, 0.1);
          color: #EF4444;
          border-color: rgba(239, 68, 68, 0.3);
        }

        .badge-info {
          background: rgba(6, 182, 212, 0.1);
          color: #06B6D4;
          border-color: rgba(6, 182, 212, 0.3);
        }

        /* Sizes */
        .badge-sm {
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
        }

        .badge-md {
          padding: 0.375rem 1rem;
          font-size: 0.875rem;
        }

        .badge-lg {
          padding: 0.5rem 1.25rem;
          font-size: 1rem;
        }
      `}</style>

      <span
        className={`badge-base badge-${variant} badge-${size} ${className}`}
        {...props}
      >
        {children}
      </span>
    </>
  )
}

export default Badge