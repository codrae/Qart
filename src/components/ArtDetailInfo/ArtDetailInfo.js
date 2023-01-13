import React from 'react'
import './ArtDetailInfo.css'

function ArtDetailInfo(props) {
  const item = props.item
  const InfoItem = items => {
    return Object.values(items).map((info, i) => {
      return (
        <li key={i}>
          <span className="art-detail__name">{info.title}</span>
          <span className="art-detail__content">{info.content}</span>
        </li>
      )
    })
  }

  return (
    <section className="container">
      <div className="art-detail-container">
        <section className="art-detail-section">
          <img
            className="art-detail__image"
            src={require('../../' + item.image)}
          ></img>

          <ul className="art-detail__list">
            {InfoItem(item.infos)}
            {item.author ? (
              <div className="art-detail__profile">
                <img src={require('../../' + item.author.image)}></img>
                <article className="art-detail__profile__info">
                  <h2>{item.author.name}</h2>
                  <h4>{item.author.email}</h4>
                  <button>팔로우</button>
                </article>
                <button className="art-detail__profile__move">
                  <span className="ir_pm">이동</span>
                </button>
              </div>
            ) : (
              <></>
            )}
          </ul>
        </section>
        <section>
          <div className="side-arrow-slider__list">
            <div className="side-arrow-slider__item">
              <img
                className="side-arrow-image"
                src={require('../../' + item.image)}
              ></img>
            </div>
            <div className="side-arrow-slider__item">
              <img
                className="side-arrow-image"
                src={require('../../' + item.image)}
              ></img>
            </div>
            <div className="side-arrow-slider__item">
              <img
                className="side-arrow-image"
                src={require('../../' + item.image)}
              ></img>
            </div>
            <div className="side-arrow-slider__item">
              <img
                className="side-arrow-image"
                src={require('../../' + item.image)}
              ></img>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
export default ArtDetailInfo
