import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SearchHeader from '../../components/SearchHeader/SearchHeader'
import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall'

function Marketplace(props) {
  const moreList = {
    menu: [
      {
        title: 'ALL',
        link: '/market/all',
      },
      {
        title: 'PlatformQ',
        link: '/market/platform',
      },
      {
        title: 'Auction',
        link: '/market/auction',
      },
    ],
  }
  return (
    <div>
      <Header active="2" colored="black" />
      <SearchHeader
        title="Marketplace"
        active={props.search}
        placeholder="작가, 작품, 기관을 검색하세요"
      />
      <HeaderSmall
        moreList={moreList}
        active={props.search}
        choice={props.active}
      />
      {props.children}
      <Footer />
    </div>
  )
}
export default Marketplace
