import React from 'react'
import DropDown from '../DropDown/DropDown'
import PageSlide from '../PageSlide/PageSlide'
import './TableSlide.css'
function TableSlide(props) {
  const changeMenu = e => {
    props.changeMenu(e)
  }

  return (
    <div className="table-slide">
      <header className="table-header">
        <div className="container table-header-container">
          {props.title ? (
            props.title
          ) : (
            <div className="table-header-title">
              <a
                className={
                  props.menu == 0
                    ? 'th-title-select-active th-title-select '
                    : 'th-title-select'
                }
                onClick={() => changeMenu(0)}
              >
                <h1>구매 내역</h1>
                <span></span>
              </a>
              <a
                className={
                  props.menu == 1
                    ? 'th-title-select-active th-title-select '
                    : 'th-title-select'
                }
                onClick={() => changeMenu(1)}
              >
                <h1>응찰 내역</h1>
                <span></span>
              </a>
            </div>
          )}
          {props.options ? <DropDown options={props.options} /> : <></>}
        </div>
      </header>
      <div className="table-slider-header">
        {props.slideHeader ? (
          props.slideHeader
        ) : (
          <ul className="container table-slider-header-container">
            <li>대표 이미지</li>
            <li>작품명</li>
            <li>구매처</li>
            <li>구매 일자</li>
            <li>결제금액</li>
            <li>배송상태</li>
          </ul>
        )}
      </div>
      <div className="table-slider">
        <PageSlide
          rows={props.rows ? props.rows : 6}
          slidesPerRow={1}
          items={props.items}
          divItem={true}
        />
      </div>
    </div>
  )
}
export default TableSlide
