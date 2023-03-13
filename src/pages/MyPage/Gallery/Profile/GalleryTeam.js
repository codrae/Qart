import React, { useState } from 'react'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import CheckModal from '../../../../components/Modal/CheckModal'
import ModalPortal from '../../../../components/Modal/ModalPortal'
import SectionHeader from '../../../../components/SectionHeader/SectionHeader'
import './GalleryTeam.css'
function GalleryTeam() {
  // 모달창 노출 여부 state
  const [checkOpen, setCheckOpen] = useState(false)

  // 모달창 노출
  const showCheckModal = () => {
    setCheckOpen(true)
  }
  return (
    <div className="gallery-team">
      <Header login={true} colored="black" detail={true} />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">마이페이지</h2>
        </div>
      </nav>
      <SectionHeader title={'팀원 추가'} />
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
            <button onClick={showCheckModal}>저장</button>
            {checkOpen && (
              <ModalPortal>
                <CheckModal
                  setModalOpen={setCheckOpen}
                  title={'완료'}
                  content={'팀원을 추가하시겠습니까?'}
                />
              </ModalPortal>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
export default GalleryTeam
