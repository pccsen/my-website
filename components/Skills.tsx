'use client'

import { useEffect, useRef } from 'react'
import './Skills.css'

const skills = [
  {
    category: 'DevOps',
    items: [
      'Docker & Containers',
      'CI/CD Pipelines',
      'Cloud Infrastructure (AWS/GCP)',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Kubernetes (Learning)',
    ],
  },
  {
    category: 'Backend Development',
    items: [
      'Python',
      'Django & FastAPI',
      'RESTful APIs',
      'Database Design (PostgreSQL, MySQL)',
      'API Integration',
      'Async Programming',
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      'Git & GitHub',
      'Linux/Unix',
      'Bash Scripting',
      'Nginx',
      'Automation',
      'System Administration',
      'Grafana',
      'Prometheus',
      'Kibana',
    ],
  },
]

export default function Skills() {
  const skillsRef = useRef<HTMLElement | null>(null)

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

    if (skillsRef.current) {
      const elements = skillsRef.current.querySelectorAll('.fade-in')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={skillsRef} className="skills">
      <h2 className="fade-in">skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={skill.category} className="skill-card fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
            <h3>{skill.category}</h3>
            <ul className="skill-list">
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
