import React from 'react'

/**
 * Reusable Input Component
 * 
 * Usage:
 * <Input placeholder="Enter name" />
 * <Input type="email" label="Email" error="Invalid email" />
 * 
 * Props:
 * - label: string (optional)
 * - error: string (optional)
 * - type: 'text' | 'email' | 'password' | 'number' | etc.
 */

const Input = ({ 
  label,
  error,
  type = 'text',
  className = '',
  ...props 
}) => {
  return (
    <>
      <style>{`
        .input-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .input-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #F1F5F9;
        }

        .input-field {
          width: 100%;
          padding: 0.75rem 1rem;
          background: #0F172A;
          border: 1px solid #334155;
          border-radius: 8px;
          color: #F1F5F9;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .input-field::placeholder {
          color: #64748B;
        }

        .input-field:focus {
          outline: none;
          border-color: #6366F1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .input-field.error {
          border-color: #EF4444;
        }

        .input-field.error:focus {
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .input-error {
          font-size: 0.875rem;
          color: #EF4444;
        }
      `}</style>

      <div className="input-wrapper">
        {label && (
          <label className="input-label">{label}</label>
        )}
        <input
          type={type}
          className={`input-field ${error ? 'error' : ''} ${className}`}
          {...props}
        />
        {error && (
          <span className="input-error">{error}</span>
        )}
      </div>
    </>
  )
}

export default Input