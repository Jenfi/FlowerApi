import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CommentForm } from '../components/CommentForm'
import { ReactComponent as Cloudy } from '../attributes/cloud.svg'
import { ReactComponent as Sunny } from '../attributes/sun.svg'
import '../styling/comment.css'
import '../styling/commentform.css'
import '../styling/flower.css'

export const Flower = () => {
  const [uniqueFlower, setUniqueFlower] = useState([])
  const { flowerId } = useParams()
  const [comments, setComments] = useState([])
  const [triggerRefetchComments, setTriggerRefetchComments] = useState(false)
  const [commented, setCommented] = useState([])

  //FETCHING DETAILS ABOUT SPECIFIC FLOWER
  useEffect(() => {
    fetch(`https://flowers-mock-data.firebaseio.com/flowers/${flowerId}.json`)
      .then((res) => res.json())
      .then((json) => {
        setUniqueFlower(json)
      })
  }, [flowerId])

  const refetchComments = () => {
    setTriggerRefetchComments(true);
  }

  //FETCH COMMENTS FOR SPECIFIC FLOWER
  useEffect(() => {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${flowerId}.json`)
      .then((res) => res.json())
      .then((json) => {
        setCommented(json)
        console.log(json)
      })
    setTriggerRefetchComments(false)
  }, [flowerId, triggerRefetchComments])


  return (
    <>
      <section className="flower-section">
        <h2>{uniqueFlower.common_name} - <span>{uniqueFlower.latin_name}</span></h2>
        {uniqueFlower.sun === true ? <Sunny /> : <Cloudy />}
        <div className="flower-details">
          <div
            className="flower-image"
            style={{ backgroundImage: `url(${uniqueFlower.cover_image})` }}>
            {!uniqueFlower.cover_image ? <h3>No pic available</h3> : null}
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
            refetchComments={refetchComments}
            flowerId={flowerId} />
        </div>
        <>
          {!commented && (
            <h5>There are no comments posted about {uniqueFlower.common_name} yet</h5>
          )}

          {commented && (
            <>
              <ul className="comment-container" >
                {Object.values(commented).map((comment, index) => (
                  <li key={index}>
                    {comment.comment}
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      </section>
    </>
  )
}