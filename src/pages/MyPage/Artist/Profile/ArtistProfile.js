import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DropDown from '../../../../components/DropDown/DropDown'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import CheckModal from '../../../../components/Modal/CheckModal'
import ModalPortal from '../../../../components/Modal/ModalPortal'
import SectionHeader from '../../../../components/SectionHeader/SectionHeader'
import './ArtistProfile.css'

function ArtistProfile() {
  const moreList = {
    menu: [
      {
        title: '프로필',
        link: '/mypage/artist',
      },
      {
        title: 'My Archive',
        link: '/mypage/artist/archive',
      },
      {
        title: '나의 지갑',
        link: '/mypage/artist/wallet',
      },
      {
        title: '관심목록',
        link: '/mypage/artist/like',
      },
    ],
  }

  const [edit, setEdit] = useState(true)

  // 모달창 노출 여부 state
  const [checkOpen, setCheckOpen] = useState(false)

  // 모달창 노출
  const showCheckModal = () => {
    setCheckOpen(true)
  }

  const phonelist = ['+82', '+82', '+82', '+82', '+82', '+82']
  const banklist = ['은행', '은행', '은행', '은행']
  const infoList = ['본명으로 활동(Real Name)', '본명으로 활동(Real Name)']
  const infoList2 = ['작가', '기관']
  return (
    <div
      className={edit ? 'mypage-artist' : 'mypage-artist mypage-artist-profile'}
    >
      <Header login={true} colored="black" />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">마이페이지</h2>
        </div>
      </nav>
      <HeaderSmall moreList={moreList} active={true} choice={0} />
      {edit ? <></> : <SectionHeader title="프로필 수정" />}
      <div className="artist-profile">
        <section
          className={
            edit
              ? 'container artist-profile-edit cant-edit'
              : 'container artist-profile-edit'
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
            <ul className="ap-edit-basic">
              <li>
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
              <li>
                <h2>활동명 / 단체명 (Artist / Collective Name)</h2>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="홍길동 그룹"
                  disabled={edit}
                ></input>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="Hong Gildong group"
                  disabled={edit}
                ></input>
              </li>
              <li className="ap-edit-drop">
                <h2>작가정보 노출 (Please set your name to use for Qart)</h2>
                <DropDown disabled={edit} options={infoList} />
              </li>
            </ul>
            <ul className="ap-edit-personal">
              <li>
                <h2>국적 (Nationality)</h2>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="Korea, Republic of"
                  disabled={edit}
                ></input>
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
            <ul className="ap-edit-personal">
              <li>
                <h2>KYC 인증 여부</h2>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="미등록"
                  disabled={edit}
                ></input>
              </li>
              <li>
                <h2>서명 및 인장 등록</h2>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="미등록"
                  disabled={edit}
                ></input>
              </li>
              <li className="ap-edit-drop">
                <h2>사용자 유형 변경</h2>
                <DropDown disabled={edit} options={infoList2} />
              </li>
              <li>
                <h2>웹 / SNS</h2>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="mryrhelp@naver.com"
                  disabled={edit}
                ></input>
              </li>
            </ul>
            <ul className="ap-edit-bank">
              <li>
                <h2>계좌번호</h2>
                <div className="ap-drop">
                  <DropDown disabled={edit} options={banklist} />
                  <input
                    type="text"
                    className="a-profile-input__bank"
                    placeholder="미등록"
                    disabled={edit}
                  ></input>
                </div>
              </li>
              <li>
                <h2>소유주</h2>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="미등록"
                  disabled={edit}
                ></input>
              </li>
              <li>
                <h2>통장사본</h2>
                {edit ? (
                  <button>업로드 완료</button>
                ) : (
                  <button>파일 업로드</button>
                )}
              </li>
            </ul>
            <ul className="ap-edit-intro">
              <li>
                <h2>작가 소개</h2>
                <textarea placeholder="작가" readOnly={edit}></textarea>
              </li>
            </ul>
          </div>
          {edit ? (
            <></>
          ) : (
            <section className="ap-profile-edit--button">
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

        {edit ? (
          <div>
            <section className="artist-profile-exhibition">
              <div className="container artist-profile-exhibition-container">
                <div className="ap-edit-header">
                  <h1>Exhibition History</h1>
                  <Link to={'./exhibition'}>
                    <button>전시 추가</button>
                  </Link>
                </div>
                <ul className="ap-exhibition-list">
                  <li className="ap-list--header">
                    <span>N</span>
                    <span>Exname</span>
                    <span>Place</span>
                    <span>Country</span>
                    <span>Date</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>Company name</span>
                    <span>Representive Name</span>
                    <span>Change Date</span>
                    <span>Address</span>
                  </li>
                  <li>
                    <span>2</span>
                    <span>Company name</span>
                    <span>Representive Name</span>
                    <span>Change Date</span>
                    <span>Address</span>
                  </li>
                  <li>
                    <span>3</span>
                    <span>Company name</span>
                    <span>Representive Name</span>
                    <span>Change Date</span>
                    <span>Address</span>
                  </li>
                  <li>
                    <span>4</span>
                    <span>Company name</span>
                    <span>Representive Name</span>
                    <span>Change Date</span>
                    <span>Address</span>
                  </li>
                </ul>
              </div>
            </section>
            <section className="artist-profile-school">
              <div className="container artist-profile-school-container">
                <div className="ap-edit-header">
                  <h1>학력정보</h1>
                  <Link to={'./school'}>
                    <button>학력 추가</button>
                  </Link>
                </div>
                <ul className="ap-exhibition-list">
                  <li className="ap-list--header">
                    <span>N</span>
                    <span>기관명</span>
                    <span>국가</span>
                    <span>입학</span>
                    <span>졸업</span>
                    <span>학위종류</span>
                    <div className="ap-liat--button"></div>
                  </li>
                  <li>
                    <span>1</span>
                    <span>Company name</span>
                    <span>Representive Name</span>
                    <span>00.00.00</span>
                    <span>00.00.00</span>
                    <span>Address</span>
                    <div className="ap-liat--button">
                      <button>삭제</button>
                      <button>편집</button>
                    </div>
                  </li>
                  <li>
                    <span>2</span>
                    <span>Company name</span>
                    <span>Representive Name</span>
                    <span>00.00.00</span>
                    <span>00.00.00</span>
                    <span>Address</span>
                    <div className="ap-liat--button">
                      <button>삭제</button>
                      <button>편집</button>
                    </div>
                  </li>
                  <li>
                    <span>3</span>
                    <span>Company name</span>
                    <span>Representive Name</span>
                    <span>00.00.00</span>
                    <span>00.00.00</span>
                    <span>Address</span>
                    <div className="ap-liat--button">
                      <button>삭제</button>
                      <button>편집</button>
                    </div>
                  </li>
                  <li>
                    <span>4</span>
                    <span>Company name</span>
                    <span>Representive Name</span>
                    <span>00.00.00</span>
                    <span>00.00.00</span>
                    <span>Address</span>
                    <div className="ap-liat--button">
                      <button>삭제</button>
                      <button>편집</button>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        ) : (
          <></>
        )}
      </div>

      <Footer />
    </div>
  )
}
export default ArtistProfile
