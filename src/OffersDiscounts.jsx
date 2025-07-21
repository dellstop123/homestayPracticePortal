import './App.css'

const offers = [
  {
    title: 'Summer Escape - 20% Off',
    description: 'Book any room for 3 nights or more and get 20% off your total stay. Valid for bookings made before July 31.',
    discount: '20% OFF',
    conditions: 'Minimum 3 nights. Valid for all locations.'
  },
  {
    title: 'Early Bird Special',
    description: 'Get $50 off when you book at least 30 days in advance. Limited time only!',
    discount: '$50 OFF',
    conditions: 'Book 30+ days in advance.'
  },
  {
    title: 'Family Getaway',
    description: 'Kids stay free and enjoy complimentary breakfast with every family suite booking.',
    discount: 'Kids Stay Free',
    conditions: 'Valid for Family Suite bookings.'
  },
  {
    title: 'Weekend Retreat',
    description: 'Enjoy a complimentary spa session for two with every weekend booking.',
    discount: 'Free Spa Session',
    conditions: 'Valid for Friday-Sunday stays.'
  },
  // Add more offers as needed
]

export default function OffersDiscounts() {
  return (
    <div className="offers-container">
      <h1>Offers & Discounts</h1>
      <p className="offers-desc">Discover our latest deals and special offers. Save more on your next stay with Guneet Home Stays!</p>
      <div className="offers-list">
        {offers.map((offer, i) => (
          <div className="offer-card" key={i}>
            <div className="offer-discount">{offer.discount}</div>
            <h2 className="offer-title">{offer.title}</h2>
            <p className="offer-description">{offer.description}</p>
            <div className="offer-conditions">{offer.conditions}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 