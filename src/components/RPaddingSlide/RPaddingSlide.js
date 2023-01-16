import React from 'react'
import Slider from 'react-slick'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './RPaddingSlide.css'
import WorkHeader from '../WorkHeader/WorkHeader'
import { Link } from 'react-router-dom'
function RPaddingSlide(props) {
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
        <Link
          to={`${item.link}/${item.id}`}
          state={{
            item: item,
          }}
        >
          <div className="slider__item">
            <img src={require('../../' + item.info)}></img>
            <h3>{item.author}</h3>
            <h2>{item.title}</h2>
            <h4>{item.date}</h4>
          </div>
        </Link>
      )
    })
  }
  return (
    <div className="banner-slide">
      {props.title_k ? (
        <WorkHeader title_e={props.title_e} title_k={props.title_k} />
      ) : (
        <></>
      )}
      <section className="banner-slide-container">
        <Slider {...settings} className="banner-slider">
          {slider_items(props.items)}
        </Slider>
      </section>
    </div>
  )
}
export default RPaddingSlide
