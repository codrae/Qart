import React from 'react'
import './AdminNewEdit.css'

const AdminNewEdit = () => {
  return (
    <div className="admin-new-edit">
      <section className="admin-new-edit--content">
        <h2>제목</h2>
        <input defaultValue={'공지 제목입니다.'}></input>
        <h2>내용</h2>
        <textarea defaultValue={'공지사항입니다.'}></textarea>
      </section>
      <div className="admin-edit-button">
        <button>취소</button>
        <button>저장</button>
      </div>
    </div>
  )
}
export default AdminNewEdit
