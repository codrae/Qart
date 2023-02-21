import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Login.css'

function Login() {
  return (
    <div className="login-main">
      <Header />
      <div className="container login-container">
        <h1>로그인</h1>
        <section className="login-form">
          <input
            className="login-input"
            placeholder="이메일 주소"
            required
          ></input>
          <div className="login-password">
            <input
              type="password"
              className="login-input"
              placeholder="비밀번호"
              required
            ></input>
            <button className="password__icon">
              <span className="ir_pm">가리기</span>
            </button>
          </div>
          <label className="login-option">
            <input type="checkbox" />
            <span className="login-option__check" />
            아이디 저장
          </label>

          <button className="login-button">로그인</button>
          <div className="login-more">
            <a href="#">아이디/비밀번호 찾기</a>
            <span></span>
            <a href="/signUp">회원가입</a>
          </div>
        </section>
        <section className="login-link">
          <a className="login-link__icon">
            <span className="ir_pm">구글</span>
          </a>
          <a className="login-link__icon">
            <span className="ir_pm">구글</span>
          </a>
          <a className="login-link__icon">
            <span className="ir_pm">구글</span>
          </a>
          <a className="login-link__icon">
            <span className="ir_pm">구글</span>
          </a>
        </section>
      </div>
      <Footer />
    </div>
  )
}
export default Login
