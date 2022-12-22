import React from "react";

import WorkHeader from "../../../components/WorkHeader/WorkHeader";
import ArtDetailInfo from "../../../components/ArtDetailInfo/ArtDetailInfo";
import DetailInfo from "../../../components/DetailIfo/DetailInfo";
import TopArrowSlider from "../../../components/TopArrowSlider/TopArrowSlider";
import "./VenueDisplay.css";

function VenueDisplay() {
  const infoItem = {
    image: "assets/display_01.png",
    author: {
      image: "qart_test/고미술/KakaoTalk_Photo_2022-07-13-17-18-21.jpeg",
      name: "추종완",
      email: "00000@naver.com",
    },
    infos: [
      {
        title: "기간",
        content: "2022.10.28 - 2022.11.27",
      },
      {
        title: "시간",
        content: "13:00 - 21:00",
      },
      {
        title: "장소",
        content: "Giclée print on Canvas",
      },
      {
        title: "주소",
        content: "서울 서대문구 홍연2길 1층",
      },
      {
        title: "휴관",
        content: "월요일 / 화요일",
      },
      {
        title: "관람료",
        content: "무료",
      },
      {
        title: "전화번호",
        content: "0507-1369-4782",
      },
      {
        title: "사이트",
        content: "Prisitne Condtion",
      },
    ],
  };

  const detailItem = [
    {
      info: "assets/display_01.png",
      width: "871px",
      height: "1290px",
      detail:
        "2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독",
    },
    {
      info: "assets/display_01.png",
      width: "871px",
      height: "1290px",
      detail:
        "2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독",
    },
  ];
  var moreItem = [];
  for (var i = 0; i < 9; i++) {
    moreItem.push({
      info: "qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG",
      author: "김동선",
      title: "곰순이, 2010년대",
    });
  }

  return (
    <div className="venue-display">
      <WorkHeader title_k={"추종완 : Great Legacy"} small={true} />
      <section className="bottom-border">
        <ArtDetailInfo item={infoItem} />
      </section>
      <section className="venue-display-detail">
        <DetailInfo title={"전시 정보"} item={detailItem} />
      </section>
      <TopArrowSlider title={"다른 전시 둘러보기"} item={moreItem} />
    </div>
  );
}
export default VenueDisplay;
