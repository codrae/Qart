import React from "react";
import "./WorkHeader.css";

const WorkHeader = (props) => {
  return (
    <header className="work-header">
      <section
        className={
          props.small ? "work-header-basic small-header" : "work-header-basic"
        }
      >
        <div className="container work-header__container">
          <p
            className={
              props.left ? "work-header__info-left" : "work-header__info"
            }
          >
            <h2 className="work-header__info-k">{props.title_k}</h2>
            <h3 className="work-header__info-e">{props.title_e}</h3>
          </p>
          <p className="work-header__more">
            {props.follow ? <button>팔로우</button> : <></>}
          </p>
        </div>
      </section>
      {props.moreList ? (
        <section className="work-header-detail">
          <div className="container work-header__container">
            <ul>
              {props.moreList.map((item, i) => {
                return (
                  <li>
                    <button className={i == 0 ? "choice" : ""}>{item}</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : (
        <></>
      )}
    </header>
  );
};
export default WorkHeader;
