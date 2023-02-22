import React from 'react'
import './Header.css'
const Header = props => {
  return (
    <header className={props.colored}>
      <div className="container header-container">
        <div className="header__logo">
          <a href="/">
            <span className="none">Qart</span>
          </a>
        </div>
        <ul className="header__menu">
          <li>
            <a className={props.active == '0' ? 'active' : ''} href="/">
              Art Database
            </a>
          </li>
          <li>
            <a className={props.active == '1' ? 'active' : ''} href="/qcoa/">
              Q-CoA
            </a>
          </li>
          <li>
            <a className={props.active == '2' ? 'active' : ''} href="/market">
              Marketplace
            </a>
          </li>
          <li>
            <a className={props.active == '3' ? 'active' : ''} href="/support/">
              Support
            </a>
          </li>
        </ul>
        <div className="header__padding">
          {props.login ? (
            <div className="header-logined">
              <a className="mypage" href="/mypage/general">
                <span>마이페이지</span>
              </a>
              <span className="mypage-sym">|</span>
              <a className="logout" href="/logout">
                <span>Log-out</span>
              </a>
            </div>
          ) : (
            <a className="login" href="/login">
              <span>Log-in</span>
            </a>
          )}

          <a className={props.active == '0' ? 'active' : ''} href="#">
            <span className="search-icon ir_pm">검색</span>
          </a>
          <a className={props.active == '0' ? 'active' : ''} href="#">
            <span className="bar ir_pm">더보기</span>
          </a>
        </div>
      </div>
    </header>
  )
}
export default Header
