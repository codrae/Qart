import React from "react";
import "./ArtDetailInfo.css";

function ArtDetailInfo(props) {
  const item = props.item;
  const InfoItem = (items) => {
    return Object.values(items).map((info, i) => {
      return (
        <li key={i}>
          <span className="art-detail__name">{info.title}</span>
          <span className="art-detail__content">{info.content}</span>
        </li>
      );
    });
  };

  return (
    <section className="container">
      <div className="art-detail-container">
        <p className="art-detail__image">
          <img src={require("../../" + item.image)}></img>
        </p>
        <ul className="art-detail__list">
          {InfoItem(item.infos)}
          {item.author ? (
            <li>
              <div className="art-detail__profile">
                <img src={require("../../" + item.author.image)}></img>
                <article className="art-detail__profile__info">
                  <h2>{item.author.name}</h2>
                  <h4>{item.author.email}</h4>
                  <button>팔로우</button>
                </article>
                <button className="art-detail__profile__move">
                  <span className="ir_pm">이동</span>
                </button>
              </div>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </section>
  );
}
export default ArtDetailInfo;
