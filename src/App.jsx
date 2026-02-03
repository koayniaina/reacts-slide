import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Title from './components/Title/Title'
import Program from './components/Program/Program'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle="Our PROGRAM" title = "What We Offer"/>
        <Program/>
      </div>
    </div>
  )
}

export default App
