import React from 'react'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import './GalleryTeam.css'
function GalleryTeam() {
  const moreList = {
    menu: [
      {
        title: '팀원 추가',
      },
    ],
  }
  return (
    <div className="gallery-team">
      <Header login={true} colored="black" />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">마이페이지</h2>
        </div>
      </nav>
      <HeaderSmall moreList={moreList} active={true} choice={0} />
      <div className="gallery-team-content">
        <div className="container">
          <ul>
            <li>
              <h2>이름</h2>
              <input type="text"></input>
            </li>
            <li>
              <h2>아이디</h2>
              <input type="text"></input>
            </li>
            <li>
              <h2>전화번호</h2>
              <input type="text"></input>
            </li>
            <li>
              <h2>직무</h2>
              <input type="text"></input>
            </li>
          </ul>
          <div className="a-ex-edit--button">
            <button>취소</button>
            <button>저장</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
export default GalleryTeam
