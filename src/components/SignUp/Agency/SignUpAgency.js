import React, { useState } from 'react'
import DropDown from '../../DropDown/DropDown'
import Footer from '../../Footer/Footer'
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

  const [value, setValue] = useState('')
  const [menu, setMenu] = useState(0)
  const options = ['직접입력', 'naver.com', 'gmail.com', 'daum.com']
  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <div className="sign-agency">
      <Header />
      <section className="container sign-agency-container">
        <div className="artist-content agency-content pt-89 first">
          <div className="agency-phone-container">
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
        </div>
        <div className="artist-content agency-content">
          <div className="agency-phone-container">
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
                required
                //onChange={e => console.log(e.target.value)}
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
        </div>
        <div className="artist-content agency-content last">
          <div className="agency-phone-container">
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
                <input
                  type="text"
                  className="email-input-email"
                  required
                ></input>
                <span>@</span>
                <input
                  type="text"
                  className="email-input-required"
                  disabled={menu != 0}
                  value={menu != 0 ? options[menu] : value}
                  onChange={onChange}
                  required
                ></input>
                <DropDown options={options} select={menu} setSelect={setMenu} />
              </div>
            </div>
            <div className="general-item pb-26">
              <h2 className="general-title">홈페이지 주소</h2>
              <input type="text" className="general-input" required></input>
            </div>
            <div className="general-item">
              <h2 className="general-title">사업자/법인 등록증</h2>
              <div class="filebox">
                <label for="file">파일 업로드</label>
                <input type="file" id="file" onChange={changeFile} />
                <input class="upload-name" value={file} readOnly />
              </div>
            </div>
          </div>
        </div>
        <div className="agency-phone-container">
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
        </div>
        <div className="agency-phone-container">
          <div className="general-next">
            <a href="#">
              <button>이전</button>
            </a>
            <a href="/signUp/auth/cert">
              <button className="general-next-button">다음</button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default SignUpAgency
