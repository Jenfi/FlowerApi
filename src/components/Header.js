import React from 'react'
import { Link, Route } from 'react-router-dom'
import '../styling/header.css'

export const Header = () => {
  return (
    <Route path="/">
      <header>
        <Link to="/">
          <h1 className="tracking-in-expand-fwd">FLOWERHUB</h1>
        </Link>
      </header>
    </Route>
  )
}