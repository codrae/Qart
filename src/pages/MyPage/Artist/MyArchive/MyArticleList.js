import React, { useState } from 'react'
import TableSlide from '../../../../components/TableSlide/TableSlide'
import './MyArticleList.css'
function MyArticleList() {
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
      <h2>
        My Article List <span className="download-button"></span>
      </h2>
      <div className="th-search-container">
        <section className="search__block">
          <input
            type={'text'}
            placeholder={'기사명, 키워드를 검색해주세요'}
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
  return (
    <div className="my-article-list">
      <TableSlide
        title={titleItem}
        slideHeader={tableSlideHeader}
        items={tableItem}
        rows={9}
      />
    </div>
  )
}
export default MyArticleList
