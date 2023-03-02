import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TableSlide from '../../../../components/TableSlide/TableSlide'
import './ArtistWallet.css'
function ArtistWallet() {
  const options = ['실물 작품', 'NFT']
  const [menu, setMenu] = useState(0)

  var item = []
  for (var i = 0; i < 80; i++) {
    item.push({
      id: 1,
      info: 'qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png',
      title: '지식의 기념비',
      buy: '리움 미술관',
      date: '20000-00-00',
      price: '000,000,000원',
      state: '배송중',
    })
  }

  const tableItem = []

  for (var i = 0; i < 80; i++) {
    tableItem.push(
      <div className="wallet-item">
        <Link
          state={{
            item: item[i],
          }}
          key={i}
          className="table-slider-item"
        >
          <img src={require('../../../../' + item[i].info)}></img>
          <span>{item[i].title}</span>
          <span>{item[i].buy}</span>
          <span>{item[i].date}</span>
          <span>{item[i].price}</span>
          <button className="delivery-status">{item[i].state}</button>
        </Link>
        <div className="wallet-mb-item">
          <div className="container wallet-mb-container">
            <img src={require('../../../../' + item[i].info)}></img>
            <div className="wallet-mb-info">
              <div className="wallet-mb-state">
                <span className="w-mb-state-button">{item[i].state}</span>
                <span className="w-mb-state-date">[{item[i].date}]</span>
              </div>
              <h2>{item[i].title}</h2>
              <h4>{item[i].buy}</h4>
              <h1>{item[i].price}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }

  var pitem = []
  for (var i = 0; i < 80; i++) {
    pitem.push({
      id: 1,
      info: 'qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png',
      title: '지식의 기념비',
      buy: '리움 미술관',
      date: '20000-00-00',
      price: '000,000,000원',
      state: '결제하기',
    })
  }

  const payItem = []

  for (var i = 0; i < 80; i++) {
    payItem.push(
      <div className="wallet-item">
        <Link
          state={{
            item: pitem[i],
          }}
          key={i}
          className="table-slider-item"
        >
          <img src={require('../../../../' + pitem[i].info)}></img>
          <span>{pitem[i].title}</span>
          <span>{pitem[i].buy}</span>
          <span>{pitem[i].date}</span>
          <span>{pitem[i].price}</span>
          <button className="delivery-complete">{pitem[i].state}</button>
        </Link>
        <div className="wallet-mb-item">
          <div className="container wallet-mb-container">
            <img src={require('../../../../' + pitem[i].info)}></img>
            <div className="wallet-mb-info">
              <div className="wallet-mb-state">
                <span className="w-mb-state-date">[{pitem[i].date}]</span>
              </div>
              <h2>{pitem[i].title}</h2>
              {/* <h4>{pitem[i].buy}</h4> */}
              <h1>{pitem[i].price}</h1>
              <button className="w-mb-state-pay">결제하기</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mypage-general-list">
      <TableSlide
        menu={menu}
        changeMenu={setMenu}
        options={options}
        breakRows={7}
        items={menu == 0 ? tableItem : payItem}
      />
    </div>
  )
}
export default ArtistWallet
