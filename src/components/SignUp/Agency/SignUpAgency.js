import React, { useState } from 'react'
import Header from '../../Header/Header'
import './SignUpAgency.css'

function SignUpAgency() {
  const [file, setFile] = useState('')
  function toStringByFormatting(source, delimiter = '-') {
    const year = source.getFullYear()
    const month =
      (source.getMonth() + 1).length != 2
        ? '0' + (source.getMonth() + 1)
        : source.getMonth() + 1
    const day =
      source.getDate().length != 2 ? '0' + source.getDate() : source.getDate()

    return [year, month, day].join(delimiter)
  }
  const changeFile = e => {
    var fileName = e.target.value
    setFile(fileName)
  }
  return (
    <div className="sign-agency">
      <Header />
      <section className="container sign-agency-container">
        <div className="artist-content agency-content pt-89">
          <div className="general-item">
            <h2 className="general-title">아이디</h2>
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
          <div className="general-item">
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
          <div className="general-item">
            <h2 className="general-title">비밀번호</h2>
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
        </div>
        <div className="artist-content agency-content">
          <div className="pb-26">
            <h2 className="general-title">기관명</h2>
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
          <div className="general-item mr-88">
            <h2 className="general-title">설립연월일</h2>
            <input
              type="date"
              id="date"
              className="general-input date-input"
              data-placeholder="YYYY.MM.DD"
              // value={toStringByFormatting(new Date())}
              required
            ></input>
          </div>
          <div className="general-item" style={{ marginRight: 0 }}>
            <h2 className="general-title">주소</h2>
            <div className="general-password">
              <input
                type="text"
                className="general-password-input"
                required
                placeholder="주소 검색"
              ></input>
              <button className="search__icon password__icon">
                <span className="ir_pm">검색하기</span>
              </button>
            </div>
          </div>
        </div>
        <div className="artist-content" style={{ paddingTop: '60rem' }}>
          <div className="general-item">
            <h2 className="general-title">연락처1</h2>
            <input
              type="text"
              className="general-input"
              placeholder="- 없이 숫자만 입력"
              required
            ></input>
          </div>
          <div className="general-item">
            <h2 className="general-title">연락처2</h2>
            <input
              type="text"
              className="general-input"
              placeholder="- 없이 숫자만 입력"
              required
            ></input>
          </div>
          <div className="pb-26">
            <h2 className="general-title">기관 이메일</h2>
            <div className="email-input-container">
              <input type="text" className="email-input-email" required></input>
              <span>@</span>
              <select className="email-input-email email" required>
                <option value="" selected>
                  직접입력
                </option>
                <option value="naver">naver.com</option>
                <option value="gm">gmail.com</option>
                <option value="da">daum.com</option>
                <option value="yah">yahoo.com</option>
              </select>
            </div>
          </div>
          <div className="general-item pb-26">
            <h2 className="general-title">홈페이지 주소</h2>
            <input type="text" className="general-input" required></input>
          </div>
          <div className="general-item">
            <h2 className="general-title">사업자/법인 등록증</h2>
            <div class="filebox">
              <label for="file">파일찾기</label>
              <input type="file" id="file" onChange={changeFile} />
              <input class="upload-name" value={file} readOnly />
            </div>
          </div>
        </div>
        <div className="artist-option" style={{ paddingTop: '118rem' }}>
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
    </div>
  )
}
export default SignUpAgency
