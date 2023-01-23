import React from 'react'
import { useLocation } from 'react-router-dom'
import SectionHeader from '../../../../components/SectionHeader/SectionHeader'
import './MarketNftItem.css'

function MarketNftItem() {
  const item = useLocation().state.item
  const moreList = ['리스트', '그래프']
  return (
    <section className="market-nft-item">
      <div className="container">
        <div className="market-nft-info">
          <img
            className="market-nft__image"
            src={require('../../../../' + item.info)}
          ></img>
          <div className="market-nft__info">
            <div className="market-nft__title">
              <h1>{item.title}</h1>
              <button>
                <span className="ir_pm">좋아요</span>
              </button>
            </div>
            <div className="market-nft__price">
              <span className="price-title">판매가</span>
              <span className="price">000,000,000원</span>
            </div>
            <span className="price-usd">000,000USD</span>
            <div className="market-nft__button">
              <span>총 1개중 1개 판매중</span>
              <button>구매하기</button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <SectionHeader title={'작품 정보'} />
        <div className="market-nft-header">
          <div className="container m-nft-header-container">
            <img
              className="m-nft__image"
              src={require('../../../../' + item.info)}
            ></img>
            <div className="m-nft__creator">
              <h1>내친구월슨</h1>
              <span>크리에이터</span>
            </div>
            <div className="m-nft__stock">
              <span className="m-nft-stock__id">#7</span>
              <span className="m-nft-stock__num">
                10개 발행{'  '}|{'  '}10개 거래 가능
              </span>
            </div>
          </div>
        </div>
        <div className="m-nft-detail">
          <div className="container">
            <ul className="m-nft-detail__list">
              <li>
                2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부
                장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬
                음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019
                문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내
                최정상 뮤지컬 음악감독
              </li>
              <li>
                2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부
                장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬
                음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019
                문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내
                최정상 뮤지컬 음악감독
              </li>
              <li>
                2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부
                장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬
                음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019
                문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내
                최정상 뮤지컬 음악감독
              </li>
            </ul>
            <div className="m-nft-detail__info">
              <h1>NFT 정보</h1>
              <ul className="m-nft-info__list">
                <li>
                  <span className="info-title">소유자</span>
                  <span className="info-content">볼빨간 dfg</span>
                </li>
                <li>
                  <span className="info-title">컨트렉트 주소</span>
                  <span className="info-content">
                    fjdkfkgjnb.fmkdffl’qkfdkfgjkdfjgklfdjgk
                  </span>
                </li>
                <li>
                  <span className="info-title">토큰 ID</span>
                  <span className="info-content">1000</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="market-nft-deal-container">
        <SectionHeader
          title={'최근 거래 체결가'}
          moreList={moreList}
          active={0}
        />
        <div className="m-nft-deal">
          <div className="container m-nft-deal-container">
            <ul className="m-nft-deal__table">
              <li className="m-nft-table__thead">
                <span>거래일시</span>
                <span>에디션</span>
                <span>체결가</span>
              </li>
              <li className="m-nft-table__body">
                <span>2000.00.00</span>
                <span>#7</span>
                <span>0.000ETH</span>
              </li>
              <li className="m-nft-table__body">
                <span>2000.00.00</span>
                <span>#7</span>
                <span>0.000ETH</span>
              </li>
              <li className="m-nft-table__body">
                <span>2000.00.00</span>
                <span>#7</span>
                <span>0.000ETH</span>
              </li>
              <li className="m-nft-table__body">
                <span>2000.00.00</span>
                <span>#7</span>
                <span>0.000ETH</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  )
}
export default MarketNftItem
