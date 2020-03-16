import React, { useState } from 'react'

export const CommentForm = (props) => {
  const { flowerId } = props
  const [comment, setComment] = useState('')

  const handleSubmitComment = (event) => {
    event.preventDefault();
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${flowerId}.json`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setComment('')// Clear text are after successful submit
      props.refetchComments(); // Trigger new fetch of comments
    })
      .catch((err) => console.log('error:', err))
  }

  const disableSubmit = comment.lenght < 1 || comment.length > 100;

  return (
    <form>
      <textarea
        rows="2"
        maxLength="100"
        value={comment}
        onChange={(event) => setComment(event.target.value)} />
      <p>{comment.length}/100</p>
      <button
        className="comment-button"
        type="submit"
        onClick={handleSubmitComment}
        disabled={disableSubmit}>
        Comment
      </button>
    </form>

  )
}
