import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArtDetail from '../../../components/ArtDetail/ArtDetail'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import HeaderSmall from '../../../components/Header/HeaderSmall/HeaderSmall'
import TableSlide from '../../../components/TableSlide/TableSlide'
import GalleryProfile from './Profile/GalleryProfile'
import './MyPageGallery.css'

function MyPageGallery() {
  const [choice, setChoice] = useState(0)
  const moreList = {
    menu: [
      {
        title: '프로필',
      },
      {
        title: 'My Archive',
        link: './gallery/archive',
      },
      {
        title: '나의 지갑',
      },
      {
        title: '관심목록',
      },
    ],
  }

  var item = []
  for (var i = 0; i < 36; i++) {
    item.push({
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      title: '곰순이, 2010년대',
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
            <h3>{item[i].author}</h3>
            <h2>{item[i].title}</h2>
          </div>
        </Link>
        <button className="like">
          <span className="ir_pm">좋아요</span>
        </button>
      </div>
    )
  }

  const options = ['실물 작품', 'NFT']

  var item = []
  for (var i = 0; i < 80; i++) {
    item.push({
      id: 1,
      info: 'qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png',
      title: '지식의 기념비',
      buy: '리움 미술관',
      date: '0000.00.00',
      price: '000,000,000원',
      state: '배송중',
    })
  }

  const tableItem = []

  for (var i = 0; i < 80; i++) {
    tableItem.push(
      <Link
        state={{
          item: item[i],
        }}
        key={i}
        className="table-slider-item"
      >
        <img src={require('../../../' + item[i].info)}></img>
        <span>{item[i].title}</span>
        <span>{item[i].buy}</span>
        <span>{item[i].date}</span>
        <span>{item[i].price}</span>
        <button className="delivery-status">{item[i].state}</button>
      </Link>
    )
  }

  const titleItem = []
  titleItem.push(
    <div className="table-header-title">
      <a className="th-title-select">
        <h1>구매 내역</h1>
        <span></span>
      </a>
      <a className="th-title-select">
        <h1>판매 내역</h1>
        <span></span>
      </a>
    </div>
  )
  return (
    <div className="mypage-gallery">
      <Header login={true} colored="black" />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">마이페이지</h2>
        </div>
      </nav>
      <HeaderSmall
        moreList={moreList}
        active={true}
        choice={choice}
        setMenu={setChoice}
      />
      {choice == 0 ? (
        <GalleryProfile />
      ) : choice == 2 ? (
        <TableSlide title={titleItem} options={options} items={tableItem} />
      ) : choice == 3 ? (
        <div className="g-like-slider">
          <ArtDetail
            title_k={'관심 목록'}
            rows={3}
            slidersPerRow={3}
            divItem={true}
            items={result}
          />
        </div>
      ) : (
        <GalleryProfile />
      )}
      <Footer />
    </div>
  )
}
export default MyPageGallery
