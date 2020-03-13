import React, { useState } from 'react'
import '../styling/commentform.css'

export const CommentForm = () => {

  const [comment, setComment] = useState('')

  const handleSubmit = () => {
    // fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${flowerId}.json`, {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/0.json`, {

      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' }
    }).catch((err) => console.log('error:', err))
  }

  return (
    <div className="message">
      <form>
        <h1>Share your thoughts with us!</h1>
        <textarea
          placeholder="What's on your mind..?"
          rows="3"
          maxLength="200"
          onChange={(event) => setComment(event.target.value)} />
        <p>{comment.length}/200</p>
        <button
          className="comment-button"
          type="submit"
          onClick={handleSubmit}
          disabled={comment.length < 1 || comment.length > 200 ? true : false}>
          <span
            role="img"
            aria-label="heart">
            &#10084;&#65039;
          </span>
          Comment
          <span
            role="img"
            aria-label="heart">
            &#10084;&#65039;
          </span>
        </button>
      </form>
    </div>
  )
}