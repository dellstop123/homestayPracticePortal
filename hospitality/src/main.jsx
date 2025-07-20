import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Navbar } from './App.jsx'
import HotelListings from './HotelListings.jsx'
import HotelDetailPage, { BookingConfirmation } from './HotelDetailPage.jsx'
import LoginPage from './LoginPage.jsx'
import SignupPage from './SignupPage.jsx'
import ContactUsPage from './ContactUsPage.jsx'
import RoomsRates from './RoomsRates.jsx'
import GuestReviews from './GuestReviews.jsx'
import OffersDiscounts from './OffersDiscounts.jsx'
import VirtualTour from './VirtualTour.jsx'
import ViewTour360 from './ViewTour360.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function getUser() {
  if (typeof window !== 'undefined') {
    const u = localStorage.getItem('user')
    return u ? JSON.parse(u) : null
  }
  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar user={getUser()} onLogout={() => { localStorage.removeItem('user'); window.location.href = '/' }} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hotels" element={<HotelListings />} />
        <Route path="/hotel/:id" element={<HotelDetailPage />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/rooms-rates" element={<RoomsRates />} />
        <Route path="/offers-discounts" element={<OffersDiscounts />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/view-tour-360" element={<ViewTour360 />} />
        <Route path="/guest-reviews" element={<GuestReviews />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
