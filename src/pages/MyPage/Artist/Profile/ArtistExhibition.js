import React from 'react'
import DropDown from '../../../../components/DropDown/DropDown'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import './ArtistExhibition.css'

function ArtistExhibition() {
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
  return (
    <div className="artist-exhibition">
      <Header login={true} colored="black" />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">마이페이지</h2>
        </div>
      </nav>
      <HeaderSmall moreList={moreList} active={true} choice={0} />
      <section className="container a-exhibition-content">
        <div className="a-ex-edit-image">
          <div className="container a-ex-edit-image-container">
            <h2>대표 이미지</h2>
            <img></img>
            <form method="post" enctype="multipart/form-data">
              <div className="button">
                <label className="image-button" for="chooseFile"></label>
              </div>
              <input
                type="file"
                id="chooseFile"
                name="chooseFile"
                accept="image/*"
              />
            </form>
          </div>
        </div>
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
          <button>저장</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default ArtistExhibition
