import React from 'react'

export default React.createClass({
  render() {
    const { year, author, source } = this.props;
    return (
      <footer>
        <p>© {year} {author}&emsp;|&emsp;<a href={source}>Source Code</a></p>
      </footer>
    )
  }
})
