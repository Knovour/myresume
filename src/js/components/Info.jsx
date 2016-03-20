import React from 'react'
import { Col } from 'elemental'

const Value = ({ tag, value }) => {
  switch(true) {
    case value.includes('@'):
      return <a className={`value ${tag}`} href={`mailto:${value}`}>{value}</a>
    case value.includes('https'):
      const tmp = value.replace('https://', '')
      return <a className={`value ${tag}`} href={value} target='_blank'>{tmp}</a>
    default:
      return <span className={`value ${tag}`}>{value}</span>
  }
}

const Hint = ({ hint }) => {
  const { tag, value, icon } = hint
  return (
    <p className="data">
      <span className="key">
        <i className={`zmdi zmdi-hc-fw zmdi-${icon}`}></i>:
      </span>
      <Value tag={tag} value={value}/><span className="next">,</span>
    </p>
  )
}

export default React.createClass({
  render() {
    return (
      <Col md='1/3'>
        <aside>
          <span className="declare">
            let
          </span>
          <span> <img src="./assets/images/iDea.png" alt=""/> = &#x0007B;</span>
          {this.props.info.map((hint, i) => <Hint key={i} hint={hint}/>)}
          <span> &#x0007D;;</span>
        </aside>
      </Col>
    )
  }
})
