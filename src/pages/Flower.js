import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { ReactComponent as Cloudy } from '../attributes/cloud.svg'
import { ReactComponent as Sunny } from '../attributes/sun.svg'
import { CommentList } from '../components/CommentsList'
import { CommentForm } from '../components/CommentForm'
import '../styling/commentform.css'
import '../styling/comment.css'
import '../styling/flower.css'

export const Flower = () => {
  const [uniqueFlower, setUniqueFlower] = useState([])
  const [loading, setLoading] = useState(false)
  const { flowerId } = useParams()

  //FETCH SPECIFIC FLOWER
  useEffect(() => {
    setLoading(true)
    fetch(`https://flowers-mock-data.firebaseio.com/flowers/${flowerId}.json`)
      .then((res) => res.json())
      .then((json) => {
        setUniqueFlower(json)
        setLoading(false)
      })
  }, [flowerId])

  if (loading === true) {
    return (
      <LoadingSpinner />
    )
  }

  return (
    <>
      <section className="flower-section">
        <h2>{uniqueFlower.common_name} - <span>{uniqueFlower.latin_name}</span></h2>
        {uniqueFlower.sun === true ? <Sunny /> : <Cloudy />}
        <div className="flower-details">
          <div
            className="flower-image"
            style={{ backgroundImage: `url(${uniqueFlower.cover_image})` }}>{!uniqueFlower.cover_image ? <h3>No pic available</h3> : null}
          </div>
          <ul className="flower-info">
            <li>Blooming season: <span>{uniqueFlower.blooming_season}</span></li>
            <li>About: <span>{uniqueFlower.notes}</span></li>
          </ul>
        </div>
      </section>
      <section className="comments">
        <div className="message">
          <h3>Share your thoughts with us!</h3>
          <CommentForm
            flowerId={flowerId} />
        </div>
        <CommentList
          flowerId={flowerId}
          uniqueFlower={uniqueFlower} />
      </section>
    </>
  )
}