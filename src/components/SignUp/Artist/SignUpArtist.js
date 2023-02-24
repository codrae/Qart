import React from 'react'
import DropDown from '../../DropDown/DropDown'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import './SignUpArtist.css'

function SignUpArtist() {
  var countryList = ['국적 선택', '한국', '미국', '일본', '중국', '캐나다']
  return (
    <div className="sign-artist">
      <Header />
      <section className="container sign-artist-container">
        <div className="artist-content">
          <div className="general-item">
            <h2 className="general-title">회원 아이디</h2>
            <div className="general-input-container">
              <input
                type="text"
                className="general-input-num"
                placeholder="12자 이내로 입력"
                required
              ></input>
              <button>중복확인</button>
            </div>
          </div>
          <div className="general-item">
            <h2 className="general-title">이름(실명)</h2>
            <input
              type="text"
              className="general-input mr-88"
              placeholder="한글"
              required
            ></input>
            <input
              type="text"
              className="general-input"
              placeholder="ENG"
              required
            ></input>
          </div>
          <div className="general-item mr-88">
            <h2 className="general-title">휴대폰 번호</h2>
            <input
              type="text"
              className="general-input"
              placeholder="- 없이 숫자만 입력"
              required
            ></input>
          </div>
          <div className="general-item">
            <h2 className="general-title">생년월일</h2>
            <input
              type="text"
              className="general-input"
              placeholder="생년월일 6자리 입력"
              required
            ></input>
          </div>
          <div className="general-item mr-88">
            <h2 className="general-title ">비밀번호</h2>
            <div className="general-password">
              <input
                type="password"
                className="general-password-input"
                placeholder="영문, 특수문자, 숫자 포함 6~12자 이내"
                required
              ></input>
              <button className="password__icon">
                <span className="ir_pm">가리기</span>
              </button>
            </div>
          </div>
          <div className="general-item">
            <h2 className="general-title">비밀번호 확인</h2>
            <div className="general-password">
              <input
                type="password"
                className="general-password-input"
                placeholder="영문, 특수문자, 숫자 포함 6~12자 이내"
                required
              ></input>
              <button className="password__icon">
                <span className="ir_pm">가리기</span>
              </button>
            </div>
          </div>
          <div className="general-item">
            <h2 className="general-title">활동명/단체명</h2>
            <input
              type="text"
              className="general-input mr-88"
              placeholder="한글 ko"
              required
            ></input>
            <input
              type="text"
              className="general-input"
              placeholder="영문 Eng"
              required
            ></input>
          </div>
          <div className="general-item">
            <h2 className="general-title">국적</h2>
            <DropDown options={countryList} />
          </div>
        </div>
        <div className="artist-option">
          <label className="login-option">
            <input type="checkbox" />
            <span className="login-option__check" />
            <span className="option-text">(필수) 약관 전제 동의</span>
          </label>
          <label className="login-option">
            <input type="checkbox" />
            <span className="login-option__check" />
            <span className="option-text">(필수) 이용약관 동의</span>
          </label>
          <label className="login-option">
            <input type="checkbox" />
            <span className="login-option__check" />
            <span className="option-text">
              (필수) 개인정보 수집 및 이용 동의
            </span>
          </label>
          <label className="login-option">
            <input type="checkbox" />
            <span className="login-option__check" />
            <span className="option-text">
              (선택) 마케팅 정보 활동 및 수신 동의
            </span>
          </label>
        </div>
        <div className="general-next">
          <a href="#">
            <button>이전</button>
          </a>
          <a href="/signUp/auth/cert">
            <button className="general-next-button">다음</button>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default SignUpArtist
