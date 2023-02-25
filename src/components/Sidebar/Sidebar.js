import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Sidebar.css'

const Sidebar = props => {
  useEffect(() => {
    document.body.style = `overflow: hidden`
    return () => (document.body.style = `overflow: auto`)
  }, [])
  return (
    <div className="side-container">
      <div className="side-bar">
        <ul className="side-bar-list">
          <li>
            <a href="/">
              <h2 className={props.active == '0' ? 'active' : ''}>
                Art Database
              </h2>
            </a>
          </li>
          <li>
            <a href="/qcoa/">
              <h2 className={props.active == '1' ? 'active' : ''}>Q-CoA</h2>
            </a>
          </li>
          <li>
            <a href="/market">
              <h2 className={props.active == '2' ? 'active' : ''}>
                Marketplace
              </h2>
            </a>
          </li>
          <li>
            <a href="/support/">
              <h2 className={props.active == '3' ? 'active' : ''}>Support</h2>
            </a>
          </li>
          <li>
            <a href="/mypage/general/">
              <h2>마이페이지</h2>
            </a>
          </li>
        </ul>
        <div className="side-log-out">
          <Link>
            <span className="log-out-icon"></span>
            <h2>로그아웃</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
