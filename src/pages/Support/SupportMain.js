import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall'
import './SupportMain.css'

function SupportMain(props) {
  const moreList = {
    menu: [
      {
        title: 'About Qart',
        link: '.',
      },
      {
        title: 'Notice',
        link: './notice',
      },
      {
        title: 'FAQ',
        link: './faq',
      },
      {
        title: '1:1 Inquiry',
        link: './inquiry',
      },
    ],
  }

  return (
    <div className="support-main">
      <Header login={true} colored="black" />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">Support</h2>
        </div>
      </nav>
      <HeaderSmall moreList={moreList} active={true} choice={props.choice} />
      {props.children}
      <Footer></Footer>
    </div>
  )
}
export default SupportMain
