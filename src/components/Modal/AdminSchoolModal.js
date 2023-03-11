import React, { useRef, useState } from 'react'
import DropDown from '../DropDown/DropDown'
import './AdminSchoolModal.css'
function AdminSchoolModal({ setModalOpen }) {
  const [imgFile, setImgFile] = useState('')
  const imgRef = useRef()

  const saveImgFile = () => {
    const file = imgRef.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImgFile(reader.result)
    }
  }
  const countryList = [
    'Korea, Republic of',
    'Korea, Republic of',
    'Korea, Republic of',
  ]
  const exhibitList = ['개인전', '단체전', '아트페어', '기타']
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false)
    //document.body.style.overflow = 'unset' // 모달 창 종료 시 스크롤 가능
  }

  return (
    <div className="admin-history-modal admin-school-modal">
      <div className="modal-container" onClick={closeModal}>
        <div className="modal-body" onClick={e => e.stopPropagation()}>
          <header className="admin-history-header">
            <h1>학력 정보 입력</h1>
            <button
              className="admin-history-close"
              onClick={closeModal}
            ></button>
          </header>
          <ul className="admin-history-content">
            <li>
              <h2>학교명</h2>
              <input type="text"></input>
            </li>
            <li>
              <h2>Country</h2>
              <DropDown options={countryList} />
            </li>
            <li>
              <h2>입학시기</h2>
              <input
                type="date"
                id="date"
                className="date-input"
                data-placeholder="YYYY.MM.DD"
                // value={toStringByFormatting(new Date())}
                required
              ></input>
            </li>
            <li>
              <h2>졸업시기</h2>
              <input
                type="date"
                id="date"
                className="date-input"
                data-placeholder="YYYY.MM.DD"
                // value={toStringByFormatting(new Date())}
                required
              ></input>
            </li>
            <li className="full-size">
              <h2>학위종류</h2>
              <input type="text"></input>
            </li>

            <li className="ta-tlt">
              <h2>Note</h2>
              <textarea placeholder="상세한 설명입니다."></textarea>
            </li>
          </ul>
          <div className="admin-edit-button">
            <button onClick={closeModal}>취소</button>
            <button onClick={closeModal}>저장</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AdminSchoolModal
