import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TableSlide from '../../../../../components/TableSlide/TableSlide'
import './MyNftList.css'
function MyNftList() {
  const [allCheck, setAllCheck] = useState(false)

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
            <img src={require('../../../../../' + item[i].info)}></img>
          </li>
          <li>지식의 기념비</li>
          <li>2000.00.00</li>
          <li>000,000</li>
          <li>000,000</li>
          <li>
            {i % 3 == 0 ? (
              <p className="sell-status">판매중</p>
            ) : (
              <p className="sell-status sell-compelete">판매완료</p>
            )}
          </li>
          <li>
            <button className="edit-btn">Edit</button>
          </li>
        </ul>
      </div>
    )
  }
  const titleItem = []

  titleItem.push(
    <div className="table-header-search">
      <h2>
        My NFT List <span className="download-button"></span>
      </h2>
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
          <Link to={'./nft'}>
            <button>Add</button>
          </Link>
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
      <li>대표 이미지</li>
      <li>작품명</li>
      <li>제작일</li>
      <li>
        <span className="nl-t nl-t-sl">판매/</span>
        <span className="nl-t">발행현황</span>
      </li>
      <li>
        <span className="nl-t">판매수/</span>
        <span className="nl-t nl-t-sl">발행수</span>
      </li>
      <li>마켓플레이스</li>
      <li>편집</li>
    </ul>
  )
  return (
    <div className="my-nft-list">
      <TableSlide
        title={titleItem}
        slideHeader={tableSlideHeader}
        items={tableItem}
        rows={9}
      />
    </div>
  )
}
export default MyNftList
