import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminSlide from '../../../components/AdminSlide/AdminSlide'
import './AdminAuctionDetail.css'
const AdminAuctionDetail = () => {
  const [content, setContent] = useState(true)
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
      collector: '홍길동',
      state: '판매중',
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
        <li>{item.collector}</li>
        <li>{item.state}</li>
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
    <div className="admin-auction-detail">
      <section className="ad-artist-info">
        <img
          src={require('../../../qart_test/고미술/작가미상, 나전칠연상, 높이 26.7cm, 너비 24.4cm, 길이 36.7cm, 조선시대.jpg')}
        ></img>
        <div className="ad-auction-info">
          <div className="ad-auction-info-01">
            <article className="ad-artist-info--item">
              <h2>
                <span>번호</span>
                <span>홍길동</span>
              </h2>
              <h2>
                <span>경매이름</span>
                <span>홍길동</span>
              </h2>
            </article>
            <article className="ad-artist-info--item">
              <h2>
                <span>경매시작일</span>
                <span>1999-00-00</span>
              </h2>
              <h2>
                <span>경매마감일</span>
                <span>010-0000-0000</span>
              </h2>
            </article>
            <article className="ad-artist-info--item">
              <h2>
                <span>노출여부</span>
                {content ? (
                  <span>등록완료</span>
                ) : (
                  <span className="false-state">미등록</span>
                )}
              </h2>
              <h2>
                <span>KYC 인증</span>
                {content == false ? (
                  <span>인증완료</span>
                ) : (
                  <span className="false-state">미인증</span>
                )}
              </h2>
            </article>
          </div>
          <article className="ad-history-info--item">
            <h2>경매내용</h2>
            <div>경매에 대한 상세한 내용입니다.</div>
          </article>
        </div>
      </section>
      <section className="admin-auction-section-02">
        <div className="ad-auction-header">
          <h1>작품정보</h1>
          <div className="admin-edit-button">
            <button>취소</button>
            <button>
              <Link to="./edit">수정</Link>
            </button>
            <button>
              <Link to="./edit">등록</Link>
            </button>
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
            <li>대표이미지</li>
            <li>작가명</li>
            <li>작품명</li>
            <li>재질</li>
            <li>제작일</li>
            <li>소장처</li>
            <li>상태</li>
          </ul>
          <div className="admin-table-slider">
            <AdminSlide items={tableItem} rows={7} slidesPerRow={1} />
          </div>
        </section>
      </section>
    </div>
  )
}
export default AdminAuctionDetail
