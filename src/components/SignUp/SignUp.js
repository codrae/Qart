import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
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
              <span>
                큐아트 모든 서비스 이용가능<br></br>
                단체활동, Artist Group은<br></br> 대표자 가입 후 작가 추가
                가능합니다.
              </span>
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
              <span>
                큐아트 모든 서비스 이용가능<br></br> 단체 대표자명으로
                등록해주시기 바랍니다. 대표자 등록 후 관리자 추가는<br></br>
                마이페이지를 통해 가능합니다.
              </span>
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
                큐아트에서 제공되는 정보 상세보기와 <br></br>온라인마켓플레이스
                서비스 이용가능
              </span>
              <span>
                아트아카이브 자료등록,큐아트인증,<br></br> NFT 등록 서비스는
                이용불가
              </span>
            </div>
          </a>
        </div>
        <section className="sign-next">
          <Link to="/signUp/auth" state={{ next: select }}>
            <button className={select != 0 ? 'active' : ''}>다음</button>
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  )
}
export default SignUp
