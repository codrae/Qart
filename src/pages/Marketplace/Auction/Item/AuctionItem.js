import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ArtDetail from '../../../../components/ArtDetail/ArtDetail'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import './AuctionItem.css'

function AuctionItem() {
  const item = useLocation().state.item

  var pitem = []
  for (var i = 0; i < 20; i++) {
    pitem.push({
      id: 1,
      info: 'qart_test/미디어/node00, 내재율의 외적 파동, 2019.jpg',
      author: '김동선 Kim dongsun',
      title: '곰순이',
      date: '2010년대',
      size: '30.0 X 30.0',
      detail: '캔버스',
      price: '000,000,000원',
    })
  }

  const result = []

  for (var i = 0; i < 20; i++) {
    result.push(
      <div>
        <div className="slider__item">
          <img src={require('../../../../' + pitem[i].info)} alt="item"></img>
          <h3>{pitem[i].author}</h3>
          <h2>{pitem[i].title}</h2>
          <h4>
            {pitem[i].date} {pitem[i].size} {pitem[i].detail}
          </h4>
        </div>
        <div className="market-item">
          <span className="market-item--price">{pitem[i].price}</span>
          <button href="#" className="market-item--heart">
            <span className="ir_pm">좋아요</span>
          </button>
        </div>
        <Link
          to={`./${pitem[i].id}`}
          state={{
            item: pitem[i],
          }}
        >
          <button className="buy-button">응찰하기</button>
        </Link>
      </div>
    )
  }
  const options = ['최신등록순', '작품명순', '작가명순', '제작연도순']
  return (
    <div className="auction-detail">
      <Header active="2" colored="black" detail={true} />
      <header className="auction-detail-header">
        <div className="container ad-header-container">
          <div className="ad-haeder__route">
            <Link to="/market">
              <span>Marketplace</span>
            </Link>
            <span className="next"></span>
            <Link to="/market/auction">
              <span>Auction</span>
            </Link>
            <span className="next"></span>
          </div>
          <h1>HAPPY NEW YEAR</h1>
        </div>
      </header>

      <div className="container">
        <section className="auction-detail-banner">
          <img
            className="ad-banner-image"
            src={require('../../../../' + item.info)}
          ></img>
          <div className="ad-banner-info">
            <h2 className="upcoming-auction--date">{item.date}</h2>
            <h1 className="ad-banner-info--title">{item.title}</h1>
            <h3 className="ad-banner-info--detail">{item.detail}</h3>
          </div>
        </section>
      </div>

      <section className="auction-detail-slider">
        <ArtDetail
          title_e={pitem.length + '개의 작품이 있습니다.'}
          rows={4}
          slidersPerRow={3}
          breakRows={3}
          breakSlidersPerRow={2}
          divItem={true}
          options={options}
          items={result}
        />
      </section>
      <Footer />
    </div>
  )
}
export default AuctionItem
