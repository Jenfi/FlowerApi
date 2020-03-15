import React, { useState } from 'react'


export const DeleteComment = (props) => {
  const { name, comment } = props.comment

  const [edit, setEdit] = useState(false)
  // const [post, setPost] = useState()

  const handleEditComment = () => {
    // fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${flowerId}.json`, {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/0/${name}.json`, {

      method: 'DELETE',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' }
    }).catch((err) => console.log('error:', err))
  }

  return (
    <button
      className="comment-button"
      type="submit"
      onClick={handleEditComment}>
      Remove XX
    </button>
  )
}