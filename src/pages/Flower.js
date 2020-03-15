import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CommentForm } from '../components/CommentForm'
import { Comments } from '../components/Comments'
import '../styling/flower.css'
import '../styling/comment.css'

export const Flower = () => {
  const [uniqueFlower, setUniqueFlower] = useState([])
  const [comments, setComments] = useState([])
  const { index } = useParams()


  useEffect(() => {
    fetch(`https://flowers-mock-data.firebaseio.com/flowers/${index}.json`)
      .then((res) => res.json())
      .then((json) => {
        setUniqueFlower(json)
        //setLoading
      })
  }, [index])

  useEffect(() => {
    fetch(`https://flowers-mock-data.firebaseio.com/comments/jenfi/${index}.json`)
      .then((res) => res.json())
      .then((json) => {
        setComments(json)
      })
  }, [])

  return (
    <article>
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
      <section className="comments">
        <CommentForm />
        {!comments && (
          <h5>There are no comments posted about {uniqueFlower.common_name} yet</h5>
        )}
        {comments && (
          // <section className="comment-container">
          <>
            {Object.values(comments).map((comment) => (
              <ul className="comment-container" >
                <li>{comment.comment}</li>
                <div className="button-container">
                  <button type="button" className="edit-button">Edit</button>
                  <button type="button" className="remove-button">Remove</button>
                </div>
              </ul>
            ))
            }
            {/* </section> */}
          </>
        )}

      </section>
      {/* <Comments /> */}
    </article>
  )
}