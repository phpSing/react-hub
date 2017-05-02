import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// Bundle loader
import Bundle from './Bundle'
// pages
import loadHome from './pages/Home'
import loadAbout from './pages/About'

const Home = () => (
  <Bundle load={loadHome}>
    {(Home) => <Home />}
  </Bundle>
)

const About = () => (
  <Bundle load={loadAbout}>
    {(About) => <About />}
  </Bundle>
)

export const routes = [
  { 
    path: '/',
    exact: true,
    component: Home,
  },
  { 
    path: '/about',
    component: About,
  },
]
// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
export const RouteWithSubRoutes = (route) => (
  <Route render={props => {
      return (   
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
      )  
    }} 
    exact={route.exact}
    strict={route.strict}
    children={route.children}
    path={route.path}
  />
)

