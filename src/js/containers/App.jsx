import React from 'react'
import { Row, Col } from 'elemental'
import Paper from 'material-ui/lib/paper'
import { Container } from 'elemental'

import Brief from './Brief'
import Experience from './Experience'
import Education from './Education'
import Copyright from './Copyright'
import GitHub from './GitHub'

const style = {
  position: 'relative',
  padding: '0 20px 20px',
}

const App = React.createClass({
  render() {
    return (
      <Container className='Container'>
        <Paper className='Paper' style={style} zDepth={5}>
          <Row>
            <Col md='1/3'>
              <Brief/>
            </Col>
            <Col md='2/3'>
              <Experience/>
              <Education/>
              <GitHub/>
            </Col>
          </Row>
        </Paper>
        <Copyright/>
      </Container>
    )
  }
})

export default App
