import React from 'react'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import './GalleryAgency.css'
function GalleryAgency() {
  const moreList = {
    menu: [
      {
        title: 'Agency History',
      },
    ],
  }
  return (
    <div className="gallery-agency">
      <Header login={true} colored="black" />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">마이페이지</h2>
        </div>
      </nav>
      <HeaderSmall moreList={moreList} active={true} choice={0} />
      <div className="gallery-agency-content">
        <div className="container">
          <ul>
            <li>
              <h2>Company name</h2>
              <input type="text"></input>
            </li>
            <li>
              <h2>Representive Name</h2>
              <input type="text"></input>
            </li>
            <li>
              <h2>Change Date</h2>
              <input
                type="date"
                id="date"
                className="date-input"
                data-placeholder="YYYY.MM.DD"
                // value={toStringByFormatting(new Date())}
                required
              ></input>
            </li>
            <li>
              <h2>Address</h2>
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
export default GalleryAgency
