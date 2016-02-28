import React from 'react'
import { Row, Col } from 'elemental'
import Card from 'material-ui/lib/card/card'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'
import CardHeader from 'material-ui/lib/card/card-header';


const Project = React.createClass({
  render() {
    const { name, description } = this.props.project
    return (
      <Card className='Card'>
        <CardHeader
          title={<a href={`https://github.com/Knovour/${name}`} target='_blank'>{name}</a>}
          subtitle={description}
          avatar={<i className='zmdi zmdi-hc-3x zmdi-github'></i>}
        />
      </Card>
    )
  }
})

export default Project
