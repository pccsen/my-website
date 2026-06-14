'use client'

import { useEffect, useRef } from 'react'
import './Skills.css'

const skills = [
  {
    category: 'DevOps & Infrastructure',
    items: [
      'Docker & Containerization',
      'Kubernetes (K8s)',
      'Helm Charts',
      'Linux Server Administration (Ubuntu)',
      'Nginx (Reverse Proxy & Ingress)',
      'Infrastructure as Code (Terraform)',
    ],
  },
  {
    category: 'CI/CD & Automation',
    items: [
      'GitLab CI/CD',
      'GitHub Actions',
      'ArgoCD',
      'Bash Scripting',
      'Automation',
    ],
  },
  {
    category: 'Backend Development',
    items: [
      'Python (FastAPI, Django, Flask)',
      'RESTful APIs',
      'gRPC',
      'PostgreSQL',
      'Redis',
      'MongoDB',
    ],
  },
  {
    category: 'Monitoring & Logging',
    items: [
      'Prometheus',
      'Grafana',
      'OpenTelemetry',
      'Wazuh (SIEM)',
      'Kibana',
    ],
  },
  {
    category: 'Security (DevSecOps)',
    items: [
      'SAST (Static Analysis)',
      'DAST (Dynamic Analysis)',
      'Defect Dojo',
      'Derscan',
      'Pre-commit Hooks',
      'Trivy (Vulnerability Scanning)',
      'HashiCorp Vault',
      'RBAC',
      'Firewall Configuration',
      'Security Alerts Analysis',
    ],
  },
  {
    category: 'Testing & Load',
    items: [
      'Locust (Load Testing)',
      'pytest',
      'unittest',
    ],
  },
  {
    category: 'Version Control & Docs',
    items: [
      'Git',
      'GitHub',
      'Technical Documentation',
      'Confluence',
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
