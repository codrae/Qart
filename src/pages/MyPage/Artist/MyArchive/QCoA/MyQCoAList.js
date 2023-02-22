import React, { useState } from 'react'
import TableSlide from '../../../../../components/TableSlide/TableSlide'
import './MyQCoAList.css'
function MyQcoAList() {
  const [checkItems, setCheckItems] = useState([])

  var items = []
  for (var i = 0; i < 80; i++) {
    items.push({
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

  items.map((item, i) => {
    tableItem.push(
      <div className="table-slider-item">
        <ul>
          <li>
            <label className="login-option">
              <input
                type="checkbox"
                onChange={e => checkHandler(e.target.checked, i)}
                checked={checkItems.indexOf(i) >= 0 ? true : false}
              />
              <span className="login-option__check" />
            </label>
          </li>
          <li>{i + 1}</li>
          <li>
            <img src={require('../../../../../' + items[i].info)}></img>
          </li>
          <li>홍길동</li>
          <li>지식의 기념비</li>
          <li>캔버스</li>
          <li>2000.00.00</li>
          <li>리움 미술관</li>
          <li>
            <span className="fz-c-blue">2000.00.00</span>
          </li>
        </ul>
      </div>
    )
  })
  // 개별선택
  function checkHandler(checked, id) {
    if (checked) {
      setCheckItems([...checkItems, id])
    } else {
      // 체크해제
      setCheckItems(checkItems.filter(o => o !== id))
    }
  }

  // 전체선택
  function checkAllHandler(checked) {
    if (checked) {
      const ids = []
      tableItem.forEach((v, id) => ids.push(id))
      setCheckItems(ids)
    } else {
      setCheckItems([])
    }
  }
  const titleItem = []

  titleItem.push(
    <div className="table-header-search">
      <h2>
        My Q-CoA List <span className="download-button"></span>
      </h2>
      <div className="th-search-container">
        <section className="search__block">
          <input
            type={'text'}
            placeholder={'작품를 검색해주세요'}
            className="search__block__input"
          />
          <button className="search__block__button">
            <span className="ir_pm">검색</span>
          </button>
        </section>
        <section className="th-search-button">
          <button>Delete</button>
          <button className="last-button">Add</button>
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
            onChange={e => checkAllHandler(e.target.checked)}
            checked={
              checkItems.length == 0
                ? false
                : checkItems.length === tableItem.length
                ? true
                : false
            }
          />
          <span className="login-option__check" />
        </label>
      </li>
      <li>N</li>
      <li>대표 이미지</li>
      <li>작가명</li>
      <li>작품명</li>
      <li>재질</li>
      <li>제작일</li>
      <li>소장처</li>
      <li>Q-CoA 등록일</li>
    </ul>
  )
  return (
    <div className="my-qcoa-list">
      <TableSlide
        title={titleItem}
        slideHeader={tableSlideHeader}
        items={tableItem}
        rows={9}
      />
    </div>
  )
}
export default MyQcoAList
