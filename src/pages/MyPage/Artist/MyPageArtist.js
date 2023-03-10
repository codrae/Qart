import React, { useState } from 'react'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import HeaderSmall from '../../../components/Header/HeaderSmall/HeaderSmall'
import './MyPageArtist.css'

function MyPageArtist(props) {
  const [choice, setChoice] = useState(0)
  const moreList = {
    menu: [
      {
        title: '프로필',
        link: '/mypage/artist',
      },
      {
        title: 'My Archive',
        link: '/mypage/artist/archive',
      },
      {
        title: '나의 지갑',
        link: '/mypage/artist/wallet',
      },
      {
        title: '관심목록',
        link: '/mypage/artist/like',
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
export default MyPageArtist
