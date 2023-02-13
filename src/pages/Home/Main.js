import React from 'react'
import Header from '../../components/Header/Header'
import SearchHeader from '../../components/SearchHeader/SearchHeader'
import Footer from '../../components/Footer/Footer'
import ArtDB from './ArtDB/ArtDB'
import New from './New/New'
import BannerSlide from '../../components/BannerSlide/BannerSlide'
import NFT from './NFT/NFT'

const Main = () => {
  const bannerList = [
    {
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      title: '곰순이, 2010년대',
      link: '/artdb/artist',
      date: '2010년대',
    },
    {
      id: 2,
      info: 'qart_test/판화/민정기, 묵안리, 2015.jpg',
      author: '민정기',
      title: '묵안리2, 2015',
      link: '/artdb/artist',
      date: '2010년대',
    },
    {
      id: 3,
      info: 'qart_test/회화/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png',
      author: 'Chang SangEui',
      title: 'Flower Rain, 2019',
      link: '/artdb/artist',
      date: '2010년대',
    },
    {
      id: 4,
      info: 'qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png',
      author: 'Kim HoDeuk',
      title: 'Distant Mountain, 2015',
      link: '/artdb/artist',
      date: '2010년대',
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
      <BannerSlide items={bannerList} />
      <ArtDB />
      <New />
      <NFT />
      <Footer />
    </div>
  )
}
export default Main
