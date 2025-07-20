import './App.css'
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const hotels = [
  {
    id: 1,
    name: 'Guneet Home Stays Downtown',
    location: 'New York',
    rating: 4.7,
    price: 220,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Guneet Home Stays Beachside',
    location: 'Miami',
    rating: 4.5,
    price: 180,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Guneet Home Stays Mountain View',
    location: 'Denver',
    rating: 4.8,
    price: 250,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Guneet Home Stays Lakeside',
    location: 'Chicago',
    rating: 4.6,
    price: 210,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
  },
]

const destinations = [
  {
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'London',
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Tokyo',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sydney',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1504609813440-554e64a8f005?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Rome',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Barcelona',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Prague',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80',
  },
  { name: 'Vienna', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=400&q=80' },
  { name: 'Amsterdam', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80' },
  { name: 'Berlin', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { name: 'Lisbon', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  { name: 'Budapest', image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80' },
  { name: 'Warsaw', image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80' },
  { name: 'Copenhagen', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80' },
  { name: 'Helsinki', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { name: 'Stockholm', image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=400&q=80' },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=80',
]

function Navbar({ user, onLogout }) {
  return (
    <header className="sticky-navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-content">
        <a href="/" className="navbar-logo">Guneet Home Stays</a>
        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="/hotels">Destinations</a>
          <a href="/rooms-rates">Rooms & Rates</a>
          <a href="/virtual-tour">Virtual Tours</a>
          <a href="#">Guest Reviews</a>
          <a href="/offers-discounts">Offers & Discounts</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <div className="navbar-auth">
          {user ? (
            <span>
              {user.name || user.email} | <button onClick={onLogout} className="logout-btn">Logout</button>
            </span>
          ) : (
            <span>
              <a href="/login">Login</a> / <a href="/signup">Sign Up</a>
            </span>
          )}
        </div>
      </div>
    </header>
  )
}

export { Navbar }

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">Guneet Home Stays</div>
        <nav className="footer-links">
          <a href="/">Home</a>
          <a href="/hotels">Destinations</a>
          <a href="/rooms-rates">Rooms & Rates</a>
          <a href="/virtual-tour">Virtual Tours</a>
          <a href="/offers-discounts">Offers</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="footer-social">
          <a href="#" aria-label="Facebook" className="footer-social-icon">FB</a>
          <a href="#" aria-label="Instagram" className="footer-social-icon">IG</a>
          <a href="#" aria-label="Twitter" className="footer-social-icon">TW</a>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Guneet Home Stays. All rights reserved.
      </div>
    </footer>
  )
}

export default function App() {
  const navigate = useNavigate()
  const locationRef = useRef()
  const checkinRef = useRef()
  const checkoutRef = useRef()
  const guestsRef = useRef()
  const [user, setUser] = useState(null)
  const [modalImg, setModalImg] = useState(null)
  const [locationInput, setLocationInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [highlighted, setHighlighted] = useState(-1)

  useEffect(() => {
    const u = localStorage.getItem('user')
    setUser(u ? JSON.parse(u) : null)
  }, [])

  function handleLogout() {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  function handleSearch(e) {
    e.preventDefault()
    const params = new URLSearchParams({
      location: locationInput,
      checkin: checkinRef.current.value,
      checkout: checkoutRef.current.value,
      guests: guestsRef.current.value,
    })
    navigate(`/hotels?${params.toString()}`)
  }

  const citySuggestions = destinations
    .map(d => d.name)
    .filter(city => city.toLowerCase().includes(locationInput.toLowerCase()) && locationInput.length > 0)

  function handleLocationChange(e) {
    setLocationInput(e.target.value)
    setShowSuggestions(true)
    setHighlighted(-1)
  }

  function handleSuggestionClick(city) {
    setLocationInput(city)
    setShowSuggestions(false)
  }

  function handleLocationKeyDown(e) {
    if (!showSuggestions || citySuggestions.length === 0) return
    if (e.key === 'ArrowDown') {
      setHighlighted(h => Math.min(h + 1, citySuggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      setHighlighted(h => Math.max(h - 1, 0))
    } else if (e.key === 'Enter' && highlighted >= 0) {
      setLocationInput(citySuggestions[highlighted])
      setShowSuggestions(false)
      e.preventDefault()
    }
  }

  return (
    <>
      <div className="hero-image-section">
        <div className="hero-overlay">
          <div className="gallery-3d-container">
            <Swiper
              effect="cube"
              grabCursor={true}
              cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }}
              navigation
              pagination={{ clickable: true }}
              modules={[EffectCube, Navigation, Pagination]}
              className="gallery-3d-swiper"
            >
              {galleryImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="gallery-3d-img"
                    onClick={() => setModalImg(img)}
                    tabIndex={0}
                    aria-label="Enlarge image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {modalImg && (
              <div className="modal-img-bg" onClick={() => setModalImg(null)}>
                <img src={modalImg} alt="Enlarged hotel" className="modal-img" />
              </div>
            )}
          </div>
          <h1 className="tagline">Experience Comfort. Anywhere. Anytime.</h1>
          <form className="search-bar" onSubmit={handleSearch} aria-label="Hotel search" autoComplete="off">
            <div className="location-autosuggest">
              <input
                type="text"
                placeholder="Location"
                value={locationInput}
                onChange={handleLocationChange}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                onKeyDown={handleLocationKeyDown}
                aria-label="Location"
                autoComplete="off"
                ref={locationRef}
              />
              {showSuggestions && citySuggestions.length > 0 && (
                <ul className="suggestion-list">
                  {citySuggestions.map((city, i) => (
                    <li
                      key={city}
                      className={highlighted === i ? 'highlighted' : ''}
                      onMouseDown={() => handleSuggestionClick(city)}
                      tabIndex={-1}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input type="date" placeholder="Check-in" ref={checkinRef} aria-label="Check-in date" />
            <input type="date" placeholder="Check-out" ref={checkoutRef} aria-label="Check-out date" />
            <input type="number" min="1" placeholder="Guests" ref={guestsRef} aria-label="Guests" />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <section className="destinations-section">
        <h2 className="featured-title">Popular Indian Destinations</h2>
        <div className="destinations-grid">
          {destinations.map(dest => (
            <div className="destination-card" key={dest.name} onClick={() => navigate(`/hotels?location=${encodeURIComponent(dest.name)}`)}>
              <img src={dest.image} alt={dest.name} className="destination-img" />
              <div className="destination-name">{dest.name}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="featured-rooms-section">
        <h2 className="featured-title">Featured Rooms</h2>
        <div className="hotel-grid">
          {hotels.map(hotel => (
            <div className="hotel-card" key={hotel.id} onClick={() => navigate(`/hotel/${hotel.id}`)} style={{cursor: 'pointer'}}>
              <img src={hotel.image} alt={hotel.name} className="hotel-img" />
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p>{hotel.location}</p>
                <p>⭐ {hotel.rating}</p>
                <p className="hotel-price">${hotel.price}/night</p>
                <button className="book-btn" onClick={e => {e.stopPropagation(); navigate(`/hotel/${hotel.id}`)}}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="offers-section">
        <h2 className="featured-title">Special Offers</h2>
        <div className="offers-grid">
          <div className="offer-card">
            <h3>Summer Escape</h3>
            <p>Get 20% off on all bookings in Goa and Manali. Limited time only!</p>
          </div>
          <div className="offer-card">
            <h3>Family Package</h3>
            <p>Book a suite for 3+ nights and get free breakfast for the whole family.</p>
          </div>
          <div className="offer-card">
            <h3>Early Bird</h3>
            <p>Book 30 days in advance and save up to 25% on select destinations.</p>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <h2 className="featured-title">What Our Guests Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>“The best hotel experience I’ve ever had. The staff was amazing and the view was breathtaking!”</p>
            <div className="testimonial-author">— Priya S., Mumbai</div>
          </div>
          <div className="testimonial-card">
            <p>“Clean rooms, great food, and a beautiful pool. Will definitely come back!”</p>
            <div className="testimonial-author">— Arjun R., Delhi</div>
          </div>
          <div className="testimonial-card">
            <p>“Booking was easy and the cash on delivery option made it stress-free.”</p>
            <div className="testimonial-author">— Meera K., Bangalore</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
