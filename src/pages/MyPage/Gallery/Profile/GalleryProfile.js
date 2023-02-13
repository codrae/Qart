import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DropDown from '../../../../components/DropDown/DropDown'
import './GalleryProfile.css'

function GalleryProfile() {
  const [edit, setEdit] = useState(true)
  const phonelist = ['+82', '+82', '+82', '+82', '+82', '+82']
  const banklist = ['은행', '은행', '은행', '은행']
  const infoList = ['본명으로 활동(Real Name)', '본명으로 활동(Real Name)']
  const infoList2 = ['작가', '기관']
  return (
    <div className="gallery-profile">
      <section className="gallery-profile-edit cant-edit">
        <div className="container">
          <div className="gp-edit-header">
            <h1>프로필 관리</h1>
            <Link to="./profile">
              <button>편집하기</button>
            </Link>
          </div>
          <div className="gp-edit-content">
            <div className="gp-edit-image">
              <h2>기관 사진</h2>
              <img
                src={require('../../../../qart_test/김홍도 Kim, Hongdo, 대한민국, 1745-1806경.jpg')}
              ></img>
              {edit ? <></> : <button className="edit-photo"></button>}
            </div>
            <ul className="gp-edit-basic">
              <li className="has-2-input">
                <h2>기관명</h2>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="한글 Ko"
                  disabled={edit}
                ></input>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="영문 Eng"
                  disabled={edit}
                ></input>
              </li>
              <li>
                <h2>설립연월일</h2>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="YYYY.MM.DD"
                  disabled={edit}
                ></input>
              </li>
              <li>
                <h2>주소</h2>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="주소 검색"
                  disabled={edit}
                ></input>
              </li>
            </ul>
            <ul className="gp-edit-personal">
              <li>
                <h2>담당자명</h2>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="한글 Ko"
                  disabled={edit}
                ></input>
              </li>
              <li>
                <h2>담당자 번호</h2>
                <div className="gp-drop">
                  <DropDown disabled={edit} options={phonelist} />
                  <input
                    type="text"
                    className="a-profile-input__number"
                    placeholder="01000000000"
                    disabled={edit}
                  ></input>
                </div>
              </li>
              <li>
                <h2>추가 연락처1</h2>
                <div className="gp-drop">
                  <DropDown disabled={edit} options={phonelist} />
                  <input
                    type="text"
                    className="a-profile-input__number"
                    placeholder="01000000000"
                    disabled={edit}
                  ></input>
                </div>
              </li>
              <li>
                <h2>추가 연락처2</h2>
                <div className="gp-drop">
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
            <ul className="gp-edit-personal">
              <li>
                <h2>사용자 유형 변경</h2>
                <input
                  type="text"
                  className="a-profile-input"
                  placeholder="기관"
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
            <ul className="ap-edit-intro">
              <li>
                <h2>작가 소개</h2>
                <textarea placeholder="작가" readOnly={edit}></textarea>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div>
        <section className="gallery-profile-school">
          <div className="container gallery-profile-school-container">
            <div className="gp-edit-header">
              <h1>팀원 관리</h1>
              <Link to={'./team'}>
                <button>팀원 추가</button>
              </Link>
            </div>
            <ul className="gp-exhibition-list">
              <li className="gp-list--header">
                <span>이름</span>
                <span>아이디</span>
                <span>전화번호</span>
                <span>직무</span>
                <div className="gp-liat--button"></div>
              </li>
              <li>
                <span>홍길동</span>
                <span>mryrhelp123</span>
                <span>010-0000-0000</span>
                <span>홍길동</span>
                <div className="gp-liat--button">
                  <button>삭제</button>
                  <button>편집</button>
                </div>
              </li>
              <li>
                <span>홍길동</span>
                <span>mryrhelp123</span>
                <span>010-0000-0000</span>
                <span>홍길동</span>
                <div className="gp-liat--button">
                  <button>삭제</button>
                  <button>편집</button>
                </div>
              </li>
              <li>
                <span>홍길동</span>
                <span>mryrhelp123</span>
                <span>010-0000-0000</span>
                <span>홍길동</span>
                <div className="gp-liat--button">
                  <button>삭제</button>
                  <button>편집</button>
                </div>
              </li>
              <li>
                <span>홍길동</span>
                <span>mryrhelp123</span>
                <span>010-0000-0000</span>
                <span>홍길동</span>
                <div className="gp-liat--button">
                  <button>삭제</button>
                  <button>편집</button>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="gallery-profile-exhibition">
          <div className="container gallery-profile-exhibition-container">
            <div className="gp-edit-header">
              <h1>Agency History</h1>
              <Link to={'./agency'}>
                <button>이력 추가</button>
              </Link>
            </div>
            <ul className="gp-exhibition-list gp-agency-list">
              <li className="gp-list--header">
                <span>N</span>
                <span>Company name</span>
                <span>Representive Name</span>
                <span>Change Date</span>
                <span>Address</span>
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
        <section className="gallery-profile-exhibition">
          <div className="container gallery-profile-exhibition-container">
            <div className="gp-edit-header">
              <h1>Exhibition History</h1>
              <Link to={'./exhibition'}>
                <button>전시 추가</button>
              </Link>
            </div>
            <ul className="gp-exhibition-list gp-history-list">
              <li className="gp-list--header">
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
      </div>
    </div>
  )
}
export default GalleryProfile
