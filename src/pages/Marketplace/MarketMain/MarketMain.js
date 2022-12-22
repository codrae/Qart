import React from "react";
import BannerSlide from "../../../components/BannerSlide/BannerSlide";
import WorkHeader from "../../../components/WorkHeader/WorkHeader";
import TopArrowSlider from "../../../components/TopArrowSlider/TopArrowSlider";
import "./MarketMain.css";
import RPaddingSlide from "../../../components/RPaddingSlide/RPaddingSlide";
import GalleryInfo from "../../../components/GalleryInfo/GalleryInfo";
import GalleryDirection from "../../../components/GalleryDirection/GalleryDirection";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
function MarketMain() {
  const moreList = ["바로구매", "옥션", "갤러리"];
  const moreList2 = [
    "전체",
    "회화",
    "판화",
    "사진",
    "입체-조각",
    "미디어-다원예술",
    "Collectible",
    "NFT",
  ];
  var moreItem = [];
  for (var i = 0; i < 9; i++) {
    moreItem.push({
      info: "qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png",
      author: "Kim HoDeuk",
      title: "Distant Mountain, 2015",
      price: "000,000,000원",
    });
  }
  const bannerList = [
    {
      info: "qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG",
      size: "359px",
      author: "김동선",
      title: "곰순이, 2010년대",
      price: "000,000,000원",
    },
    {
      info: "qart_test/판화/민정기, 묵안리, 2015.jpg",
      size: "701px",
      author: "민정기",
      title: "묵안리2, 2015",
      price: "000,000,000원",
    },
    {
      info: "qart_test/회화/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png",
      size: "327px",
      author: "Chang SangEui",
      title: "Flower Rain, 2019",
      price: "000,000,000원",
    },
    {
      info: "qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png",
      size: "329px",
      author: "Kim HoDeuk",
      title: "Distant Mountain, 2015",
      price: "000,000,000원",
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

  const infoItem = [
    {
      image: "assets/art_01.png",
      link: "#",
      small: "Upcoming Auctions",
      section: "ABCD Auction",
      title: "옥션 정보 바로가기",
    },
    {
      image: "assets/art_02.png",
      link: "#",
      small: "Upcoming Auctions",
      section: "ABCD Auction",
      title: "옥션 정보 바로가기",
      order: -1,
    },
  ];
  return (
    <div className="market-main">
      <BannerSlide />
      <section className="top-border">
        <WorkHeader title_k="전체" title_e="all" moreList={moreList} />
        <TopArrowSlider item={moreItem} />
      </section>
      <section className="top-border">
        <WorkHeader title_k="작품" title_e="work" moreList={moreList2} />
        <TopArrowSlider item={moreItem} />
      </section>
      {/* <WorkHeader title_k="Curator’s Pick" /> */}
      <RPaddingSlide title_k="Curator’s Pick" items={bannerList} />
      <SectionHeader title_k="Upcoming Auctions" line="right-line" />
      <GalleryDirection items={infoItem} />
    </div>
  );
}
export default MarketMain;
