import React from "react";
import "./SectionHeader.css";

const SectionHeader = (props) => {
  return (
    <header className="section-header">
      <div className="container section-header-container">
        <div className={props.line}>
          <h2>{props.title}</h2>
        </div>
        <span></span>
      </div>
    </header>
  );
};
export default SectionHeader;
