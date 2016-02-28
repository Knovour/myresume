import React from 'react'
import EventBlock from '../components/EventBlock'

const eventlist = [{
  place: '輔仁大學',
  time: {
    from: '1995/09/01',
    to: '2012/01/31'
  },
  list: [{
    work: '資訊工程學系',
  }]
}]

const Education = React.createClass({
  render() {
    const blocks = eventlist.map((event, i) => <EventBlock key={i} event={event}/>)

    return (
      <article>
        <header>
          <h1>Education</h1>
        </header>
        {blocks}
      </article>
    )
  }
})

export default Education
