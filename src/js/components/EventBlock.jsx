import React from 'react'
import { Row, Col } from 'elemental'

import TimeLine from './TimeLine'
import EventList from './EventList'

const EventBlock = React.createClass({
  render() {
    const { place, time, list } = this.props.event;
    return (
      <session>
        <Row>
          <TimeLine timeline={time} />
          <Col md='3/4' lg="7/8">
            <h2>{place}</h2>
            <EventList list={list} />
          </Col>
        </Row>
      </session>
    )
  }
})

export default EventBlock
