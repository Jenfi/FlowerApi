import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LoadingSpinner } from '../components/LoadingSpinner'
import '../styling/home.css'
import '../styling/app.css'

export const Home = () => {
  const [flowers, setFlowers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://flowers-mock-data.firebaseio.com/flowers.json')
      .then((res) => res.json())
      .then((json) => {
        setFlowers(json)
        setLoading(false)
      })
  }, [])

  if (loading === true) {
    return (
      <LoadingSpinner />)
  }

  return (
    <article className="flower-list">
      <h2>We have gathered all your favourite flowers</h2>
      <ul className="flower-deck">
        {flowers.map((flower, index) => (
          <li className="flower-card">
            <Link
              to={`flower/${index}`}
              key={index}>
              <div
                className="flower-container"
                style={{ backgroundImage: `url(${flower.cover_image})` }}>
                {!flower.cover_image ? <h4>No pic available<br />{flower.latin_name}</h4> : null}
                {flower.cover_image ? <h3 className="flower-highlight">{flower.latin_name}</h3> : null}
              </div>
              <h5>{flower.common_name}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}