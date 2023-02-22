import React, { useState } from 'react'
import DropDown from '../../../../components/DropDown/DropDown'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import CheckModal from '../../../../components/Modal/CheckModal'
import ModalPortal from '../../../../components/Modal/ModalPortal'
import SectionHeader from '../../../../components/SectionHeader/SectionHeader'
import './GeneralProfile.css'

function GeneralProfile() {
  const moreList = {
    menu: [
      {
        title: '프로필',
        link: '/mypage/general',
      },
      {
        title: '나의 지갑',
        link: '/mypage/general/wallet',
      },
      {
        title: '관심목록',
        link: '/mypage/general/like',
      },
    ],
  }

  const [edit, setEdit] = useState(true)
  const phonelist = ['+82', '+82', '+82', '+82', '+82', '+82']
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
    <div
      className={
        edit ? 'mypage-general' : 'mypage-general mypage-general-profile'
      }
    >
      <Header login={true} colored="black" />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">마이페이지</h2>
        </div>
      </nav>
      <HeaderSmall moreList={moreList} active={true} choice={0} />
      {edit ? <></> : <SectionHeader title="프로필 수정" />}
      <div className="general-profile">
        <section
          className={
            edit
              ? 'container g-profile-container cant-edit'
              : 'container g-profile-container'
          }
        >
          {edit ? (
            <div className="ap-edit-header">
              <h1>프로필 관리</h1>
              <button onClick={() => setEdit(false)}>수정하기</button>
            </div>
          ) : (
            <></>
          )}
          <div className="ap-edit-content">
            <div className="ap-edit-image">
              <h2>프로필</h2>
              <img
                src={require('../../../../qart_test/김홍도 Kim, Hongdo, 대한민국, 1745-1806경.jpg')}
              ></img>
              {edit ? <></> : <button className="edit-photo"></button>}
            </div>
            <ul className="g-profile-list">
              <li className="has-2-input">
                <h2>이름 (Name)</h2>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="홍길동"
                  disabled={edit}
                ></input>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="Hong Gildong"
                  disabled={edit}
                ></input>
              </li>
              <li class="ap-edit-drop">
                <h2>국적 (Nationality)</h2>
                <DropDown disabled={edit} options={countryList} />
              </li>
              <li>
                <h2>생년월일 (Birth Date)</h2>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="YYYY.MM.DD"
                  disabled={edit}
                ></input>
              </li>
              <li>
                <h2>핸드폰 번호 (Contact Number)</h2>
                <div className="ap-drop">
                  <DropDown disabled={edit} options={phonelist} />
                  <input
                    type="text"
                    className="a-profile-input__number"
                    placeholder="01000000000"
                    disabled={edit}
                  ></input>
                </div>
              </li>
            </ul>
          </div>
          {edit ? (
            <></>
          ) : (
            <section className="g-profile-button">
              <button onClick={showCheckModal}>수정하기</button>
              {checkOpen && (
                <ModalPortal>
                  <CheckModal
                    setModalOpen={setCheckOpen}
                    setFunc={setEdit}
                    title={'수정 완료'}
                    content={'프로필 수정을 완료하시겠습니까?'}
                  />
                </ModalPortal>
              )}
            </section>
          )}
        </section>
      </div>
      <Footer />
    </div>
  )
}
export default GeneralProfile
