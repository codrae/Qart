import React, { useRef, useState } from 'react'
import DropDown from '../../../../../components/DropDown/DropDown'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import HeaderSmall from '../../../../../components/Header/HeaderSmall/HeaderSmall'
import SectionHeader from '../../../../../components/SectionHeader/SectionHeader'
import './MyArticleAdd.css'

function MyArticleAdd() {
  const [imgFile, setImgFile] = useState('')
  const [subImgFile, setSubImgFile] = useState('')
  const imgRef = useRef()
  const subImgRef = useRef()
  const [file, setFile] = useState('')

  const moreList = {
    menu: [
      {
        title: 'Exhibition History',
      },
    ],
  }
  const countryList = [
    'Korea, Republic of',
    'Korea, Republic of',
    'Korea, Republic of',
  ]
  const datesList = ['Unknown', 'Unknown', 'Unknown']
  const typeList = ['개인전', '단체전', '아트페어', '기타']
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
    <div className="ma-article-add">
      <Header login={true} colored="black" detail={true} />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">My Archive</h2>
        </div>
      </nav>
      <SectionHeader title="Add Article" />
      <div className="ma-edit-image">
        <div className="container ma-edit-image-container">
          <h2 className="ma-img-tlt">대표 이미지</h2>
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
      </div>
      <div className="ma-edit-image-02">
        <div className="container ma-edit-image-container">
          <h2 className="ma-img-tlt">서브 이미지</h2>
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
        </div>
      </div>
      <ul className="ma-add-info ma-article-add-info">
        <div className="container">
          <li>
            <h2>제목</h2>
            <input type="text"></input>
          </li>
          <li>
            <h2>Dates</h2>
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
            <h2>Country</h2>
            <DropDown options={countryList} />
          </li>
          <li>
            <h2>Source</h2>
            <input type="text"></input>
          </li>
          <li>
            <h2>Publisher</h2>
            <input type="text"></input>
          </li>
          <li>
            <h2>Producer/Organization</h2>
            <input type="text"></input>
          </li>
          <li>
            <h2>상세 설명</h2>
            <textarea placeholder="상세한 설명입니다."></textarea>
          </li>
        </div>
      </ul>
      <div className="ma-add--button">
        <div className="container">
          <button>취소</button>
          <button>저장</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default MyArticleAdd
