import React from 'react'
import { Col } from 'elemental'
import Card      from 'material-ui/lib/card/card'
import CardMedia from 'material-ui/lib/card/card-media'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText  from 'material-ui/lib/card/card-text'
import Slider from 'react-slick'

const EventCard = ({ list }) => {
  const items = list.map(({ work, brief, detail, link, images, id }, i) => {
    return (
      <Card className='Card' key={i}>
        {(() => {
          if(images instanceof Array && images.length) {
            if(images.length > 1) {
              const settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
              };

              return (<CardMedia>
                <Slider {...settings}>
                  {images.map((img, j) => {
                    return <div key={j}><img src={`assets/images/slide/${img}`} alt=""/></div>
                  })}
                </Slider>
              </CardMedia>)
            }

            else
              return <CardMedia><img src={`assets/images/slide/${images[0]}`} alt=""/></CardMedia>
          }
        })()}
        <CardTitle title={work} subtitle={brief} />
        {(() => {
          if(typeof detail === 'string' && detail.length)
            return <CardText>{detail}</CardText>
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
