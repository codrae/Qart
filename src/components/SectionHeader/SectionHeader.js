import React from 'react'
import './SectionHeader.css'

const SectionHeader = props => {
  const changeMenu = e => {
    props.setMenu(e)
  }
  return (
    <section className="section-header">
      <div className="container section-header-container">
        <h3>{props.title}</h3>
        {props.moreList ? (
          <ul className="section-header-list">
            {props.moreList.map((item, i) => {
              return (
                <li className="section-header--item" key={i}>
                  <a
                    onClick={() => changeMenu(i)}
                    className={props.active == i ? 'active' : ''}
                  >
                    {props.moreList[i]}
                  </a>
                </li>
              )
            })}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </section>
  )
}
export default SectionHeader
