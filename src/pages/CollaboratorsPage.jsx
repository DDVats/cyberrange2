import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CollaboratorsPage.css'

gsap.registerPlugin(ScrollTrigger)

const collaborators = [
  { name: 'SecureNet Labs', type: 'Industry', desc: 'Leading provider of enterprise network security solutions.', link: '#', logo: 'https://placehold.co/120x60/1e3e62/ffffff?text=SecureNet' },
  { name: 'IIT Bombay Cyber Cell', type: 'Academia', desc: 'Premier academic research cell focusing on cryptography and protocol security.', link: '#', logo: 'https://placehold.co/120x60/ff6500/ffffff?text=IIT+B' },
  { name: 'DRDO CyberSec Division', type: 'Government', desc: 'National defense research unit specializing in critical infrastructure protection.', link: '#', logo: 'https://placehold.co/120x60/0b192c/ffffff?text=DRDO' },
  { name: 'Infosys Security Research', type: 'Industry', desc: 'Applied R&D lab focusing on AI-driven threat detection and analysis.', link: '#', logo: 'https://placehold.co/120x60/1e3e62/ffffff?text=Infosys' },
  { name: 'CyberPeace Foundation', type: 'NGO', desc: 'Award-winning civil society organization promoting digital peace and cyber hygiene.', link: '#', logo: 'https://placehold.co/120x60/00ff41/000000?text=CyberPeace' },
  { name: 'ETH Zurich InfoSec', type: 'Academia', desc: 'Department of Computer Science focusing on verifiable security and privacy.', link: '#', logo: 'https://placehold.co/120x60/ff6500/ffffff?text=ETH' },
  { name: 'CISA Partner Network', type: 'Government', desc: 'Information sharing and analysis center for proactive threat mitigation.', link: '#', logo: 'https://placehold.co/120x60/0b192c/ffffff?text=CISA' },
  { name: 'Palo Alto Networks', type: 'Industry', desc: 'Collaborating on next-generation firewall technologies and malware sandboxing.', link: '#', logo: 'https://placehold.co/120x60/1e3e62/ffffff?text=Palo+Alto' },
  { name: 'OWASP Foundation', type: 'NGO', desc: 'Open-source software community fostering secure development practices.', link: '#', logo: 'https://placehold.co/120x60/00ff41/000000?text=OWASP' },
  { name: 'ZHAW Cyber Defence Lab', type: 'Academia', desc: 'Applied sciences university focusing on cyber-physical systems security.', link: '#', logo: 'https://placehold.co/120x60/ff6500/ffffff?text=ZHAW' },
  { name: 'NTRO Cyber Branch', type: 'Government', desc: 'Technical intelligence agency focused on securing national cyber space.', link: '#', logo: 'https://placehold.co/120x60/0b192c/ffffff?text=NTRO' },
  { name: 'CrowdStrike Intel', type: 'Industry', desc: 'Elite threat intelligence team collaborating on adversary tracking.', link: '#', logo: 'https://placehold.co/120x60/1e3e62/ffffff?text=CrowdStrike' },
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
