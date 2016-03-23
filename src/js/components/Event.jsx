import React from 'react'
import { Col } from 'elemental'
import List     from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import FontIcon from 'material-ui/lib/font-icon'
import Dialog   from 'material-ui/lib/dialog'
import Slider from 'react-slick'

const style = {
  cursor: 'default'
}

const EventList = ({ list, openState, handleOpen, handleClose }) => {
  const items = list.map(({ work, detail, link, images, id }, i) => {
    const type = { link, images };
    return <ListItem
        key={i}
        style={style}
        primaryText={work}
        secondaryText={detail}
        rightIcon={(() => {
          switch(true) {
            case (typeof link === 'string'): return <a href={link} target='_blank'><FontIcon className="zmdi zmdi-link" /></a>
            case (images instanceof Array): return <a href='#' onClick={handleOpen}><FontIcon className="zmdi zmdi-eye" /></a>
          }
        })()}
      >
        {(() => {
          if(images instanceof Array) {
            var settings = {
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1
            };

            const dialog = {
              contentClassName: 'dialog-content',
              modal: false,
              open: openState,
              onRequestClose: handleClose,
            };

            return <Dialog {...dialog}>
              <Slider {...settings}>
                {images.map((img, i) => {
                  return <div key={i}><img src={`assets/images/slide/${img}`} alt=""/></div>
                })}
              </Slider>

            </Dialog>
          }
        })()}
      </ListItem>
  })

  return <List>{items}</List>
}

export default React.createClass({
  getInitialState() {
    return { open: false };
  },
  openDialog(event) {
    event.preventDefault();
    this.setState({ open: true });
  },
  closeDialog() {
    this.setState({ open: false });
  },
  render() {
    const { header, list } = this.props;
    return (
      <Col md='3/4' lg="7/8">
        <h2>{header}</h2>
        <EventList list={list} openState={this.state.open} handleOpen={this.openDialog} handleClose={this.closeDialog}/>
      </Col>
    )
  }
})
