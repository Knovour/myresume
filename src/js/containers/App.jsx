import React from 'react'
import { Row, Col } from 'elemental'
import Paper from 'material-ui/lib/paper'

import Brief from './Brief'
import Experience from './Experience'
import Education from './Education'

const style = {
  position: 'relative',
  padding: '0 20px 20px',
}

const App = React.createClass({
  render() {
    return (
      <Paper className='Paper' style={style} zDepth={5}>
        <Row>
          <Col md='1/3'>
            <Brief/>
          </Col>
          <Col md='2/3'>
            <Experience/>
            <Education/>
          </Col>
        </Row>
      </Paper>
    )
  }
})

export default App
