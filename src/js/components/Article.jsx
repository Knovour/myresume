'use strict'

import React from 'react'

const Article = React.createClass({
  render() {
    return (
      <article>
        <header>
          <h1>{this.props.header}</h1>
        </header>
        {this.props.children}
      </article>
    )
  }
})

export default Article
