import React from "react";
import "./SearchHeader.css";
const SectionHeader = () => {
  return (
    <nav className="search">
      <div className="container search__container">
        <section className="search__title">
          <span className="search__title-info">Browse over</span>
          <h2 className="search__title-number">000,000</h2>
        </section>
        <section className="search__block">
          <input
            type={"text"}
            placeholder={"작가 이름을 검색해주세요"}
            className="search__block__input"
          />
          <button className="search__block__button">
            <span className="ir_pm">검색</span>
          </button>
        </section>
      </div>
    </nav>
  );
};
export default SectionHeader;
