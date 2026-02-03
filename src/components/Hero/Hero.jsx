import React from 'react'
import './Hero.css'
import { MoveRight } from 'lucide-react'
export default function Hero() {
  return (
    <div className='hero'>
      <div className="heroText">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore More  <MoveRight size={15} /></button>
      </div>
    </div>
  )
}
