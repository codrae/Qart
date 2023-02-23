import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArtDetail from '../../../components/ArtDetail/ArtDetail'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import HeaderSmall from '../../../components/Header/HeaderSmall/HeaderSmall'
import TableSlide from '../../../components/TableSlide/TableSlide'
import './MyPageGallery.css'

function MyPageGallery(props) {
  const moreList = {
    menu: [
      {
        title: '프로필',
        link: '/mypage/gallery',
      },
      {
        title: 'My Archive',
        link: '/mypage/gallery/archive',
      },
      {
        title: '나의 지갑',
        link: '/mypage/gallery/wallet',
      },
      {
        title: '관심목록',
        link: '/mypage/gallery/like',
      },
    ],
  }

  return (
    <div className="mypage-artist">
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
export default MyPageGallery
