import React, { useState } from 'react'
import DropDown from '../../../components/DropDown/DropDown'
import AdminHistoryModal from '../../../components/Modal/AdminHistoryModal'
import AdminSchoolModal from '../../../components/Modal/AdminSchoolModal'
import HistoryModal from '../../../components/Modal/HistoryModal'
import ModalPortal from '../../../components/Modal/ModalPortal'
import './AdminWorkArtist.css'

const AdminWorkArtist = () => {
  const countryList = [
    'Korea, Republic of',
    'Korea, Republic of',
    'Korea, Republic of',
  ]
  const archiveList1 = []
  for (var i = 0; i < 30; i++) {
    archiveList1.push(
      <h4>
        <span>00.00.00 - 00.00.00</span>
        <span>[기관명]</span>
        <span>학위 종류, 국가</span>
      </h4>
    )
  }
  const archiveList2 = []
  for (var i = 0; i < 30; i++) {
    archiveList2.push('숲속에서-리움미술관 /  2000-00-00')
  }

  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false)
  const [schoolOpen, setSchoolOpen] = useState(false)

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true)

    //document.body.style.overflow = 'hidden' // 모달 창 오픈 시 스크롤 불가
  }
  // 모달창 노출
  const showSchoolModal = () => {
    setSchoolOpen(true)

    //document.body.style.overflow = 'hidden' // 모달 창 오픈 시 스크롤 불가
  }
  return (
    <div className="admin-work-artist">
      <section className="admin-work-artist-section-01">
        <ul>
          <li>
            <h2>작가 이름</h2>
            <input className="admin-input" placeholder="banner_01"></input>
          </li>
          <li>
            <h2>활동명</h2>
            <input className="admin-input" placeholder="banner_01"></input>
          </li>
          <li className="admin-work-artist-dropdown">
            <h2>국적</h2>
            <DropDown options={countryList} />
          </li>
          <li>
            <h2>출생연도</h2>
            <input className="admin-input" placeholder="banner_01"></input>
          </li>
          <li>
            <h2>작가소개</h2>
            <textarea placeholder="banner_01"></textarea>
          </li>
        </ul>
      </section>
      <section className="admin-work-artist-section-02">
        <div className="admin-work-artist-02--content">
          <div className="admin-work-artist--header">전시이력</div>

          <section className="admin-work-artist-02--item">
            <div className="admin-work-artist-02-drop-container">
              <DropDown options={archiveList2} />
              <button onClick={showModal}>직접입력</button>
              {modalOpen && (
                <ModalPortal>
                  <AdminHistoryModal setModalOpen={setModalOpen} />
                </ModalPortal>
              )}
            </div>
            <div className="history-container">
              <div className="history-list">
                <div className="history-item">
                  <h4>{archiveList2[0]}</h4>
                  <button></button>
                </div>
                <div className="history-item">
                  <h4>{archiveList2[0]}</h4>
                  <button></button>
                </div>
                <div className="history-item">
                  <h4>{archiveList2[0]}</h4>
                  <button></button>
                </div>
                <div className="history-item">
                  <h4>{archiveList2[0]}</h4>
                  <button></button>
                </div>
                <div className="history-item">
                  <h4>{archiveList2[0]}</h4>
                  <button></button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="admin-work-artist-02--content">
          <div className="admin-work-artist--header">학력</div>

          <section className="admin-work-artist-02--item">
            <div className="admin-work-artist-02-drop-container">
              <DropDown options={archiveList1} />
              <button onClick={showSchoolModal}>직접입력</button>
              {schoolOpen && (
                <ModalPortal>
                  <AdminSchoolModal setModalOpen={setSchoolOpen} />
                </ModalPortal>
              )}
            </div>
            <div className="history-container">
              <div className="history-list">
                <div className="history-item">
                  {archiveList1[0]}
                  <button></button>
                </div>
                <div className="history-item">
                  {archiveList1[0]}
                  <button></button>
                </div>
                <div className="history-item">
                  {archiveList1[0]}
                  <button></button>
                </div>
                <div className="history-item">
                  {archiveList1[0]}
                  <button></button>
                </div>
                <div className="history-item">
                  {archiveList1[0]}
                  <button></button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
export default AdminWorkArtist
