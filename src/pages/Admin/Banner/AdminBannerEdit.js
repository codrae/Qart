import React, { useRef, useState } from 'react'
import './AdminBannerEdit.css'

const AdminBannerEdit = () => {
  const [radio, setRadio] = useState(0)
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
    <div className="admin-banner-edit">
      <section className="admin-banner-edit--content">
        <ul>
          <li>
            <h2>코드</h2>
            <input className="input-text" defaultValue={'banner_01'}></input>
          </li>
          <li>
            <h2>사용 여부</h2>
            <input
              value={'사용함'}
              type="radio"
              checked={radio === 0}
              onChange={() => setRadio(0)}
              className="input-radio"
            />
            <span>사용함</span>
            <input
              value={'사용안함'}
              type="radio"
              checked={radio === 1}
              onChange={() => setRadio(1)}
              className="input-radio"
            />
            <span>사용안함</span>
          </li>
          <li className="filebox">
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
          </li>
          <li>
            <h2 className="img-preview-title">이미지</h2>
            <div className="img-preivew">
              <img
                src={
                  imgFile ? imgFile : require('../../../assets/banner01.png')
                }
              ></img>
            </div>
          </li>
        </ul>
      </section>
      <div className="admin-edit-button">
        <button>취소</button>
        <button>저장</button>
      </div>
    </div>
  )
}
export default AdminBannerEdit
