import React from 'react'
import './HeaderSmall.css'

function HeaderSmall(props) {
  return (
    <header className="header-small">
      <div className="container header-small-container">
        <ul className="header-small-list">
          {props.moreList.menu.map((item, i) => {
            return (
              <li
                className={props.detail == 1 ? 'header-small--detail' : ''}
                key={i}
              >
                <a
                  link={item.link}
                  className={i == props.active ? 'active' : ''}
                >
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
export default HeaderSmall
