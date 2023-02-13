import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import DropDown from '../../../../components/DropDown/DropDown'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import './GalleryProfileEdit.css'

function GalleryProfileEdit() {
  const [imgFile, setImgFile] = useState('')
  const imgRef = useRef()
  const [choice, setChoice] = useState(0)
  const moreList = {
    menu: [
      {
        title: '프로필',
      },
      {
        title: 'My Archive',
        link: './artist/archive',
      },
      {
        title: '나의 지갑',
      },
      {
        title: '관심목록',
      },
    ],
  }
  const phonelist = ['+82', '+82', '+82', '+82', '+82', '+82']
  const banklist = ['은행', '은행', '은행', '은행']
  const infoList = ['본명으로 활동(Real Name)', '본명으로 활동(Real Name)']
  const infoList2 = ['작가', '기관']
  const saveImgFile = () => {
    const file = imgRef.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImgFile(reader.result)
    }
  }
  return (
    <div className="mypage-gallery">
      <Header login={true} colored="black" />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">마이페이지</h2>
        </div>
      </nav>
      <HeaderSmall
        moreList={moreList}
        active={true}
        choice={choice}
        setMenu={setChoice}
      />
      <div className="gallery-profile">
        <section className="gallery-profile-edit edit-enable">
          <div className="container">
            <div className="gp-edit-content">
              <div className="gp-edit-image">
                <h2>기관 사진</h2>
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
              </div>
              <ul className="gp-edit-basic">
                <li className="has-2-input">
                  <h2>기관명</h2>
                  <input
                    type="text"
                    className="a-profile-input"
                    placeholder="한글 Ko"
                  ></input>
                  <input
                    type="text"
                    className="a-profile-input"
                    placeholder="영문 Eng"
                  ></input>
                </li>
                <li>
                  <h2>설립연월일</h2>
                  <input
                    type="date"
                    className="date-input"
                    data-placeholder="YYYY.MM.DD"
                  ></input>
                </li>
                <li>
                  <h2>주소</h2>
                  <div className="search__block">
                    <input
                      type="text"
                      className="search__block"
                      placeholder="주소 검색"
                    ></input>
                    <button className="search__block__button">
                      <span className="ir_pm">검색</span>
                    </button>
                  </div>
                </li>
              </ul>
              <ul className="gp-edit-personal">
                <li>
                  <h2>담당자명</h2>
                  <input
                    type="text"
                    className="a-profile-input"
                    placeholder="한글 Ko"
                  ></input>
                </li>
                <li>
                  <h2>담당자 번호</h2>
                  <div className="gp-drop">
                    <DropDown options={phonelist} />
                    <input
                      type="text"
                      className="a-profile-input__number"
                      placeholder="01000000000"
                    ></input>
                  </div>
                </li>
                <li>
                  <h2>추가 연락처1</h2>
                  <div className="gp-drop">
                    <DropDown options={phonelist} />
                    <input
                      type="text"
                      className="a-profile-input__number"
                      placeholder="01000000000"
                    ></input>
                  </div>
                </li>
                <li>
                  <h2>추가 연락처2</h2>
                  <div className="gp-drop">
                    <DropDown options={phonelist} />
                    <input
                      type="text"
                      className="a-profile-input__number"
                      placeholder="01000000000"
                    ></input>
                  </div>
                </li>
                <li className="has-2-input">
                  <h2>사용자 유형 변경</h2>
                  <DropDown options={infoList2} />
                </li>
                <li>
                  <h2>작가 소개</h2>
                  <textarea placeholder="작가"></textarea>
                </li>
              </ul>
            </div>
            <section className="ap-profile-edit--button">
              <Link to={'./..'}>
                <button>수정하기</button>
              </Link>
            </section>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}
export default GalleryProfileEdit
