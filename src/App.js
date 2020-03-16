import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'
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
      <ScrollToTop>
        <article>
          <Header />
          <Hero />
          <Switch>
            <Route exact path="/" component={Home}>
              <Home />
            </Route>
            <Route exact path="/flower/:flowerId" component={Flower}>
              <Flower />
            </Route>
          </Switch>
          <Footer />
        </article>
      </ScrollToTop>
    </BrowserRouter>
  )
}
