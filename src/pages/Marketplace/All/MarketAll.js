import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArtDetail from '../../../components/ArtDetail/ArtDetail'
import PageSlide from '../../../components/PageSlide/PageSlide'
import BigTopArrow from '../../../components/TopArrowSlider/BigTopArrow/BigTopArrow'
import WorkHeader from '../../../components/WorkHeader/WorkHeader'
import './MarketAll.css'

function MarketAll() {
  const [menu, setMenu] = useState(0)
  const bannerList = [
    {
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      author_e: 'Kim dongsun',
      title: '곰순이',
      date: '2010년대',
      price: '000,000,000원',
      link: '/market',
    },
    {
      id: 1,
      info: 'qart_test/판화/민정기, 묵안리, 2015.jpg',
      author: '김동선',
      author_e: 'Kim dongsun',
      title: '곰순이',
      date: '2010년대',
      price: '000,000,000원',
      link: '/market',
    },
    {
      id: 1,
      info: 'qart_test/회화/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png',
      author: '김동선',
      author_e: 'Kim dongsun',
      title: '곰순이',
      date: '2010년대',
      price: '000,000,000원',
      link: '/market',
    },
    {
      id: 1,
      info: 'qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png',
      author: '김동선',
      author_e: 'Kim dongsun',
      title: '곰순이',
      date: '2010년대',
      price: '000,000,000원',
      link: '/market',
    },
  ]

  var item = []
  for (var i = 0; i < 36; i++) {
    item.push({
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      author_e: 'Kim dongsun',
      title: 'Distant Mountain',
      created: '2010년대',
      startPrice: '000,000,000원',
      nowPrice: '000,000,000원',
      link: '/market',
    })
  }

  const result = []

  for (var i = 0; i < 36; i++) {
    result.push(
      <div className="slider__item">
        <Link
          to={`${item[i].link}/${item[i].id}`}
          state={{
            item: item[i],
          }}
        >
          <div>
            <img src={require('../../../' + item[i].info)} alt="item"></img>
            <h3>
              {item[i].author} {item[i].author_e}
            </h3>
            <h2>{item[i].title}</h2>
            <h4>{item[i].created}</h4>
          </div>
        </Link>
        <div className="market-item">
          <h5 className="market-item--price">
            <span>시작가</span>
            <span className="price">{item[i].startPrice}</span>
          </h5>
          <h5 className="market-item--price now-price">
            <span>현재가</span>
            <span className="price">{item[i].nowPrice}</span>
          </h5>
          <div className="market-item--button">
            <button href="#" className="market-button">
              응찰하기
            </button>
            <button href="#" className="market-button--heart">
              <span className="ir_pm">좋아요</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  var nftItem = []
  for (var i = 0; i < 36; i++) {
    nftItem.push({
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      author_e: 'Kim dongsun',
      title: 'Distant Mountain',
      created: '2000.00.00',
      sell: '총 1개중 1개 판매중',
      detail: '0.234 ETH~',
      link: '/market/nft',
    })
  }

  //nft
  const nftResult = []

  for (var i = 0; i < 36; i++) {
    nftResult.push(
      <div className="market-nft slider__item">
        <Link
          to={`${nftItem[i].link}/${nftItem[i].id}`}
          state={{
            item: nftItem[i],
          }}
        >
          <div>
            <img src={require('../../../' + nftItem[i].info)} alt="item"></img>
            <h3>
              {nftItem[i].author} {nftItem[i].author_e}
            </h3>
            <h2>{nftItem[i].title}</h2>
          </div>
        </Link>

        <div className="nft-item">
          <p>
            <span className="nft-item-title">제작년도</span>
            <span className="nft-item-created">{nftItem[i].created}</span>
          </p>
          <p>
            <span className="nft-item-title">판매</span>
            <span className="nft-item-sell">{nftItem[i].sell}</span>
          </p>
        </div>
        <span className="nft-price">$200.00</span>
        <div className="nft-button market-item--button ">
          <span>000,000,000원</span>
          <button href="#" className="market-button--heart">
            <span className="ir_pm">좋아요</span>
          </button>
        </div>
      </div>
    )
  }

  var detailList = [
    '전체(0000)',
    '회화(0000)',
    '판화(0000)',
    '에디션(0000)',
    '사진(0000)',
    '조각/입체(0000)',
    '고미술(0000)',
    'NFT(0000)',
  ]
  const options = ['최신등록순', '인기순', '작가명순', '작품명순']
  return (
    <section className="market-all">
      <BigTopArrow
        title_e={'Art Now'}
        title_k={'신규 작품'}
        items={bannerList}
      />
      <WorkHeader
        moreList={detailList}
        moreListChange={setMenu}
        moreMenu={menu}
        moreActive={1}
        title_k={'ALL(000)'}
      ></WorkHeader>
      <div className="market-all-slider">
        <ArtDetail
          rows={3}
          slidersPerRow={3}
          divItem={true}
          options={options}
          items={menu == 7 ? nftResult : result}
        />
      </div>
    </section>
  )
}
export default MarketAll
