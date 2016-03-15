'use strict'

import React from 'react'
import { Col } from 'elemental'

export default React.createClass({
  render() {
    return <Col md='2/3'>{this.props.children}</Col>
  }
})
