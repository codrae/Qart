import React, { useRef, useState } from 'react'
import './AdminAuctionItem.css'

const AdminAuctionItem = () => {
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
    <div className="admin-auction-item">
      <section className="admin-auction-item--content">
        <ul>
          <li>
            <h2>작가명</h2>
            <input defaultValue={'banner_01'}></input>
          </li>
          <li>
            <h2>작품명</h2>
            <input defaultValue={'banner_01'}></input>
          </li>
          <li>
            <h2>재질</h2>
            <input defaultValue={'banner_01'}></input>
          </li>
          <li>
            <h2>제작일</h2>
            <input defaultValue={'banner_01'}></input>
          </li>
          <li>
            <h2>소장처</h2>
            <input defaultValue={'banner_01'}></input>
          </li>
          <li>
            <h2>사용 여부</h2>
            <input
              value={'경매중'}
              type="radio"
              checked={radio === 0}
              onChange={() => setRadio(0)}
              className="input-radio"
            />
            <span>경매중</span>
            <input
              value={'경매중지'}
              type="radio"
              checked={radio === 1}
              onChange={() => setRadio(1)}
              className="input-radio"
            />
            <span>경매중지</span>
            <input
              value={'판매완료'}
              type="radio"
              checked={radio === 2}
              onChange={() => setRadio(2)}
              className="input-radio"
            />
            <span>판매완료</span>
          </li>
          <li className="edit-image">
            <h2>이미지</h2>
            <label for="chooseFile">업로드</label>
            <input
              type="file"
              id="chooseFile"
              name="chooseFile"
              accept="image/*"
              onChange={saveImgFile}
              ref={imgRef}
            />
          </li>
          <div className="image-layer">
            <img
              className={imgFile ? 'img-preview ma-img-show' : 'img-preview'}
              src={
                imgFile !== ''
                  ? imgFile
                  : require('../../../qart_test/고미술/작가미상, 나전칠연상, 높이 26.7cm, 너비 24.4cm, 길이 36.7cm, 조선시대.jpg')
              }
              alt="선택 이미지"
            />
            <button
              className={imgFile ? 'edit-photo' : 'edit-photo'}
              onClick={() => setImgFile('')}
            ></button>
          </div>
        </ul>
      </section>
    </div>
  )
}
export default AdminAuctionItem
