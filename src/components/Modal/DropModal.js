import React from 'react'
import './DropModal.css'

function DropModal({ setModalOpen, setFunc, options, select }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false)
    //document.body.style.overflow = 'unset' // 모달 창 종료 시 스크롤 가능
  }
  const changeState = e => {
    setFunc(e)
  }
  return (
    <div className="drop-modal">
      <div className="modal-container" onClick={closeModal}>
        <div className="modal-body" onClick={e => e.stopPropagation()}>
          <ul>
            {options.map((option, i) => {
              return (
                <li
                  key={i}
                  value={i}
                  onClick={e => {
                    changeState(i)
                  }}
                  className={select == i ? 'active' : ''}
                >
                  {option}
                </li>
              )
            })}
          </ul>
        </div>
        <button className="modal-close" onClick={closeModal}>
          <span className="ir_pm">카테고리 닫기</span>
        </button>
      </div>
    </div>
  )
}

export default DropModal
