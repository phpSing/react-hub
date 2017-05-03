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
import loadCalendar from './pages/Calendar'

const Home = () => (
  <Bundle load={loadHome}>
    {(Home) => <Home />}
  </Bundle>
)

const Calendar = () => (
  <Bundle load={loadCalendar}>
    {(Calendar) => <Calendar />}
  </Bundle>
)

export const routes = [
  { 
    path: '/',
    exact: true,
    component: Home,
  },
  { 
    path: '/components/calendar',
    component: Calendar,
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

