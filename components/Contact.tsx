'use client'

import { useEffect, useRef } from 'react'
import './Contact.css'

export default function Contact() {
  const contactRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (contactRef.current) {
      const elements = contactRef.current.querySelectorAll('.fade-in')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={contactRef} className="contact">
      <h2 className="fade-in">let's talk</h2>
      <p className="contact-intro fade-in">
        Say hi, share an idea, or tell me what you're building! Always up for a good 
        conversation or an interesting project. Available for full-time positions and 
        freelance opportunities.
      </p>
      <div className="contact-content fade-in">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <h3>Email</h3>
              <a href="mailto:your.email@example.com">shakkhatnurbek@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <div>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/nurbek-shakkhat-92a304348/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/nurbek-shakkhat
              </a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">💬</div>
            <div>
              <h3>Telegram</h3>
              <a href="https://t.me/yosenup" target="_blank" rel="noopener noreferrer">
                @yosenup
              </a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🔗</div>
            <div>
              <h3>GitHub</h3>
              <a href="https://github.com/pccsen" target="_blank" rel="noopener noreferrer">
                github.com/pccsen
              </a>
            </div>
          </div>
        </div>
        <div className="contact-cta">
          <p className="availability">
            <strong>Currently available for:</strong>
            <br />
            Full-time positions • Freelance projects • Open source contributions
          </p>
        </div>
      </div>
    </section>
  )
}
