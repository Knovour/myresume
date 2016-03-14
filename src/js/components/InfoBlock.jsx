import React from 'react'

const InfoBlock = React.createClass({
  render() {
    return (
      <aside>
        <span className="let">
          let
        </span>
        <span> <img src="./assets/images/logo.png" alt=""/> = &#x0007B;</span>
        {this.props.children}
        <span> &#x0007D;;</span>
      </aside>
    )
  }
})

export default InfoBlock
