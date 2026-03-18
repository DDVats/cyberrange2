import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ServicesPage.css'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: '🔍', title: 'Vulnerability Assessment', desc: 'Comprehensive scanning and analysis of systems to identify potential vulnerabilities before they can be exploited.' },
  { icon: '🎯', title: 'Penetration Testing', desc: 'Simulated attacks on your infrastructure to uncover real-world weaknesses and validate existing security controls.' },
  { icon: '📋', title: 'Security Audits', desc: 'In-depth review of organizational policies, network configurations, and infrastructure alignment with security standards.' },
  { icon: '🛡️', title: 'Incident Response', desc: 'Rapid containment, eradication, and recovery support from cyber incidents to minimize downtime and data loss.' },
  { icon: '🎓', title: 'Security Training', desc: 'Hands-on workshops, seminars, and awareness programs tailored to elevate the cybersecurity proficiency of teams.' },
  { icon: '🌐', title: 'Threat Intelligence', desc: 'Real-time monitoring, threat hunting, and advisory reports on emerging threats specific to your industry.' }
]

export default function ServicesPage() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-hero', { y: 40, opacity: 0, duration: 0.6, delay: 0.2 })
      gsap.from('.service-card', {
        scrollTrigger: { trigger: '.services-grid', start: 'top 80%' },
        y: 30, opacity: 0, duration: 0.5, stagger: 0.1
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="page-content">
      <section className="section services-hero-section" style={{ paddingTop: 140 }}>
        <div className="container">
          <div className="section-label">// Offerings</div>
          <h1 className="section-title services-hero" style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>Our Services</h1>
          <p className="section-subtitle">
            Providing top-tier cybersecurity solutions, assessments, and rapid response to secure your digital infrastructure.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-3 services-grid">
            {services.map((svc, i) => (
              <div key={i} className="card service-card">
                <div className="service-icon">{svc.icon}</div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>
                <Link to="/apply" className="service-link">Learn More <span>→</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
