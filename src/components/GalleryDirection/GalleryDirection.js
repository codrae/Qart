import React from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./GalleryDirection.css";
const GalleryDirection = (props) => {
  const dirItems = (items) => {
    return items.map((item, i) => {
      return (
        <div className="gallery-dir__item">
          <div className="gallery-dir__item-container">
            <div className="gallery-dir__item-image">
              <img
                src={require("../../" + item.image)}
                style={item.order == -1 ? { margin: 0 } : {}}
              ></img>
            </div>
            <div
              className="gallery-dir__item__info"
              style={{ order: `${item.order}` }}
            >
              <a
                href={item.link}
                className={
                  item.order == -1
                    ? "gallery-dir__info__deatil gallery-dir-left"
                    : "gallery-dir__info__deatil"
                }
                style={{ order: `${item.order}` }}
              >
                <span className="gallery-dir__info-name">{item.small}</span>
                <h3>{item.section}</h3>
                <h5>{item.title}</h5>
                <span className="gallery-dir-link"></span>
              </a>
              {/* <span className="gallery-dir__info__box"></span> */}
            </div>
          </div>
        </div>
      );
    });
  };
  return <section className="gallery-dir">{dirItems(props.items)}</section>;
};
export default GalleryDirection;
