import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./BannerSlide.css";
function BannerSlide(props) {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const slider_items = (imgList) => {
    return imgList.map((item, i) => {
      return (
        <div className="slider__item">
          <img src={require("../../" + item.info)} width={item.size}></img>
          <h3 className="item-author">{item.author}</h3>
          <h3 className="item-title">{item.title}</h3>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="banner-slide">
        <div className="banner-slide__info">
          <h4>{props.title_e}</h4>
          <h2>{props.title_k}</h2>
        </div>
        <section className="banner__slider">
          <div className="slider__list">
            <Slider {...settings}>{slider_items(props.items)}</Slider>
          </div>
        </section>
      </div>
    </div>
  );
}
export default BannerSlide;
