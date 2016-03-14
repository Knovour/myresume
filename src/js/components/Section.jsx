'use strict'

import React from 'react'
import { Row } from 'elemental'

const Section = React.createClass({
  render() {
    return (
      <section>
        <Row>{this.props.children}</Row>
      </section>
    )
  }
})

export default Section
