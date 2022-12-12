import React, { useRef } from "react";
import Slider, { slickGoTo } from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./PageSlide.css";
function PageSlide(props) {
  const sliderRef = useRef();
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
    appendDots: (dots) => (
      <div>
        <ul style={{ width: "288px", height: "40px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="dots-number">{i + 1}</div>,
  };

  const slider_items = (imgList) => {
    return imgList.map((item, i) => {
      return (
        <div className="page-slider__item">
          <p className="page-item-image">
            <img src={require("../../" + item.info)}></img>
          </p>
          <h2 className="page-item-author">{item.author}</h2>
          <h3 className="page-item-detail">{item.detail}</h3>
        </div>
      );
    });
  };
  return (
    <section className="container page-slider">
      <div className="page-slider__list">
        <button
          className="slick-first"
          onClick={() => {
            sliderRef.current.slickGoTo(0);
          }}
        >
          <span className="ir_pm">처음으로</span>
        </button>

        <button
          className="slick-last"
          style={{ marginTop: "10px" }}
          onClick={() => {
            sliderRef.current.slickGoTo(props.items.length / 6 - 1);
          }}
        >
          <span className="ir_pm">끝으로</span>
        </button>
        <Slider ref={sliderRef} {...settings}>
          {slider_items(props.items)}
        </Slider>
      </div>
    </section>
  );
}
export default PageSlide;
