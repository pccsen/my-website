'use client'

import { useEffect, useRef } from 'react'
import './Skills.css'

const skills = [
  {
    category: '☁️ DevOps & Cloud',
    items: [
      'Kubernetes',
      'Docker',
      'Nginx',
      'Helm',
      'AWS/Yandex.cloud',
      'Terraform/Ansible',
      'CI/CD (GitLab CI/GitHub Actions)',
      'Git',
    ],
  },
  {
    category: '📱 iOS Development',
    items: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'Xcode',
      'RESTful APIs',
      'Core Data/SwiftData',
      'MVVM',
      'Unit Testing',
      'Git',
    ],
  },
];

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
