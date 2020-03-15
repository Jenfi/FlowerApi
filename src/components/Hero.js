import React from 'react'
import hero from '../attributes/hero.jpg'
import '../styling/hero.css'

export const Hero = () => {

  return (
    <section className="hero-container">
      <div className="hero" style={{ backgroundImage: `url(${hero})` }} />
      {/* <h1> We've gathered all your favourite flowers</h1> */}

    </section>
  )
}