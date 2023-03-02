import React from 'react'
import Slider from 'react-slick'
import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import './BigTopArrow.css'
import WorkHeader from '../../WorkHeader/WorkHeader'
import { Link } from 'react-router-dom'
function BigTopArrow(props) {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 1,

    // variableWidth: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: props.breakRows ? props.breakRows : 2,
          //slidesToScroll: props.breakRows,
          // rows: props.breakRows,
          slidesPerRow: props.breakSlidesPerRow ? props.breakSlidesPerRow : 1,
          arrows: true,
        },
      },
    ],
  }

  const slider_items = items => {
    return items.map((item, i) => {
      return (
        <>
          <Link
            to={`${item.link}/${item.id}`}
            state={{
              item: item,
            }}
            className="big-top-item"
          >
            <div className="slider__item">
              <img src={require('../../../' + item.info)} alt="item"></img>
              <h3>
                {item.author} {item.author_e ? item.author_e : ''}{' '}
              </h3>
              <h2>{item.title}</h2>
              <h4>{item.date}</h4>
            </div>
          </Link>
          {item.price ? (
            <div className="market-item">
              <span className="market-item--price">{item.price}</span>
              <button href="#" className="market-item--heart">
                <span className="ir_pm">좋아요</span>
              </button>
            </div>
          ) : (
            <></>
          )}
        </>
      )
    })
  }
  return (
    <div className="big-top-arrow">
      {props.title_k ? (
        <WorkHeader title_e={props.title_e} title_k={props.title_k} />
      ) : (
        <></>
      )}
      <section className="big-top-arrow-container">
        <Slider {...settings} className="big-top-arrow-slider">
          {slider_items(props.items)}
        </Slider>
      </section>
    </div>
  )
}
export default BigTopArrow
