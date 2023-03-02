import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArtDetail from '../../../../components/ArtDetail/ArtDetail'
import TableSlide from '../../../../components/TableSlide/TableSlide'
import './GeneralLike.css'
function GeneralLike() {
  const options = ['실물 작품', 'NFT']

  var item = []
  for (var i = 0; i < 36; i++) {
    item.push({
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      title: '곰순이',
      date: '2010년대',
      link: '/market',
      author_e: 'Kim dongsun',
      price: '000,000,000원',
    })
  }
  const result = []

  for (var i = 0; i < 36; i++) {
    result.push(
      <div className="slider-item art-d-slider__item-container">
        <Link
          to={`${item[i].link}/${item[i].id}`}
          state={{
            item: item[i],
          }}
        >
          <div className="slider__item">
            <img src={require('../../../../' + item[i].info)} alt="item"></img>
            <h3>
              {item[i].author} {item[i].author_e}
            </h3>
            <h2>{item[i].title}</h2>
            <h4>{item[i].date}</h4>
          </div>
        </Link>
        <div className="market-item">
          <span className="market-item--price">{item[i].price}</span>
          <button href="#" className="market-item--heart">
            <span className="ir_pm">좋아요</span>
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="g-like-slider">
      <ArtDetail
        title_k={'관심 목록'}
        rows={3}
        slidersPerRow={3}
        breakRows={4}
        breakSlidersPerRow={2}
        divItem={true}
        items={result}
        options={options}
      />
    </div>
  )
}
export default GeneralLike
