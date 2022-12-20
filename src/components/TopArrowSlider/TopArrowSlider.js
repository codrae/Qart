import React from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./TopArrowSlider.css";

function TopArrowSlider(props) {
  /* 배너 셋팅 */
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    initialSlide: 0,
  };

  const slider_items = (imgList) => {
    return imgList.map((item, i) => {
      return (
        <div className="top-arrow-item">
          <p className="top-arrow-image">
            <img src={require("../../" + item.info)} />
          </p>
          <h4 className="top-arrow-author">{item.author}</h4>
          <p className="top-arrow-title">{item.title}</p>
        </div>
      );
    });
  };

  return (
    <section className="top-arrow">
      <SectionHeader title={props.title} line="right-line" />
      <div className="top-arrow-container">
        <Slider {...settings} className="top-arrow-slider">
          {slider_items(props.item)}
        </Slider>
      </div>
    </section>
  );
}
export default TopArrowSlider;
