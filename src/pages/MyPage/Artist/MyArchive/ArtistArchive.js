import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import TableSlide from '../../../../components/TableSlide/TableSlide'
import './ArtistArchive.css'
import MyArticleList from './Article/MyArticleList'
import MyNftList from './Nft/MyNftList'
import MyQcoAList from './QCoA/MyQCoAList'
import MyWorkList from './Work/MyWorkList'

function ArtistArchive() {
  const [choice, setChoice] = useState(0)
  const [allCheck, setAllCheck] = useState(false)
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

  var item = []
  for (var i = 0; i < 80; i++) {
    item.push({
      id: 1,
      info: 'qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png',
      // title: '지식의 기념비',
      // buy: '리움 미술관',
      // date: '0000.00.00',
      // price: '000,000,000원',
      // state: '배송중',
    })
  }

  const tableItem = []

  for (var i = 0; i < 80; i++) {
    tableItem.push(
      <div className="table-slider-item">
        <ul>
          <li>
            <label className="login-option">
              <input type="checkbox" checked={allCheck} />
              <span className="login-option__check" />
            </label>
          </li>
          <li>{i + 1}</li>
          <li>
            <img src={require('../../../../' + item[i].info)}></img>
          </li>
          <li>Representive Name</li>
          <li>Change Date</li>
          <li>Address</li>
        </ul>
      </div>
    )
  }
  const titleItem = []

  titleItem.push(
    <div className="table-header-search">
      <h2>{moreList.menu[choice].title} List</h2>
      <div className="th-search-container">
        <section className="search__block">
          <input
            type={'text'}
            placeholder={'기사를 검색해주세요'}
            className="search__block__input"
          />
          <button className="search__block__button">
            <span className="ir_pm">검색</span>
          </button>
        </section>
        <section className="th-search-button">
          <button>Delete</button>
          <button>Add</button>
        </section>
      </div>
    </div>
  )
  const tableSlideHeader = []
  tableSlideHeader.push(
    <ul className="container table-slider-header-container">
      <li>
        <label className="login-option">
          <input
            type="checkbox"
            onChange={e => {
              setAllCheck(!allCheck)
            }}
          />
          <span className="login-option__check" />
        </label>
      </li>
      <li>N</li>
      <li>Image</li>
      <li>Material name</li>
      <li>Source</li>
      <li>Issued by</li>
    </ul>
  )
  tableSlideHeader.push(
    <ul className="container table-slider-header-container">
      <li>
        <label className="login-option">
          <input
            type="checkbox"
            onChange={e => {
              setAllCheck(!allCheck)
            }}
          />
          <span className="login-option__check" />
        </label>
      </li>
      <li>N</li>
      <li>Image</li>
      <li>Material name</li>
      <li>Source</li>
      <li>Issued by</li>
    </ul>
  )
  tableSlideHeader.push(
    <ul className="container table-slider-header-container">
      <li>
        <label className="login-option">
          <input
            type="checkbox"
            onChange={e => {
              setAllCheck(!allCheck)
            }}
          />
          <span className="login-option__check" />
        </label>
      </li>
      <li>N</li>
      <li>Image</li>
      <li>Material name</li>
      <li>Source</li>
      <li>Issued by</li>
    </ul>
  )
  tableSlideHeader.push(
    <ul className="container table-slider-header-container">
      <li>
        <label className="login-option">
          <input
            type="checkbox"
            onChange={e => {
              setAllCheck(!allCheck)
            }}
          />
          <span className="login-option__check" />
        </label>
      </li>
      <li>N</li>
      <li>Image</li>
      <li>Material name</li>
      <li>Source</li>
      <li>Issued by</li>
    </ul>
  )
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
      {/* <TableSlide
        title={titleItem}
        slideHeader={tableSlideHeader[choice]}
        items={tableItem}
        rows={9}
      /> */}
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
