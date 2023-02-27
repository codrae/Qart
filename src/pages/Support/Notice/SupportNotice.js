import React from 'react'
import TableSlide from '../../../components/TableSlide/TableSlide'
import './SupportNotice.css'

function SupportNotice() {
  const tableItem = []
  const titleItem = []
  titleItem.push(<div className="sn-header">공지사항</div>)
  for (var i = 0; i < 50; i++) {
    tableItem.push(
      <div className="sn-table-item">
        <div className="sb-ti-date">
          <h5>2023</h5>
          <h1>01.13</h1>
        </div>
        <div className="sb-ti-content">
          <h1>공지사항 제목</h1>
          <p>
            공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용공지사항내용
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="support-notice">
      <section className="container">
        <TableSlide
          breakRows={3}
          rows={10}
          title={titleItem}
          items={tableItem}
        />
      </section>
    </div>
  )
}
export default SupportNotice
