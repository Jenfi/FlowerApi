import React, { useState } from 'react'

export const EditComment = () => {

  const [edit, setEdit] = useState(false)
  // const [post, setPost] = useState()

  const handleEditComment = () => {
    // fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${flowerId}.json`, {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${index}/${name}.json`, {

      method: 'PUT',
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
          onClick={handleSubmitComment}
          disabled={comment.length < 1 || comment.length > 200 ? true : false}>
          Comment
        </button>
      </form>
    </div>
  )
}