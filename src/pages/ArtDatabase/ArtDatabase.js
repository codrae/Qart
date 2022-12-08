import React from "react";
import Header from "../../components/Header/Header";
import ArtSlider from "./ArtSlider/ArtSlider";
import SearchHeader from "./SearchHeader/SearchHeader";

import "./ArtDatabase.css";
function ArtDatabase() {
  return (
    <div className="main">
      <Header active="0" />
      <SearchHeader />

      <section className="container artist-banner">
        <div className="artist-banner__info">
          <h4>Today’s Artists</h4>
          <h2>오늘의 작가</h2>
        </div>
        <section className="artist-banner__slider">
          <ArtSlider />
        </section>
      </section>
    </div>
  );
}
export default ArtDatabase;
