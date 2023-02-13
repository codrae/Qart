import React from 'react'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import './SupportAbout.css'

function SupportAbout() {
  return (
    <div className="support-about">
      <section className="as-content-01">
        <div className="container">
          <ul>
            <li>
              <div className="as-content-01__img"></div>
              <div className="as-content-01__info">
                작품 정보를 Qart에 등록한 후,<br></br> 진품 보증서 발급
              </div>
            </li>
            <li>
              <div className="as-content-01__info">
                작품 Serial 저장 <br></br>암호화 된 QR코드 반환
              </div>
              <div className="as-content-01__img"></div>
            </li>
            <li>
              <div className="as-content-01__img"></div>
              <div className="as-content-01__info">
                작품 소유권 양도를 위해 QR코드 스캔 및 간편 패스워드 입력
              </div>
            </li>
            <li>
              <div className="as-content-01__info">
                QR코드 와 간편패스워드 전송 <br></br>스마트 계약 호출
              </div>
              <div className="as-content-01__img"></div>
            </li>
            <li>
              <div className="as-content-01__img"></div>
              <div className="as-content-01__info">
                복호화 및 조회<br></br>결과값 반환
              </div>
            </li>
            <li>
              <div className="as-content-01__info--logo"></div>
              <div className="as-content-01__img"></div>
            </li>
          </ul>
        </div>
      </section>
      <section className="as-content-02">
        <SectionHeader title={'우리 Qart는!'} />
        <div className="container">
          <ul>
            <li className="as-02-list__01">
              <span>
                *QR코드를 통한 간편한 작품 거래 등 작업을 간편하게 처리 할 수
                있습니다.
              </span>
              <span>
                *QR코드와 블록체인을 이용하여 운영되는 서비스로서 *블록체인을
                통한 데이터의 무결성 제공과
              </span>
            </li>
            <li className="as-02-list__02">
              <div>
                <h2>No. 1</h2>
                <p>
                  작품대여(반납) 서비스는 작가가 전시회에 작품을 출품하고
                  싶을때, 전시회 개최자에게 작품의 소유권을 임시로 이전하고
                  반납받는 기능입니다.
                </p>
                <p>
                  그리고 전시회에 전시된 작품이 판매될 때 해당 작품이 진품인지
                  확인하게 되는데, 그 때 진품 인증 수수료가 결제됩니다. 이 후,
                  이용자들 간의 추가 금전 거래가 발생합니다.
                </p>
              </div>
              <div>
                <h2>No. 2</h2>
                <p>
                  작품 판매 서비스는 즉시 소유권이 이전되는 기능입니다. 작품의
                  진품 인증 후 소유권이 이전되며 이 때 수수료가 결제됩니다.
                </p>
                <p>이 후, 이용자들 간의 추가 금전 거래가 발생합니다.</p>
              </div>
              <div>
                <h2>No. 3</h2>
                <p>
                  작품 선물 서비스는 작품 판매와 같이 즉시 소유권이 이전되지만
                  진품 인증 과정은 거치지 않습니다.
                </p>
                <p>
                  단, 선물받은 작품은 추가적인 선물하기 기능이 제한됩니다.(1회만
                  가능)
                </p>
              </div>
            </li>
            <li className="as-02-list__03">
              <div>
                <h3>*BlockChain</h3>
                <p>
                  데이터분산 처리기술로서 네트워크에 참여하는 모든 사용자가 모든
                  거래 내역 등의 데이터를 분산 저장하는 기술을 지칭하는 말 즉,
                  공공 거래장부라고 할 수 있습니다.
                </p>
              </div>
              <div>
                <h3>*QR code</h3>
                <p>
                  대용량 정보를 작은 공간에 표현하면서 오염/손상에 강하고 360도
                  어느 방향에서도 인식이 가능한 이차원 코드입니다.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
export default SupportAbout
