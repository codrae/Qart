import React from "react";
import Slider from "react-slick";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./RPaddingSlide.css";
function RPaddingSlide(props) {
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
        <a href={item.link}>
          <div className="slider__item">
            <img src={require("../../" + item.info)} width={item.size}></img>
            <h3 className="item-author">{item.author}</h3>
            <h3 className="item-title">{item.title}</h3>
            <h3 className="item-price">{item.price}</h3>
          </div>
        </a>
      );
    });
  };
  return (
    <div className="banner-slide">
      {props.title_k ? (
        <SectionHeader
          title_e={props.title_e}
          title_k={props.title_k}
          line="right-line"
        />
      ) : (
        <></>
      )}

      <section className="banner-slide-container">
        {/* <div className="banner-slide__info">
          <h4>{props.title_e}</h4>
          <h2>{props.title_k}</h2>
        </div> */}
        <Slider {...settings} className="banner-slider">
          {slider_items(props.items)}
        </Slider>
      </section>
    </div>
  );
}
export default RPaddingSlide;
