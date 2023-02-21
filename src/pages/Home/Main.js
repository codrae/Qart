import React from 'react'
import Header from '../../components/Header/Header'
import SearchHeader from '../../components/SearchHeader/SearchHeader'
import Footer from '../../components/Footer/Footer'
import ArtDB from './ArtDB/ArtDB'
import New from './New/New'
import BannerSlide from '../../components/BannerSlide/BannerSlide'
import NFT from './NFT/NFT'
import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall'

const Main = () => {
  const moreList = {
    menu: [
      {
        title: 'Work',
        link: '/artdb/work/',
      },
      {
        title: 'Artist',
        link: '/artdb/artist/',
      },
      {
        title: 'Venue',
        link: '/artdb/venue/',
      },
    ],
  }
  const bannerList = [
    {
      id: 1,
      info: 'assets/banner01.png',
      title: 'YOSIGO',
      link: '.',
      detail:
        '아날로그의 낭만을 사랑하는 스페인 출신 예술가 요시고. 그가 셔터를 누르는 순간 일상적 풍경에 영화적 숨결이 깃든다.',
    },
    {
      id: 2,
      info: 'assets/banner01.png',
      title: 'YOSIGO',
      link: '.',
      detail:
        '아날로그의 낭만을 사랑하는 스페인 출신 예술가 요시고. 그가 셔터를 누르는 순간 일상적 풍경에 영화적 숨결이 깃든다.',
    },
    {
      id: 3,
      info: 'assets/banner01.png',
      title: 'YOSIGO',
      link: '.',
      detail:
        '아날로그의 낭만을 사랑하는 스페인 출신 예술가 요시고. 그가 셔터를 누르는 순간 일상적 풍경에 영화적 숨결이 깃든다.',
    },
    {
      id: 4,
      info: 'assets/banner01.png',
      title: 'YOSIGO',
      link: '.',
      detail:
        '아날로그의 낭만을 사랑하는 스페인 출신 예술가 요시고. 그가 셔터를 누르는 순간 일상적 풍경에 영화적 숨결이 깃든다.',
    },
  ]
  return (
    <div className="main">
      <Header colored="black" active={0} />

      <SearchHeader
        title="Art Database"
        placeholder={'작가, 작품, 기관을 검색하세요'}
        active={true}
      />
      <HeaderSmall moreList={moreList} active={1} />
      <BannerSlide items={bannerList} />
      <ArtDB />
      <New />
      <NFT />
      <Footer />
    </div>
  )
}
export default Main
