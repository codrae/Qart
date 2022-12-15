import React from "react";

import "./ArtDbWork2.css";
import BannerSlide from "../../../components/BannerSlide/BannerSlide";
import WorkHeader from "../../../components/WorkHeader/WorkHeader";
import PageSlide from "../../../components/PageSlide/PageSlide";
function ArtDbWork() {
  var pageItem = [];
  for (var i = 0; i < 36; i++) {
    pageItem.push({
      info: "qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG",
      author: "김동선",
      detail: "곰순이, 2010년대",
    });
  }
  const moreList = ["전체작품(0000)", "마켓플레이스(0000)"];

  return (
    <div>
      <WorkHeader title_k={"민정기"} follow={true} />
      <section className="bottom-border">
        <div className="container  author-info">
          <img
            className="author-info__image"
            src={require("../../../" +
              "qart_test/판화/민정기, 묵안리, 2015.jpg")}
          />
          <article className="author-info__profile">
            <p>
              <span className="author-info__profile-name">국적</span>
              <span className="author-info__profile-item">대한민국</span>
            </p>
            <p>
              <span className="author-info__profile-name">출생연도</span>
              <span className="author-info__profile-item">1990.10.20-</span>
            </p>
            <p>
              <span className="author-info__profile-name">작가소개</span>
              <span className="author-info__profile-item">
                2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부
                장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬
                음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019
                문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내
                최정상 뮤지컬 음악감독
              </span>
            </p>
          </article>
        </div>
      </section>
      <section className="bottom-border">
        <div className="bottom-border">
          <div className="container display-history__header">
            <h3>전시이력</h3>
          </div>
        </div>

        <ul className="container display-history__list">
          <li>
            <span className="display-history__item-period">
              0000.00.00 - 0000.00.00
            </span>
            <span className="display-history__item-title">
              <b>[개인전]</b> Wow5 창립전(인사아트센터),
              한국현대회화100선전(마루아트센터), 서울
            </span>
          </li>
          <li>
            <span className="display-history__item-period">
              0000.00.00 - 0000.00.00
            </span>
            <span className="display-history__item-title">
              <b>[개인전]</b> Wow5 창립전(인사아트센터),
              한국현대회화100선전(마루아트센터), 서울
            </span>
          </li>
          <li>
            <span className="display-history__item-period">
              0000.00.00 - 0000.00.00
            </span>
            <span className="display-history__item-title">
              <b>[개인전]</b> Wow5 창립전(인사아트센터),
              한국현대회화100선전(마루아트센터), 서울
            </span>
          </li>
          <li>
            <span className="display-history__item-period">
              0000.00.00 - 0000.00.00
            </span>
            <span className="display-history__item-title">
              <b>[개인전]</b> Wow5 창립전(인사아트센터),
              한국현대회화100선전(마루아트센터), 서울
            </span>
          </li>
          <li>
            <span className="display-history__item-period">
              0000.00.00 - 0000.00.00
            </span>
            <span className="display-history__item-title">
              <b>[개인전]</b> Wow5 창립전(인사아트센터),
              한국현대회화100선전(마루아트센터), 서울
            </span>
          </li>
        </ul>
        <button className="display-history__more">
          <p className="container">
            <span>더보기</span>
            <span className="more-arrow ir_pm">더보기버튼</span>
          </p>
        </button>
      </section>
      <WorkHeader title_e={"by genre"} title_k={"작품"} moreList={moreList} />
      <PageSlide items={pageItem} />
    </div>
  );
}
export default ArtDbWork;
