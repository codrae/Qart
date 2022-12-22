import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchHeader from "../../components/SearchHeader/SearchHeader";

function Marketplace(props) {
  return (
    <div className="main">
      <Header active="3" />
      <SearchHeader />
      {props.children}
      <Footer />
    </div>
  );
}
export default Marketplace;
