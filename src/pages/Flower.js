import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CommentForm } from '../components/CommentForm'
import { Comments } from '../components/Comments'

export const Flower = () => {
  const [uniqueFlower, setUniqueFlower] = useState([])
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

  return (
    <div>
      {/* {Object.values(uniqueFlower).map((flower) => ( */}
      <div>
        <img src={uniqueFlower.cover_image} width="200px" alt="" />
        <h1>{uniqueFlower.common_name}</h1>
        <h3>{uniqueFlower.latin_name}</h3>
        {uniqueFlower.sun === true && (
          <p>Sunny</p>
        )}
        {uniqueFlower.sun === false && (
          <p>Not sunny</p>
        )}
        <p>About:<span>{uniqueFlower.notes}</span></p>
        <p>Blooming season: <span>{uniqueFlower.blooming_season}</span></p>
        {/* <p>Soil preferences: <span>{uniqueFlower.soil}</span></p> */}
        {/* LÄGG TILL EN .SPLICE '' */}
        <p>Height:
          {/* {Object.values(uniqueFlower).height.map((flower) => ( */}
          {/* {uniqueFlower.height.map((flower) => ( */}
          {/* <span>{flower}</span> */}
          {/* ))} */}

          {/* ))} */}
        </p>
      </div>
      {/* ))} */}
      <CommentForm />
      <Comments />

      {/* {uniqueFlower.map((flower) => ( */}
      {/* <h2>{flower.common_name}</h2> */}
      {/* ))} */}
    </div>
  )
}