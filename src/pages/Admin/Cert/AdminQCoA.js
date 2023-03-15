import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSlide from '../../../components/AdminSlide/AdminSlide'
import './AdminQCoA.css'

const AdminQCoA = () => {
  const [checkItems, setCheckItems] = useState([])

  var items = []
  for (var i = 1; i <= 200; i++) {
    items.push({
      num: String(i).padStart(3, '0'),
      info: 'qart_test/고미술/작가미상, 나전칠연상, 높이 26.7cm, 너비 24.4cm, 길이 36.7cm, 조선시대.jpg',
      name: '홍길동',
      title: '회색상자',
      texture: 'Giclée print on Canvas',
      created: '1999-00-00',
      registered: '1999-00-00',
      collector: '홍길동',
      seal: true,
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
        <li>
          <img src={require('../../../' + item.info)}></img>
        </li>
        <li>{item.name}</li>
        <li>{item.title}</li>
        <li>{item.texture}</li>
        <li>{item.created}</li>
        <li>{item.registered}</li>
        <li>{item.collector}</li>
        <li>
          {item.seal ? <span className="sealed-icon"></span> : <span></span>}
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
  return (
    <div className="admin-qcoa">
      <section className="admin-qcoa-section-01">
        <div className="admin-qcoa-header">Q-CoA Abou페이지</div>
        <div className="ad-qoca-s-01-content">
          <Link to="./about">
            <button>페이지 수정하기</button>
          </Link>
        </div>
      </section>
      <section className="admin-qcoa-section-02">
        <div className="ad-qcoa-s-02--header">
          <h1>Q-CoA 인증</h1>
          <div className="ad-general-button">
            <button>인증 승인</button>
            <button>인증 거부</button>
          </div>
        </div>
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
            <li>작품번호</li>
            <li>이미지</li>
            <li>작가명</li>
            <li>작품명</li>
            <li>재질</li>
            <li>제작일</li>
            <li>등록일</li>
            <li>소장처</li>
            <li>인장등록</li>
          </ul>
          <div className="admin-table-slider">
            <AdminSlide items={tableItem} rows={7} slidesPerRow={1} />
          </div>
        </section>
      </section>
    </div>
  )
}
export default AdminQCoA
