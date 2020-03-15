import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CommentForm } from '../components/CommentForm'
import { Comments } from '../components/Comments'
import '../styling/flower.css'

export const Flower = () => {
  const [uniqueFlower, setUniqueFlower] = useState([])
  const [comments, setComments] = useState([])

  const { index } = useParams()

  // const flowerId = 0

  useEffect(() => {
    fetch(`https://flowers-mock-data.firebaseio.com/flowers/${index}.json`)
      // fetch(`https://flowers-mock-data.firebaseio.com/flowers/${flowerId}.json`)

      // fetch('https://flowers-mock-data.firebaseio.com/flowers/0.json')
      .then((res) => res.json())
      .then((json) => {
        setUniqueFlower(json)
        // console.log(json)
      })
  }, [index])

  useEffect(() => {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${index}.json`)
      // fetch('https://flowers-mock-data.firebaseio.com/comments/jenfi/0.json')
      .then((res) => res.json())
      .then((json) => {
        setComments(json)
        console.log(json)
      })
  }, [])

  return (
    <article>

      {/* {Object.values(uniqueFlower).map((flower) => ( */}
      <section className="flower-section">
        <h1>{uniqueFlower.common_name} - <span>{uniqueFlower.latin_name}</span></h1>
        {uniqueFlower.sun === true && (
          <p>Sunny</p>
        )}
        {uniqueFlower.sun === false && (
          <p>Not sunny</p>
        )}
        <div className="flower-details">
          <img src={uniqueFlower.cover_image} width="400px" alt="" />

          <ul className="flower-info">
            <li>About: <span>{uniqueFlower.notes}</span></li>
            <li>Blooming season: <span>{uniqueFlower.blooming_season}</span></li>
            {/* <p>Soil preferences: <span>{uniqueFlower.soil}</span></p> */}
            {/* LÄGG TILL EN .SPLICE '' */}
            <li>Height:
          {/* {Object.values(uniqueFlower).height.map((flower) => ( */}
              {/* {uniqueFlower.height.map((flower) => ( */}
              {/* <span>{flower}</span> */}
              {/* ))} */}

              {/* ))} */}
            </li>
          </ul>
        </div>
      </section>
      {/* ))} */}
      <CommentForm />
      {!comments && (

        <p>There are no comments posted about {uniqueFlower.common_name} yet</p>

      )}

      {comments && (
        <article className="comment-container">
          {Object.values(comments).map((comment) => (
            <div className="comment" >
              <h2>{comment.comment}</h2>
              <button type="button">Edit</button>
              <button type="button">Remove</button>
            </div>
          ))
          }
        </article>
      )}

      {/* <Comments /> */}

      {/* {uniqueFlower.map((flower) => ( */}
      {/* <h2>{flower.common_name}</h2> */}
      {/* ))} */}
    </article>
  )
}