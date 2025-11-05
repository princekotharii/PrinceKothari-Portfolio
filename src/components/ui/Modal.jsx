import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'

/**
 * Reusable Modal Component
 * 
 * Usage:
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
 *   Content here
 * </Modal>
 * 
 * Props:
 * - isOpen: boolean
 * - onClose: function
 * - title: string (optional)
 * - size: 'sm' | 'md' | 'lg' | 'xl'
 */

const Modal = ({ 
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  ...props 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(8px);
          z-index: 50;
        }

        .modal-container {
          position: fixed;
          inset: 0;
          z-index: 50;
          overflow-y: auto;
          padding: 1rem;
        }

        .modal-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          position: relative;
          width: 100%;
          background: #1E293B;
          border: 1px solid #334155;
          border-radius: 20px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .modal-sm { max-width: 400px; }
        .modal-md { max-width: 600px; }
        .modal-lg { max-width: 800px; }
        .modal-xl { max-width: 1200px; }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid #334155;
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #F1F5F9;
          margin: 0;
        }

        .modal-close {
          padding: 0.5rem;
          border-radius: 8px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .modal-close:hover {
          background: #334155;
        }

        .modal-close-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #94A3B8;
        }

        .modal-close:hover .modal-close-icon {
          color: #F1F5F9;
        }

        .modal-body {
          padding: 1.5rem;
        }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="modal-backdrop"
            />

            {/* Modal */}
            <div className="modal-container">
              <div className="modal-wrapper">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className={`modal-content modal-${size}`}
                  onClick={(e) => e.stopPropagation()}
                  {...props}
                >
                  {/* Header */}
                  {title && (
                    <div className="modal-header">
                      <h2 className="modal-title">{title}</h2>
                      <button onClick={onClose} className="modal-close">
                        <HiX className="modal-close-icon" />
                      </button>
                    </div>
                  )}

                  {/* Body */}
                  <div className="modal-body">
                    {children}
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal