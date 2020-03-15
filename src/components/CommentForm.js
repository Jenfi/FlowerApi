import React, { useState } from 'react'
import '../styling/commentform.css'
import '../styling/app.css'
export const CommentForm = () => {

  const [comment, setComment] = useState('')
  // const [post, setPost] = useState()

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
      <h3>Share your thoughts with us!</h3>
      <form>
        <textarea
          // placeholder="What's on your mind..?"
          rows="3"
          // Block re-sizeable
          maxLength="200"
          onChange={(event) => setComment(event.target.value)} />
        <p>{comment.length}/200</p>
        <button
          className="comment-button"
          type="submit"
          onClick={handleSubmit}
          disabled={comment.length < 1 || comment.length > 200 ? true : false}>
          Comment
        </button>
      </form>
    </div>
  )
}