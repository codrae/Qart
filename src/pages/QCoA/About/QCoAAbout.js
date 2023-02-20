import React from 'react'
import './QCoAAbout.css'
function QCoAAbout() {
  return (
    <div className="qcoa-about">
      <div className="container">
        <article className="qcoa-01">
          <h2>큐아트 CoA(Q-CoA)란?</h2>
          <p>
            CoA는 작품이 진품임을 보증하는 인증서 (
            <span className="color-blue">C</span>ertificate
            <span className="color-blue">o</span>f
            <span className="color-blue">A</span>uthenticity) 입니다.
          </p>
          <p>
            <span className="bold">Q-CoA</span>는 전통적인 작품보증서에 큐아트
            만의 독자적인 블록체인 기술을 적용한<br></br> 실물
            <span className="bold">NFT(Non Fungible Token) 인증서</span> 뿐
            아니라 <span className="bold">디지털 NFT 인증서</span>모두가 발급
            가능한 보안성과 <br></br>편의성 높은 새로운 작품 인증 기술 입니다.
          </p>
          <p>
            <br></br>작가와 작품 소장기관은
          </p>
          <p>
            <span className="color-blue">
              1. 큐아트 아트데이터베이스에 작품 등록 / 2. 작품 선택 / 3. 인증서
              발급
            </span>
          </p>
          <p>
            간단한 세 가지 절차로 원하는 방식의 작품보증서를 발급, 관리 할 수
            있습니다.
          </p>
          <div className="qoca-img-01"></div>
        </article>

        <article className="qcoa-02">
          <h2>기술적 차별성</h2>
          <p>
            디지털 미술품의 경우 블록체인의 NFT(이하 디지털 NFT) 기능을 이용하여
            작품의 진본성을 보장해주고 있지만, 실물 미술품 또는 디지털 NFT를
            이용할 경우에는 실물 미술품과 디지털 NFT가 다른 소유주에게 갈 수
            있는 블록체인 에어 갭(Blockchain Air Gap)이 존재할 수 있습니다.
          </p>
          <p>
            이에 Q-CoA는 작품 보증서에 블록체인과 연동된 특수 QR-Code를 삽입한
            실물 NFT 기능을 추가하여 실물 미술품을 매매할 때 제공하는 실물 NFT가
            포함된 작품 보증서가 같이 제공되도록 하여 블록체인 에어 갭이 최소화
            되도록 하는 기술적 특징을 보유하고 있습니다.
          </p>
        </article>
        <article className="qcoa-03">
          <h2>Q-CoA 발급 방법</h2>
          <p>
            Q-CoA를 발급하는 것은 웹 사이트의 상단의 Q-CoA에서 간단히 클릭만으로
            발급됩니다.<br></br> 단, 작가는 작가의 서명을 앱에서 미리 등록을
            해야합니다.
          </p>
          <div className="qcoa-img-02"></div>
        </article>
        <article className="qcoa-04">
          <div>
            <div className="qcoa-img-03"></div>
            <h3>Q-CoA의 편리성</h3>
            <p>
              Q-CoA는 Qart 앱에서 실물 미술품 소유권 확인을 위하여 간단한 PIN을
              넣고 소유권을 확인할 수 있으며, 실물 미술품 구매자는 자신만의
              PIN을 Qart 앱에서 입력하고 표출되는 QR-Code를 현 소유자가 스캔하면
              손쉽게 실물 미술품의 이전이 이루어지며, 이후 새로운 소유자는
              자신의 PIN으로 소유권자임을 쉽게 인증할 수 있습니다.
            </p>
          </div>
          <div>
            <div className="qcoa-img-04"></div>
            <h3>Q-CoA의 보안성</h3>
            <p>
              Q-CoA의 소유권을 인증하는 PIN는 시스템은 어디에도 저장되지 않아
              해킹에 대해 안전하며, Q-CoA를 위해 허가형 블록체인을 이용하여
              허가된 사람만 블록체인에 접근할 수 있고, 개인정보 등은 블록체인에
              전혀 저장되지 않아 특수 난수들만 블록체인에 기록되어 개인정보 유출
              우려가 없습니다.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
export default QCoAAbout
