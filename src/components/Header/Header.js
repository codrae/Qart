import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <header>
      <div className="container header-container">
        <div className="header__logo">
          <a href="/">
            <span className="none">Qart</span>
          </a>
        </div>
        <ul className="header__menu">
          <li>
            <a className={props.active == "0" ? "active" : ""} href="/artdb">
              Art Database
            </a>
          </li>
          <li>
            <a className={props.active == "1" ? "active" : ""} href="#">
              Q-CoA
            </a>
          </li>
          <li>
            <a className={props.active == "2" ? "active" : ""} href="#">
              NFT
            </a>
          </li>
          <li>
            <a className={props.active == "3" ? "active" : ""} href="/market">
              Marketplace
            </a>
          </li>
          <li>
            <a className={props.active == "4" ? "active" : ""} href="#">
              Support
            </a>
          </li>
        </ul>
        <div className="header__padding">
          <a className={props.active == "0" ? "active" : ""} href="#">
            <span className="bar ir_pm">더보기</span>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
