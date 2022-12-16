import React from "react";
import "./DetailInfo.css";
import WorkHeader from "../../components/WorkHeader/WorkHeader";
function DetailInfo(props) {
  const detail_items = (itemList) => {
    return itemList.map((item, i) => {
      return (
        <li>
          <img
            className="detail-info__img"
            src={require("../../" + item.info)}
            width={item.width}
            height={item.height}
          />
          <p className="detail-info__comment" style={{ width: item.width }}>
            {item.detail}
          </p>
        </li>
      );
    });
  };
  return (
    <>
      <WorkHeader title_k={props.title} left={true} small={true} />
      <section className="container detail-info">
        <ul>{detail_items(props.item)}</ul>
      </section>
    </>
  );
}
export default DetailInfo;
