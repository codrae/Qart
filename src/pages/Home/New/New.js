import React from 'react'
import Slider from 'react-slick'
import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import './New.css'

const New = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
  }
  var newItems = []
  for (var i = 0; i < 3; i++) {
    newItems.push(
      {
        info: 'qart_test/판화/민정기, 묵안리, 2015.jpg',
        author: '민정기, 2015',
        title: '묵안리1',
      },
      {
        info: 'qart_test/판화/민정기, 묵안리2, 2015.jpg',
        author: '민정기, 2015',
        title: '묵안리2',
      }
    )
  }
  const slider_items = imgList => {
    return imgList.map((item, i) => {
      return (
        <div className="new-slider__item">
          <div className="new-slider__item-container">
            <a href="/artdb/work2">
              <img src={require('../../../' + item.info)}></img>
              <div className="new-slider__item-info">
                <h4>{item.author}</h4>
                <h2>{item.title}</h2>
              </div>
            </a>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="new">
      <SectionHeader title={'New'} />
      <section className="container new-container">
        <div className="new-slider-container">
          <div className="right-border"></div>
          <div className="new-slide">
            <div className="new-slider__list">
              <Slider {...settings}>{slider_items(newItems)}</Slider>
            </div>
          </div>
          <div className="left-border"></div>
        </div>
      </section>
    </div>
  )
}
export default New
