import React, { useEffect, useState } from 'react'

export const CommentList = (props) => {
  const { flowerId, uniqueFlower } = props
  const [commented, setCommented] = useState([])

  useEffect(() => {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${flowerId}.json`)
      .then((res) => res.json())
      .then((json) => {
        setCommented(json)
      })
  }, [flowerId])

  return (
    <>
      {!commented && (
        <h5>There are no comments posted about {uniqueFlower.common_name} yet</h5>
      )}

      {commented && (
        <>
          {Object.values(commented).map((comment) => (

            <ul className="comment-container" >
              <li>{comment.comment}</li>
              <div className="button-container">
              </div>
            </ul>
          ))}
        </>
      )}
    </>
  )
}