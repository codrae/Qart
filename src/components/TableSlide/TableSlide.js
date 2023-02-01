import React from 'react'
import DropDown from '../DropDown/DropDown'
import PageSlide from '../PageSlide/PageSlide'
import './TableSlide.css'
function TableSlide(props) {
  return (
    <div className="table-slide">
      <header className="table-header">
        <div className="container table-header-container">
          {props.title}
          <DropDown options={props.options} />
        </div>
      </header>
      <div className="table-slider-header">
        <ul className="container table-slider-header-container">
          <li>대표 이미지</li>
          <li>작품명</li>
          <li>구매처</li>
          <li>구매 일자</li>
          <li>결제금액</li>
          <li>배송상태</li>
        </ul>
      </div>
      <div className="table-slider">
        <PageSlide
          rows={6}
          slidesPerRow={1}
          items={props.items}
          divItem={true}
        />
      </div>
    </div>
  )
}
export default TableSlide
