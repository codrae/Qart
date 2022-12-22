import React from "react";
import "./SectionHeader.css";

const SectionHeader = (props) => {
  return (
    <header className="section-header">
      <div className="container section-header-container">
        <div className={props.line}>
          {props.title_e ? <h4>{props.title_e}</h4> : <></>}
          <h2>{props.title_k}</h2>
        </div>
        <span></span>
      </div>
    </header>
  );
};
export default SectionHeader;
