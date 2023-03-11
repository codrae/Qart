import React, { useRef, useState } from 'react'
import DropDown from '../DropDown/DropDown'
import './AdminHistoryModal.css'
function AdminHistoryModal({ setModalOpen }) {
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
    <div className="admin-history-modal">
      <div className="modal-container" onClick={closeModal}>
        <div className="modal-body" onClick={e => e.stopPropagation()}>
          <header className="admin-history-header">
            <h1>전시이력 입력</h1>
            <button
              className="admin-history-close"
              onClick={closeModal}
            ></button>
          </header>
          <ul className="admin-history-content">
            <li className="filebox">
              <h2>대표이미지</h2>
              <label for="file">업로드</label>
              {/* 파일 선택 처리 */}
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={saveImgFile}
                ref={imgRef}
              />
              <div id="attachFile">
                {/* 다중 파일 처리 후 .file-preview div 추가해준다 */}
                <div className="file-preview">
                  <h2>banner_01.png</h2>
                  <button>
                    <span className="ir_pm">삭제</span>
                  </button>
                </div>
              </div>
            </li>
            <li>
              <h2>전시명</h2>
              <input type="text"></input>
            </li>
            <li>
              <h2>개최장소</h2>
              <input type="text"></input>
            </li>
            <li>
              <h2>Country</h2>
              <DropDown options={countryList} />
            </li>

            <li>
              <h2>개최일시</h2>
              <input
                type="date"
                id="date"
                className="date-input"
                data-placeholder="YYYY.MM.DD"
                // value={toStringByFormatting(new Date())}
                required
              ></input>
              <span className="date-bar">~</span>
              <input
                type="date"
                id="date"
                className="date-input"
                data-placeholder="YYYY.MM.DD"
                pattern="(?:19|20)\[0-9\]{2}.(?:(?:0\[1-9\]|1\[0-2\]).(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
                // value={toStringByFormatting(new Date())}
                required
              ></input>
            </li>
            <li>
              <h2>주관/기획자</h2>
              <input type="text"></input>
            </li>
            <li>
              <h2>전시 형태</h2>
              <DropDown options={exhibitList} />
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
export default AdminHistoryModal
