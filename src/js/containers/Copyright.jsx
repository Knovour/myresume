import React from 'react'

const Copyright = React.createClass({
  render() {
    const year = (new Date()).getFullYear()
    return (
      <footer>
        <p>© {year} Knovour&emsp;|&emsp;<a href="https://github.com/Knovour/myresume">Source Code</a></p>
      </footer>
    )
  }
})

export default Copyright
