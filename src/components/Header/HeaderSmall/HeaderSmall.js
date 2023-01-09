import React from 'react'
import './HeaderSmall.css'

function HeaderSmall(props) {
  console.log(props.moreList)
  return (
    <>
      <header className="header-small">
        <div className="container header-small-container">
          <ul className="header-small-list">
            {props.moreList.menu.map((item, i) => {
              return (
                <li key={i}>
                  <a
                    link={item.link}
                    className={item.active == 1 ? 'active' : ''}
                  >
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </header>
      <header className="header-small">
        <div className="container header-small-container">
          {props.moreList.detailMenu ? (
            <ul className="header-small-list">
              {props.moreList.detailMenu.map((item, i) => {
                return (
                  <li className="header-small--detail" key={i}>
                    <a
                      link={item.link}
                      className={item.active == 1 ? 'active' : ''}
                    >
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </header>
    </>
  )
}
export default HeaderSmall
