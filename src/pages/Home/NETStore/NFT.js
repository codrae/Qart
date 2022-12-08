import React from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import Slider from "react-slick";
import "./NFT.css";
import "./NFT-Slider.css";

const NFT = () => {
  /* 배너 셋팅 */
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "23.88%",
    centerMargin: "23.88%",
  };

  return (
    <section className="nft">
      <SectionHeader title="NFT Store" line="right-line" />
      <div className="container">
        <div className="nft-carousel">
          <Slider {...settings}>
            <div className="nft-item">
              <img src={require("../../../assets/nft_01.png")}></img>
              <h4 className="nft-item-title">작가미상</h4>
              <span className="nft-item-author">나전칠연상, 조선시대</span>
            </div>

            <div className="nft-item">
              <img src={require("../../../assets/nft_03.png")}></img>
              <h4 className="nft-item-title">작가미상</h4>
              <span className="nft-item-author">나전칠연상, 조선시대</span>
            </div>

            <div className="nft-item">
              <img src={require("../../../assets/nft_01.png")}></img>
              <h4 className="nft-item-title">작가미상</h4>
              <span className="nft-item-author">나전칠연상, 조선시대</span>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default NFT;
