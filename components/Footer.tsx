'use client'

import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Shakkhat Nurbek. All rights reserved.</p>
        <p className="footer-subtitle">DevOps Engineer & Python Backend Developer</p>
      </div>
    </footer>
  )
}
