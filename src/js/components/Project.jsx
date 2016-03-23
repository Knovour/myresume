import React from 'react'
import { Col } from 'elemental'
import Card       from 'material-ui/lib/card/card'
import CardHeader from 'material-ui/lib/card/card-header'

const ProjectInfo = ({ project }) => {
  const { name, hasAvatar, description } = project
  const avatar = hasAvatar
      ? <img src={`./assets/images/${name}.png`} alt={name}/>
      : <i className='zmdi zmdi-hc-3x zmdi-github'></i>

  return (
    <Card className='Card project-card'>
      <CardHeader
        className='CardHeader'
        title={<a href={`https://github.com/Knovour/${name}`} target='_blank'>{name}</a>}
        subtitle={description}
        avatar={avatar}/>
    </Card>
  )
}

export default React.createClass({
  render() {
    return <Col lg='1/2'><ProjectInfo project={this.props.project}/></Col>
  }
})
