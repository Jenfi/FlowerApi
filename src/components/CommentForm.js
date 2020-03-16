import React, { useState } from 'react'

export const CommentForm = (props) => {
  const { flowerId } = props
  const [comment, setComment] = useState('')

  const handleSubmitComment = () => {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${flowerId}.json`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' }
    }).catch((err) => console.log('error:', err))
  }

  return (
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

  )
}