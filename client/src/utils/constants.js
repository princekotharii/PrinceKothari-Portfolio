/**
 * Application Constants
 * Client Project
 */

// Colors
export const COLORS = {
  primary: '#0EA5E9',
  primaryDark: '#0284C7',
  secondary: '#06B6D4',
  accent: '#8B5CF6',
  success: '#10B981',
  warning: '#F59E0B',
  info: '#06B6D4',
  danger: '#EF4444',
  dark: '#0F172A',
  card: '#1E293B',
  border: '#334155',
  text: '#F1F5F9',
  textMuted: '#94A3B8',
}

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  userId: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}
