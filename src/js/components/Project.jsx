import React from 'react'
import { Row, Col } from 'elemental'
import Card from 'material-ui/lib/card/card'
import CardHeader from 'material-ui/lib/card/card-header';


const Project = React.createClass({
  render() {
    const { name, hasAvatar, description } = this.props.project
    const avatar = hasAvatar
      ? <img src={`../assets/images/${name}.png`} alt={name}/>
      : <i className='zmdi zmdi-hc-3x zmdi-github'></i>
    return (
      <Card className='Card'>
        <CardHeader
          className='CardHeader'
          title={<a href={`https://github.com/Knovour/${name}`} target='_blank'>{name}</a>}
          subtitle={description}
          avatar={avatar}
        />
      </Card>
    )
  }
})

export default Project
