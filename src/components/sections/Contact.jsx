import React from 'react'
import ContactForm from '../features/ContactForm'
import ContactInfo from '../features/ContactInfo'
import SocialLinks from '../features/SocialLinks'

const Contact = () => {
  return (
    <>
      <style>{`
        .contact-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #F59E0B;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .contact-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, #F59E0B, #EF4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-subtitle {
          color: #94A3B8;
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .contact-info-wrapper {
          animation: fadeInLeft 0.6s ease-out;
        }

        .contact-form-wrapper {
          background: #1E293B;
          border: 1px solid #334155;
          border-radius: 20px;
          padding: 2rem;
          animation: fadeInRight 0.6s ease-out 0.2s both;
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #F1F5F9;
          margin-bottom: 1.5rem;
        }

        .contact-social {
          animation: fadeInUp 0.6s ease-out 0.4s both;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .contact-header {
            margin-bottom: 2rem;
          }

          .contact-grid {
            gap: 2rem;
            margin-bottom: 2rem;
          }

          .contact-form-wrapper {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .contact-form-wrapper {
            padding: 1.25rem;
          }
        }
      `}</style>

      <section id="contact" className="section-padding">
        <div className="contact-section">
          <div className="contact-header">
            <span className="contact-badge">Epilogue: Let's Connect</span>
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-subtitle">
              Have a project in mind or just want to chat? I'd love to hear from you!
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-wrapper">
              <ContactInfo />
            </div>
            <div className="contact-form-wrapper">
              <h3 className="form-title">Send Me a Message</h3>
              <ContactForm />
            </div>
          </div>

          <div className="contact-social">
            <SocialLinks />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact