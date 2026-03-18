import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import './TrainingPage.css'

gsap.registerPlugin(ScrollTrigger)

const programs = [
  { title: 'CTF Bootcamp', duration: '4 Weeks', level: 'Beginner', desc: 'Intensive Capture The Flag training covering basic cryptography, web exploitation, and steganography.' },
  { title: 'Red Team Fundamentals', duration: '8 Weeks', level: 'Intermediate', desc: 'Offensive security techniques, network exploitation, persistence, and evasion tools.' },
  { title: 'Blue Team Defense', duration: '8 Weeks', level: 'Intermediate', desc: 'Monitoring, intrusion detection, log analysis, and rapid incident response protocols.' },
  { title: 'Malware Reverse Engineering', duration: '12 Weeks', level: 'Advanced', desc: 'Static and dynamic analysis techniques to dissect complex malware and understand behavior.' },
  { title: 'Web Application Security', duration: '6 Weeks', level: 'Intermediate', desc: 'Focus on OWASP Top 10, common web vulnerabilities, and bug bounty fundamentals.' },
  { title: 'Cloud Security', duration: '8 Weeks', level: 'Advanced', desc: 'Securing AWS, GCP, and Azure environments, IAM policies, and cloud misconfigurations.' }
]

const tracks = ['Network Ops', 'AppSec', 'Threat Hunting', 'DFIR', 'Reversing', 'DevSecOps', 'CloudSec', 'HardwareSec']

export default function TrainingPage() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.training-hero', { y: 40, opacity: 0, duration: 0.6, delay: 0.2 })
      gsap.from('.track-pill', {
        y: 20, opacity: 0, duration: 0.4, stagger: 0.05, delay: 0.4
      })
      gsap.from('.program-card', {
        scrollTrigger: { trigger: '.programs-grid', start: 'top 80%' },
        y: 30, opacity: 0, duration: 0.5, stagger: 0.1
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="page-content">
      <section className="section training-hero-section" style={{ paddingTop: 140, paddingBottom: 60 }}>
        <div className="container">
          <div className="section-label">// Education</div>
          <h1 className="section-title training-hero" style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>Training & Programs</h1>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            Hands-on cybersecurity education designed to forge the next generation of security professionals.
          </p>

          <div className="training-stats grid-4" style={{ marginBottom: 48 }}>
            <div className="stat-card">
              <h3>8</h3><p>Learning Tracks</p>
            </div>
            <div className="stat-card">
              <h3>6</h3><p>Mentors</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3><p>Lab Access</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3><p>Partners</p>
            </div>
          </div>
          
          <h4 className="tracks-title">Available Tracks:</h4>
          <div className="tracks-container">
            {tracks.map((t, i) => (
              <span key={i} className="track-pill">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container">
          <h2 className="section-title" style={{ fontSize: 32, marginBottom: 40 }}>Current Programs</h2>
          <div className="grid-3 programs-grid">
            {programs.map((prog, i) => (
              <div key={i} className="card program-card">
                <div className="prog-badges">
                  <span className="badge"><span className="badge-dot" style={{ background: prog.level === 'Advanced' ? '#ff3366' : prog.level === 'Intermediate' ? '#ffeb3b' : '#00ff41' }}></span>{prog.level}</span>
                  <span className="badge" style={{ borderColor: 'transparent', background: 'rgba(255,255,255,0.05)' }}>{prog.duration}</span>
                </div>
                <h3 className="service-title">{prog.title}</h3>
                <p className="service-desc">{prog.desc}</p>
                <Link to="/apply" className="btn btn-primary" style={{ marginTop: 24, alignSelf: 'flex-start' }}>Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
