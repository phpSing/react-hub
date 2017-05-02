import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { RouteWithSubRoutes, routes } from './routes'


class App extends React.Component {

  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>
          {routes.map((route, i) => {
            return (<RouteWithSubRoutes key={i} {...route}/>)
          })}

        </div>
      </Router>
    )
  }
} 

ReactDOM.render(
  <App />,
  document.getElementById('app')
)