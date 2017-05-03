import React, { Component } from 'react'

import Calendar from '../components/Calendar'

export default class CalendarPage extends Component {
  render() {
    return (
      <div className='page-calendar'>
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
      </div>
    )
  }
}

