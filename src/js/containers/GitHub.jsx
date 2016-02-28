import React from 'react'
import { Row, Col } from 'elemental'

import Project from '../components/Project'

const projects = [{
  name: 'myresume',
  description: '簡歷原始程式碼'
}, {
  name: 'generator-koat',
  description: 'Yeoman template，以 Koa.js 為底'
}, {
  name: 'json-web-crawler',
  description: '將爬蟲所需要寫的程式碼縮成 json 來表示'
}, {
  name: 'jquery-textavatar',
  description: '以名稱拼出文字大頭貼'
}]

const GitHub = React.createClass({
  render() {
    const list = projects.map((project, i) => <Col lg='1/2'><Project key={i} project={project} /></Col>)
    return (
      <article>
        <header>
          <h1>GitHub Projects</h1>
        </header>
        <Row>
          {list}
        </Row>
      </article>
    )
  }
})

export default GitHub
