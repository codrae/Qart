import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import './SignUp.css'

function SignUp() {
  const [select, setSelect] = useState(0)

  return (
    <div className="sign">
      <Header />
      <div className="container sign-container">
        <div className="sign-list">
          <a
            className={select == 1 ? 'sign-item sign-active' : 'sign-item'}
            onClick={() => setSelect(1)}
          >
            <div className="sign-item__content">
              <img
                src={require('../../' +
                  'qart_test/미디어/node00, 내재율의 외적 파동, 2019.jpg')}
              ></img>
              <section>
                <h1>작가</h1>
                <span>Artist</span>
              </section>
            </div>
            <div className="sign-item__hover">
              <span>큐아트 웹과 모든 서비스 이용 가능</span>
            </div>
          </a>
          <a
            className={select == 2 ? 'sign-item sign-active' : 'sign-item'}
            onClick={() => setSelect(2)}
          >
            <div className="sign-item__content">
              <img
                src={require('../../' +
                  'qart_test/미디어/node00, 내재율의 외적 파동, 2019.jpg')}
              ></img>
              <section>
                <h1>소장자 및 기관</h1>
                <span>Collector / Museum,Agency</span>
              </section>
            </div>
            <div className="sign-item__hover">
              <span>큐아트 웹과 모든 서비스 이용 가능</span>
            </div>
          </a>
          <a
            className={select == 3 ? 'sign-item sign-active' : 'sign-item'}
            onClick={() => setSelect(3)}
          >
            <div className="sign-item__content">
              <img
                src={require('../../' +
                  'qart_test/미디어/node00, 내재율의 외적 파동, 2019.jpg')}
              ></img>
              <section>
                <h1>일반</h1>
                <span>General User</span>
              </section>
            </div>
            <div className="sign-item__hover">
              <span>
                큐아트에서 제공되는 정보 상세보기와 온라인마켓플레이스 서비스
                이용가능
              </span>
              <span>
                큐아트에서 제공되는 정보 상세보기와 온라인마켓플레이스 서비스
                이용가능 아트아카이브 자료등록,큐아트인증, NFT 등록 서비스는
                이용불가
              </span>
            </div>
          </a>
        </div>
        <section className="sign-next">
          <Link to="/signUp/auth" state={{ next: select }}>
            <button>다음</button>
          </Link>
        </section>
      </div>
    </div>
  )
}
export default SignUp
