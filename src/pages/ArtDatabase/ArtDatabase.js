import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
function ArtDatabase(props) {
  return (
    <div className="main">
      <Header active="0" />
      <SearchHeader />
      {props.children}
      <Footer />
    </div>
  );
}
export default ArtDatabase;
