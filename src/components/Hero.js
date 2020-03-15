import React from 'react'
import hero2 from '../attributes/hero2.jpg'
import '../styling/hero.css'

export const Hero = () => {

  return (
    <section className="hero-container">
      <div className="hero" style={{ backgroundImage: `url(${hero2})` }} />
      {/* <h1> We've gathered all your favourite flowers</h1> */}

    </section>
  )
}