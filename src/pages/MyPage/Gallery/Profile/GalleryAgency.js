import React, { useState } from 'react'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import SectionHeader from '../../../../components/SectionHeader/SectionHeader'
import CheckModal from '../../../../components/Modal/CheckModal'
import ModalPortal from '../../../../components/Modal/ModalPortal'
import './GalleryAgency.css'
function GalleryAgency() {
  // 모달창 노출 여부 state
  const [checkOpen, setCheckOpen] = useState(false)

  // 모달창 노출
  const showCheckModal = () => {
    setCheckOpen(true)
  }
  return (
    <div className="gallery-agency">
      <Header login={true} colored="black" />
      <SectionHeader title={'Agency History'} />
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
            <button onClick={showCheckModal}>저장</button>
            {checkOpen && (
              <ModalPortal>
                <CheckModal
                  setModalOpen={setCheckOpen}
                  title={'완료'}
                  content={'히스토리를 추가하시겠습니까?'}
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
export default GalleryAgency
