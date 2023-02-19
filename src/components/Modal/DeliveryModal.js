import React from 'react'
import './DeliveryModal.css'

function DeliveryModal({ setModalOpen }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = 'unset' // 모달 창 종료 시 스크롤 가능
  }
  return (
    <div className="del-modal">
      <div className="modal-container" onClick={closeModal}>
        <div className="modal-body" onClick={e => e.stopPropagation()}>
          <header className="del-header">
            <h1>배송지 선택</h1>
            <button className="del-close" onClick={closeModal}></button>
          </header>
          <ul className="del-content">
            <li className="del-item">
              <div className="del-tag">우리집</div>
              <div className="del-info">
                <span className="del-tlt">받으실 분</span>
                <p>홍길동</p>
              </div>
              <div className="del-info">
                <span className="del-tlt">주소</span>
                <p>
                  서울특별시 서울시 송파구 송파대로 570 101동 101호 <br></br>
                  101동 101호
                </p>
              </div>
              <div className="del-info">
                <span className="del-tlt">전화번호</span>
                <p>010-0000-0000</p>
              </div>
              <div className="del-btn">
                <button>수정</button>
                <button>선택</button>
              </div>
            </li>
            <li className="del-item">
              <div className="del-tag">우리집</div>
              <div className="del-info">
                <span className="del-tlt">받으실 분</span>
                <p>홍길동</p>
              </div>
              <div className="del-info">
                <span className="del-tlt">주소</span>
                <p>
                  서울특별시 서울시 송파구 송파대로 570 101동 101호 <br></br>
                  101동 101호
                </p>
              </div>
              <div className="del-info">
                <span className="del-tlt">전화번호</span>
                <p>010-0000-0000</p>
              </div>
              <div className="del-btn">
                <button>수정</button>
                <button>선택</button>
              </div>
            </li>
            <li className="del-item">
              <div className="del-tag">우리집</div>
              <div className="del-info">
                <span className="del-tlt">받으실 분</span>
                <p>홍길동</p>
              </div>
              <div className="del-info">
                <span className="del-tlt">주소</span>
                <p>
                  서울특별시 서울시 송파구 송파대로 570 101동 101호 <br></br>
                  101동 101호
                </p>
              </div>
              <div className="del-info">
                <span className="del-tlt">전화번호</span>
                <p>010-0000-0000</p>
              </div>
              <div className="del-btn">
                <button>수정</button>
                <button>선택</button>
              </div>
            </li>
          </ul>
          <button className="del-add">
            <span className="del-add-sym"></span>
            <span>배송지 추가</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeliveryModal
