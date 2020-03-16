import React, { useEffect, useState } from 'react'
import { DeleteComment } from '../components/DeleteComment'

export const CommentList = (props) => {
  const { index } = props
  const [commented, setCommented] = useState([])

  // FETCH COMMENTS
  useEffect(() => {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${index}.json`)
      .then((res) => res.json())
      .then((json) => {
        setCommented(json)
      })
  }, [index])

  const onDelete = (commentId) => {
    const name = "'-M2TM8PMnzrCC0xlXvvN'"
    const updatedComments = Object.values(commented).filter((c) => {
      if (name !== commentId) {
        return commented
      }
    })
    setCommented(updatedComments)
  }

  return (
    <>
      {!commented && (
        // <h5>There are no comments posted about {uniqueFlower.common_name} yet</h5>
        <h5>There are no comments posted about this flower yet</h5>

      )}

      {commented && (
        <>
          {Object.values(commented).map((comment) => (
            // { comment.length === 0 && (null) }
            < ul className="comment-container" >
              <li>{comment.comment}</li>
              <div className="button-container">
                <DeleteComment
                  onDelete={onDelete}
                  index={index} />
              </div>
            </ul>
          ))}
        </>
      )}
    </>
  )
}