import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import SectionHeader from '../../../../components/SectionHeader/SectionHeader'
import WorkHeader from '../../../../components/WorkHeader/WorkHeader'
import './NFTItem.css'

function NFTItem() {
  const item = useLocation().state.item
  const moreList = ['리스트', '그래프']
  return (
    <section className="nft-detail-item market-nft-item">
      <Header active="0" colored="black" detail={true} />
      <WorkHeader title_k="NFT" />
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
            <div className="art-detail__profile">
              <img src={require('../../../../' + item.info)}></img>
              <article className="art-detail__profile__info">
                <h2>
                  <span className="ad-profile__info-k">{item.author}</span>{' '}
                  eeeeee
                </h2>
                <h4>{item.email}</h4>
              </article>
              <button className="art-detail__profile__move">팔로우</button>
            </div>
            <Link className="market-nft__buy">
              <button>구매하기</button>
            </Link>
          </div>
        </div>
      </div>
      <section>
        <SectionHeader title={'작품 정보'} />
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
                <div>
                  <span>거래일시</span>
                  <span>에디션</span>
                  <span>체결가</span>
                </div>
              </li>
              <li className="m-nft-table__body">
                <div>
                  <span>2000.00.00</span>
                  <span>#7</span>
                  <span>0.000ETH</span>
                </div>
              </li>
              <li className="m-nft-table__body">
                <div>
                  <span>2000.00.00</span>
                  <span>#7</span>
                  <span>0.000ETH</span>
                </div>
              </li>
              <li className="m-nft-table__body">
                <div>
                  <span>2000.00.00</span>
                  <span>#7</span>
                  <span>0.000ETH</span>
                </div>
              </li>
              <li className="m-nft-table__body">
                <div>
                  <span>2000.00.00</span>
                  <span>#7</span>
                  <span>0.000ETH</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  )
}
export default NFTItem
