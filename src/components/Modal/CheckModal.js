import React from 'react'
import './CheckModal.css'

function CheckModal({ setModalOpen, setFunc, title, content }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false)
    //document.body.style.overflow = 'unset' // 모달 창 종료 시 스크롤 가능
  }
  const changeState = () => {
    setFunc(1)
  }
  return (
    <div className="check-modal">
      <div className="modal-container" onClick={closeModal}>
        <div className="modal-body" onClick={e => e.stopPropagation()}>
          <h1>{title}</h1>
          <div className="check-content">{content}</div>
          <div className="check-btn">
            <button onClick={closeModal}>취소</button>
            <button onClick={setFunc ? changeState : closeModal}>확인</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckModal
