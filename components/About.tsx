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
            I'm Shakkhat Nurbek a 3rd-year student at Satbayev University, majoring in 
            Information Security. My passion for programming started in school and has 
            evolved into a deep interest in DevOps practices and backend development.
          </p>
          <p>
            I'm focused on building reliable, scalable infrastructure and writing clean, 
            efficient Python code. I believe in automation, continuous improvement, and 
            solving real problems with elegant solutions.
          </p>
          <p>
            Currently available for full-time positions and freelance projects. I'm always 
            open to new opportunities and exciting challenges in the tech industry.
          </p>
        </div>
        <div className="about-stats fade-in">
          <div className="stat-item">
            <div className="stat-number">1+</div>
            <div className="stat-label">Years of Programming</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3rd</div>
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
