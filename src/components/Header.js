import React from 'react'
import '../styling/header.css'
import { Link, Route } from 'react-router-dom'

export const Header = () => {
  return (
    <Route path="/">
      <header>
        <Link to="/"><h1 className="tracking-in-expand-fwd">FLOWERHUB</h1></Link>
      </header>
    </Route>
  )
}