import React from 'react'
import './DetailInfo.css'
import SectionHeader from '../SectionHeader/SectionHeader'
function DetailInfo(props) {
  const detail_items = itemList => {
    return itemList.map((item, i) => {
      return (
        <li>
          <img
            className="detail-info__img"
            src={require('../../' + item.info)}
            width={item.width}
            height={item.height}
          />
          <p className="detail-info__comment">{item.detail}</p>
        </li>
      )
    })
  }
  return (
    <>
      <SectionHeader title="작품 정보"></SectionHeader>
      <section className="container detail-info">
        <ul>{detail_items(props.item)}</ul>
      </section>
    </>
  )
}
export default DetailInfo
