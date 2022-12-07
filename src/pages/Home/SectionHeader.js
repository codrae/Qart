import React from "react";
import "./SectionHeader.css";

const SectionHeader = (props) => {
  return (
    <header className="section-header">
      <h2>{props.title}</h2>
    </header>
  );
};
export default SectionHeader;
