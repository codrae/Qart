import React, { useState } from 'react'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import './ArtistArchive.css'
import MyArticleList from './Article/MyArticleList'
import MyNftList from './Nft/MyNftList'
import MyQcoAList from './QCoA/MyQCoAList'
import MyWorkList from './Work/MyWorkList'

function ArtistArchive() {
  const [choice, setChoice] = useState(0)
  const moreList = {
    menu: [
      {
        title: 'My Work',
      },
      {
        title: 'My NFT',
      },
      {
        title: 'My Article',
      },
      {
        title: 'My Q-CoA',
      },
    ],
  }

  return (
    <div className="mypage-archive">
      <Header login={true} colored="black" />
      <nav className="search">
        <div className="container search__container">
          <div className="ad-haeder__route">
            <span>마이페이지 </span>
            <span className="next"></span>
          </div>
          <h2 className="search__title">My Archive</h2>
        </div>
      </nav>
      <HeaderSmall
        moreList={moreList}
        active={true}
        choice={choice}
        setMenu={setChoice}
      />
      {choice == 0 ? (
        <MyWorkList />
      ) : choice == 1 ? (
        <MyNftList />
      ) : choice == 2 ? (
        <MyArticleList />
      ) : (
        <MyQcoAList />
      )}
      <Footer />
    </div>
  )
}
export default ArtistArchive
