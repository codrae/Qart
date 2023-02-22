import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TableSlide from '../../../../components/TableSlide/TableSlide'
import './GeneralWallet.css'
function GeneralWallet() {
  const options = ['실물 작품', 'NFT']
  const [menu, setMenu] = useState(0)

  var item = []
  for (var i = 0; i < 80; i++) {
    item.push({
      id: 1,
      info: 'qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png',
      title: '지식의 기념비',
      buy: '리움 미술관',
      date: '0000.00.00',
      price: '000,000,000원',
      state: '배송중',
    })
  }

  const tableItem = []

  for (var i = 0; i < 80; i++) {
    tableItem.push(
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
    )
  }

  var pitem = []
  for (var i = 0; i < 80; i++) {
    pitem.push({
      id: 1,
      info: 'qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png',
      title: '지식의 기념비',
      buy: '리움 미술관',
      date: '0000.00.00',
      price: '000,000,000원',
      state: '결제완료',
    })
  }
  const payItem = []

  for (var i = 0; i < 80; i++) {
    payItem.push(
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
    )
  }

  return (
    <div className="mypage-general-list">
      <TableSlide
        menu={menu}
        changeMenu={setMenu}
        options={options}
        items={menu == 0 ? tableItem : payItem}
      />
    </div>
  )
}
export default GeneralWallet
