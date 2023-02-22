import React, { useState } from 'react'
import './ArtistSchool.css'
import DropDown from '../../../../components/DropDown/DropDown'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import SectionHeader from '../../../../components/SectionHeader/SectionHeader'
import ModalPortal from '../../../../components/Modal/ModalPortal'
import CheckModal from '../../../../components/Modal/CheckModal'
function ArtistSchool() {
  const countryList = [
    'Korea, Republic of',
    'Korea, Republic of',
    'Korea, Republic of',
  ]

  // 모달창 노출 여부 state
  const [checkOpen, setCheckOpen] = useState(false)

  // 모달창 노출
  const showCheckModal = () => {
    setCheckOpen(true)
  }

  return (
    <div className="artist-school">
      <Header login={true} colored="black" />
      <SectionHeader title={'학력 정보'} />
      <section className="container a-exhibition-content">
        <ul className="a-ex-edit-info">
          <li>
            <h2>학교명</h2>
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
            <h2>입학시기</h2>
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
            <h2>졸업시기</h2>
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
            <h2>학위종류</h2>
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
                content={'학력 정보를 추가하시겠습니까?'}
              />
            </ModalPortal>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default ArtistSchool
