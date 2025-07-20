import { useState } from 'react'
import './App.css'

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }
  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contactus-container">
      <div className="contactus-content">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Fill out the form below or reach us via the info provided.</p>
        <form className="contactus-form" onSubmit={handleSubmit} aria-label="Contact form">
          <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <button type="submit" className="book-btn">Send Message</button>
          {submitted && <div className="auth-error" style={{color:'#16a34a',background:'#dcfce7'}}>Thank you! We'll get back to you soon.</div>}
        </form>
        <div className="contactus-info">
          <h2>Company Info</h2>
          <p>Guneet Home Stays Pvt. Ltd.<br/>123 Luxury Lane, Mumbai, India<br/>Phone: +91-12345-67890<br/>Email: support@guneethomestays.com</p>
          <div className="contactus-social">
            <a href="#" aria-label="Facebook" className="social-icon">FB</a>
            <a href="#" aria-label="Instagram" className="social-icon">IG</a>
            <a href="#" aria-label="Twitter" className="social-icon">TW</a>
          </div>
        </div>
      </div>
    </div>
  )
} 