import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSlide from '../../../components/AdminSlide/AdminSlide'
import './AdminBannerMain.css'

const AdminBannerMain = () => {
  const [checkItems, setCheckItems] = useState([])

  var items = []
  for (var i = 1; i <= 200; i++) {
    items.push({
      order: i % 5 == 0 ? 5 : i % 5,
      code: 'banner_01',
      use: '사용함',
      direction: '세로',
      size: '50MB',
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
        <Link to="./edit">
          <li>{item.order}</li>
          <li>{item.code}</li>
          <li>{item.use}</li>
          <li>{item.direction}</li>
          <li>{item.size}</li>
        </Link>
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
    <div className="admin-banner-main">
      <section className="admin-banner--header">
        <div className="admin-banner--info">
          <h1>현재 배너</h1>
          <h2>
            배너는 하나씩만 선택 가능합니다.
            <span className="color-blue">(최대 5장)</span>
          </h2>
        </div>
        <div className="admin-banner--button">
          <button>
            <span className="ir_pm">위로</span>
          </button>
          <button>
            <span className="ir_pm">아래로</span>
          </button>
        </div>
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
          <li>순서</li>
          <li>코드</li>
          <li>사용여부</li>
          <li>형태</li>
          <li>파일크기</li>
        </ul>
        <div className="admin-table-slider">
          <AdminSlide items={tableItem} rows={5} slidesPerRow={1} />
        </div>
      </section>
    </div>
  )
}
export default AdminBannerMain
