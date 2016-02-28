import React from 'react'
import Hint from '../components/Hint'

const hints = [{
  tag: 'name',
  value: 'Knovour Zheng',
  icon: 'face'
}, {
  tag: 'email',
  value: 'knovour@gmail.com',
  icon: 'email-open'
}, {
  tag: 'code',
  value: 'Node.js',
  icon: 'code'
}, {
  tag: 'blog',
  value: 'https://notes.knovour.ninja',
  icon: 'account'
}, {
  tag: 'github',
  value: 'https://github.com/Knovour',
  icon: 'github'
}, {
  tag: 'bookshelf',
  value: 'https://goo.gl/8YRO8V',
  icon: 'book-image'
}, {
  tag: 'location',
  value: 'Taiwan',
  icon: 'pin'
}]

const Brief = React.createClass({
  render() {
    const list = hints.map((hint, i) => <Hint key={i} hint={hint} />)

    return (
      <aside>
        <span className="let">
          let
        </span>
        <span> <img src="./assets/images/logo.png" alt=""/> = &#x0007B;</span>
        {list}
        <span> &#x0007D;;</span>
      </aside>
    )
  }
})

export default Brief
