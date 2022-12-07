import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "180px",
      centerMargin: "180px",
      // variableWidth: true,
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div className="img-box">
            <img src={require("../../assets/banner1.png")}></img>
          </div>
          <div className="img-box">
            <img src={require("../../assets/banner2.png")}></img>
          </div>
          <div className="img-box">
            <img src={require("../../assets/banner3.png")}></img>
          </div>
        </Slider>
      </div>
    );
  }
}
