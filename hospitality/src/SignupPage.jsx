import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './App.css'

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.password) {
      setError('Please fill all fields.')
      return
    }
    localStorage.setItem('user', JSON.stringify({ name: form.name, email: form.email }))
    navigate('/')
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <div className="auth-error">{error}</div>}
        <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit" className="book-btn">Sign Up</button>
        <div className="auth-link">Already have an account? <Link to="/login">Login</Link></div>
      </form>
    </div>
  )
} 