import React from 'react'

export const DeleteComment = (props) => {
  const { flowerId } = props
  const commentId = '-M2TM9odk7Geob3g25SS'

  const handleDelete = () => {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${flowerId}/${commentId}.json`, {
      method: 'DELETE',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).catch((err) => console.log('error:', err))
      .then(() => props.onDelete(commentId))
  }

  return (
    <button
      className="comment-button"
      type="submit"
      onClick={handleDelete}>
      Remove
    </button>
  )
}