import { useState } from 'react'
import './App.css'

const initialReviews = [
  {
    name: 'Alice Johnson',
    hotel: 'Guneet Home Stays Downtown',
    rating: 5,
    review: 'Amazing stay! The staff was super friendly and the room was spotless. Highly recommend.',
    date: '2024-06-01',
  },
  {
    name: 'Rahul Mehra',
    hotel: 'Guneet Home Stays Paris',
    rating: 4,
    review: 'Great location and comfortable rooms. Breakfast could be better.',
    date: '2024-05-28',
  },
  {
    name: 'Sophie Lee',
    hotel: 'Guneet Home Stays Beachside',
    rating: 5,
    review: 'Loved the ocean view and the amenities. Will visit again!',
    date: '2024-05-20',
  },
]

const hotels = [
  'Guneet Home Stays Downtown',
  'Guneet Home Stays Beachside',
  'Guneet Home Stays Paris',
]

export default function GuestReviews() {
  const [reviews, setReviews] = useState(initialReviews)
  const [form, setForm] = useState({ name: '', hotel: hotels[0], rating: 5, review: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.review) return
    setReviews([
      { ...form, date: new Date().toISOString().slice(0, 10) },
      ...reviews,
    ])
    setForm({ name: '', hotel: hotels[0], rating: 5, review: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <div className="guestreviews-container">
      <h1>Guest Reviews</h1>
      <p className="guestreviews-desc">Read what our guests have to say about their stay at Guneet Home Stays, or share your own experience!</p>
      <form className="guestreviews-form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <select name="hotel" value={form.hotel} onChange={handleChange}>
          {hotels.map(h => <option key={h}>{h}</option>)}
        </select>
        <select name="rating" value={form.rating} onChange={handleChange}>
          {[5,4,3,2,1].map(r => <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>)}
        </select>
        <textarea name="review" placeholder="Your Review" value={form.review} onChange={handleChange} required />
        <button className="book-btn" type="submit">Submit Review</button>
        {submitted && <div className="guestreviews-success">Thank you for your review!</div>}
      </form>
      <div className="guestreviews-list">
        {reviews.length === 0 ? (
          <div className="guestreviews-noreviews">No reviews yet. Be the first to review!</div>
        ) : reviews.map((r, i) => (
          <div className="guestreviews-card" key={i}>
            <div className="guestreviews-header">
              <span className="guestreviews-name">{r.name}</span>
              <span className="guestreviews-rating">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
            </div>
            <div className="guestreviews-hotel">{r.hotel}</div>
            <div className="guestreviews-date">{r.date}</div>
            <div className="guestreviews-text">{r.review}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 