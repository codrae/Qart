import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header__logo">
          <a href="#">
            <span className="none">Qart</span>
          </a>
        </div>
        <ul className="header__menu">
          <li>
            <a href="#">Art Database</a>
          </li>
          <li>
            <a href="#">Q-CoA</a>
          </li>
          <li>
            <a href="#">NFT</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
        <div className="header__padding">
          <a href="#">
            <span className="bar ir_pm">더보기</span>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
