import React from 'react'
import { Link } from 'react-router-dom'
import AdminSlide from '../../../components/AdminSlide/AdminSlide'
import './AdminInquiry.css'

const AdminInquiry = () => {
  var items = []
  for (var i = 1; i <= 200; i++) {
    items.push({
      num: String(i).padStart(3, '0'),
      id: 'Q_art1004',
      state: '답변 완료',
      title: '문의 제목',
      content:
        '문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용문의 내용',
      created: '1999 / 00 / 00',
    })
  }

  const tableItem = []

  items.map((item, i) => {
    tableItem.push(
      <Link to={'./detail'}>
        <ul className="admin-table-item">
          <li>{item.num}</li>
          <li>{item.id}</li>
          <li>{item.state}</li>
          <li>{item.title}</li>
          <li>
            <p>{item.content}</p>
          </li>
          <li>{item.created}</li>
        </ul>
      </Link>
    )
  })
  return (
    <div className="admin-inquiry">
      <h1>문의 </h1>
      <section className="ad-general-table">
        <ul className="admin-table-header">
          <li>문의 번호</li>
          <li>회원 아이디</li>
          <li>
            답변 완료 <span className="arrow-down"></span>
          </li>
          <li>문의 제목</li>
          <li>문의 내용</li>
          <li>작성일</li>
        </ul>
        <div className="admin-table-slider">
          <AdminSlide items={tableItem} rows={10} slidesPerRow={1} />
        </div>
      </section>
    </div>
  )
}
export default AdminInquiry
