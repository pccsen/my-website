'use client'

import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)

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

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.fade-in')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" ref={heroRef} className="hero">
      <div className="hero-content">
        <h1 className="fade-in">hi.</h1>
        <h1 className="fade-in" style={{ transitionDelay: '0.1s' }}>i'm</h1>
        <h1 className="fade-in name" style={{ transitionDelay: '0.2s' }}>
          sen.
        </h1>
        <p className="fade-in hero-description" style={{ transitionDelay: '0.3s' }}>
          A DevOps Engineer and Python Backend Developer. I build scalable infrastructure 
          and robust APIs — merging automation, cloud technologies, and clean code to solve 
          complex problems.
        </p>
        <div className="hero-cta fade-in" style={{ transitionDelay: '0.4s' }}>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}
