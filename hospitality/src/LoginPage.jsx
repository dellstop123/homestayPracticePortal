import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './App.css'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }
  function handleSubmit(e) {
    e.preventDefault()
    // Mock: accept any email/password
    if (!form.email || !form.password) {
      setError('Please enter email and password.')
      return
    }
    localStorage.setItem('user', JSON.stringify({ email: form.email }))
    navigate('/')
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className="auth-error">{error}</div>}
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit" className="book-btn">Login</button>
        <div className="auth-link">Don't have an account? <Link to="/signup">Sign Up</Link></div>
      </form>
    </div>
  )
} 