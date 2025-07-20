import './App.css'
import { useNavigate } from 'react-router-dom'

// Use a real room image for the 360 view demo
const IMAGE_360 = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'

export default function ViewTour360() {
  const navigate = useNavigate()
  return (
    <div className="viewtour360-container">
      <button className="viewtour360-back" onClick={() => navigate(-1)}>&larr; Back to Virtual Tours</button>
      <h1 className="viewtour360-title">360° Virtual Tour</h1>
      <p className="viewtour360-desc">Click and drag to explore the room in 360 degrees. (Room image demo)</p>
      <div className="viewtour360-viewer">
        <iframe
          title="360 Viewer"
          srcDoc={`<html><body style='margin:0;overflow:hidden;background:#000;'><img src='${IMAGE_360}' style='width:100vw;height:100vh;object-fit:cover;cursor:grab;' draggable='false'></body></html>`}
          style={{width:'100%',height:'400px',border:'none',borderRadius:'1.2rem',boxShadow:'0 2px 12px rgba(0,0,0,0.13)'}}
        />
      </div>
    </div>
  )
} 