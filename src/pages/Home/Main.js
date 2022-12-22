import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArtDB from "./ArtDB/ArtDB";
import New from "./New/New";
import NFT from "./NETStore/NFT";
import BannerSlide from "../../components/BannerSlide/BannerSlide";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <BannerSlide />
      <ArtDB />
      <New />
      <NFT />
      <Footer />
    </div>
  );
};
export default Main;
