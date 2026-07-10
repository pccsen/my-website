'use client'

import { useEffect, useRef } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'TCP Load Balancer',
    description: 'High-performance TCP proxy with WebSocket support, health checks, and Prometheus metrics. Handles 15k req/s.',
    tech: ['Go', 'gorilla/websocket', 'Prometheus', 'Docker'],
    status: 'Completed',
    link: 'https://github.com/pccsen/GO-tcp-load-balancer',
  },
  {
    title: 'gRPC Auth Service',
    description: 'Secure authentication service with JWT, rate limiting, Redis sessions, and graceful shutdown.',
    tech: ['Go', 'gRPC', 'Redis', 'JWT', 'PostgreSQL'],
    status: 'Completed',
    link: 'https://github.com/pccsen/auth-service',
  },
  {
    title: 'URL Shortener API',
    description: 'RESTful URL shortening service with FastAPI, PostgreSQL, and Docker containerization.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    status: 'Completed',
    link: 'https://github.com/pccsen/url_shortener_product',
  },
  {
    title: 'Server Performance Stats',
    description: 'Linux server performance monitoring script with real-time metrics collection and reporting.',
    tech: ['Shell', 'Linux', 'Performance'],
    status: 'Completed',
    link: 'https://github.com/pccsen/server-performance-stats',
  },
  {
    title: 'Nginx Log Analyzer',
    description: 'Log analysis tool for Nginx with pattern detection and anomaly reporting.',
    tech: ['Shell', 'Nginx', 'Log Analysis'],
    status: 'Completed',
    link: 'https://github.com/pccsen/nginx-log-analyzer',
  },
  {
  title: 'SwiftUI Fitness Tracker',
  description: 'Native iOS app with HealthKit integration, custom charts, and offline-first Core Data storage.',
  tech: ['Swift', 'SwiftUI', 'HealthKit', 'Core Data'],
  status: 'In Progress',
  link: 'https://github.com/pccsen/fitness-tracker',
  },
];

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
