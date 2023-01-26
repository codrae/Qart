import React from 'react'
import './GeneralProfile.css'

function GeneralProfile() {
  return (
    <div className="general-profile">
      <div className="container g-profile-container">
        <ul className="g-profile-list">
          <li>
            <h2>회원 아이디</h2>
            <input type="text" className="g-profile-input"></input>
          </li>
          <li>
            <h2>이름(실명)</h2>
            <input type="text" className="g-profile-input"></input>
          </li>
          <li>
            <h2>비밀번호</h2>
            <div className="c g-profile-password">
              <input
                type="password"
                className="g-profile-input"
                placeholder="영문, 특수문자, 숫자 포함 6~12자 이내"
              ></input>
              <button className="password__icon">
                <span className="ir_pm">가리기</span>
              </button>
            </div>
          </li>
          <li>
            <h2>휴대폰 번호</h2>
            <input type="text" className="g-profile-input"></input>
          </li>
          <li>
            <h2>비밀번호 확인</h2>
            <div className="c g-profile-password">
              <input
                type="password"
                className="g-profile-input"
                placeholder="영문, 특수문자, 숫자 포함 6~12자 이내"
              ></input>
              <button className="password__icon">
                <span className="ir_pm">가리기</span>
              </button>
            </div>
          </li>
          <li>
            <h2>생년월일</h2>
            <input type="text" className="g-profile-input"></input>
          </li>
        </ul>
        <button className="g-profile-button">수정하기</button>
      </div>
    </div>
  )
}
export default GeneralProfile
