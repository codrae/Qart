import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSlide from '../../../components/AdminSlide/AdminSlide'
import './AdminNew.css'

const AdminNew = () => {
  const [checkItems, setCheckItems] = useState([])

  var items = []
  for (var i = 1; i <= 200; i++) {
    items.push({
      title: '제목',
      content: '내용내용내용내용내용내용내용내용내용내용내용',
      lastConnected: '2023 / 00 / 00',
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
        <li>{item.title}</li>
        <li>{item.content}</li>
        <li>{item.lastConnected}</li>
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
    <div className="admin-new">
      <div className="ad-general-button">
        <Link to={'./edit'}>
          <button>수정</button>
        </Link>
        <Link to={'./edit'}>
          <button>작성</button>
        </Link>
        <button>삭제</button>
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
          <li>제목</li>
          <li>소식내용</li>
          <li>최종 접속일</li>
        </ul>
        <div className="admin-table-slider">
          <AdminSlide items={tableItem} rows={10} slidesPerRow={1} />
        </div>
      </section>
    </div>
  )
}
export default AdminNew
