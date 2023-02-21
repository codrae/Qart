import React from 'react'
import { Link } from 'react-router-dom'
import TopArrowSlider from '../../../components/TopArrowSlider/TopArrowSlider'
import './NFT.css'
function NFT() {
  var item = []
  for (var i = 0; i < 36; i++) {
    item.push({
      id: 1,
      info: 'qart_test/판화/민정기, 묵안리2, 2015.jpg',
      author: '김동선 Kim dongsun',
      title: '곰순이',
      link: '.',
      created: '2010년대',
      sell: '총 1개중 1개 판매중',
    })
  }

  const result = []

  for (var i = 0; i < 36; i++) {
    result.push(
      <Link
        to={`${item[i].link}/${item[i].id}`}
        state={{
          item: item[i],
        }}
        key={i}
      >
        <div key={i} className="art-d-slider__item">
          <img
            className="art-d-item-image"
            src={require('../../../' + item[i].info)}
            //   src={require('../../../../../' + item.info)}
          ></img>
          <h4>{item[i].author}</h4>
          <h3>{item[i].title}</h3>
          <div className="nft-item">
            <p>
              <span className="nft-item-title">제작년도</span>
              <span className="nft-item-created">{item[i].created}</span>
            </p>
            <p>
              <span className="nft-item-title">판매</span>
              <span className="nft-item-sell">{item[i].sell}</span>
            </p>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <div className="main-nft">
      <TopArrowSlider title={'NFT'} divItem={true} item={result} />
    </div>
  )
}
export default NFT
