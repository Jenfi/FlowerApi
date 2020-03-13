import React from 'react'
import '../styling/header.css'
import { Link, Route } from 'react-router-dom'

export const Header = () => {
  return (
    <Route path="/">
      <header>
        <Link to="/"><h2>FLOWERHUB</h2></Link>
      </header>
    </Route>
  )
}