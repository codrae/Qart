import React from "react";

import "./ArtDbWork.css";
import BannerSlide from "../../../components/BannerSlide/BannerSlide";
import SearchSlide from "../../../components/SearchSlide/SearchSlide";
import GalleryInfo from "../../../components/GalleryInfo/GalleryInfo";
import WorkHeader from "../../../components/WorkHeader/WorkHeader";
import PageSlide from "../../../components/PageSlide/PageSlide";
function ArtDbWork() {
  const bannerList1 = [
    {
      info: "qart_test/고미술/작가미상, 나전칠연상, 높이 26.7cm, 너비 24.4cm, 길이 36.7cm, 조선시대.jpg",
      size: "644px",
      author: "작가미상",
      title: "나전칠연상, 조선시대",
    },
    {
      info: "qart_test/고미술/작가미상, 백자 달항아리, 높이 46cm, 입지름 20.3cm, 조선시대.jpg",
      size: "358px",
      author: "작가미상",
      title: "백자 달항아리, 조선시대",
    },
    {
      info: "qart_test/고미술/작가미상, 석조나한좌상, 22.2x13.4cm(대좌높이 5.4cm, 머리높이 8.8cm), 19세기.jpg",
      size: "400px",
      author: "작가미상",
      title: "석조나한좌상, 19세기",
    },
    {
      info: "qart_test/고미술/KakaoTalk_Photo_2022-07-13-17-18-21.jpeg",
      size: "842px",
      author: "Kim HoDeuk",
      title: "Distant Mountain, 2015",
    },
  ];
  const bannerList2 = [
    {
      info: "qart_test/미디어/김문정_looseroutside_pespective, 3d모델링모션, 2020.jpg",
      size: "719px",
      author: "김문정",
      title: "looseroutside_pespective, 2020",
    },
    {
      info: "qart_test/미디어/node00, 내재율의 외적 파동, 2019.jpg",
      size: "475px",
      author: "node00",
      title: "내재울의 외적 파동, 2019",
    },
    {
      info: "qart_test/미디어/node00, 내재율의 외적 파동2, 2019.jpg",
      size: "430px",
      author: "node00",
      title: "내재울의 외적 파동2, 2019",
    },
  ];
  const galleryInfo = [
    {
      info: "assets/gallery_01.png",
      size: "contain",
      title: "Marco Fusinato",
      order: 0,
      detail:
        "You could hear the deep droning hum even before the black granite block that housed the Australian pavilion came into view...",
    },
    {
      info: "qart_test/ȸȭ/KIM TAEHO, Internal Rythem 2005-21, 50x65.1 cm, Acrylic on canvas, 2005.jpg",
      size: "none",
      title: "Marco Fusinato",
      order: -1,
      detail:
        "You could hear the deep droning hum even before the black granite block that housed the Australian pavilion came into view...",
    },
    {
      info: "assets/gallery_02.png",
      size: "contain",
      title: "Marco Fusinato",
      order: 0,
      detail:
        "You could hear the deep droning hum even before the black granite block that housed the Australian pavilion came into view...",
    },
  ];
  const moreList = [
    "회화(0000)",
    "판화(0000)",
    "미디어(0000)",
    "사진(0000)",
    "조각/입체(0000)",
  ];

  var pageItem = [];
  for (var i = 0; i < 36; i++) {
    pageItem.push({
      info: "qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG",
      author: "김동선",
      detail: "곰순이, 2010년대",
    });
  }

  return (
    <div>
      <WorkHeader title_e={"by era"} title_k={"시대별"} />
      <div className="bottom-border">
        <section className="container">
          <BannerSlide
            title_e={"Antique Art"}
            title_k={"고미술(000)"}
            items={bannerList1}
          />
        </section>
      </div>
      <div className="bottom-border">
        <section className="container">
          <BannerSlide
            title_e={"Modern&Contemporary"}
            title_k={"근현대"}
            items={bannerList2}
          />
        </section>
      </div>
      <WorkHeader title_e={"by genre"} title_k={"유형별"} moreList={moreList} />
      <PageSlide items={pageItem} />
    </div>
  );
}
export default ArtDbWork;
