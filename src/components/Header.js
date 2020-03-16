import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/header.css'

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="tracking-in-expand-fwd">FLOWERHUB</h1>
      </Link>
    </header>
  )
}