import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import CheckModal from '../../../components/Modal/CheckModal'
import DeliveryModal from '../../../components/Modal/DeliveryModal'
import ModalPortal from '../../../components/Modal/ModalPortal'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import WorkHeader from '../../../components/WorkHeader/WorkHeader'
import './Payment.css'

function Payment() {
  const item = useLocation().state.item
  const [pay, setPay] = useState(0)

  const checkOnlyOne01 = checkThis => {
    const checkboxes = document.getElementsByName('location')
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
      }
    }
  }
  const checkOnlyOne02 = checkThis => {
    const checkboxes = document.getElementsByName('pay')
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
      }
    }
  }

  // 모달창 노출 여부 state
  const [delOpen, setDellOpen] = useState(false)

  // 모달창 노출
  const showDelModal = () => {
    setDellOpen(true)
    //document.body.style.overflow = 'hidden' // 모달 창 오픈 시 스크롤 불가
  }

  // 모달창 노출 여부 state
  const [checkOpen, setCheckOpen] = useState(false)

  // 모달창 노출
  const showCheckModal = () => {
    setCheckOpen(true)
    //document.body.style.overflow = 'hidden' // 모달 창 오픈 시 스크롤 불가
  }
  return (
    <div className="payment">
      <Header active="2" colored="black" />
      <WorkHeader title_k={'주문/결제'} />
      <div className="container">
        <section className="payment-item">
          <img src={require('../../../' + item.info)}></img>
          <ul className="payment-item-info">
            <li>
              <span>작품명</span>
              <span>지식의 기념비</span>
            </li>
            <li>
              <span>소장처</span>
              <span>리움 미술관</span>
            </li>
            <li>
              <span>판매가</span>
              <span>000,000,000원</span>
            </li>
            <li>
              <span>구매수수료</span>
              <span>000,000원</span>
            </li>
            <li>
              <span>배송비</span>
              <span>000,000원</span>
            </li>
            <li>
              <span>결제금액</span>
              <span>000,000,000원</span>
            </li>
          </ul>
        </section>
      </div>

      {pay == 0 ? (
        <div className="payment-checkout">
          <SectionHeader title={'배송지 정보'} />
          <div className="container">
            <ul className="checkout-location">
              <li>
                <span>배송지 선택</span>
                <div className="checkout-location__checkbox">
                  <label className="check-option">
                    <input
                      type="checkbox"
                      checked
                      name="location"
                      onChange={e => checkOnlyOne01(e.target)}
                      onClick={showDelModal}
                    />
                    {delOpen && (
                      <ModalPortal>
                        <DeliveryModal setModalOpen={setDellOpen} />
                      </ModalPortal>
                    )}
                    <span className="check-option__check" />
                    회원정보 주소
                  </label>
                  <label className="check-option">
                    <input
                      type="checkbox"
                      name="location"
                      onChange={e => checkOnlyOne01(e.target)}
                    />
                    <span className="check-option__check" />
                    신규배송지
                  </label>
                </div>
              </li>
              <li>
                <span>받으시는 분</span>
                <input type="text" className="checkout-input"></input>
              </li>
              <li>
                <span>배송지명</span>
                <input type="text" className="checkout-input"></input>
              </li>
              <li>
                <span>연락처</span>
                <input type="text" className="checkout-input"></input>
              </li>
              <li>
                <span>배송지 주소</span>
                <input type="text" className="checkout-input"></input>
              </li>
              <li>
                <span>상세주소</span>
                <input type="text" className="checkout-input"></input>
              </li>
              <li>
                <span>배송메모</span>
                <input type="text" className="checkout-input"></input>
              </li>
            </ul>
          </div>
          <SectionHeader title={'주문자 정보'} />
          <div className="container">
            <ul className="checkout-location">
              <li>
                <span>이름</span>
                <input type="text" className="checkout-input"></input>
              </li>
              <li>
                <span>전화번호</span>
                <input type="text" className="checkout-input"></input>
              </li>
              <li>
                <span>이메일</span>
                <input type="text" className="checkout-input"></input>
              </li>
            </ul>
          </div>
          <SectionHeader title={'결제 수단'} />
          <div className="container">
            <ul className="checkout-location">
              <li>
                <span>결제 수단 선택하기</span>
                <div className="checkout-location__checkbox">
                  <label className="check-option">
                    <input
                      type="checkbox"
                      checked
                      name="pay"
                      onChange={e => checkOnlyOne02(e.target)}
                    />
                    <span className="check-option__check" />
                    카드결제
                  </label>
                  <label className="check-option">
                    <input
                      type="checkbox"
                      name="pay"
                      onChange={e => checkOnlyOne02(e.target)}
                    />
                    <span className="check-option__check" />
                    페이팔
                  </label>
                </div>
              </li>
              <div className="checkout-button">
                <button className="checkout-button" onClick={showCheckModal}>
                  000,000,000원 결제하기
                </button>
                {checkOpen && (
                  <ModalPortal>
                    <CheckModal
                      setModalOpen={setCheckOpen}
                      setFunc={setPay}
                      title={'구매 확인'}
                      content={'결제를 완료하시겠습니까?'}
                    />
                  </ModalPortal>
                )}
              </div>
            </ul>
          </div>
        </div>
      ) : (
        <div className="payment-complete-container">
          <div className="container">
            <div className="payment-complete">
              <h1>주문이 완료되었습니다</h1>
              <Link to={'/'}>주문이 완료되었습니다</Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}
export default Payment
