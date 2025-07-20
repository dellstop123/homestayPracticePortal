import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei'
import './App.css'

// Simple 3D hotel with entrance, lobby, rooms, and pool
function HotelModel({ onHotspotClick }) {
  return (
    <group>
      {/* Main building */}
      <mesh position={[0, 1, 0]} castShadow onClick={() => onHotspotClick('lobby')}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#b0c4de" />
      </mesh>
      {/* Entrance Hotspot */}
      <Html position={[0, 0.1, 1.1]} center>
        <button className="hotspot-btn" onClick={() => onHotspotClick('lobby')}>Enter Lobby</button>
      </Html>
      {/* Left room */}
      <mesh position={[-2.2, 0.75, 0]} castShadow onClick={() => onHotspotClick('room1')}>
        <boxGeometry args={[1, 1.5, 1]} />
        <meshStandardMaterial color="#e6e6fa" />
      </mesh>
      <Html position={[-2.2, 1.6, 0]} center>
        <button className="hotspot-btn" onClick={() => onHotspotClick('room1')}>Room 1</button>
      </Html>
      {/* Right room */}
      <mesh position={[2.2, 0.75, 0]} castShadow onClick={() => onHotspotClick('room2')}>
        <boxGeometry args={[1, 1.5, 1]} />
        <meshStandardMaterial color="#e6e6fa" />
      </mesh>
      <Html position={[2.2, 1.6, 0]} center>
        <button className="hotspot-btn" onClick={() => onHotspotClick('room2')}>Room 2</button>
      </Html>
      {/* Pool */}
      <mesh position={[0, 0.1, -2.5]} rotation={[-Math.PI/2, 0, 0]} onClick={() => onHotspotClick('pool')}>
        <cylinderGeometry args={[1.2, 1.2, 0.15, 32]} />
        <meshStandardMaterial color="#4fd1c5" />
      </mesh>
      <Html position={[0, 0.3, -2.5]} center>
        <button className="hotspot-btn" onClick={() => onHotspotClick('pool')}>Pool</button>
      </Html>
      {/* Roof */}
      <mesh position={[0, 2.25, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <coneGeometry args={[1.6, 0.7, 4]} />
        <meshStandardMaterial color="#8b5c2a" />
      </mesh>
    </group>
  )
}

// Camera positions for each area
const CAMERA_POSITIONS = {
  outside: { position: [0, 3, 8], lookAt: [0, 1, 0] },
  lobby: { position: [0, 1.5, 2.5], lookAt: [0, 1, 0] },
  room1: { position: [-2.2, 1.5, 2], lookAt: [-2.2, 1, 0] },
  room2: { position: [2.2, 1.5, 2], lookAt: [2.2, 1, 0] },
  pool: { position: [0, 1.2, -4], lookAt: [0, 0, -2.5] },
}

function AnimatedCamera({ area }) {
  const ref = useRef()
  useFrame(() => {
    const { position, lookAt } = CAMERA_POSITIONS[area]
    // Smoothly interpolate camera position
    ref.current.position.lerp({ x: position[0], y: position[1], z: position[2] }, 0.08)
    ref.current.lookAt(lookAt[0], lookAt[1], lookAt[2])
  })
  return <PerspectiveCamera ref={ref} makeDefault fov={50} position={CAMERA_POSITIONS[area].position} />
}

export default function HotelWalkthrough3D() {
  const [area, setArea] = useState('outside')

  return (
    <div className="hero-container">
      <Canvas shadows style={{ height: '100vh', width: '100vw' }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <AnimatedCamera area={area} />
        <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.2} minDistance={6} maxDistance={12} enabled={area === 'outside'} />
        <HotelModel onHotspotClick={setArea} />
        {/* Overlay tagline and nav in 3D space for effect */}
        <Html center>
          <div className="hero-overlay">
            <nav className="nav-bar">
              <a href="#">Home</a>
              <a href="#">Destinations</a>
              <a href="#">Rooms & Rates</a>
              <a href="#">Offers</a>
              <a href="#">Contact Us</a>
              <a href="#">Login / Sign Up</a>
            </nav>
            <h1 className="tagline">Experience Comfort. Anywhere. Anytime.</h1>
            <p style={{marginTop: '1rem', color: '#334155', fontWeight: 500}}>
              {area === 'outside' && 'Click "Enter Lobby" or explore the hotel!'}
              {area === 'lobby' && 'Welcome to the Lobby! Click a room or the pool.'}
              {area === 'room1' && 'You are in Room 1. Click another hotspot to explore.'}
              {area === 'room2' && 'You are in Room 2. Click another hotspot to explore.'}
              {area === 'pool' && 'Relax by the pool! Click another hotspot to explore.'}
            </p>
            {area !== 'outside' && (
              <button className="hotspot-btn" style={{marginTop: '1rem'}} onClick={() => setArea('outside')}>
                Back Outside
              </button>
            )}
          </div>
        </Html>
      </Canvas>
    </div>
  )
} 