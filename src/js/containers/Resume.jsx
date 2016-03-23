import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Main      from '../components/Main'
import Content   from '../components/Content'
import Detail    from '../components/Detail'
import Info      from '../components/Info'
import Article   from '../components/Article'
import Section   from '../components/Section'
import TimeLine  from '../components/TimeLine'
import Event     from '../components/Event'
import Project   from '../components/Project'
import Copyright from '../components/Copyright'

injectTapEventPlugin()

import {
  info,
  experience,
  education,
  github
} from '../data'

export default React.createClass({
  render() {
    return (
      <Main>
        <Content>
          <Info info={info}/>
          <Detail>
            <Article header='Experience'>
              {experience.map(({ time, place, list }, i) => (
                <Section key={i}>
                  <TimeLine timeline={time}/>
                  <Event header={place} list={list}/>
                </Section>
              ))}
            </Article>
            <Article header='Education'>
              {education.map(({ time, place, list }, i) => (
                <Section key={i}>
                  <TimeLine timeline={time}/>
                  <Event header={place} list={list}/>
                </Section>
              ))}
            </Article>
            <Article header='GitHub'>
              <Section>
                {github.map((project, i) => <Project key={i} project={project}/>)}
              </Section>
            </Article>
          </Detail>
        </Content>
        <Copyright
          year={(new Date()).getFullYear()}
          author='Knovour Zheng'
          source='https://github.com/Knovour/myresume'/>
      </Main>
    )
  }
})
