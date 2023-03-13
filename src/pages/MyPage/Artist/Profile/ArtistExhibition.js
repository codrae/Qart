import React, { useRef, useState } from 'react'
import DropDown from '../../../../components/DropDown/DropDown'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import CheckModal from '../../../../components/Modal/CheckModal'
import ModalPortal from '../../../../components/Modal/ModalPortal'
import SectionHeader from '../../../../components/SectionHeader/SectionHeader'
import './ArtistExhibition.css'

function ArtistExhibition() {
  const [imgFile, setImgFile] = useState('')
  const imgRef = useRef()

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
  const typeList = ['개인전', '단체전', '아트페어', '기타']

  const saveImgFile = () => {
    const file = imgRef.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImgFile(reader.result)
    }
  }

  // 모달창 노출 여부 state
  const [checkOpen, setCheckOpen] = useState(false)

  // 모달창 노출
  const showCheckModal = () => {
    setCheckOpen(true)
  }
  return (
    <div className="artist-exhibition">
      <Header login={true} colored="black" detail={true} />
      <SectionHeader title={'Exhibition History'} />
      <div className="a-ex-edit-image">
        <div className="container a-ex-edit-image-container">
          <h2 className="a-ex-img-tlt">대표 이미지</h2>
          <img
            className={imgFile ? 'a-ex-img-show' : 'a-ex-img-hide'}
            src={imgFile}
            alt="선택 이미지"
          />
          <button
            className={imgFile ? 'edit-photo' : 'edit-photo a-ex-img-hide'}
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
      <section className="container a-exhibition-content">
        <ul className="a-ex-edit-info">
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
            <h2>전시형태</h2>
            <DropDown options={typeList} />
          </li>
          <li>
            <h2>개최일시</h2>
            <div className="mb-date-container">
              <input
                type="date"
                id="date"
                className="date-input"
                data-placeholder="YYYY.MM.DD"
                // value={toStringByFormatting(new Date())}
                required
              ></input>
              <span className="date-bar">-</span>
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
            <h2>주관/기획자</h2>
            <input type="text"></input>
          </li>
          <li>
            <h2>Note</h2>
            <textarea placeholder="상세한 설명입니다."></textarea>
          </li>
        </ul>
        <div className="a-ex-edit--button">
          <button>취소</button>
          <button onClick={showCheckModal}>저장</button>
          {checkOpen && (
            <ModalPortal>
              <CheckModal
                setModalOpen={setCheckOpen}
                title={'완료'}
                content={'전시 이력을 추가하시겠습니까?'}
              />
            </ModalPortal>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default ArtistExhibition
