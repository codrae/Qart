import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ArtDB from './ArtDB/ArtDB'
import New from './New/New'
import BannerSlide from '../../components/BannerSlide/BannerSlide'
// import NFT from './NETStore/NFT'

const Main = () => {
  return (
    <div className="main">
      <Header />
      <BannerSlide />
      <ArtDB />
      <New />
      <Footer />
    </div>
  )
}
export default Main
