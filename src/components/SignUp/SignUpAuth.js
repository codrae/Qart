import React, { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DropDown from '../DropDown/DropDown'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './SignUpAuth.css'

function SignUpAuth() {
  const [select, setSelect] = useState(0)
  const [menu, setMenu] = useState(0)
  const [value, setValue] = useState('')

  const next = useLocation().state.next

  const options = ['직접입력', 'naver.com', 'gmail.com', 'daum.com']

  const onChange = e => {
    setValue(e.target.value)
  }

  return (
    <div className="sign-auth">
      <Header />
      <section className="container sign-auth-container">
        <div className="auth-list">
          <button className="auth-item" onClick={() => setSelect(0)}>
            <h1 className={select == 0 ? 'auth-select' : ''}>이메일 인증</h1>
            <span className={select == 0 ? 'auth-select' : ''}></span>
          </button>
          <button className="auth-item" onClick={() => setSelect(1)}>
            <h1 className={select == 1 ? 'auth-select' : ''}>간편인증</h1>
            <span className={select == 1 ? 'auth-select' : ''}></span>
          </button>
        </div>
        <div className="auth-content">
          {select == 0 ? (
            <>
              <h2 className="email-title">이메일</h2>
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
                <button>인증하기</button>
              </div>
              <h2 className="email-title">인증번호</h2>
              <div className="email-input-container">
                <input type="text" className="email-input-num" required></input>
                <button>확인하기</button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="auth-next">
          <a href="/signUp">
            <button>이전</button>
          </a>
          <a
            href={
              next == 1
                ? '/signUp/auth/artist'
                : next == 2
                ? '/signup/auth/agency'
                : next == 3
                ? '/signup/auth/general'
                : ''
            }
          >
            <button className="auth-next-button">다음</button>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default SignUpAuth
