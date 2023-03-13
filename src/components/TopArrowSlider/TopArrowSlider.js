import React from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './TopArrowSlider.css'
import { Link } from 'react-router-dom'

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
      return props.divItem ? (
        item
      ) : (
        <div className="top-arrow-item">
          <Link to={item.link} state={{ item: item }}>
            <img
              className="top-arrow-image"
              src={require('../../' + item.info)}
            />
          </Link>
          <h4 className="top-arrow-author">{item.author}</h4>
          <span className="top-arrow-title">{item.title}</span>
          <span className="top-arrow-price">{item.price}</span>
        </div>
      )
    })
  }

  const mobile_items = item => {
    let arr = []
    for (var i = 0; i < 4; i++) {
      arr.push(
        props.divItem ? (
          item[i]
        ) : (
          <div className="top-arrow-ㅡitem">
            <Link to={item[i].link} state={{ item: item[i] }}>
              <img
                className="top-arrow-image"
                src={require('../../' + item[i].info)}
              />
            </Link>

            <h4 className="top-arrow-author">{item[i].author}</h4>
            <span className="top-arrow-title">{item[i].title}</span>
            <span className="top-arrow-price">{item[i].price}</span>
          </div>
        )
      )
    }
    return arr
  }

  return (
    <section className="top-arrow">
      <SectionHeader title={props.title}></SectionHeader>
      <div className="top-arrow-container">
        <Slider {...settings} className="top-arrow-slider">
          {slider_items(props.item)}
        </Slider>
      </div>
      <div className="top-arrow-mb-contianer">
        <ul className="ta-mb-content">{mobile_items(props.item)}</ul>
        <button className="ta-mb-more">더보기</button>
      </div>
    </section>
  )
}
export default TopArrowSlider
