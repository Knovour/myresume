import React from 'react'
import { Col } from 'elemental'

const EventBlock = React.createClass({
  render() {
    return (
      <Col md='3/4' lg="7/8">
        <h2>{this.props.header}</h2>
        {this.props.children}
      </Col>
    )
  }
})

export default EventBlock
