import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ArtDetailInfo from '../../../../components/ArtDetailInfo/ArtDetailInfo'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import HistoryInfo from '../../../../components/HistoryInfo/HistoryInfo'
import PageSlide from '../../../../components/PageSlide/PageSlide'
import SearchHeader from '../../../../components/SearchHeader/SearchHeader'
import SectionHeader from '../../../../components/SectionHeader/SectionHeader'
import WorkHeader from '../../../../components/WorkHeader/WorkHeader'
import './ArtistDetail.css'

function ArtistDetail(props) {
  const [menu, setMenu] = useState(0)
  const { item } = useLocation().state

  const infoItem = {
    image: item.info,
    author: {
      image: 'qart_test/고미술/KakaoTalk_Photo_2022-07-13-17-18-21.jpeg',
      name: item.author,
      email: '00000@naver.com',
    },
    infos: [
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
    ],
  }

  var historyItem = [
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
        period: '00.00.00 - 00.00.00',
        category: '기관명',
        title: '학위 종류, 국가',
      },
      {
        period: '00.00.00 - 00.00.00',
        category: '기관명',
        title: '학위 종류, 국가',
      },
      {
        period: '00.00.00 - 00.00.00',
        category: '기관명',
        title: '학위 종류, 국가',
      },
      {
        period: '00.00.00 - 00.00.00',
        category: '기관명',
        title: '학위 종류, 국가',
      },
      {
        period: '00.00.00 - 00.00.00',
        category: '기관명',
        title: '학위 종류, 국가',
      },
    ],
  ]
  var moreList = ['전시이력', '학력 정보']
  var detailList = ['전체작품(0000)', '마켓플레이스(0000)']

  var pageItem = []
  for (var i = 0; i < 36; i++) {
    pageItem.push({
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      title: '곰순이, 2010년대',
      date: '2010년대',
      link: '/artdb/work/1',
    })
  }

  const result = []

  pageItem.map((item, i) => {
    result.push(
      <div key={i} className="page-slider__item">
        <div className="page-slider-item-row">
          <Link
            to={menu == 0 ? item.link : '/market/1'}
            state={{
              item: item,
            }}
          >
            <img
              className="page-item-image"
              src={require('../../../../' + item.info)}
            ></img>
          </Link>
          <div>
            <h2 className="page-item-author">{item.author}</h2>
            <h3 className="page-item-email">{item.title}</h3>
            <button className="page-item-button">팔로우</button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <section className="artist-detail">
      <Header active="0" colored="black" detail={true} />
      <WorkHeader title_k={item.author} follow={true}></WorkHeader>
      <ArtDetailInfo item={infoItem} />
      <HistoryInfo
        title={'작가이력'}
        historyItem={historyItem}
        moreList={moreList}
      />

      <section className="artist-detail-info">
        <SectionHeader title={'소식'} />
        <div className="container">
          <ul>
            <li className="artist-d-item">
              <img src={require('../../../../assets/gallery_02.png')}></img>
              <h2>Marco Fusinato</h2>
              <p>
                You could hear the deep droning hum even before the black
                granite block that housed the Australian pavilion came into
                view...
              </p>
            </li>
            <li className="artist-d-item">
              <img src={require('../../../../assets/gallery_02.png')}></img>
              <h2>Marco Fusinato</h2>
              <p>
                You could hear the deep droning hum even before the black
                granite block that housed the Australian pavilion came into
                view...
              </p>
            </li>
            <li className="artist-d-item">
              <img src={require('../../../../assets/gallery_02.png')}></img>
              <h2>Marco Fusinato</h2>
              <p>
                You could hear the deep droning hum even before the black
                granite block that housed the Australian pavilion came into
                view...
              </p>
            </li>
          </ul>
        </div>
      </section>
      <div className="artist-detail-ps">
        <WorkHeader
          moreListChange={setMenu}
          moreMenu={menu}
          moreList={detailList}
          moreActive={1}
          title_e={'by genre'}
          title_k={'작품'}
        ></WorkHeader>
        <div className="container artist-d-page-slide">
          <PageSlide
            items={result}
            divItem={true}
            rows={3}
            slidesPerRow={3}
            breakRows={4}
            breakSlidesPerRow={2}
          />
        </div>
      </div>
      <Footer />
    </section>
  )
}
export default ArtistDetail
