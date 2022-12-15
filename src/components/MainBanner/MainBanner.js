import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./MainBanner.css";
// import "./Banner-Slider.css";
const MainBanner = () => {
  const [activeSlide, setActiveSlide] = useState(0); // slide index 따라 내용 변화
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  /* 배너 셋팅 */
  //   const settings = {
  //     arrows: true,
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     centerMode: true,
  //     centerPadding: "180px",
  //     centerMargin: "180px",
  //   };

  const info = [
    {
      src: "qart_test/미디어/김문정_looseroutside_pespective, 3d모델링모션, 2020.jpg",
      title: "looseroutside",
      author: "김문정",
      detail:
        "2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독",
    },
    {
      src: "qart_test/판화/민정기, 묵안리, 2015.jpg",
      title: "묵안리",
      author: "민정기",
      detail: "묵안리 2015 작품",
    },
    {
      src: "qart_test/판화/민정기, 묵안리2, 2015.jpg",
      title: "묵안리2",
      author: "민정기",
      detail: "묵안리2 2015 작품",
    },
  ];
  const slider_image_items = (imgList) => {
    return imgList.map((item, i) => {
      return (
        <div className="main-image-slider__item">
          <img src={require("../../" + item.src)}></img>
        </div>
      );
    });
  };
  const slider_items = (imgList) => {
    return imgList.map((item, i) => {
      return (
        <div className="main-slider__item">
          <div className="main-slider__item-info">
            <h2 className="main-item-author">{item.author}</h2>
            <h2 className="main-item-title">
              <span></span>
              {item.title}
            </h2>
          </div>
          <img src={require("../../" + item.src)}></img>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <section className="main-banner">
        <Slider
          // beforeChange={(current, next) => {
          //   // auto-carousel 이 block 일 때만 state 변화하도록
          //   //if (window.getComputedStyle(autoRef.current).display == "block")
          //   setActiveSlide(next);
          // }}
          asNavFor={slider2}
          ref={(slider) => setSlider1(slider)}
          arrows={false}
          className="main-image_slider"
        >
          {slider_image_items(info)}
        </Slider>
        <Slider
          asNavFor={slider1}
          ref={(slider) => setSlider2(slider)}
          slidesToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
          dots={true}
          infinite={true}
          slidesToScroll={1}
          vertical={true}
          verticalSwiping={true}
          arrows={true}
          className="main-item_slider"
          appendDots={(dots) => (
            <div
              style={{
                width: "100%",
                position: "absolute",
                bottom: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul> {dots} </ul>
            </div>
          )}
          dotsClass="dots_custom"
        >
          {slider_items(info)}
        </Slider>
      </section>
    </div>
  );
};
export default MainBanner;
