import React, { useState } from "react";

import SearchSlide from "../../../components/SearchSlide/SearchSlide";
import GalleryInfo from "../../../components/GalleryInfo/GalleryInfo";
function Venue() {
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
    <div className="artdb-venue">
      <SearchSlide title_e={"Venue"} title_k={"기관"} items={searchItem} />
      <GalleryInfo title_e={"News On"} title_k={"새소식"} items={galleryInfo} />
    </div>
  );
}
export default Venue;
