/**
 * Email Service using EmailJS
 * 
 * 👉 Configure EmailJS at https://www.emailjs.com/
 * 
 * Setup:
 * 1. Create account on EmailJS
 * 2. Add email service (Gmail, Outlook, etc.)
 * 3. Create email template
 * 4. Get Service ID, Template ID, and User ID
 * 5. Update constants.js with your credentials
 */

import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './constants'

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data { name, email, subject, message }
 * @returns {Promise<Object>} - Success/error response
 */
export const sendEmail = async (formData) => {
  try {
    // Validate EmailJS configuration
    if (
      !EMAILJS_CONFIG.serviceId ||
      !EMAILJS_CONFIG.templateId ||
      !EMAILJS_CONFIG.userId ||
      EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID'
    ) {
      console.warn('EmailJS not configured. Please update constants.js with your credentials.')
      
      // Simulate success for demo
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: 'Message sent successfully! (Demo mode - EmailJS not configured)',
          })
        }, 1000)
      })
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'New Contact Form Submission',
      message: formData.message,
      to_name: 'Prince Kothari',
    }

    // Send email
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.userId
    )

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
      }
    } else {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error('Email send error:', error)
    return {
      success: false,
      message: 'Oops! Something went wrong. Please try again or email me directly.',
    }
  }
}

/**
 * Validate form data
 * @param {Object} formData - Form data to validate
 * @returns {Object} - Validation result { isValid, errors }
 */
export const validateForm = (formData) => {
  const errors = {}

  // Name validation
  if (!formData.name || formData.name.trim().length === 0) {
    errors.name = 'Name is required'
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  } else if (formData.name.trim().length > 50) {
    errors.name = 'Name must be less than 50 characters'
  }

  // Email validation
  if (!formData.email || formData.email.trim().length === 0) {
    errors.email = 'Email is required'
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  // Message validation
  if (!formData.message || formData.message.trim().length === 0) {
    errors.message = 'Message is required'
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  } else if (formData.message.trim().length > 1000) {
    errors.message = 'Message must be less than 1000 characters'
  }

  // Subject is optional, but validate if provided
  if (formData.subject && formData.subject.trim().length > 100) {
    errors.subject = 'Subject must be less than 100 characters'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Check if email is valid
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Sanitize form input
 * @param {string} input - Input to sanitize
 * @returns {string} - Sanitized input
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return ''
  
  // Remove HTML tags
  return input
    .replace(/<[^>]*>/g, '')
    .trim()
}

/**
 * Format form data before sending
 * @param {Object} formData - Raw form data
 * @returns {Object} - Formatted form data
 */
export const formatFormData = (formData) => {
  return {
    name: sanitizeInput(formData.name),
    email: sanitizeInput(formData.email).toLowerCase(),
    subject: sanitizeInput(formData.subject),
    message: sanitizeInput(formData.message),
  }
}