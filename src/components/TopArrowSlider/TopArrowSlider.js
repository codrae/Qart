import React from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './TopArrowSlider.css'

function TopArrowSlider(props) {
  /* 배너 셋팅 */
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 0,
  }

  const slider_items = imgList => {
    return imgList.map((item, i) => {
      return (
        <div className="top-arrow-item">
          <img
            className="top-arrow-image"
            src={require('../../' + item.info)}
          />

          <h4 className="top-arrow-author">{item.author}</h4>
          <span className="top-arrow-title">{item.title}</span>
          <span className="top-arrow-price">{item.price}</span>
        </div>
      )
    })
  }

  return (
    <section className="top-arrow">
      <SectionHeader title="작가의 다른 작품"></SectionHeader>
      <div className="top-arrow-container">
        <Slider {...settings} className="top-arrow-slider">
          {slider_items(props.item)}
        </Slider>
      </div>
    </section>
  )
}
export default TopArrowSlider
