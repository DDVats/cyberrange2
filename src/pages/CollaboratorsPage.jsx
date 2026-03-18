import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CollaboratorsPage.css'

gsap.registerPlugin(ScrollTrigger)

const collaborators = [
  { name: 'Organization 01', type: 'Industry', desc: 'Placeholder description for a partner organization.', link: '#', logo: 'https://placehold.co/120x60/1e3e62/ffffff?text=Org+01' },
  { name: 'Organization 02', type: 'Academia', desc: 'Placeholder description for a partner organization.', link: '#', logo: 'https://placehold.co/120x60/ff6500/ffffff?text=Org+02' },
  { name: 'Organization 03', type: 'Government', desc: 'Placeholder description for a partner organization.', link: '#', logo: 'https://placehold.co/120x60/0b192c/ffffff?text=Org+03' },
  { name: 'Organization 04', type: 'Industry', desc: 'Placeholder description for a partner organization.', link: '#', logo: 'https://placehold.co/120x60/1e3e62/ffffff?text=Org+04' },
  { name: 'Organization 05', type: 'NGO', desc: 'Placeholder description for a partner organization.', link: '#', logo: 'https://placehold.co/120x60/00ff41/000000?text=Org+05' },
  { name: 'Organization 06', type: 'Academia', desc: 'Placeholder description for a partner organization.', link: '#', logo: 'https://placehold.co/120x60/ff6500/ffffff?text=Org+06' },
  { name: 'Organization 07', type: 'Government', desc: 'Placeholder description for a partner organization.', link: '#', logo: 'https://placehold.co/120x60/0b192c/ffffff?text=Org+07' },
  { name: 'Organization 08', type: 'Industry', desc: 'Placeholder description for a partner organization.', link: '#', logo: 'https://placehold.co/120x60/1e3e62/ffffff?text=Org+08' },
]

export default function CollaboratorsPage() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.collab-page-hero', { y: 40, opacity: 0, duration: 0.6, delay: 0.2 })
      gsap.utils.toArray('.collab-card-item').forEach((el, i) => {
        gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 88%' }, y: 30, opacity: 0, duration: 0.5, delay: (i % 4) * 0.1 })
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="page-content">
      <section className="section collab-hero-section" style={{ paddingTop: 140 }}>
        <div className="container">
          <div className="section-label">// Network</div>
          <h1 className="section-title collab-page-hero" style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>Collaborators</h1>
          <p className="section-subtitle">
            Partnering with global leaders across academia, industry, government, and civil society to advance the frontiers of cybersecurity.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-4 collab-cards-grid">
            {collaborators.map((c, i) => (
              <a key={i} href={c.link} className="card collab-card-item" style={{ display: 'flex', flexDirection: 'column' }}>
                <img src={c.logo} alt={c.name} style={{ width: 120, height: 60, objectFit: 'cover', marginBottom: 20, borderRadius: 4 }} />
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12, gap: 8 }}>
                  <h4 style={{ fontSize: 18, margin: 0, color: '#fff' }}>{c.name}</h4>
                </div>
                <span className="badge" style={{ alignSelf: 'flex-start', marginBottom: 16 }}>{c.type}</span>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.5, flexGrow: 1 }}>{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
