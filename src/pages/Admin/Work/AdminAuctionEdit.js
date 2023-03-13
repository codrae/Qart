import React, { useRef, useState } from 'react'
import ModalPortal from '../../../components/Modal/ModalPortal'
import CalendarModal from '../../../components/Modal/CalendarModal'

import './AdminAuctionEdit.css'

const AdminAuctionEdit = () => {
  const [radio, setRadio] = useState(0)
  const [imgFile, setImgFile] = useState('')
  const [file, setFile] = useState('')
  const imgRef = useRef()
  const fileRef = useRef()

  const saveImgFile = () => {
    const file = imgRef.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImgFile(reader.result)
    }
  }

  const saveFile = () => {
    const file = imgRef.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setFile(reader.result)
    }
  }
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false)

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true)
    // document.body.style.overflow = 'hidden' // 모달 창 오픈 시 스크롤 불가
  }
  return (
    <div className="admin-auction-edit">
      <section className="admin-auction-edit--content">
        <ul>
          <li>
            <h2>작가</h2>
            <input defaultValue={'banner_01'}></input>
          </li>
          <li>
            <h2>경매제목</h2>
            <input defaultValue={'banner_01'}></input>
          </li>
          <li className="date">
            <h2>경매 시작일</h2>
            <input defaultValue={'banner_01'}></input>
            <button onClick={showModal}>
              <span className="ir_pm">달력보기</span>
            </button>
            {modalOpen && (
              <ModalPortal>
                <CalendarModal setModalOpen={setModalOpen} />
              </ModalPortal>
            )}
          </li>
          <li className="date">
            <h2>경매 마감일</h2>
            <input defaultValue={'banner_01'}></input>
            <button onClick={showModal}>
              <span className="ir_pm">달력보기</span>
            </button>
            {modalOpen && (
              <ModalPortal>
                <CalendarModal setModalOpen={setModalOpen} />
              </ModalPortal>
            )}
          </li>
          <li className="textarea">
            <h2>경매 설명</h2>
            <textarea defaultValue={'banner_01'}></textarea>
          </li>
          <li className="radio">
            <h2>사용 여부</h2>
            <input
              value={'노출'}
              type="radio"
              checked={radio === 0}
              onChange={() => setRadio(0)}
              className="input-radio"
            />
            <span>노출</span>
            <input
              value={'미노출 '}
              type="radio"
              checked={radio === 1}
              onChange={() => setRadio(1)}
              className="input-radio"
            />
            <span>미노출 </span>
          </li>
          <li className="img-filebox">
            <h2>메인 이미지</h2>
            <label for="img-file">업로드</label>
            {/* 파일 선택 처리 */}
            <input
              type="file"
              id="img-file"
              accept="image/*"
              onChange={saveImgFile}
              ref={imgRef}
            />
            <div id="attachImgFile">
              {/* 다중 파일 처리 후 .file-preview div 추가해준다 */}
              <div className="img-file-preview">
                <h2>banner_01.png</h2>
                <button>
                  <span className="ir_pm">삭제</span>
                </button>
              </div>
            </div>
          </li>
          <li className="filebox">
            <h2>작품엑셀리스트</h2>
            <label for="file">업로드</label>
            {/* 파일 선택 처리 */}
            <input type="file" id="file" onChange={saveFile} ref={fileRef} />
            <div id="attachFile">
              {/* 다중 파일 처리 후 .file-preview div 추가해준다 */}
              <div className="file-preview">
                <h2>banner_01</h2>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <div className="admin-edit-button">
        <button>삭제</button>
        <button>저장</button>
      </div>
    </div>
  )
}
export default AdminAuctionEdit
