import './App.css'
import { useLocation, useNavigate } from 'react-router-dom'

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
  {
    id: 5,
    name: 'Guneet Home Stays Paris',
    location: 'Paris',
    rating: 4.9,
    price: 260,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Guneet Home Stays London',
    location: 'London',
    rating: 4.7,
    price: 240,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    name: 'Guneet Home Stays Tokyo',
    location: 'Tokyo',
    rating: 4.8,
    price: 270,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    name: 'Guneet Home Stays Sydney',
    location: 'Sydney',
    rating: 4.6,
    price: 230,
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 9,
    name: 'Guneet Home Stays Dubai',
    location: 'Dubai',
    rating: 4.7,
    price: 250,
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 10,
    name: 'Guneet Home Stays Rome',
    location: 'Rome',
    rating: 4.8,
    price: 255,
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=600&q=80',
  },
]

function useQuery() {
  const { search } = useLocation()
  return Object.fromEntries(new URLSearchParams(search))
}

export default function HotelListings() {
  const query = useQuery()
  const navigate = useNavigate()
  const locationFilter = query.location?.toLowerCase() || ''
  // For now, guests filter is not used as all hotels can accommodate any number
  const filteredHotels = hotels.filter(hotel =>
    hotel.location.toLowerCase().includes(locationFilter)
  )

  return (
    <div className="listings-container">
      <aside className="filter-sidebar">
        <h2>Filters</h2>
        <label>
          Location
          <select defaultValue={query.location || 'All'}>
            <option>All</option>
            <option>New York</option>
            <option>Miami</option>
            <option>Denver</option>
            <option>Chicago</option>
            <option>Paris</option>
            <option>London</option>
            <option>Tokyo</option>
            <option>Sydney</option>
            <option>Dubai</option>
            <option>Rome</option>
          </select>
        </label>
        <label>
          Price Range
          <input type="range" min="100" max="300" />
        </label>
        <label>
          Rating
          <input type="range" min="3" max="5" step="0.1" />
        </label>
      </aside>
      <main className="hotel-grid">
        {filteredHotels.length === 0 ? (
          <div style={{gridColumn: '1/-1', textAlign: 'center', color: '#64748b', fontSize: '1.2rem', marginTop: '2rem'}}>
            No hotels found for your search.
          </div>
        ) : (
          filteredHotels.map(hotel => (
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
          ))
        )}
      </main>
    </div>
  )
} 