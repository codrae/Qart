import React, { useRef, useState } from 'react'
import DropDown from '../DropDown/DropDown'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './SignUpKYC.css'

function SignUpKYC() {
  const [imgFile, setImgFile] = useState('')
  const [subImgFile, setSubImgFile] = useState('')

  const imgRef = useRef()
  const subImgRef = useRef()

  const [value, setValue] = useState('')
  const [menu, setMenu] = useState(0)
  const options = ['직접입력', 'naver.com', 'gmail.com', 'daum.com']
  const onChange = e => {
    setValue(e.target.value)
  }

  const countryList = [
    'Korea, Republic of',
    'Korea, Republic of',
    'Korea, Republic of',
  ]
  const phonelist = ['+82', '+82', '+82', '+82', '+82', '+82']
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
  return (
    <div className="kyc">
      <Header />
      <Header colored="black" />
      <header className="kyc-phone-header">
        <div className="container kyc-header-container">
          <h2>마이페이지</h2>
        </div>
      </header>
      <header className="kyc-header">
        <div className="container kyc-header-container">
          <h2>KYC 인증 신청서</h2>
        </div>
      </header>
      <div className="container kyc-container">
        <div className="kyc-edit-image">
          <h2 className="kyc-img-tlt">신분증 사본</h2>
          <img
            className={imgFile ? 'kyc-img-show' : 'kyc-img-hide'}
            src={imgFile}
            alt="선택 이미지"
          />
          <button
            className={imgFile ? 'edit-photo' : 'edit-photo kyc-img-hide'}
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
        </div>
        <div className="kyc-edit-image">
          <h2 className="kyc-img-tlt">
            인증사진
            <span className="kyc-img-tlt--sub">
              *오늘의 날짜가 적힌 메모와 <br></br>
              <span className="white-space"></span>신분증을 들고 촬영한 사진
            </span>
          </h2>
          <img
            className={subImgFile ? 'kyc-img-show' : 'kyc-img-hide'}
            src={subImgFile}
            alt="선택 이미지"
          />
          <button
            className={subImgFile ? 'edit-photo' : 'edit-photo kyc-img-hide'}
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
        <ul className="kyc-add-info">
          <li>
            <h2 className="general-title">국적</h2>
            <DropDown options={countryList} />
          </li>
          <li className="kyc-phone">
            <h2>Contact</h2>
            <div className="kyc-phone-input">
              <DropDown options={phonelist} />
              <input type="text" placeholder="01000000000"></input>
            </div>
          </li>
          <li className="kyc-email">
            <h2>E-Mail</h2>
            <div className="kyc-email-input">
              <input type="text" className="email-input-email" required></input>
              <span className="email-sym">@</span>
              <input
                type="text"
                className="email-input-required"
                disabled={menu != 0}
                value={menu != 0 ? options[menu] : value}
                onChange={onChange}
                required
              ></input>
              <DropDown options={options} select={menu} setSelect={setMenu} />
            </div>
          </li>
        </ul>
        <div className="kyc-add--button">
          <button>취소</button>
          <button>저장</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default SignUpKYC
