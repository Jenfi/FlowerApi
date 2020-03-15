import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styling/home.css'

export const Home = () => {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    fetch('https://flowers-mock-data.firebaseio.com/flowers.json')
      .then((res) => res.json())
      .then((json) => {
        setFlowers(json)
      })
  }, [])

  return (
    <article className="flower-list">
      <h2>We gather all your favourite flowers</h2>
      <ul className="flower-deck">
        {flowers.map((flower, index) => (
          <li className="flower-card">
            <Link to={`flower/${index}`} key={index}>
              <div className="flower-container" style={{ backgroundImage: `url(${flower.cover_image})` }} > {!flower.cover_image ? <h4>No pic available</h4> : null}<h3>{flower.latin_name}</h3></div>
              <p> {flower.common_name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )

}