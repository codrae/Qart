import React, { useRef, useState } from 'react'
import DropDown from '../../../components/DropDown/DropDown'
import './AdminWork.css'

const AdminWork = () => {
  const [imgFile, setImgFile] = useState('')
  const [subImgFile, setSubImgFile] = useState('')
  const imgRef = useRef()
  const subImgRef = useRef()
  const [file, setFile] = useState('')

  const datesList = ['Unknown', 'Unknown', 'Unknown']

  const archiveList = ['공개', '비공개']
  const marketList = ['판매하기', '판매종료']
  const saveImgFile = () => {
    const file = imgRef.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImgFile(reader.result)
    }
  }
  const saveSubImgFile = () => {
    const file = subImgRef.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setSubImgFile(reader.result)
    }
  }
  const changeFile = e => {
    var fileName = e.target.value
    setFile(fileName)
  }
  return (
    <div className="admin-work">
      <section className="admin-work--content">
        <ul>
          <li className="edit-image">
            <h2>대표 이미지</h2>
            <img
              className={imgFile ? 'ma-img-show' : 'ma-img-hide'}
              src={imgFile}
              alt="선택 이미지"
            />
            <button
              className={imgFile ? 'edit-photo' : 'edit-photo ma-img-hide'}
              onClick={() => setImgFile('')}
            ></button>
            <form method="post" enctype="multipart/form-data">
              <div className="button">
                <label className="image-button" for="chooseFile"></label>
              </div>
              <input
                type="file"
                id="chooseFile"
                name="chooseFile"
                accept="image/*"
                onChange={saveImgFile}
                ref={imgRef}
              />
            </form>
          </li>
          <li className="edit-image">
            <h2>
              서브 이미지
              <span className="ma-img-tlt--sub">*최대 10개까지 가능</span>
            </h2>
            <div>
              <img
                className={subImgFile ? 'ma-img-show' : 'ma-img-hide'}
                src={subImgFile}
                alt="선택 이미지"
              />
              <button
                className={subImgFile ? 'edit-photo' : 'edit-photo ma-img-hide'}
                onClick={() => setSubImgFile('')}
              ></button>
              <form method="post" enctype="multipart/form-data">
                <div className="button">
                  <label className="image-button" for="chooseFile-02"></label>
                </div>
                <input
                  type="file"
                  id="chooseFile-02"
                  name="chooseFile-02"
                  accept="image/*"
                  onChange={saveSubImgFile}
                  ref={subImgRef}
                />
              </form>
            </div>
          </li>

          <li>
            <h2>재질</h2>
            <input className="text-input" type="text"></input>
          </li>
          <li>
            <h2>Dates</h2>
            <div className="ma-add-date-mb">
              <DropDown options={datesList} />
              <input
                type="date"
                id="date"
                className="date-input"
                data-placeholder="YYYY.MM.DD"
                pattern="(?:19|20)\[0-9\]{2}.(?:(?:0\[1-9\]|1\[0-2\]).(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
                // value={toStringByFormatting(new Date())}
                required
              ></input>
            </div>
          </li>
          <li>
            <h2>소장처</h2>
            <input className="text-input" type="text"></input>
          </li>
          <li>
            <h2>상세 설명</h2>
            <textarea placeholder="상세한 설명입니다."></textarea>
          </li>

          <li className="has-2-input">
            <h2>가격</h2>
            <div className="ma-info-02-input">
              <input type="text" placeholder="원화"></input>
              <span>원</span>
            </div>
          </li>
          <li>
            <h2></h2>
            <div className="ma-info-02-input">
              <input type="text" placeholder="달러"></input>
              <span>$</span>
            </div>
          </li>

          <li>
            <h2>아트 아카이브 공개</h2>
            <DropDown options={archiveList} />
          </li>
          <li>
            <h2>온라인마켓플레이스</h2>
            <DropDown options={marketList} />
          </li>
          <li>
            <h2>Q-CoA</h2>
            <div class="filebox">
              <label for="file">인장 업로드</label>
              <input type="file" id="file" onChange={changeFile} />
              <input class="upload-name" value={file} readOnly />
            </div>
          </li>
          <li>
            <h2>NFT 전환</h2>
            <div className="button-container">
              <button>등록하기</button>
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
export default AdminWork
