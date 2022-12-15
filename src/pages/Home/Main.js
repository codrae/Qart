import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainBanner from "../../components/MainBanner/MainBanner";
import ArtDB from "./ArtDB/ArtDB";
import New from "./New/New";
import NFT from "./NETStore/NFT";

const Main = () => {
  return (
    <div className="main">
      <Header />
      {/* <Banner /> */}
      <MainBanner />

      <ArtDB />
      <New />
      <NFT />
      <Footer />
    </div>
  );
};
export default Main;
