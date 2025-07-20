import './App.css'

const tours = [
  {
    title: 'Downtown Hotel 3D Tour',
    description: 'Explore the lobby, rooms, and amenities of our New York property in immersive 3D.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
  {
    title: 'Beachside Resort Virtual Walkthrough',
    description: 'Take a virtual stroll through our Miami beachside resort and experience the ocean views.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
  {
    title: 'Paris Luxury Suite 360°',
    description: 'Step inside our Paris luxury suite and enjoy a 360° panoramic tour.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
  // Add more tours as needed
]

export default function VirtualTour() {
  return (
    <div className="virtualtour-container">
      <div className="virtualtour-hero">
        <h1>Virtual Tours</h1>
        <p>Experience our hotels from anywhere! Take immersive 3D and 360° virtual tours of our properties and rooms before you book.</p>
      </div>
      <div className="virtualtour-grid">
        {tours.map((tour, i) => (
          <div className="virtualtour-card" key={i}>
            <img src={tour.image} alt={tour.title} className="virtualtour-img" />
            <div className="virtualtour-info">
              <h2>{tour.title}</h2>
              <p>{tour.description}</p>
              <a href="/view-tour-360" className="virtualtour-btn" tabIndex={0}>View Tour</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 