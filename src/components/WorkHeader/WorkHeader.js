import React from 'react'
import { Link } from 'react-router-dom'
import './WorkHeader.css'

const WorkHeader = props => {
  const moreListChange = e => {
    props.moreListChange(e)
  }
  return (
    <header
      className={
        props.moreList && props.moreActive
          ? 'work-header work-header-d'
          : 'work-header'
      }
      style={props.color == false ? { background: 'none' } : {}}
    >
      <div className="container">
        <div className="work-header__container">
          <section
            className={
              props.title_e ? 'work-header__info' : 'work-header__info-big'
            }
          >
            {props.title_e ? <h4>{props.title_e}</h4> : <></>}
            <h2>{props.title_k}</h2>
          </section>
          <p className="work-header__move">
            {props.follow ? (
              <button className="work-header__follow">팔로우</button>
            ) : props.move ? (
              <Link
                to="./detail"
                state={{
                  title_e: props.title_e,
                  title_k: props.title_k,
                  items: props.items,
                  moreList: props.moreList,
                  moreActive: props.moreActive,
                }}
              >
                <span>더보기</span>
                <button className="work-header__move-icon"></button>
              </Link>
            ) : (
              <></>
            )}
          </p>
        </div>
        {props.moreList && props.moreActive ? (
          <ul className="work-header__detail">
            {props.moreList.map((item, i) => {
              return (
                <li key={i}>
                  <button
                    className={i == props.moreMenu ? 'choice' : ''}
                    onClick={() => moreListChange(i)}
                  >
                    {item}
                  </button>
                </li>
              )
            })}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </header>
  )
}
export default WorkHeader
