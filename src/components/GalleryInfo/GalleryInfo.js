import React from "react";
import "./GalleryInfo.css";
function GalleryInfo(props) {
  const gallery_items = (imgList) => {
    return imgList.map((item, i) => {
      var bg = require("../../" + item.info);
      return (
        <div className="gallery__item">
          <div className="gallery__item-container">
            <img
              className="gallery__item-image"
              src={require("../../" + item.info)}
              style={{ objectFit: `${item.size}` }}
            />
            <div
              className="gallery__item-info"
              style={{ order: `${item.order}` }}
            >
              <a href="#">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </a>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="gallery_section">
      <header className="gallery__header">
        <div className="container gallery__header-container">
          <div className="gallery">
            <h3 className="gallery__header__info-e">{props.title_e}</h3>
            <h2 className="gallery__header__info-k">{props.title_k}</h2>
          </div>
        </div>
      </header>
      {gallery_items(props.items)}
    </section>
  );
}
export default GalleryInfo;
