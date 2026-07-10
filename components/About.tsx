'use client'

import { useEffect, useRef } from 'react'
import './About.css'

export default function About() {
  const aboutRef = useRef<HTMLElement | null>(null)

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

    if (aboutRef.current) {
      const elements = aboutRef.current.querySelectorAll('.fade-in')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={aboutRef} className="about">
      <h2 className="fade-in">about</h2>
      <div className="about-content">
        <div className="about-text fade-in">
          <p>
            I'm Shakkhat Nurbek - a DevOps & iOS Engineer. I design and maintain 
            secure, scalable cloud infrastructure and build high-quality native 
            iOS applications.
          </p>
          <p>
            With a background in Information Security (Satbayev University, 4th year), 
            I combine deep technical knowledge with a passion for automation and 
            clean code. My toolkit includes Kubernetes, Docker, Swift, and Python. 
          </p>
          <p>
            I'm looking for full-time positions and freelance projects where I can 
            deliver real value and grow as an engineer.
          </p>
        </div>
        <div className="about-stats fade-in">
          <div className="stat-item">
            <div className="stat-number">1+</div>
            <div className="stat-label">Years of Programming</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4th</div>
            <div className="stat-label">Year Student</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Available for Work</div>
          </div>
        </div>
      </div>
    </section>
  )
}
