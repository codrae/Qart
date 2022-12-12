import React from "react";

import "./ArtDbArtist.css";
import BannerSlide from "../../../components/BannerSlide/BannerSlide";
import SearchSlide from "../../../components/SearchSlide/SearchSlide";
import GalleryInfo from "../../../components/GalleryInfo/GalleryInfo";
function ArtDbArtist() {
  const bannerList = [
    {
      info: "qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG",
      size: "359px",
      author: "김동선",
      title: "곰순이, 2010년대",
    },
    {
      info: "qart_test/판화/민정기, 묵안리, 2015.jpg",
      size: "701px",
      author: "민정기",
      title: "묵안리2, 2015",
    },
    {
      info: "qart_test/회화/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png",
      size: "327px",
      author: "Chang SangEui",
      title: "Flower Rain, 2019",
    },
    {
      info: "qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png",
      size: "329px",
      author: "Kim HoDeuk",
      title: "Distant Mountain, 2015",
    },
  ];
  var searchItem = [];
  for (var i = 0; i < 90; i++) {
    searchItem.push({
      info: "qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG",
      author: "김동선",
      email: "00000@naver.com",
    });
  }

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

  return (
    <div>
      <BannerSlide
        title_e={"Today’s Artists"}
        title_k={"오늘의 작가"}
        items={bannerList}
      />
      <SearchSlide
        title_e={"Discover Artist"}
        title_k={"작가 탐방하기"}
        items={searchItem}
      />
      <GalleryInfo title_e={"News On"} title_k={"새소식"} items={galleryInfo} />
    </div>
  );
}
export default ArtDbArtist;
