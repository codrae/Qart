import React, { useRef, useState } from 'react'
import './AdminQCoAAbout.css'

const AdminQCoAAbout = () => {
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
  return (
    <div className="admin-qcoa admin-qcoa-about">
      <section className="admin-q-about-container">
        <div className="admin-q-about--header">Q-CoA About페이지</div>
        <div className="admin-q-about-content">
          <div className="aq-about--item filebox">
            <h2>파일이름</h2>
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
          </div>
          <div className="aq-about--item">
            <h2>이미지</h2>
            <img
              src={
                imgFile
                  ? imgFile
                  : require('../../../assets/admin-banner-01.png')
              }
            ></img>
          </div>
        </div>
        <div className="admin-edit-button">
          <button>취소</button>
          <button>저장</button>
        </div>
      </section>
    </div>
  )
}
export default AdminQCoAAbout
