import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import DropDown from '../../../../../components/DropDown/DropDown'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import HeaderSmall from '../../../../../components/Header/HeaderSmall/HeaderSmall'
import SectionHeader from '../../../../../components/SectionHeader/SectionHeader'
import './MyNftAdd.css'

function MyNftAdd() {
  return (
    <div className="ma-nft-add">
      <Header login={true} colored="black" />
      <SectionHeader title={'Add NFT'} />
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
