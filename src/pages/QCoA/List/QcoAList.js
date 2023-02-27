import React, { useState } from 'react'
import TableSlide from '../../../components/TableSlide/TableSlide'
import './QCoAList.css'
function QCoAList() {
  // checked 된 것들
  const [checkItems, setCheckItems] = useState([])

  var items = []
  for (var i = 0; i < 80; i++) {
    items.push({
      id: 1,
      info: 'qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png',
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
            <img src={require('../../../' + items[i].info)}></img>
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
        <div className="ts-mb-item">
          <div className="ts-mb-img">
            <img src={require('../../../' + items[i].info)}></img>
          </div>
          <div className="ts-mb-info">
            <h2>[리움 미술관]</h2>
            <h1>지식의 기념비</h1>
            <span>홍길동</span>
            <span>캔버스 ㅣ 2000.00.00</span>
            <h3>Q-CoA 등록일 : 2000.00.00</h3>
          </div>
        </div>
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
      <div className="th-search-container">
        <h2>Q-CoA List</h2>
        <section className="search__block">
          <input
            type={'text'}
            placeholder={'작품을 검색해주세요'}
            className="search__block__input"
          />
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
    <div className="my-qcoa-list qcoa-list">
      <TableSlide
        title={titleItem}
        slideHeader={tableSlideHeader}
        items={tableItem}
        rows={9}
        breakRows={7}
      />
    </div>
  )
}

export default QCoAList
