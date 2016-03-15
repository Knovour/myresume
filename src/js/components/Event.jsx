import React from 'react'
import { Col } from 'elemental'
import List     from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import FontIcon from 'material-ui/lib/font-icon'

const style = {
  cursor: 'default'
}

const EventList = ({ list }) => {
  const items = list.map(({ work, detail, link, id }, i) => {
    return link
      ? <ListItem
          key={i}
          style={style}
          primaryText={work}
          secondaryText={detail}
          rightIcon={<a href={link} target='_blank'><FontIcon className="zmdi zmdi-link" /></a>}/>
      : <ListItem
          key={i}
          style={style}
          primaryText={work}
          secondaryText={detail}/>
  })

  return <List>{items}</List>
}

export default React.createClass({
  render() {
    const { header, list } = this.props;
    return (
      <Col md='3/4' lg="7/8">
        <h2>{header}</h2>
        <EventList list={list}/>
      </Col>
    )
  }
})
