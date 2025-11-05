import React from 'react'

/**
 * Reusable Loading Spinner
 * 
 * Usage:
 * <LoadingSpinner />
 * <LoadingSpinner size="lg" color="#6366F1" />
 * 
 * Props:
 * - size: 'sm' | 'md' | 'lg'
 * - color: string (hex color)
 */

const LoadingSpinner = ({ size = 'md', color = '#6366F1' }) => {
  return (
    <>
      <style>{`
        .spinner {
          display: inline-block;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-top-color: ${color};
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        .spinner-sm { width: 1rem; height: 1rem; }
        .spinner-md { width: 1.5rem; height: 1.5rem; }
        .spinner-lg { width: 2rem; height: 2rem; }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className={`spinner spinner-${size}`} />
    </>
  )
}

export default LoadingSpinner