import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './Header.css'
const Header = props => {
  const [isOpen, setOpen] = useState(false)
  const [xPosition, setX] = useState(-243)
  const side = useRef()
  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0)
      setOpen(true)
    } else {
      setX(-243)
      setOpen(false)
    }
  }

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async e => {
    let sideArea = side.current
    let sideCildren = side.current.contains(e.target)
    if (isOpen && (!sideArea || !sideCildren)) {
      setX(-243)
      setOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClose)
    return () => {
      window.removeEventListener('click', handleClose)
    }
  })

  let navigate = useNavigate()
  return (
    <header className={props.colored} ref={side}>
      <div className="container header-container">
        {props.detail ? (
          <div className="header__before">
            <a onClick={() => navigate(-1)}>
              <span className="before-icon"></span>
            </a>
          </div>
        ) : (
          <div className="header__before"></div>
        )}
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

          <a className={props.active == '0' ? 'active' : ''} href="/search">
            <span className="search-icon ir_pm">검색</span>
          </a>
          <button
            className={isOpen ? 'logout-button-active' : 'logout-button'}
            href="#"
            onClick={() => toggleMenu()}
          >
            <span className="bar ir_pm">더보기</span>
          </button>
        </div>
      </div>
      {isOpen ? <Sidebar active={props.active}></Sidebar> : <></>}
    </header>
  )
}
export default Header
