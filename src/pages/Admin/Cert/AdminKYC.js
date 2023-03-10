import React, { useState } from 'react'
import AdminSlide from '../../../components/AdminSlide/AdminSlide'
import './AdminKYC.css'

const AdminKYC = () => {
  const [checkItems, setCheckItems] = useState([])

  var items = []
  for (var i = 1; i <= 80; i++) {
    items.push({
      num: i,
      id: 'Q_art1004',
      name: '홍길동',
      phone: '휴대폰번호',
      mail: 'qart_1004@qart.com',
      nation: '대한민국',
      idCard: true,
      certImg: false,
    })
  }

  const tableItem = []

  items.map((item, i) => {
    tableItem.push(
      <ul className="admin-table-item">
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
        <li>{item.num}</li>
        <li>{item.id}</li>
        <li>{item.name}</li>
        <li>{item.phone}</li>
        <li>{item.mail}</li>
        <li>{item.nation}</li>
        <li>
          {item.idCard ? <span className="check-icon"></span> : <span></span>}
        </li>
        <li>
          {item.certImg ? <span className="check-icon"></span> : <span></span>}
        </li>
      </ul>
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
  const tableSlideHeader = []
  tableSlideHeader.push(
    <ul className="admin-table-header">
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
      <li>회원번호</li>
      <li>회원아이디</li>
      <li>이름</li>
      <li>휴대폰번호</li>
      <li>E-mail</li>
      <li>국적</li>
      <li>신분증</li>
      <li>인증사진</li>
    </ul>
  )
  return (
    <div className="admin-kyc">
      <div className="container">
        <section className="ad-general-button">
          <button>이용정지</button>
          <button>이용재개</button>
        </section>
        <section className="ad-general-table">
          <ul className="admin-table-header">
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
            <li>회원번호</li>
            <li>회원아이디</li>
            <li>이름</li>
            <li>휴대폰번호</li>
            <li>E-mail</li>
            <li>국적</li>
            <li>신분증</li>
            <li>인증사진</li>
          </ul>
          <div className="admin-table-slider">
            <AdminSlide items={tableItem} rows={10} slidesPerRow={1} />
          </div>
        </section>
      </div>
    </div>
  )
}
export default AdminKYC
