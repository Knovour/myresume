'use strict'

import React from 'react'
import { Col } from 'elemental'
import Paper from 'material-ui/Paper'

const style = {
  'fontFamily': 'Oswald'
}

const Calendar = ({ date, tag }) => {
  const { year, month, day } = date
  return (
    <Paper style={style} zDepth={1} circle={true} className={`calendar ${tag}`}>
      <div className="YYYY">{year}</div>
      <div className="date">
        <div className="MM">{month}</div>
        <div className="DD">{day}</div>
      </div>
    </Paper>
  )
}

export default React.createClass({
  dateToJson(date) {
    const [ year, , day ] = date.split('/')
    const month = (new Date(date)).toDateString().split(' ')[1]

    return { year, month, day }
  },
  render() {
    const { from, to } = this.props.timeline
    return (
      <Col md='1/4' lg="1/8" className='Col'>
        <Calendar date={this.dateToJson(from)} tag='start'/>
        <Calendar date={this.dateToJson(to)}   tag='end'/>
      </Col>
    )
  }
})
