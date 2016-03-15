'use strict'

import React from 'react'
import { Row } from 'elemental'

export default React.createClass({
  render() {
    return (
      <section>
        <Row>{this.props.children}</Row>
      </section>
    )
  }
})
