'use client'

import { useEffect, useRef } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'Infrastructure Automation',
    description: 'Automated deployment pipeline with CI/CD integration, containerization, and cloud infrastructure setup.',
    tech: ['Python', 'Docker', 'CI/CD', 'AWS'],
    status: 'In Progress',
  },
  {
    title: 'RESTful API Service',
    description: 'High-performance backend API built with FastAPI, featuring authentication, database integration, and comprehensive documentation.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    status: 'Completed',
  },
  {
    title: 'DevOps Monitoring Dashboard',
    description: 'Real-time monitoring solution for infrastructure metrics, logs, and system health visualization.',
    tech: ['Python', 'Grafana', 'APIs', 'WebSockets'],
    status: 'Coming Soon',
  },
]

export default function Projects() {
  const projectsRef = useRef<HTMLElement | null>(null)

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

    if (projectsRef.current) {
      const elements = projectsRef.current.querySelectorAll('.fade-in')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={projectsRef} className="projects">
      <h2 className="fade-in">projects</h2>
      <p className="projects-intro fade-in">
        Here are some of the projects I'm working on. More details available upon request.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.title} className="project-card fade-in" style={{ transitionDelay: `${index * 0.15}s` }}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
