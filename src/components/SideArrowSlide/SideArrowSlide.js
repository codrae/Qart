import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./SideArrowSlide.css";

function SideArrowSlide(props) {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesPerRow: 4,
  };
  const slider_items = (imgList) => {
    return imgList.map((item, i) => {
      return (
        <div className="side-arrow-slider__item">
          <p className="side-arrow-image">
            <img src={require("../../" + item.image)}></img>
          </p>
        </div>
      );
    });
  };
  return (
    <section className="container">
      <div className="side-arrow-slider__list">
        <Slider {...settings}>{slider_items(props.items)}</Slider>
      </div>
    </section>
  );
}
export default SideArrowSlide;
