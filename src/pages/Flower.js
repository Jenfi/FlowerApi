import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { ReactComponent as Cloudy } from '../attributes/cloud.svg'
import { ReactComponent as Sunny } from '../attributes/sun.svg'
import { DeleteComment } from '../components/DeleteComment'
import '../styling/commentform.css'
import '../styling/comment.css'
import '../styling/flower.css'

export const Flower = () => {
  const [uniqueFlower, setUniqueFlower] = useState([])
  const [commented, setCommented] = useState([])
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const { index } = useParams()

  // const onDelete = (commentId) => {
  //   const updatedThoughts = thoughts.map((thought) => {
  //     if (thought._id === thoughtId) {
  //       thought.heart += 1
  //     }
  //     return thought
  //   })
  //   setThoughts(updatedThoughts)
  // }



  //FETCH SPECIFIC FLOWER
  useEffect(() => {
    setLoading(true)
    fetch(`https://flowers-mock-data.firebaseio.com/flowers/${index}.json`)
      .then((res) => res.json())
      .then((json) => {
        setUniqueFlower(json)
        setLoading(false)
      })
  }, [index])

  // SEND COMMENT

  const handleSubmitComment = () => {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${index}.json`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' }
    }).catch((err) => console.log('error:', err))
  }

  // FETCH COMMENTS
  useEffect(() => {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${index}.json`)
      .then((res) => res.json())
      .then((json) => {
        setCommented(json)
      })
  }, [index])

  if (loading === true) {
    return (
      <LoadingSpinner />
    )
  }

  const onDelete = (commentId) => {
    const name = "'-M2TM8PMnzrCC0xlXvvN'"
    const updatedComments = Object.values(commented).filter((c) => {
      if (name !== commentId) {
        return comment
      }
      // return comment
    })
    setCommented(updatedComments)
  }
  console.log(commented)
  // console.log(onDelete)

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
          <form>
            <textarea
              rows="3"
              maxLength="200"
              onChange={(event) => setComment(event.target.value)} />
            <p>{comment.length}/200</p>
            <button
              className="comment-button"
              type="submit"
              onClick={handleSubmitComment}
              disabled={comment.length < 1 || comment.length > 200 ? true : false}>
              Comment
            </button>
          </form>
        </div>

        {!commented && (
          <h5>There are no comments posted about {uniqueFlower.common_name} yet</h5>
        )}

        {commented && (
          <>
            {Object.values(commented).map((comment) => (
              <>
                {comment.length === 0 && (null)}
                <ul className="comment-container" >
                  <li>{comment.comment}</li>
                  <div className="button-container">
                    <DeleteComment
                      onDelete={onDelete}
                      index={index} />
                  </div>
                </ul>
              </>
            ))}
          </>
        )}
      </section>
    </>
  )
}