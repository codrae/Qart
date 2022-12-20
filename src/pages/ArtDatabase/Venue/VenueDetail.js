import React, { useState } from "react";
import WorkHeader from "../../../components/WorkHeader/WorkHeader";
import ArtDetailInfo from "../../../components/ArtDetailInfo/ArtDetailInfo";
import PageSlide from "../../../components/PageSlide/PageSlide";
import TopArrowSlider from "../../../components/TopArrowSlider/TopArrowSlider";
import "./VenueDetail.css";
function VenueDetail() {
  const [isShowMore, setIsShowMore] = useState(false); // 더보기 열고 닫는 스위치
  const infoItem = {
    image: "qart_test/판화/민정기, 묵안리, 2015.jpg",
    infos: [
      {
        title: "기관",
        content: "판화",
      },

      {
        title: "국가",
        content: "70 X 70",
      },
      {
        title: "주소",
        content: "Giclée print on Canvas",
      },
      {
        title: "연락처",
        content: "2015",
      },
      {
        title: "기관소개",
        content:
          "2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독",
      },
    ],
  };
  const moreList = ["전시이력", "히스토리"];
  const moreList2 = ["전체작품(0000)", "마켓플레이스(0000)"];

  var pageItem = [];
  for (var i = 0; i < 36; i++) {
    pageItem.push({
      info: "qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG",
      author: "김동선",
      detail: "곰순이, 2010년대",
    });
  }
  var moreItem = [];
  for (var i = 0; i < 9; i++) {
    moreItem.push({
      info: "qart_test/회화/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png",
      author: "Marco Fusinato",
      title:
        "You could hear the deep droning hum even before the black granite block that housed the Australian pavilion came into view...",
    });
  }
  return (
    <div className="venue-detail">
      <WorkHeader title_k={"기관이름"} follow={true} small={true} />
      <section className="bottom-border">
        <ArtDetailInfo item={infoItem} />
      </section>
      <WorkHeader title_k={"기관이력"} moreList={moreList} />
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
      {isShowMore ? (
        <TopArrowSlider title={"전시와 소식"} item={moreItem} />
      ) : (
        <></>
      )}
      <WorkHeader title_k={"소장 작품"} moreList={moreList2} />
      <PageSlide items={pageItem} />
    </div>
  );
}
export default VenueDetail;
