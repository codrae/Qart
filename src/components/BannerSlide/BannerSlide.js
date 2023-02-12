import React from 'react'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import './BannerSlide.css'
function BannerSlide(props) {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 0,
    appendDots: dots => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '21rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: 'dots_custom',
  }
  const slider_items = items => {
    return items.map((item, i) => {
      return (
        <div className="slider__item" key={i}>
          <img className="item-image" src={require('../../' + item.info)}></img>
          <div className="item-info">
            <h1>{item.title}</h1>
            <h2>Exhibition</h2>
            <p>{item.detail}</p>
            <Link
              to={`${item.link}/${item.id}`}
              state={{
                item: item,
              }}
              className="item-button"
            >
              Explore Now
            </Link>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="banner">
      <section className="container">
        <Slider {...settings} className="banner-slider">
          {slider_items(props.items)}
        </Slider>
      </section>
    </div>
  )
}
export default BannerSlide
