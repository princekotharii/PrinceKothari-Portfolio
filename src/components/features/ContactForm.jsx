import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPaperAirplane } from 'react-icons/hi'
import { sendEmail, validateForm } from '../../utils/emailService'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validation = validateForm(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    const result = await sendEmail(formData)
    
    setIsSubmitting(false)
    setSubmitStatus(result)

    if (result.success) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }
  }

  return (
    <>
      <style>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #F1F5F9;
          margin-bottom: 0.5rem;
        }

        .form-input,
        .form-textarea {
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

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #64748B;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #6366F1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .form-input.error,
        .form-textarea.error {
          border-color: #EF4444;
        }

        .form-input.error:focus,
        .form-textarea.error:focus {
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 150px;
        }

        .form-error {
          margin-top: 0.25rem;
          font-size: 0.875rem;
          color: #EF4444;
        }

        .form-status {
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-status-success {
          background: rgba(16, 185, 129, 0.1);
          border-color: rgba(16, 185, 129, 0.3);
          color: #10B981;
        }

        .form-status-error {
          background: rgba(239, 68, 68, 0.1);
          border-color: rgba(239, 68, 68, 0.3);
          color: #EF4444;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.875rem 1.5rem;
          background: linear-gradient(90deg, #6366F1, #8B5CF6);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .submit-btn-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .loading-spinner {
          display: inline-block;
          width: 1.25rem;
          height: 1.25rem;
          border: 2px solid #ffffff;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .contact-form {
            gap: 1.25rem;
          }

          .form-input,
          .form-textarea {
            padding: 0.625rem 0.875rem;
            font-size: 0.9375rem;
          }

          .submit-btn {
            padding: 0.75rem 1.25rem;
          }
        }
      `}</style>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="contact-form"
      >
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'error' : ''}`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="form-error">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="form-error">{errors.email}</p>
          )}
        </div>

        {/* Subject */}
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            placeholder="Project Inquiry"
          />
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className={`form-textarea ${errors.message ? 'error' : ''}`}
            placeholder="Tell me about your project or just say hi!"
          />
          {errors.message && (
            <p className="form-error">{errors.message}</p>
          )}
        </div>

        {/* Submit Status */}
        {submitStatus && (
          <div className={`form-status ${
            submitStatus.success ? 'form-status-success' : 'form-status-error'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-btn"
        >
          {isSubmitting ? (
            <>
              <span className="loading-spinner"></span>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <HiPaperAirplane className="submit-btn-icon" />
            </>
          )}
        </button>
      </motion.form>
    </>
  )
}

export default ContactForm