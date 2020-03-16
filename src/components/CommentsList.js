import React, { useEffect, useState } from 'react'
import { DeleteComment } from './DeleteComment'

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

  const onDelete = (commentId) => {
    const name = '-M2XzC2pprI0f-SOHHcD'
    const updatedComments = Object.values(commented).filter(() => {
      if (name !== commentId) {
        return commented
      }
    })
    setCommented(updatedComments)
  }

  return (
    <>
      {!commented && (
        <h5>There are no comments posted about {uniqueFlower.common_name} yet</h5>
      )}

      {commented && (
        <>
          {/* {Object.values(commented).map((comment, index) => ( */}
          {Object.values(commented).map((comment) => (

            <ul className="comment-container" >
              <li>{comment.comment}</li>
              <div className="button-container">
                <DeleteComment
                  onDelete={onDelete}
                  flowerId={flowerId}
                // key={index}
                />
              </div>
            </ul>
          ))}
        </>
      )}
    </>
  )
}