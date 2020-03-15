import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Comments = (props) => {
  // const { comment } = props.comment
  const [comments, setComments] = useState([])
  // const [flowers, setFlowers] = useState([])
  // const { index } = useParams()
  const index = 0

  useEffect(() => {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${index}.json`)
      // fetch('https://flowers-mock-data.firebaseio.com/comments/jenfi/0.json')
      .then((res) => res.json())
      .then((json) => {
        setComments(json)
        // console.log(json)
      })
  }, [])

  // console.log(comments.length)
  return (
    <article>
      {Object.values(comments).map((comment) => (
        <div className="comment" >
          <h2>{comment.comment}</h2>
          <button type="button">Edit</button>
          <button type="button">Remove</button>
        </div>
      ))
      }
    </article>
  )
}