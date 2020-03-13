import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Comments = (props) => {
  // const { comment } = props.comment
  const [comments, setComments] = useState([])
  // const [flowers, setFlowers] = useState([])
  // const { index } = useParams()
  const index = 0
  // const index = flowers.map((flower, index) => (
  //   { index }
  // ))

  // console.log(index)

  // useEffect(() => {
  //   fetch('https://flowers-mock-data.firebaseio.com/flowers.json')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setFlowers(json)
  //       // console.log(json)
  //     })
  // }, [])

  // const flowerId = uniqueFlower.map((flower, index) => (
  //   { index }
  // ))

  // console.log(flowerId)
  useEffect(() => {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${index}.json`)
      // fetch('https://flowers-mock-data.firebaseio.com/comments/jenfi/0.json')
      .then((res) => res.json())
      .then((json) => {
        setComments(json)
        // console.log(json)
      })
  }, [])

  // console.log(comments.length)
  return (
    <article>
      {Object.values(comments).map((comment) => (
        <div className="comment" >
          <h2>{comment.comment}</h2>
          <button type="button">Edit</button>
          <button type="button">Remove</button>
        </div>
      ))
      }
      {/* )} */}
      {/* {comments.lenght === 0 && ( */}
      {/* <p>There are no comments about this flower</p> */}
      {/* )} */}
      {/* )) */}
      {/* } */}
      {/* ))} */}
      {/* <div className="countContainer">
          <button
            className={`like-button${heart > 0 ? "has-likes" : ""}`}
            type="button"
            onClick={handleClick}>
            <span
              aria-label="heart"
              role="img">&#10084;&#65039;
            </span>
          </button>
          <p className="count">x {heart}</p>
        </div> */}
      {/* <p>{moment(createdAt).fromNow()}</p> */}

    </article >
  )
}