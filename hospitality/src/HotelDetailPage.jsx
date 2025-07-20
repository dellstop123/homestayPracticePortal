import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

const hotels = [
  {
    id: 1,
    name: 'Guneet Home Stays Downtown',
    location: 'New York',
    rating: 4.7,
    price: 220,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'A luxury hotel in the heart of New York with stunning city views and world-class amenities.',
    address: '123 Main St, New York, NY, USA',
    amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 40.7128, lng: -74.0060 },
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'Deluxe Room',
        features: ['King Bed', 'Ensuite Bathroom', 'City View', 'Air Conditioning'],
        price: 220,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Executive Suite',
        features: ['2 King Beds', 'Living Area', 'Balcony', 'Breakfast Included'],
        price: 320,
        image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 2,
    name: 'Guneet Home Stays Beachside',
    location: 'Miami',
    rating: 4.5,
    price: 180,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    description: 'A relaxing beachside resort in Miami with direct access to the ocean and vibrant nightlife.',
    address: '456 Ocean Dr, Miami, FL, USA',
    amenities: ['Free WiFi', 'Beach Access', 'Pool Bar', 'Restaurant', 'Spa', 'Fitness Center'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 25.7617, lng: -80.1918 },
    gallery: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'Ocean Suite',
        features: ['King Bed', 'Ocean View', 'Balcony', 'Breakfast Included'],
        price: 180,
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Family Room',
        features: ['2 Queen Beds', 'Kids Stay Free', 'Mini Fridge', 'Sea View'],
        price: 210,
        image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 3,
    name: 'Guneet Home Stays Mountain View',
    location: 'Denver',
    rating: 4.8,
    price: 250,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    description: 'A cozy mountain lodge in Denver offering breathtaking views and a peaceful retreat.',
    address: '789 Mountain Ave, Denver, CO, USA',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 39.7392, lng: -104.9903 },
    gallery: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'Mountain Suite',
        features: ['King Bed', 'Mountain View', 'Fireplace', 'Balcony'],
        price: 250,
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Cozy Cabin',
        features: ['Queen Bed', 'Kitchenette', 'Wood-burning Fireplace', 'Mountain View'],
        price: 150,
        image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 4,
    name: 'Guneet Home Stays Lakeside',
    location: 'Chicago',
    rating: 4.6,
    price: 210,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
    description: 'A charming lakeside inn in Chicago offering a peaceful getaway and excellent dining.',
    address: '101 Lakeview Dr, Chicago, IL, USA',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 41.8781, lng: -87.6298 },
    gallery: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'Lake View Room',
        features: ['Queen Bed', 'Lake View', 'Free WiFi', 'Breakfast Included'],
        price: 210,
        image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Cozy Cabin',
        features: ['Queen Bed', 'Kitchenette', 'Wood-burning Fireplace', 'Lake View'],
        price: 180,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 5,
    name: 'Guneet Home Stays Goa',
    location: 'Goa',
    rating: 4.9,
    price: 160,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A luxurious beach resort in Goa offering stunning sea views and a vibrant nightlife.',
    address: '123 Beach Rd, Goa, India',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 15.2993, lng: 74.1240 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'Beach View Room',
        features: ['Queen Bed', 'Balcony', 'Sea View', 'Breakfast Included'],
        price: 160,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'Ocean View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 200,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 6,
    name: 'Guneet Home Stays Paris',
    location: 'Paris',
    rating: 4.7,
    price: 280,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A boutique hotel in Paris offering a unique blend of modern design and historical charm.',
    address: '123 Avenue des Champs-Élysées, Paris, France',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 48.8566, lng: 2.3522 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 280,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 350,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 7,
    name: 'Guneet Home Stays Tokyo',
    location: 'Tokyo',
    rating: 4.6,
    price: 250,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A modern hotel in Tokyo offering cutting-edge technology and a unique urban experience.',
    address: '123 Shinjuku, Tokyo, Japan',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 35.6895, lng: 139.6917 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 250,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 300,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 8,
    name: 'Guneet Home Stays London',
    location: 'London',
    rating: 4.8,
    price: 220,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A boutique hotel in London offering a unique blend of modern design and historical charm.',
    address: '123 Regent St, London, UK',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 51.5074, lng: -0.1278 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 220,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 280,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 9,
    name: 'Guneet Home Stays Sydney',
    location: 'Sydney',
    rating: 4.7,
    price: 200,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A modern hotel in Sydney offering cutting-edge technology and a unique urban experience.',
    address: '123 George St, Sydney, Australia',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: -33.8688, lng: 151.2093 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 200,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 250,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 10,
    name: 'Guneet Home Stays Dubai',
    location: 'Dubai',
    rating: 4.6,
    price: 230,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A luxurious beach resort in Dubai offering stunning sea views and a vibrant nightlife.',
    address: '123 Palm Jumeirah, Dubai, UAE',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 25.2769, lng: 55.2962 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 230,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 280,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 11,
    name: 'Guneet Home Stays Bangkok',
    location: 'Bangkok',
    rating: 4.7,
    price: 180,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A modern hotel in Bangkok offering cutting-edge technology and a unique urban experience.',
    address: '123 Sukhumvit Rd, Bangkok, Thailand',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 13.7563, lng: 100.5018 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 180,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 220,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 12,
    name: 'Guneet Home Stays Singapore',
    location: 'Singapore',
    rating: 4.8,
    price: 200,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A modern hotel in Singapore offering cutting-edge technology and a unique urban experience.',
    address: '123 Orchard Rd, Singapore, Singapore',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 1.3521, lng: 103.8198 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 200,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 250,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 13,
    name: 'Guneet Home Stays Hong Kong',
    location: 'Hong Kong',
    rating: 4.7,
    price: 220,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A modern hotel in Hong Kong offering cutting-edge technology and a unique urban experience.',
    address: '123 Central, Hong Kong, China',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 22.2770, lng: 114.1880 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 220,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 280,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 14,
    name: 'Guneet Home Stays Amsterdam',
    location: 'Amsterdam',
    rating: 4.6,
    price: 180,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A modern hotel in Amsterdam offering cutting-edge technology and a unique urban experience.',
    address: '123 Damrak, Amsterdam, Netherlands',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 52.3702, lng: 4.8952 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 180,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 220,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 15,
    name: 'Guneet Home Stays Berlin',
    location: 'Berlin',
    rating: 4.7,
    price: 190,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A modern hotel in Berlin offering cutting-edge technology and a unique urban experience.',
    address: '123 Friedrichstrasse, Berlin, Germany',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 52.5200, lng: 13.4050 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 190,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 230,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 16,
    name: 'Guneet Home Stays Madrid',
    location: 'Madrid',
    rating: 4.6,
    price: 170,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A modern hotel in Madrid offering cutting-edge technology and a unique urban experience.',
    address: '123 Gran Via, Madrid, Spain',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 40.4168, lng: -3.7038 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 170,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 210,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 17,
    name: 'Guneet Home Stays Rome',
    location: 'Rome',
    rating: 4.7,
    price: 200,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A modern hotel in Rome offering cutting-edge technology and a unique urban experience.',
    address: '123 Via del Corso, Rome, Italy',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 41.9028, lng: 12.4964 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 200,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 240,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 18,
    name: 'Guneet Home Stays Paris',
    location: 'Paris',
    rating: 4.7,
    price: 280,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A boutique hotel in Paris offering a unique blend of modern design and historical charm.',
    address: '123 Avenue des Champs-Élysées, Paris, France',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 48.8566, lng: 2.3522 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 280,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 350,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 19,
    name: 'Guneet Home Stays Tokyo',
    location: 'Tokyo',
    rating: 4.6,
    price: 250,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A modern hotel in Tokyo offering cutting-edge technology and a unique urban experience.',
    address: '123 Shinjuku, Tokyo, Japan',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 35.6895, lng: 139.6917 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 250,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 300,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 20,
    name: 'Guneet Home Stays London',
    location: 'London',
    rating: 4.8,
    price: 220,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A boutique hotel in London offering a unique blend of modern design and historical charm.',
    address: '123 Regent St, London, UK',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 51.5074, lng: -0.1278 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 220,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 280,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 21,
    name: 'Guneet Home Stays Sydney',
    location: 'Sydney',
    rating: 4.7,
    price: 200,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A modern hotel in Sydney offering cutting-edge technology and a unique urban experience.',
    address: '123 George St, Sydney, Australia',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: -33.8688, lng: 151.2093 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 200,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 250,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 22,
    name: 'Guneet Home Stays Dubai',
    location: 'Dubai',
    rating: 4.6,
    price: 230,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'A luxurious beach resort in Dubai offering stunning sea views and a vibrant nightlife.',
    address: '123 Palm Jumeirah, Dubai, UAE',
    amenities: ['Free WiFi', 'Spa', 'Fitness Center', 'Restaurant', 'Bar', 'Airport Shuttle'],
    trustBadges: ['Free Cancellation', 'No Prepayment Needed'],
    map: { lat: 25.2769, lng: 55.2962 },
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    rooms: [
      {
        name: 'City View Room',
        features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
        price: 230,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Luxury Suite',
        features: ['King Bed', 'City View', 'Spa', 'Balcony', 'Breakfast Included'],
        price: 280,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
]

if (typeof window !== 'undefined') {
  const allIds = hotels.map(h => h.id)
  // Simulate a check for detail page and booking form (in this SPA, all hotels are bookable if in the array)
  if (new Set(allIds).size !== hotels.length) {
    console.warn('Duplicate hotel IDs found!')
  }
  if (hotels.length === 0) {
    console.warn('No hotels found!')
  }
}

export default function HotelDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const hotel = hotels.find(h => h.id === Number(id))
  const [selectedRoom, setSelectedRoom] = useState(hotel?.rooms[0] || null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', guests: 1, payment: 'cod', special: '', checkin: '', checkout: '' })
  const [error, setError] = useState('')
  const [showSummary, setShowSummary] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  function getNights() {
    if (!form.checkin || !form.checkout) return 1
    const inDate = new Date(form.checkin)
    const outDate = new Date(form.checkout)
    const diff = (outDate - inDate) / (1000 * 60 * 60 * 24)
    return Math.max(1, diff)
  }

  if (!hotel) return <div style={{padding: '2rem'}}>Hotel not found.</div>

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }
  function handleBook(e) {
    e.preventDefault()
    // Validation
    if (!form.name || !form.email || !form.phone || !form.guests || !form.checkin || !form.checkout) {
      setError('Please fill all required fields.')
      return
    }
    if (!/^\d{10}$/.test(form.phone)) {
      setError('Please enter a valid 10-digit phone number.')
      return
    }
    const nights = getNights()
    setTotalPrice(nights * (selectedRoom?.price || 0))
    setError('')
    setShowSummary(true)
  }
  function handleConfirm() {
    setShowSummary(false)
    navigate('/confirmation', {
      state: {
        hotel,
        room: selectedRoom,
        guest: form,
        totalPrice,
        nights: getNights(),
      },
    })
  }

  return (
    <div className="hotel-detail-container">
      <div className="hotel-gallery">
        {hotel.gallery?.map((img, i) => (
          <img src={img} alt={hotel.name + ' gallery'} key={i} className="gallery-img" />
        ))}
      </div>
      <div className="hotel-detail-info">
        <h1>{hotel.name}</h1>
        <p className="hotel-location">{hotel.location}</p>
        <p>⭐ {hotel.rating}</p>
        <h2>Room Types</h2>
        <div className="room-types-list">
          {hotel.rooms.map(room => (
            <div
              key={room.name}
              className={`room-type-card${selectedRoom?.name === room.name ? ' selected' : ''}`}
              onClick={() => setSelectedRoom(room)}
            >
              <img src={room.image} alt={room.name} className="room-type-img" />
              <div>
                <h3>{room.name}</h3>
                <ul>
                  {room.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <div className="hotel-price">${room.price}/night</div>
              </div>
            </div>
          ))}
        </div>
        <h2>Book This Room</h2>
        <form className="booking-form" onSubmit={handleBook}>
          {error && <div className="auth-error">{error}</div>}
          <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="phone" type="tel" placeholder="Phone (10 digits)" value={form.phone} onChange={handleChange} pattern="\d{10}" required />
          <input name="guests" type="number" min="1" placeholder="Guests" value={form.guests} onChange={handleChange} required />
          <input name="checkin" type="date" placeholder="Check-in" value={form.checkin} onChange={handleChange} required />
          <input name="checkout" type="date" placeholder="Check-out" value={form.checkout} onChange={handleChange} required />
          <select name="payment" value={form.payment} onChange={handleChange} required>
            <option value="cod">Cash on Delivery (Pay at Check-in)</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>
          <textarea name="special" placeholder="Special Requests (optional)" value={form.special} onChange={handleChange} />
          <button className="book-btn" type="submit">Book Now</button>
        </form>
        {showSummary && (
          <div className="modal-img-bg" style={{zIndex: 2000}}>
            <div className="confirmation-summary" style={{maxWidth: 420}}>
              <h2>Confirm Your Booking</h2>
              <div className="confirmation-section"><strong>Hotel:</strong> {hotel.name}</div>
              <div className="confirmation-section"><strong>Room:</strong> {selectedRoom?.name} (${selectedRoom?.price}/night)</div>
              <div className="confirmation-section"><strong>Check-in:</strong> {form.checkin}</div>
              <div className="confirmation-section"><strong>Check-out:</strong> {form.checkout}</div>
              <div className="confirmation-section"><strong>Nights:</strong> {getNights()}</div>
              <div className="confirmation-section"><strong>Total Price:</strong> ${totalPrice}</div>
              <div className="confirmation-section"><strong>Guest:</strong> {form.name} ({form.email}, {form.phone})</div>
              <div className="confirmation-section"><strong>Guests:</strong> {form.guests}</div>
              <div className="confirmation-section"><strong>Payment:</strong> {form.payment === 'cod' ? 'Cash on Delivery (Pay at Check-in)' : form.payment}</div>
              {form.special && <div className="confirmation-section"><strong>Special Requests:</strong> {form.special}</div>}
              <div style={{display:'flex',gap:'1rem',marginTop:'1.5rem',justifyContent:'center'}}>
                <button className="book-btn" onClick={handleConfirm}>Confirm Booking</button>
                <button className="book-btn" style={{background:'#64748b'}} onClick={()=>setShowSummary(false)}>Edit</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Booking Confirmation Page
export function BookingConfirmation() {
  const { state } = useLocation()
  if (!state) return <div style={{padding: '2rem'}}>No booking found.</div>
  const { hotel, room, guest, totalPrice, nights } = state
  return (
    <div className="confirmation-container">
      <h1>Booking Confirmed!</h1>
      <div className="confirmation-summary">
        <h2>{hotel.name}</h2>
        <p>{hotel.location}</p>
        <div className="confirmation-section">
          <strong>Room:</strong> {room.name} (${room.price}/night)
        </div>
        <div className="confirmation-section">
          <strong>Check-in:</strong> {guest.checkin}<br/>
          <strong>Check-out:</strong> {guest.checkout}<br/>
          <strong>Nights:</strong> {nights}
        </div>
        <div className="confirmation-section">
          <strong>Total Price:</strong> ${totalPrice}
        </div>
        <div className="confirmation-section">
          <strong>Guest:</strong> {guest.name} ({guest.email})<br/>
          <strong>Guests:</strong> {guest.guests}
        </div>
        <div className="confirmation-section">
          <strong>Payment Method:</strong> {guest.payment === 'cod' ? <span style={{color:'#4f46e5', fontWeight:700}}>Cash on Delivery (Pay at Check-in)</span> : guest.payment}
        </div>
      </div>
    </div>
  )
} 