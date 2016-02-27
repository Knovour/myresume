'use strict'

import React from 'react'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import FontIcon from 'material-ui/lib/font-icon'

const style = {
  cursor: 'default'
}

const EventList = React.createClass({
  render() {
    const items = this.props.list
      .map(({ work, detail, link, id }, i) => {
        return link
          ? <ListItem key={i} style={style} primaryText={work} secondaryText={detail} rightIcon={<a href={link} target='_blank'><FontIcon className="zmdi zmdi-link" /></a>} />
          : <ListItem key={i} style={style} primaryText={work} secondaryText={detail} />
      })

    return <List>{items}</List>
  }
})

export default EventList
