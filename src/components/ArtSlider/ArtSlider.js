import React, { Children, Component } from "react";
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./ArtSlider.css";

export default class ArtSlider extends Component {
  render() {
    const slider_items = (imgList) => {
      return imgList.map((item, i) => {
        return (
          <div className="slider__item">
            <img
              src={require("../../assets/" + item.info)}
              width={item.size}
            ></img>
            <h3 className="item-author">{item.author}</h3>
            <h3 className="item-title">{item.title}</h3>
          </div>
        );
      });
    };

    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.toShow,
      slidesToScroll: 1,
      autoPlay: true,
      variableWidth: true,
    };
    return (
      <div className="slider__list">
        <Slider {...settings}>{slider_items(this.props.items)}</Slider>
      </div>
    );
  }
}
