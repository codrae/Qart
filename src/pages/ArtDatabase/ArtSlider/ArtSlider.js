import React, { Component } from "react";
import Slider from "react-slick";

import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../ArtDatabase.css";

export default class ArtSlider extends Component {
  render() {
    console.log(this.props.item);
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoPlay: true,
      variableWidth: true,
      //   variableHeight: false,
    };
    return (
      <div className="artist__slider__list">
        <Slider {...settings}>
          <div className="artist__slider__item">
            <img
              src={require("../../../assets/김동선, 곰순이, 종이에 수묵, 64×48.png")}
              width="359px"
            ></img>
            <h3 className="item-author">김동선</h3>
            <h3 className="item-title">곰순이, 2010년대</h3>
          </div>
          <div className="artist__slider__item">
            <img
              src={require("../../../assets/민정기, 묵안리, 2015 2.png")}
              width="701px"
            ></img>
            <h3 className="item-author">민정기</h3>
            <h3 className="item-title">묵안리2, 2015</h3>
          </div>
          <div className="artist__slider__item">
            <img
              src={require("../../../assets/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png")}
              width="327px"
            ></img>
            <h3 className="item-author">Chang SangEui </h3>
            <h3 className="item-title">Flower Rain, 2019</h3>
          </div>
          <div className="artist__slider__item">
            <img
              src={require("../../../assets/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png")}
              width="329px"
            ></img>
            <h3 className="item-author">Kim HoDeuk</h3>
            <h3 className="item-title">Distant Mountain, 2015</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
