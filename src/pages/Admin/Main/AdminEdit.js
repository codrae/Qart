import React from 'react'
import './AdminEdit.css'

const AdminEdit = () => {
  return (
    <div className="admin-edit">
      <div className="admin-edit-content-layer">
        <section className="admin-edit-content">
          <div className="admin-edit-item">
            <h3>사이트명</h3>
            <input></input>
          </div>
          <div className="admin-edit-item">
            <h3>상호명</h3>
            <input></input>
          </div>
          <div className="admin-edit-item">
            <h3>대표자명</h3>
            <input></input>
          </div>
          <div className="admin-edit-item has-2-input">
            <h3>사업장 주소</h3>
            <div className="has-2-input">
              <input></input>
              <input></input>
            </div>
          </div>
        </section>
        <section className="admin-edit-content admin-edit-content-02">
          <div className="admin-edit-item">
            <h3>전화번호</h3>
            <input className="admin-edit-input-ps"></input>
            <input className="admin-edit-input-p"></input>
            <span>-</span>
            <input className="admin-edit-input-p"></input>
          </div>
          <div className="admin-edit-item">
            <h3>팩스번호</h3>
            <input className="admin-edit-input-ps"></input>
            <input className="admin-edit-input-p"></input>
            <span>-</span>
            <input className="admin-edit-input-p"></input>
          </div>
          <div className="admin-edit-item">
            <h3>관리자명</h3>
            <input></input>
          </div>
          <div className="admin-edit-item email-item">
            <h3>이메일</h3>
            <input className="admin-edit-input-e"></input>
            <span>@</span>
            <input className="admin-edit-input-e"></input>
          </div>
          <div className="admin-edit-item">
            <h3>사업자 번호</h3>
            <input></input>
          </div>
        </section>
      </div>
      <div className="admin-edit-button">
        <button>취소</button>
        <button>저장</button>
      </div>
    </div>
  )
}
export default AdminEdit
