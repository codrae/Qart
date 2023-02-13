import React, { useState } from 'react'
import Collapsible from '../../../components/Collapsible/Collapsible'
import HeaderSmall from '../../../components/Header/HeaderSmall/HeaderSmall'
import './SupportFAQ.css'

function SupportFAQ() {
  const [choice, setChoice] = useState(0)
  const moreList = {
    menu: [
      {
        title: 'Qart',
      },
      {
        title: 'Art Database',
      },
      {
        title: 'Sign Up',
      },
      {
        title: 'Art Q-CoA',
      },
      {
        title: 'NFT',
      },
      {
        title: 'Marketplace',
      },
    ],
  }
  return (
    <div className="support-faq">
      <HeaderSmall
        moreList={moreList}
        active={true}
        choice={choice}
        setMenu={setChoice}
      />
      <div className="sf-content container">
        {choice == 0 && (
          <div>
            <Collapsible title={'Qart서비스는 PC로만 이용이 가능한가요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'Qart Web 사용 메뉴얼이 따로 있나요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'Qart App  사용 메뉴얼이 따로 있나요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible
              title={'Qart App에서 대여하기/반납하기 기능은 무엇인가요?'}
            >
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'Qart App에서 선물하기 기능은 무엇인가요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
          </div>
        )}
        {choice == 1 && (
          <div>
            <Collapsible title={'작품 등록은 누구나 가능한가요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'작품 등록 방법은 웹과 앱이 동일한가요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
          </div>
        )}
        {choice == 2 && (
          <div>
            <Collapsible title={'가입 시 연령과 국적 제한이 있나요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'작가가 아닌 경우에도 가입이 가능한가요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'유저 타입 변경이 가능한가요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible
              title={'KYC 인증은 무엇인가요? / KYC는 반드시 해야하나요?'}
            >
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'메타마스크와 같은 지갑 연동이 가능한가요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
          </div>
        )}
        {choice == 3 && (
          <div>
            <Collapsible title={'CoA는 무엇인가요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'Q-CoA는 어디에 저장되나요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible
              title={'Q-CoA의 실물 보증서와 NFT 보증서는 무엇이 다른가요?'}
            >
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'Q-CoA 발급 수수료는 어떻게 되나요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible
              title={
                '웹에서 등록하고 발행한 Q-CoA를 다른 기기로 저장 및 공유가 가능한가요?'
              }
            >
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
          </div>
        )}
        {choice == 4 && (
          <div>
            <Collapsible title={'NFT가 무엇인가요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'NFT ART는 무엇인가요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'내 NFT 발행은 어떻게 하나요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'내 NFT는 어디에 저장되나요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'디지털 작품 NFT는 뭔가요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'NFT 작품 판매와 구매는 어디서 하나요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible
              title={'NFT 작품 구매 시 원화와 가상화폐 모두 사용 가능한가요?'}
            >
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible
              title={
                'Art Database에 등록한 작품을 NFT화 할 때 가스비는 어떻게 되나요?'
              }
            >
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
          </div>
        )}
        {choice == 5 && (
          <div>
            <Collapsible title={'Marketplace에서는 어떤 작품을 거래하나요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'작가와 구매자가 직접 거래 가능한가요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible
              title={'Marketplace에서 작품 판매시 운송 및 설치를 지원해주나요?'}
            >
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible title={'작품 구입 후 환불이 가능한가요?'}>
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible
              title={'작품 구입시 영수증이나 세금계산서 발행이 가능한가요?'}
            >
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
            <Collapsible
              title={'작품 구입시 원화와 가상화폐 모두 사용 가능한가요?'}
            >
              <div className="sf-col-item__open">
                <p>
                  아니요. 모바일로도 이용 가능합니다.<br></br>
                  <br></br> 안드로이드 App 설치 링크 -
                  https://play.google.com/store/apps/details?id=com.fire.qartiOS
                  App 설치 링크 -
                  https://apps.apple.com/kr/app/qart/id1550699510
                </p>
                <h4>2022.03.02 update</h4>
              </div>
            </Collapsible>
          </div>
        )}
      </div>
    </div>
  )
}
export default SupportFAQ
