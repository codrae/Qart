import React, { useState } from "react";

import "./ArtDbWork3.css";
import BannerSlide from "../../../components/BannerSlide/BannerSlide";
import WorkHeader from "../../../components/WorkHeader/WorkHeader";
import PageSlide from "../../../components/PageSlide/PageSlide";
import DetailInfo from "../../../components/DetailIfo/DetailInfo";
import TopArrowSlider from "../../../components/TopArrowSlider/TopArrowSlider";
function ArtDbWork3() {
  const [isShowMore, setIsShowMore] = useState(false); // 더보기 열고 닫는 스위치

  const detailItem = [
    {
      info: "qart_test/판화/민정기, 묵안리, 2015.jpg",
      width: "1277px",
      height: "866px",
      detail:
        "2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독",
    },
    {
      info: "qart_test/판화/민정기, 묵안리, 2015.jpg",
      width: "1277px",
      height: "866px",
      detail:
        "2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독",
    },
  ];

  var moreItem = [];
  for (var i = 0; i < 9; i++) {
    moreItem.push({
      info: "qart_test/회화/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png",
      author: "Chang SangEui ",
      title: "Flower Rain, 2019",
    });
  }
  return (
    <div className="artdb-work3">
      <WorkHeader title_k={"묵안리2"} small={true} />

      <section>
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
        <button
          className="display-history__more"
          onClick={() => setIsShowMore(!isShowMore)}
        >
          <p className="container">
            <span>더보기</span>
            <span className="more-arrow ir_pm">더보기버튼</span>
          </p>
        </button>
      </section>
      <DetailInfo title={"작품정보"} item={detailItem} />
      <TopArrowSlider title={"작가의 다른 작품"} item={moreItem} />
    </div>
  );
}
export default ArtDbWork3;
