import React from 'react'
import WorkHeader from '../../../components/WorkHeader/WorkHeader'
import './MarketMain.css'

import BigTopArrow from '../../../components/TopArrowSlider/BigTopArrow/BigTopArrow'
import BannerSlide from '../../../components/BannerSlide/BannerSlide'
import ArtTopic from '../../../components/ArtTopic/ArtTopic'
import { Link } from 'react-router-dom'
import ArtMoveDetail from '../../../components/ArtMoveDetail/ArtMoveDetail'

function MarketMain() {
  const pickList = [
    {
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      author_e: 'Kim dongsun',
      title: '곰순이',
      date: '2010년대',
      price: '000,000,000원',
      link: '/market',
    },
    {
      id: 1,
      info: 'qart_test/판화/민정기, 묵안리, 2015.jpg',
      author: '김동선',
      author_e: 'Kim dongsun',
      title: '곰순이',
      date: '2010년대',
      price: '000,000,000원',
      link: '/market',
    },
    {
      id: 1,
      info: 'qart_test/회화/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png',
      author: '김동선',
      author_e: 'Kim dongsun',
      title: '곰순이',
      date: '2010년대',
      price: '000,000,000원',
      link: '/market',
    },
    {
      id: 1,
      info: 'qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png',
      author: '김동선',
      author_e: 'Kim dongsun',
      title: '곰순이',
      date: '2010년대',
      price: '000,000,000원',
      link: '/market',
    },
  ]
  const bannerList = [
    {
      id: 1,
      info: 'assets/banner01.png',
      title: 'YOSIGO',
      link: '.',
      detail:
        '아날로그의 낭만을 사랑하는 스페인 출신 예술가 요시고. 그가 셔터를 누르는 순간 일상적 풍경에 영화적 숨결이 깃든다.',
    },
    {
      id: 2,
      info: 'assets/banner01.png',
      title: 'YOSIGO',
      link: '.',
      detail:
        '아날로그의 낭만을 사랑하는 스페인 출신 예술가 요시고. 그가 셔터를 누르는 순간 일상적 풍경에 영화적 숨결이 깃든다.',
    },
    {
      id: 3,
      info: 'assets/banner01.png',
      title: 'YOSIGO',
      link: '.',
      detail:
        '아날로그의 낭만을 사랑하는 스페인 출신 예술가 요시고. 그가 셔터를 누르는 순간 일상적 풍경에 영화적 숨결이 깃든다.',
    },
    {
      id: 4,
      info: 'assets/banner01.png',
      title: 'YOSIGO',
      link: '.',
      detail:
        '아날로그의 낭만을 사랑하는 스페인 출신 예술가 요시고. 그가 셔터를 누르는 순간 일상적 풍경에 영화적 숨결이 깃든다.',
    },
  ]
  const info = [
    {
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: 'Kim HoDeuk',
      title: 'Distant Mountain',
      created: '2015',
      price: '000,000,000원',
      link: '.',
    },
    {
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: 'Kim HoDeuk',
      title: 'Distant Mountain',
      created: '2015',
      price: '000,000,000원',
      link: '.',
    },
    {
      id: 1,
      info: 'qart_test/판화/민정기, 묵안리, 2015.jpg',
      author: 'Kim HoDeuk',
      title: 'Distant Mountain',
      created: '2015',
      price: '000,000,000원',
      link: '.',
    },
  ]

  var moreItem = []
  for (var i = 0; i < 9; i++) {
    moreItem.push({
      id: 1,
      info: 'qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png',
      title: '기획전시명',
      detail: '비움갤러리가 선별한 전 작품 30% 할인가로 경매 시작!',
      date: '2000.00.00 00:00 ~ 2000.00.00 00:00 ',
    })
  }
  function RepresentingItems(item) {
    const result = []

    for (var i = 0; i < 4; i++) {
      result.push(
        <Link
          to={`./market/${item[i].id}`}
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
    return result
  }

  return (
    <div className="market-main">
      <BannerSlide items={bannerList} />
      <ArtTopic title_k={'큐레이터’s Pick'} items={info} hover={true} />
      <BigTopArrow
        title_e={'Qart’s Pick'}
        title_k={'금주의 추천작'}
        items={pickList}
      />
      <section className="hot-click">
        <WorkHeader title_k={'Hot Click!'} />
        <div className="hot-click-content container">
          <div className="hot-click-main">
            <img
              src={require('../../../qart_test/회화/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png')}
            ></img>
          </div>
          <div className="hot-click-sub">
            <img
              src={require('../../../qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png')}
            />
            <img
              src={require('../../../qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png')}
            />
            <img
              src={require('../../../qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png')}
            />
            <img
              src={require('../../../qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png')}
            />
          </div>
        </div>
      </section>
      <section className="art-tok">
        <WorkHeader
          title_e={'알고나니 더 좋아지는 아트'}
          title_k={'Art Tok!'}
        />
        <div className="container">
          <div className="art-tok-main">
            <img
              src={require('../../../qart_test/회화/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png')}
            ></img>
            <div className="art-tok-info">
              <h2>김동선 Kim dongsun</h2>
              <p>
                아날로그의 낭만을 사랑하는 스페인 출신 예술가 요시고. 그가
                셔터를 누르는 순간 일상적 풍경에 영화적 숨결이 깃든다.
              </p>
              <Link>Explore Now</Link>
            </div>
          </div>
          <div className="art-tok-sub">
            <img
              src={require('../../../qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png')}
            />
            <img
              src={require('../../../qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png')}
            />
          </div>
        </div>
      </section>
      <div className="upcoming-auction">
        <ArtMoveDetail
          title_k={'Upcoming Auction'}
          items={moreItem}
          represent={4}
          RepresentingItems={RepresentingItems(moreItem)}
        />
      </div>
    </div>
  )
}
export default MarketMain
