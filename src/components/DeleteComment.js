import React from 'react'

export const DeleteComment = (props) => {
  const { flowerId } = props
  const messageId = '-M2YZXROgaJUZpVf3bR4'

  const handleDelete = () => {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${flowerId}/${messageId}.json`, {
      method: 'DELETE',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).catch((err) => console.log('error:', err))
      .then(() => props.onDelete(messageId))
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