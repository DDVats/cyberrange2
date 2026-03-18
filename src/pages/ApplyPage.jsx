import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './ApplyPage.css'

export default function ApplyPage() {
  const pageRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', linkedin: '',
    institution: '', degree: '', year: '',
    program: '', interest: [], whyJoin: '',
    experience: '', heardAbout: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.apply-hero', { y: 40, opacity: 0, duration: 0.6, delay: 0.2 })
      gsap.from('.apply-form-container', { y: 40, opacity: 0, duration: 0.6, delay: 0.4 })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      const newInterests = checked 
        ? [...formData.interest, value]
        : formData.interest.filter(i => i !== value)
      setFormData({ ...formData, interest: newInterests })
    } else {
      setFormData({ ...formData, [name]: value })
    }
    if (errors[name]) setErrors({ ...errors, [name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!formData.name) newErrors.name = true
    if (!formData.email) newErrors.email = true
    
    // Calculate words properly accounting for extra spaces
    const words = formData.whyJoin.trim().split(/\s+/).filter(word => word.length > 0)
    if (words.length < 100) newErrors.whyJoin = true
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  return (
    <div ref={pageRef} className="page-content">
      <section className="section apply-hero-section" style={{ paddingTop: 140 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="section-label">// Application Form</div>
          <h1 className="section-title apply-hero" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>Apply Now</h1>
          <p className="section-subtitle">
            Join MUJ-Cyberange to participate in advanced cybersecurity programs, research, and training. 
          </p>
          
          {submitted ? (
            <div className="card success-card">
              <h3 style={{ color: '#00ff41', marginBottom: 16 }}>Application Submitted Successfully!</h3>
              <p>Thank you for applying. Our team will review your application and get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="apply-form-container card">
              {/* Form Sections */}
              <h3 className="form-section-title">Personal Information</h3>
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" name="name" className={`form-input ${errors.name ? 'form-error' : ''}`} value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" name="email" className={`form-input ${errors.email ? 'form-error' : ''}`} value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" name="phone" className="form-input" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <h3 className="form-section-title" style={{ marginTop: 32 }}>Academic/Professional</h3>
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Current Institution / Organization</label>
                  <input type="text" name="institution" className="form-input" value={formData.institution} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">Degree / Role</label>
                  <input type="text" name="degree" className="form-input" value={formData.degree} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Year of Study / Years of Experience</label>
                <input type="text" name="year" className="form-input" value={formData.year} onChange={handleChange} />
              </div>

              <h3 className="form-section-title" style={{ marginTop: 32 }}>Program Interest</h3>
              <div className="form-group">
                <label className="form-label">Which program are you applying for?</label>
                <select name="program" className="form-select" value={formData.program} onChange={handleChange}>
                  <option value="">Select a Program</option>
                  <option value="CyberRange Training">CyberRange Training</option>
                  <option value="Research Internship">Research Internship</option>
                  <option value="Mentorship Program">Mentorship Program</option>
                  <option value="Collaborative Project">Collaborative Project</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Area of Interest</label>
                <div className="checkbox-group">
                  {['Network Security', 'Malware Analysis', 'Penetration Testing', 'Incident Response', 'CTF Training', 'Other'].map(item => (
                    <label key={item} className="checkbox-label">
                      <input type="checkbox" name="interest" value={item} onChange={handleChange} /> {item}
                    </label>
                  ))}
                </div>
              </div>

              <h3 className="form-section-title" style={{ marginTop: 32 }}>Statement</h3>
              <div className="form-group">
                <label className="form-label">Why do you want to join? (Min 100 words) *</label>
                <textarea name="whyJoin" className={`form-textarea ${errors.whyJoin ? 'form-error' : ''}`} value={formData.whyJoin} onChange={handleChange} placeholder="Please explain your motivation in at least 100 words..."></textarea>
                {errors.whyJoin && <span className="error-text">Minimum 100 words required.</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Relevant Experience / Projects (If any)</label>
                <textarea name="experience" className="form-textarea" value={formData.experience} onChange={handleChange}></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">How did you hear about us?</label>
                <select name="heardAbout" className="form-select" value={formData.heardAbout} onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="University">University</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Friend/Colleague">Friend / Colleague</option>
                  <option value="Event">Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 32, justifyContent: 'center', padding: '16px' }}>Submit Application</button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
