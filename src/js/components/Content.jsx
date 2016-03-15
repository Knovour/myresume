'use strict'

import React from 'react'
import { Row } from 'elemental'
import Paper from 'material-ui/lib/paper'

const style = {
  position: 'relative',
  padding: '0 20px 20px',
}

export default React.createClass({
  render() {
    return (
      <Paper className='Paper' style={style} zDepth={5}>
        <Row>{this.props.children}</Row>
      </Paper>
    )
  }
})
