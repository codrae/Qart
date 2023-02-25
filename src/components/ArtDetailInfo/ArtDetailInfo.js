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
    <div className="art-detail">
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
                    <h2>
                      <span className="ad-profile__info-k">
                        {item.author.name}
                      </span>{' '}
                      {item.author.e_name}
                    </h2>
                    <h4>{item.author.email}</h4>
                  </article>
                  <button className="art-detail__profile__move">팔로우</button>
                </div>
              ) : (
                <></>
              )}
            </ul>

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
    </div>
  )
}
export default ArtDetailInfo
