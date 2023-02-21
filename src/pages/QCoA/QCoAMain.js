import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SearchHeader from '../../components/SearchHeader/SearchHeader'
import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall'
import './QCoAMain.css'

function QCoAMain(props) {
  const moreList = {
    menu: [
      {
        title: 'About Q-CoA',
        link: './',
      },
      {
        title: 'Q-CoA',
        link: './list',
      },
    ],
  }

  return (
    <div className="qcoa-main">
      <Header colored="black" active={props.active} />
      <SearchHeader title="Q-CoA" active={true} />
      <HeaderSmall moreList={moreList} active={true} choice={props.choice} />
      {props.children}
      <Footer></Footer>
    </div>
  )
}
export default QCoAMain
