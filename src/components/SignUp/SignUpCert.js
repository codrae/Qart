import React from 'react'
import Header from '../Header/Header'
import './SignUpCert.css'

function SignUpCert() {
  return (
    <>
      <Header />
      <div className="container cert-container">
        <article className="cert-content">
          <h1>KYC 인증</h1>
          <p>
            *KYC(Know Your Customer) 인증은 가입자가 온라인으로 제출하신 신분증
            및 자격증을 제 3 인증기관을 통해 진위여부를 확인하는 기술입니다.
            <br /> *KYC (Know Your Customer) verification is a technology that
            verifies the authenticity of the ID and license submitted by the
            subscriber online through a third-party certification authority.
            <br />
            <br /> *KYC인증을 거치지 않은 작가 및 기관 가입자는 서명 및 인장
            등록, 작품 인증 및 거래이력 등록을 포함한 Q-CoA 서비스에 제한이 있을
            수 있습니다.
            <br /> *Artists and institutional subscribers who have not gone
            through KYC verification may have restrictions on Q-CoA services,
            including signature and seal registration, work certification, and
            transaction history registration.
          </p>
        </article>
        <a href="#">
          <button className="cert-button">KYC 인증 진행하기</button>
        </a>
        <div className="general-next">
          <a href="#">
            <button>이전</button>
          </a>
          <a href="#">
            <button className="general-next-button">다음</button>
          </a>
        </div>
      </div>
    </>
  )
}
export default SignUpCert
