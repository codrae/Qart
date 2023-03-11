import React from 'react'
import './AdminNoticeEdit.css'

const AdminNoticeEdit = () => {
  return (
    <div className="admin-notice-edit">
      <section className="admin-notice-edit--content">
        <h2>공지 제목</h2>
        <input defaultValue={'공지 제목입니다.'}></input>
        <h2>공지 내용</h2>
        <textarea defaultValue={'공지사항입니다.'}></textarea>
      </section>
      <div className="admin-edit-button">
        <button>취소</button>
        <button>저장</button>
      </div>
    </div>
  )
}
export default AdminNoticeEdit
