import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Flower } from './pages/Flower'
import { Home } from './pages/Home'
import './styling/app.css'
import './styling/hero.css'


export const App = () => {

  return (
    <BrowserRouter>
      <article>
        <Header />
        <Hero />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/flower/:index">
            <Flower />
          </Route>
        </Switch>
        <Footer />
      </article>
    </BrowserRouter>
  )
}
