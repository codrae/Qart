import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./Banner.css";
import "./Banner-Slider.css";
const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0); // slide index 따라 내용 변화
  const autoRef = useRef(); // auto-carousel ref
  /* 배너 셋팅 */
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
  };

  const info = [
    {
      name: "looseroutside",
      illustrator: "김문정",
      detail:
        "2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독",
    },
    { name: "목안리", illustrator: "민정기", detail: "목안리목안리 2015 작품" },
    {
      name: "목안리2",
      illustrator: "민정기",
      detail: "목안리목안리2 2015 작품",
    },
  ];

  return (
    <section className="banner">
      <div className="banner__info">
        <div className="banner__info__title">
          <h2>{info[activeSlide].name}</h2>
          <br></br>
          <h2>- {info[activeSlide].illustrator}</h2>
        </div>
        <div className="banner-phone">
          <ul className="banner__number">
            <li>
              {activeSlide == 0 ? (
                <span className="choose"></span>
              ) : (
                <span></span>
              )}
            </li>
            <li>
              {activeSlide == 1 ? (
                <span className="choose"></span>
              ) : (
                <span></span>
              )}
            </li>
            <li>
              {activeSlide == 2 ? (
                <span className="choose"></span>
              ) : (
                <span></span>
              )}
            </li>
          </ul>
          <div className="auto-carousel" ref={autoRef}>
            <Slider
              {...settings}
              arrows={false}
              centerPadding="0"
              centerMargi="0"
              autoplay={true}
              speed="300"
              beforeChange={(current, next) => {
                // auto-carousel 이 block 일 때만 state 변화하도록
                if (window.getComputedStyle(autoRef.current).display == "block")
                  setActiveSlide(next);
              }}
            >
              <div className="img-box">
                <img
                  src={require("../../../assets/banner1.png")}
                  alt="banner1"
                ></img>
              </div>

              <div className="img-box">
                <img
                  src={require("../../../assets/banner2.png")}
                  alt="banner2"
                ></img>
              </div>

              <div className="img-box">
                <img
                  src={require("../../../assets/banner3.png")}
                  alt="banner3"
                ></img>
              </div>
            </Slider>
          </div>
        </div>
        <div className="banner__info__detail">{info[activeSlide].detail}</div>
      </div>
      <div className="banner__art_slide">
        <div className="carousel">
          <Slider
            {...settings}
            beforeChange={(current, next) => {
              setActiveSlide(next);
            }}
          >
            <div className="img-box">
              <img
                src={require("../../../assets/banner1.png")}
                alt="banner1"
              ></img>
            </div>

            <div className="img-box">
              <img
                src={require("../../../assets/banner2.png")}
                alt="banner2"
              ></img>
            </div>

            <div className="img-box">
              <img
                src={require("../../../assets/banner3.png")}
                alt="banner3"
              ></img>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Banner;
