import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArtDetail from '../../../components/ArtDetail/ArtDetail'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import HeaderSmall from '../../../components/Header/HeaderSmall/HeaderSmall'
import TableSlide from '../../../components/TableSlide/TableSlide'
import './MyPageGeneral.css'
import GeneralProfile from './Profile/GeneralProfile'

function MyPageGeneral(props) {
  const moreList = {
    menu: [
      {
        title: '프로필',
        link: '/mypage/general',
      },
      {
        title: '나의 지갑',
        link: '/mypage/general/wallet',
      },
      {
        title: '관심목록',
        link: '/mypage/general/like',
      },
    ],
  }

  const titleItem = []
  titleItem.push(
    <div className="table-header-title">
      <a className="th-title-select">
        <h1>구매 내역</h1>
        <span></span>
      </a>
      <a className="th-title-select">
        <h1>응찰 내역</h1>
        <span></span>
      </a>
    </div>
  )
  return (
    <div className="mypage-general">
      <Header login={true} colored="black" />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">마이페이지</h2>
        </div>
      </nav>
      <HeaderSmall moreList={moreList} active={true} choice={props.active} />
      {props.children}
      <Footer />
    </div>
  )
}
export default MyPageGeneral
