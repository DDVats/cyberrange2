import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './PeoplePage.css'

gsap.registerPlugin(ScrollTrigger)

const team = {
  'Faculty Advisory Council': [
    { name: 'Faculty Member 01', role: 'Advisor', initials: 'F1' },
    { name: 'Faculty Member 02', role: 'Advisor', initials: 'F2' },
    { name: 'Faculty Member 03', role: 'Advisor', initials: 'F3' },
  ],
  'Research Wing': [
    { name: 'Research Member 01', role: 'Researcher', initials: 'R1' },
    { name: 'Research Member 02', role: 'Researcher', initials: 'R2' },
    { name: 'Research Member 03', role: 'Researcher', initials: 'R3' },
  ],
  'Technical Wing': [
    { name: 'Technical Member 01', role: 'Engineer', initials: 'T1' },
    { name: 'Technical Member 02', role: 'Engineer', initials: 'T2' },
    { name: 'Technical Member 03', role: 'Engineer', initials: 'T3' },
    { name: 'Technical Member 04', role: 'Engineer', initials: 'T4' },
    { name: 'Technical Member 05', role: 'Engineer', initials: 'T5' },
    { name: 'Technical Member 06', role: 'Engineer', initials: 'T6' },
  ],
  'Collaborations Wing': [
    { name: 'Collaboration Member 01', role: 'Partner Liaison', initials: 'C1' },
    { name: 'Collaboration Member 02', role: 'Partner Liaison', initials: 'C2' },
  ],
  'Management Wing': [
    { name: 'Management Member 01', role: 'Operations', initials: 'M1' },
  ],
}

export default function PeoplePage() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-hero-title', { y: 40, opacity: 0, duration: 0.6, delay: 0.2 })
      gsap.utils.toArray('.team-section-heading').forEach(el => {
        gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 85%' }, x: -30, opacity: 0, duration: 0.5 })
      })
      gsap.utils.toArray('.team-card').forEach((el, i) => {
        gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 88%' }, y: 30, opacity: 0, duration: 0.5, delay: (i % 4) * 0.06 })
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="page-content">
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="container">
          <div className="section-label">// Our Team</div>
          <h1 className="section-title team-hero-title" style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>Team</h1>
          <p className="section-subtitle">The brilliant minds behind the research, operations, and innovations at MUJ-Cyberange Cyberange Lab.</p>
        </div>
      </section>

      {Object.entries(team).map(([heading, members], catIdx) => (
        <section key={catIdx} className="section team-section" style={{ paddingTop: catIdx === 0 ? 0 : undefined }}>
          <div className="container">
            <h2 className="team-section-heading">{heading}</h2>
            <div className="container"><div className="section-divider" style={{ marginBottom: 32 }} /></div>
            <div className="team-grid">
              {members.map((p, i) => (
                <div key={i} className="card team-card">
                  <div className="team-photo-wrap">
                    {p.photo ? (
                      <img src={p.photo} alt={p.name} className="team-photo" />
                    ) : (
                      <span className="team-photo-initials">{p.initials}</span>
                    )}
                  </div>
                  <div className="team-info">
                    <h4 className="team-name">{p.name}</h4>
                    <span className="team-role">{p.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
