import React from 'react'

export default React.createClass({
  render() {
    const { year, author, madeBy, source } = this.props;
    return (
      <footer>
        <p>© {year} {author}. Made with ♡ by {madeBy}.</p>
      </footer>
    )
  }
})
