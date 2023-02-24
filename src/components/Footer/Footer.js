import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-phone-header">
        <div className="footer-container">
          <span className="ir_pm">Qart</span>
        </div>
      </div>
      <div className="footer__menu">
        <div className="footer-container">
          <div className="footer__menu__item">
            <div className="footer__logo"></div>
            <div className="item-container">
              <ul>
                <h3>ABOUT</h3>
                <li>Qart 소개</li>
                <li>이용약관</li>
                <li>개인정보취급방침</li>
              </ul>
              <ul>
                <h3>FAQ</h3>
                <li>FAQ</li>
                <li>1 : 1 문의</li>
              </ul>
              <ul>
                <h3>공지사항</h3>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__detail">
          <div className="footer-container">
            <div className="footer__detail__item">
              <div className="detail__name">
                <span className="detail__name--co">
                  <span className="detail__name--phone">사업자명 : </span>
                  <span className="footer-bold">아트시냅스</span>
                </span>
                <span>
                  사업자등록번호 :{' '}
                  <span className="footer-bold">436-86-02273</span>
                </span>
              </div>
              <span className="detail__location">
                주소 :{' '}
                <span className="footer-bold">
                  부산광역시 중구 중앙대로102, 7층 795호
                </span>
              </span>
              <p>
                큐아트 사이트에서 제공하는 작가, 작품, 갤러리, 기관정보를 포함한
                모든 컨텐츠의 무단복제, 전송, 배포, 스크래핑 등에 대한 행위는
                저작권법 및 컨텐츠산업진흥법 등 관련 법령에 의하여 엄격히
                금지됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
