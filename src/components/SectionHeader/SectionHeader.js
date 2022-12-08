import React from "react";
import "./SectionHeader.css";

const SectionHeader = (props) => {
  return (
    <header className="section-header">
      <div className="section-heaader-container">
        <div className={props.line}>
          <h2>{props.title}</h2>
        </div>
      </div>
    </header>
  );
};
export default SectionHeader;
