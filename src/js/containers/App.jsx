import React from 'react'
import { Container, Row, Col } from 'elemental'
import Paper from 'material-ui/lib/paper'

import InfoBlock  from '../components/InfoBlock'
import Info       from '../components/Info'
import Article    from '../components/Article'
import Section    from '../components/Section'
import TimeLine   from '../components/TimeLine'
import EventBlock from '../components/EventBlock'
import EventList  from '../components/EventList'
import Project    from '../components/Project'
import Copyright  from '../components/Copyright'

import data from '../data'

const style = {
  position: 'relative',
  padding: '0 20px 20px',
}

const sectionList = eventList => {
  return eventList.map(({ time, place, list }, i) => (
    <Section key={i}>
      <TimeLine timeline={time} />
      <EventBlock header={place}>
        <EventList list={list}/>
      </EventBlock>
    </Section>
  ))
}

const projectList = eventList => {
  return eventList.map((project, i) => <Col key={i} lg='1/2'><Project project={project} /></Col>)
}

const infoList = eventList => {
  return eventList.map((info, i) => <Info key={i} info={info} />)
}

const App = React.createClass({
  render() {
    return (
      <Container className='Container'>
        <Paper className='Paper' style={style} zDepth={5}>
          <Row>
            <Col md='1/3'>
              <InfoBlock>
                {infoList(data.info)}
              </InfoBlock>
            </Col>
            <Col md='2/3'>
              <Article header='Experience'>
                {sectionList(data.experience)}
              </Article>
              <Article header='Education'>
                {sectionList(data.education)}
              </Article>
              <Article header='GitHub'>
                <Row>
                  {projectList(data.github)}
                </Row>
              </Article>
            </Col>
          </Row>
        </Paper>
        <Copyright/>
      </Container>
    )
  }
})

export default App
