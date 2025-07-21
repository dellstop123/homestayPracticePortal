import './App.css'
import { useState } from 'react'

const roomsData = [
  {
    hotel: 'Guneet Home Stays Downtown',
    location: 'New York',
    rooms: [
      { name: 'Deluxe Room', price: 220, features: ['King Bed', 'Ensuite Bathroom', 'City View', 'Air Conditioning'], image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
      { name: 'Executive Suite', price: 320, features: ['2 King Beds', 'Living Area', 'Balcony', 'Breakfast Included'], image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    hotel: 'Guneet Home Stays Beachside',
    location: 'Miami',
    rooms: [
      { name: 'Ocean Suite', price: 180, features: ['King Bed', 'Ocean View', 'Balcony', 'Breakfast Included'], image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
      { name: 'Family Room', price: 210, features: ['2 Queen Beds', 'Kids Stay Free', 'Mini Fridge', 'Sea View'], image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    hotel: 'Guneet Home Stays Paris',
    location: 'Paris',
    rooms: [
      { name: 'Classic Room', price: 260, features: ['Queen Bed', 'City View', 'Free WiFi'], image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
      { name: 'Luxury Suite', price: 340, features: ['King Bed', 'Balcony', 'Breakfast Included', 'Spa Access'], image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  // Add more hotels and rooms as needed
]

export default function RoomsRates() {
  const [search, setSearch] = useState('')
  const filtered = roomsData.filter(hotel =>
    hotel.hotel.toLowerCase().includes(search.toLowerCase()) ||
    hotel.rooms.some(room => room.name.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="roomsrates-container">
      <h1>Rooms & Rates</h1>
      <p className="roomsrates-desc">Browse our selection of rooms and suites across all Guneet Home Stays locations. Find the perfect room for your next stay, see features, and compare rates easily.</p>
      <div className="roomsrates-searchbar">
        <input
          type="text"
          placeholder="Search by hotel or room name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="roomsrates-list">
        {filtered.length === 0 ? (
          <div className="roomsrates-noresults">No rooms found matching your search.</div>
        ) : filtered.map(hotel => (
          <div className="roomsrates-hotel" key={hotel.hotel}>
            <h2>{hotel.hotel} <span className="roomsrates-location">({hotel.location})</span></h2>
            <div className="roomsrates-rooms">
              {hotel.rooms.map(room => (
                <div className="roomsrates-roomcard" key={room.name}>
                  <img src={room.image} alt={room.name} className="roomsrates-roomimg" />
                  <div className="roomsrates-roominfo">
                    <h3>{room.name}</h3>
                    <div className="roomsrates-features">
                      {room.features.map(f => <span key={f} className="roomsrates-feature">{f}</span>)}
                    </div>
                    <div className="roomsrates-price">${room.price} <span className="roomsrates-per">/ night</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 