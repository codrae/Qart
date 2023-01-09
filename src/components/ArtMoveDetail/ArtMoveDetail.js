import React from 'react'
import './ArtMoveDetail.css'

function ArtMoveDetail(props) {
  function RepresentingItems(item) {
    const result = []

    for (var i = 0; i < props.represent; i++) {
      result.push(
        <div className="art-md__list-item">
          <img src={require('../../' + item[i].info)}></img>
          <h3 className="item-author">{item[i].author}</h3>
          <h3 className="item-title">{item[i].title}</h3>
        </div>
      )
    }
    return result
  }
  return (
    <div className={props.moreList ? 'art-md art-md-d' : 'art-md'}>
      <header className="art-md--header">
        <div className="container">
          <div className="art-md--header-container">
            <section className="art-md--header__info">
              <h4>{props.title_e}</h4>
              <h2>{props.title_k}</h2>
            </section>
            <a className="art-md--header__move">
              <span>더보기</span>
              <button className="art-md__move-icon"></button>
            </a>
          </div>
          {props.moreList ? (
            <ul className="art-md--header__detail">
              {props.moreList.map((item, i) => {
                return (
                  <li key={i}>
                    <button className={i == 0 ? 'choice' : ''}>{item}</button>
                  </li>
                )
              })}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </header>
      <section className="art-md--content">
        <div className="container">
          <section className="art-md--content__list">
            {RepresentingItems(props.items)}
          </section>
        </div>
      </section>
    </div>
  )
}
export default ArtMoveDetail
