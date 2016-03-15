'use strict'

import React from 'react'
import { Container } from 'elemental'

export default React.createClass({
  render() {
    return <Container className='Container'>{this.props.children}</Container>
  }
})
