import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './AdminArtistDetail.css'
const AdminGalleryDetail = () => {
  const [content, setContent] = useState(true)
  const items = []
  for (var i = 0; i < 20; i++) {
    items.push(
      <div key={i} className="ad-artist-work--item">
        <img
          src={require('../../../qart_test/고미술/작가미상, 나전칠연상, 높이 26.7cm, 너비 24.4cm, 길이 36.7cm, 조선시대.jpg')}
        ></img>
        <h3>김동선 Kim dongsun</h3>
        <h2>곰순이</h2>
        <h4>2010년대</h4>
      </div>
    )
  }
  const show_items = items => {
    return items.map((item, i) => {
      return item
    })
  }
  return (
    <div className="admin-artist-detail">
      <section className="ad-artist-info">
        <img
          src={require('../../../qart_test/고미술/작가미상, 나전칠연상, 높이 26.7cm, 너비 24.4cm, 길이 36.7cm, 조선시대.jpg')}
        ></img>
        <article className="ad-artist-info--item">
          <h2>
            <span>기관명</span>
            <span>홍길동</span>
          </h2>
          <h2>
            <span>국적</span>
            <span>대한민국</span>
          </h2>
        </article>
        <article className="ad-artist-info--item">
          <h2>
            <span>연락처</span>
            <span>010-0000-0000</span>
          </h2>
          <h2>
            <span>계좌번호</span>
            <span>000000-0000-0000</span>
          </h2>
        </article>
        <article className="ad-artist-info--item">
          <h2>
            <span>통장사본 등록여부</span>
            {content ? (
              <span>등록완료</span>
            ) : (
              <span className="false-state">미등록</span>
            )}
          </h2>
          <h2>
            <span>KYC 인증</span>
            {content == false ? (
              <span>인증완료</span>
            ) : (
              <span className="false-state">미인증</span>
            )}
          </h2>
        </article>
      </section>
      <section className="ad-artist-history">
        <div className="ad-artist-history-01">
          <div className="ad-artist-history--item">
            <div className="ad-artist--header">기관 소개</div>
            <article>
              <p>
                2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부
                장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬
                음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019
                문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내
                최정상 뮤지컬 음악감독
              </p>
            </article>
          </div>
          <div className="ad-artist-history--item">
            <div className="ad-artist--header">학력</div>
            <ul>
              <li>
                <span>00.00.00 - 00.00.00</span>
                <span>[기관명]</span>
                <span>학위 종류, 국가</span>
              </li>
              <li>
                <span>00.00.00 - 00.00.00</span>
                <span>[기관명]</span>
                <span>학위 종류, 국가</span>
              </li>
              <li>
                <span>00.00.00 - 00.00.00</span>
                <span>[기관명]</span>
                <span>학위 종류, 국가</span>
              </li>
              <li>
                <span>00.00.00 - 00.00.00</span>
                <span>[기관명]</span>
                <span>학위 종류, 국가</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="ad-artist-history-02">
          <div className="ad-artist--header">전시 이력</div>
          <ul>
            <li>
              <span>00.00.00 - 00.00.00</span>
              <span>[기관명]</span>
              <span>
                Wow5 창립전(인사아트센터), 한국현대회화100선전(마루아트센터),
                서울
              </span>
            </li>
            <li>
              <span>00.00.00 - 00.00.00</span>
              <span>[기관명]</span>
              <span>
                Wow5 창립전(인사아트센터), 한국현대회화100선전(마루아트센터),
                서울
              </span>
            </li>
            <li>
              <span>00.00.00 - 00.00.00</span>
              <span>[기관명]</span>
              <span>
                Wow5 창립전(인사아트센터), 한국현대회화100선전(마루아트센터),
                서울
              </span>
            </li>
            <li>
              <span>00.00.00 - 00.00.00</span>
              <span>[기관명]</span>
              <span>
                Wow5 창립전(인사아트센터), 한국현대회화100선전(마루아트센터),
                서울
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="ad-artist-work">{show_items(items)}</section>
    </div>
  )
}
export default AdminGalleryDetail
