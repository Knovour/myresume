import React from 'react'

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

const Info = React.createClass({
  render() {
    const { tag, value, icon } = this.props.info
    return (
      <p className="data">
        <span className="key">
          <i className={`zmdi zmdi-hc-fw zmdi-${icon}`}></i>:
        </span>
        <Value tag={tag} value={value} /><span className="next">,</span>
      </p>
    )
  }
})

export default Info
