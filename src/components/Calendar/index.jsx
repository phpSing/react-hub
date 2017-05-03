import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './main.scss'

class Calendar extends Component {
  render() {
    return (
      <div className='calendar'>
        calendar
      </div>
    )
  }
}

Calendar.propTypes = {
  value: PropTypes.string
}

// Usage
/*
  <Calendar 
    value={'2017/04/14'}
    minDate={''}
    maxDate={''}
    cell={(moment) => {
      // re-render cell
    }}
    onSelect={(moment) => {
      // do something..
    }}
  />
*/

export default Calendar



