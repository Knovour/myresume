import React from 'react'
import { Col } from 'elemental'
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import Slider from 'react-slick'

const CardImg = ({ images }) => {
  if(!images)
    return null

  if(images instanceof Array && images.length) {
    if(images.length > 1) {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
        <CardMedia>
          <Slider {...settings}>
            {images.map((img, j) => {
              return <div key={j}><img src={`assets/images/work/${img}`} alt=""/></div>
            })}
          </Slider>
        </CardMedia>
      )
    }

    else
      return <CardMedia><img src={`assets/images/work/${images[0]}`} alt=""/></CardMedia>
  }
}

const EventCard = ({ list }) => {
  const items = list.map(({ work, brief, detail, link, images, id }, i) => {
    return (
      <Card className='Card' key={i}>
        <CardImg images={images}/>
        <CardTitle className='CardTitle' title={work} subtitle={brief} titleStyle={{fontSize: '20px'}} />
        {(() => {
          if(typeof detail === 'string' && detail.length)
            return <CardText><div dangerouslySetInnerHTML={{ __html: detail }}></div></CardText>
        })()}
      </Card>
    )
  });

  return <div>{items}</div>
}

export default React.createClass({
  render() {
    const { header, list } = this.props;
    return (
      <Col md='3/4' lg="7/8">
        <h2>{header}</h2>
        <EventCard list={list}/>
      </Col>
    )
  }
})
