import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ArtDetailInfo from '../../../components/ArtDetailInfo/ArtDetailInfo'
import DetailInfo from '../../../components/DetailIfo/DetailInfo'
import HistoryInfo from '../../../components/HistoryInfo/HistoryInfo'
import TopArrowSlider from '../../../components/TopArrowSlider/TopArrowSlider'
import WorkHeader from '../../../components/WorkHeader/WorkHeader'
import './MarketItem.css'

function MarketItem() {
  const item = useLocation().state.item
  const detailItem = [
    {
      info: item.info,
      height: '866px',
      detail:
        '2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독',
    },
    {
      info: item.info,
      width: '1277px',
      height: '866px',
      detail:
        '2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독',
    },
  ]
  const infos = [
    {
      title: '국적',
      content: '대한민국',
    },
    {
      title: '출생연도',
      content: '1990.10.20-',
    },
    {
      title: '작가소개',
      content:
        '2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독',
    },
  ]

  const InfoItem = items => {
    return Object.values(items).map((info, i) => {
      return (
        <li className="art-detail__item" key={i}>
          <span className="art-detail__name">{info.title}</span>
          <span className="art-detail__content">{info.content}</span>
        </li>
      )
    })
  }
  var historyItem = [
    [
      {
        divItem: (
          <section className="art-detail-section">
            <img
              className="art-detail__image"
              src={require('../../../' + item.info)}
            ></img>

            <ul className="art-detail__list">
              <li className="art-detail__item">{item.author}</li>
              {InfoItem(infos)}
            </ul>
          </section>
        ),
      },
    ],
    [
      {
        period: '0000.00.00 - 0000.00.00',
        category: '개인전',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '단체전',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '개인전',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '기타',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '아트페어',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
    ],
    [
      {
        period: '0000.00.00 - 0000.00.00',
        category: '개인전',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '단체전',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '개인전',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '기타',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '아트페어',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
    ],
    [
      {
        period: '0000.00.00 - 0000.00.00',
        category: '개인전',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '단체전',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '개인전',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '기타',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '아트페어',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
    ],
    [
      {
        period: '0000.00.00 - 0000.00.00',
        category: '개인전',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '단체전',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '개인전',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '기타',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
      {
        period: '0000.00.00 - 0000.00.00',
        category: '아트페어',
        title:
          'Wow5 창립전(인사아트센터),한국현대회화100선전(마루아트센터), 서울',
      },
    ],
  ]
  var moreList = ['작가정보', '전시이력', '최근 거래', '참고', '관련 소식']

  var moreItem = []
  for (var i = 0; i < 9; i++) {
    moreItem.push({
      info: 'qart_test/회화/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png',
      author: 'Chang SangEui ',
      title: 'Flower Rain, 2019',
      price: '000,000,000원',
    })
  }
  return (
    <section className="market-detail">
      <WorkHeader title_k={item.title}></WorkHeader>
      <div className="container">
        <div className="market-art">
          <section className="market-art-image">
            <img
              className="market-image__image"
              src={require('../../../' + item.info)}
            ></img>
            <div className="market-image__list">
              <img
                className="market-image__item"
                src={require('../../../' + item.info)}
              ></img>
              <img
                className="market-image__item"
                src={require('../../../' + item.info)}
              ></img>
              <img
                className="market-image__item"
                src={require('../../../' + item.info)}
              ></img>
            </div>
          </section>
          <section className="market-art-info">
            <Link className="market-info__gallery" to="#">
              판매 갤러리명<span className="info__arrow"></span>
            </Link>
            <ul className="market-info__list">
              <li>
                <span>작품 번호</span>
                <span>00000-0000-00000</span>
              </li>
              <li>
                <span>장르</span>
                <span>판화</span>
              </li>
              <li>
                <span>에디션</span>
                <span>Giclée print on Canvas</span>
              </li>
              <li>
                <span>작품크기</span>
                <span>70 X 70</span>
              </li>
              <li>
                <span>재료</span>
                <span>Giclée print on Canvas</span>
              </li>
              <li>
                <span>제작 연도</span>
                <span>2015</span>
              </li>
              <li>
                <span>Q-CoA 유무</span>
                <span>Q-CoA 등록</span>
              </li>
              <li>
                <span>기타</span>
                <span>
                  2021 대한민국 대중문화예술상 국무총리 표창, 2019
                  문화체육관광부 장관 표창
                </span>
              </li>
            </ul>
            <div className="market-art-sell">
              <p className="market-sell__price">
                <span>판매가</span>
                <span>000,000,000원</span>
              </p>
              <span className="market-sell__usd">000,000,00USD</span>
              <span className="market-sell__time">
                남은 시간 00시간 00분 00초
              </span>
              <div className="market-sell__button">
                <button>판매자 문의하기</button>
                <button>구입/응찰하기</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <HistoryInfo
        title={'기본 정보'}
        historyItem={historyItem}
        moreList={moreList}
      />
      <DetailInfo item={detailItem} />
      <TopArrowSlider title={'작가의 다른 작품'} item={moreItem} />
    </section>
  )
}
export default MarketItem
