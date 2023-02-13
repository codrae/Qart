import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import DropDown from '../../../../../components/DropDown/DropDown'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import HeaderSmall from '../../../../../components/Header/HeaderSmall/HeaderSmall'
import './MyNftAdd.css'

function MyNftAdd() {
  return (
    <div className="ma-nft-add">
      <Header login={true} colored="black" />
      <nav className="search">
        <div className="container search__container">
          <div className="ad-haeder__route">
            <span>마이페이지 </span>
            <span className="next"></span>
            <span>My archive </span>
            <span className="next"></span>
          </div>
          <h2 className="search__title">Add NFT</h2>
        </div>
      </nav>
      <div className="ma-nft-content">
        <div className="container">
          <Link>
            <button>메타마스크 연결</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default MyNftAdd
