import React from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./NFT.css";

const NFT = () => {
  /* 배너 셋팅 */
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    // vertical: false,
    initialSlide: 0,
  };
  var nftItem = [];
  for (var i = 0; i < 8; i++) {
    nftItem.push({
      info: "assets/nft_01.png",
      author: "작가미상",
      title: "나전칠연상, 조선시대",
    });
  }
  const slider_items = (imgList) => {
    return imgList.map((item, i) => {
      return (
        <div className="nft-item">
          <img src={require("../../../" + item.info)} />
          <h4 className="nft-item-title">{item.author}</h4>
          <span className="nft-item-author">{item.title}</span>
        </div>
      );
    });
  };

  return (
    <section className="nft">
      <SectionHeader title_k="NFT Store" line="right-line" />
      <div className="nft-container">
        <Slider {...settings} className="nft-slider">
          {slider_items(nftItem)}
        </Slider>
      </div>
    </section>
  );
};
export default NFT;
