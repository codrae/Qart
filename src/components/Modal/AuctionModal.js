import React, { useState } from 'react'
import './AuctionModal.css'
import CheckModal from './CheckModal'
import ModalPortal from './ModalPortal'

function AuctionModal({ setModalOpen }) {
  // 모달창 노출 여부 state
  const [checkOpen, setCheckOpen] = useState(false)

  // 모달창 노출
  const showCheckModal = () => {
    setCheckOpen(true)
    //document.body.style.overflow = 'hidden' // 모달 창 오픈 시 스크롤 불가
  }
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = 'unset' // 모달 창 종료 시 스크롤 가능
  }
  return (
    <div className="auc-modal">
      <div className="modal-container" onClick={closeModal}>
        <div className="modal-body" onClick={e => e.stopPropagation()}>
          <header className="auc-header">
            <h1>응찰하기</h1>
            <button className="auc-close" onClick={closeModal}></button>
          </header>
          <div className="auc-content">
            <div className="auc-list-th">
              <h1>응찰자</h1>
              {/* <h1>응찰하기</h1> */}
            </div>
            <ul className="auc-list-tb">
              <li>
                <span>asffg1234</span>
                <span className="price">4,000,000</span>
                <span className="time">2000-00-00 22:00:00</span>
              </li>
              <li>
                <span>asffg1234</span>
                <span className="price">4,000,000</span>
                <span className="time">2000-00-00 22:00:00</span>
              </li>
              <li>
                <span>asffg1234</span>
                <span className="price">4,000,000</span>
                <span className="time">2000-00-00 22:00:00</span>
              </li>
              <li>
                <span>asffg1234</span>
                <span className="price">4,000,000</span>
                <span className="time">2000-00-00 22:00:00</span>
              </li>
              <li>
                <span>asffg1234</span>
                <span className="price">4,000,000</span>
                <span className="time">2000-00-00 22:00:00</span>
              </li>
              <li>
                <span>asffg1234</span>
                <span className="price">4,000,000</span>
                <span className="time">2000-00-00 22:00:00</span>
              </li>
              <li>
                <span>asffg1234</span>
                <span className="price">4,000,000</span>
                <span className="time">2000-00-00 22:00:00</span>
              </li>
              <li>
                <span>asffg1234</span>
                <span className="price">4,000,000</span>
                <span className="time">2000-00-00 22:00:00</span>
              </li>
              <li>
                <span>asffg1234</span>
                <span className="price">4,000,000</span>
                <span className="time">2000-00-00 22:00:00</span>
              </li>
              <li>
                <span>asffg1234</span>
                <span className="price">4,000,000</span>
                <span className="time">2000-00-00 22:00:00</span>
              </li>
              <li>
                <span>asffg1234</span>
                <span className="price">4,000,000</span>
                <span className="time">2000-00-00 22:00:00</span>
              </li>
              <li>
                <span>asffg1234</span>
                <span className="price">4,000,000</span>
                <span className="time">2000-00-00 22:00:00</span>
              </li>
            </ul>
          </div>
          <div className="auc-add">
            <div className="auc-add__input">
              <input></input>
            </div>
            <button onClick={showCheckModal}>응찰하기</button>
            {checkOpen && (
              <ModalPortal>
                <CheckModal
                  setModalOpen={setCheckOpen}
                  title={'응찰 확인'}
                  content={[
                    '응찰하기를 완료하시면 취소가 불가능합니다.',
                    <br></br>,
                    '계속하시겠습니까?',
                  ]}
                />
              </ModalPortal>
            )}
          </div>
          <span className="auc-warn">
            *응찰하기 버튼을 누르시면 취소가 불가능합니다.
          </span>
        </div>
      </div>
    </div>
  )
}

export default AuctionModal
