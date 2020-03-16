import React, { useState } from 'react'

export const DeleteComment = (props) => {
  // const { name, comment } = props.comment
  // const index = 0
  const { index } = props
  const commentId = '-M2TM9odk7Geob3g25SS'

  const handleDelete = () => {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${index}/${commentId}.json`, {
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
      Remove XX
    </button>
  )
}