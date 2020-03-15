import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Home } from './pages/Home'
import { Flower } from './pages/Flower'
// import { ReactComponent as Arrow } from './attributes/arrow.svg'
import './styling/hero.css'
import './styling/app.css'

export const App = () => {
  // const [showFlowers, setShowFlowers] = useState(false)

  return (
    <BrowserRouter>
      <article>
        <Header />
        <Hero />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/flower/:flowerId"> */}
          <Route exact path="/flower/:index">
            <Flower />
          </Route>
        </Switch>
      </article>
    </BrowserRouter>
  )
}
