import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./SearchSlide.css";
function SearchSlide(props) {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    rows: 3,
    slidesPerRow: 5,
    variableWidth: true,
  };

  const slider_items = (imgList) => {
    return imgList.map((item, i) => {
      return (
        <div className="search-slider__item">
          <img src={require("../../" + item.info)}></img>

          <h2 className="search-item-author">{item.author}</h2>
          <h3 className="search-item-email">{item.email}</h3>
          {i % 3 == 0 ? (
            <button className="clicked">팔로우</button> /* 클릭 시 버튼 */
          ) : (
            <button>팔로우</button>
          )}
        </div>
      );
    });
  };
  return (
    <section className="search-slide">
      <header className="search-slide__header">
        <div className="container search-slide__header-container">
          <div className="search__header__info">
            <h3 className="search__header__info-e">{props.title_e}</h3>
            <h2 className="search__header__info-k">{props.title_k}</h2>
          </div>
          <div className="search__header__dic">
            <ul>
              <li>
                <button className="click">ㄱ</button>
              </li>
              <li>
                <button>ㄴ</button>
              </li>
              <li>
                <button>ㄷ</button>
              </li>
              <li>
                <button>ㄹ</button>
              </li>
              <li>
                <button>ㅁ</button>
              </li>
              <li>
                <button>ㅂ</button>
              </li>
              <li>
                <button>ㅅ</button>
              </li>
              <li>
                <button>ㅇ</button>
              </li>
              <li>
                <button>ㅈ</button>
              </li>
              <li>
                <button>ㅊ</button>
              </li>
              <li>
                <button>ㅋ</button>
              </li>
              <li>
                <button>ㅌ</button>
              </li>
              <li>
                <button>ㅍ</button>
              </li>
              <li>
                <button>ㅎ</button>
              </li>
            </ul>
            <ul>
              <li>
                <button>A</button>
              </li>
              <li>
                <button>B</button>
              </li>
              <li>
                <button>C</button>
              </li>
              <li>
                <button>D</button>
              </li>
              <li>
                <button>E</button>
              </li>
              <li>
                <button>F</button>
              </li>
              <li>
                <button>G</button>
              </li>
              <li>
                <button>H</button>
              </li>
              <li>
                <button>I</button>
              </li>
              <li>
                <button>J</button>
              </li>
              <li>
                <button>K</button>
              </li>
              <li>
                <button>L</button>
              </li>
              <li>
                <button>M</button>
              </li>
              <li>
                <button>N</button>
              </li>
              <li>
                <button>O</button>
              </li>
              <li>
                <button>P</button>
              </li>
              <li>
                <button>Q</button>
              </li>
              <li>
                <button>R</button>
              </li>
              <li>
                <button>S</button>
              </li>
              <li>
                <button>T</button>
              </li>
              <li>
                <button>U</button>
              </li>
              <li>
                <button>V</button>
              </li>
              <li>
                <button>W</button>
              </li>
              <li>
                <button>X</button>
              </li>
              <li>
                <button>Y</button>
              </li>
              <li>
                <button>Z</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="container search-slider">
        <div className="search-slider__list">
          <Slider {...settings}>{slider_items(props.items)}</Slider>
        </div>
      </div>
    </section>
  );
}
export default SearchSlide;
