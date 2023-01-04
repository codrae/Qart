import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import './SignUpAuth.css'

function SignUpAuth() {
  const [select, setSelect] = useState(0)
  const next = useLocation().state.next

  function AuthEmail() {
    return (
      <>
        <h2 className="email-title">이메일</h2>
        <div className="email-input-container">
          <input type="text" className="email-input-email"></input>
          <span>@</span>
          <select className="email-input-email">
            <option value="self" selected>
              직접입력
            </option>
            <option value="naver">naver.com</option>
            <option value="gm">gmail.com</option>
            <option value="da">daum.com</option>
            <option value="yah">yahoo.com</option>
          </select>
          <button>인증하기</button>
        </div>
        <h2 className="email-title">인증번호</h2>
        <div className="email-input-container">
          <input
            type="text"
            className="email-input-num"
            placeholder="직접입력"
          ></input>
          <button>확인하기</button>
        </div>
      </>
    )
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
          {select == 0 ? <AuthEmail /> : <></>}
        </div>
        <div className="auth-next">
          <a href="/signUp">
            <button>이전</button>
          </a>
          <a
            href={
              next == 1
                ? '/signUp/artist'
                : next == 2
                ? '/signup/collector'
                : next == 3
                ? '/signup/general'
                : ''
            }
          >
            <button className="auth-next-button">다음</button>
          </a>
        </div>
      </section>
    </div>
  )
}
export default SignUpAuth
