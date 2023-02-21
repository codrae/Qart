import React from 'react'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import SearchHeader from '../../../components/SearchHeader/SearchHeader'
import HeaderSmall from '../../../components/Header/HeaderSmall/HeaderSmall'
import './MarketAuction.css'
import ArtDetail from '../../../components/ArtDetail/ArtDetail'
import { Link } from 'react-router-dom'

function MarketAuction(props) {
  const moreList = {
    menu: [
      {
        title: 'Now',
        link: '/market/auction',
      },
      {
        title: 'Past',
        link: '#',
      },
    ],
  }

  var item = []
  for (var i = 0; i < 20; i++) {
    item.push({
      id: 1,
      info: 'qart_test/미디어/node00, 내재율의 외적 파동, 2019.jpg',
      title: '기획전시명',
      detail: '비움갤러리가 선별한 전 작품 30% 할인가로 경매 시작!',
      date: '2000.00.00 00:00 ~ 2000.00.00 00:00 ',
    })
  }

  const result = []

  for (var i = 0; i < 20; i++) {
    result.push(
      <Link
        to={`./${item[i].id}`}
        state={{
          item: item[i],
        }}
        key={i}
        className="upcoming-auction-item"
      >
        <img src={require('../../../' + item[i].info)}></img>
        <div className="upcoming-auction-info">
          <h2 className="upcoming-auction--date">{item[i].date}</h2>
          <h1 className="upcoming-auction--title">{item[i].title}</h1>
          <h3 className="upcoming-auction--detail">{item[i].detail}</h3>
        </div>
      </Link>
    )
  }

  const options = ['최신등록순', '작품명순', '작가명순', '제작연도순']
  return (
    <div>
      <Header active="2" colored="black" />
      <SearchHeader title="Auction" active={props.search} />
      <HeaderSmall
        moreList={moreList}
        active={props.search}
        choice={props.active}
      />
      <section className="market-auction">
        <ArtDetail
          title_e={'Now Auction'}
          title_k={'진행중인 기획경매(000)'}
          rows={2}
          slidersPerRow={4}
          divItem={true}
          options={options}
          items={result}
        />
      </section>
      <Footer />
    </div>
  )
}
export default MarketAuction
