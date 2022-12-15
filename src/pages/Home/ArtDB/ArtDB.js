import React from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import "./ArtDB.css";
const ArtDB = () => {
  return (
    <section className="artbase">
      <SectionHeader title="Art Database" line="right-line" />
      <div className="container">
        <div className="artbase__item">
          <img src={require("../../../assets/art_01.png")}></img>
          <div className="artbase__item__info">
            <a href="/artdb" className="artbase__info__deatil">
              <span className="artbase__info-name">Art Database</span>
              <h3>Artist</h3>
              <h5>큐아트 작가 정보 바로가기</h5>
              <span className="artbase-link"></span>
            </a>
          </div>
        </div>
        <div className="artbase__item">
          <div className="artbase__item__info">
            <a href="/artdb/work" className="artbase__info__deatil right">
              <span className="artbase__info-name">Art Database</span>
              <h3>Work</h3>
              <h5>큐아트 작품 정보 바로가기</h5>
              <span className="artbase-link"></span>
            </a>
          </div>
          <img src={require("../../../assets/art_02.png")}></img>
        </div>
        <div className="artbase__item">
          <img src={require("../../../assets/art_03.png")}></img>
          <div className="artbase__item__info">
            <a href="#" className="artbase__info__deatil">
              <span className="artbase__info-name">Art Database</span>
              <h3>Venue</h3>
              <h5>전시기관 정보 바로가기</h5>
              <span className="artbase-link"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ArtDB;
