import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArtDetail from '../../../components/ArtDetail/ArtDetail'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import HeaderSmall from '../../../components/Header/HeaderSmall/HeaderSmall'
import './MyPageGeneral.css'
import GeneralProfile from './Profile/GeneralProfile'

function MyPageGeneral() {
  const [choice, setChoice] = useState(0)
  const moreList = {
    menu: [
      {
        title: '프로필',
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
  return (
    <div className="mypage-general">
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
        <GeneralProfile />
      ) : choice == 2 ? (
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
        <GeneralProfile />
      )}
      <Footer />
    </div>
  )
}
export default MyPageGeneral
