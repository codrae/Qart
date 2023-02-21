import React, { useState } from 'react'
import WorkHeader from '../../../components/WorkHeader/WorkHeader'
import ArtDetailInfo from '../../../components/ArtDetailInfo/ArtDetailInfo'
import PageSlide from '../../../components/PageSlide/PageSlide'

import { useLocation } from 'react-router-dom'
import HistoryInfo from '../../../components/HistoryInfo/HistoryInfo'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'

import './VenueDetail.css'
function VenueDetail() {
  const [menu, setMenu] = useState(0)
  const item = useLocation().state.item
  const infoItem = {
    image: item.info,
    author: {
      image: 'qart_test/고미술/KakaoTalk_Photo_2022-07-13-17-18-21.jpeg',
      name: item.author,
      email: '00000@naver.com',
    },
    infos: [
      {
        title: '기관',
        content: '판화',
      },
      {
        title: '국가',
        content: '70 X 70',
      },
      {
        title: '주소',
        content: 'Giclée print on Canvas',
      },
      {
        title: '연락처',
        content: '홈페이지/sns계정 링크',
      },
      {
        title: '기관소개',
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
  var moreList = ['전시이력', '히스토리']
  var detailList = ['전체작품(0000)', '마켓플레이스(0000)']

  var pageItem = []
  for (var i = 0; i < 36; i++) {
    pageItem.push({
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      title: '곰순이, 2010년대',
      date: '2010년대',
    })
  }
  return (
    <section className="venue-detail">
      <WorkHeader title_k={item.title} follow={true}></WorkHeader>
      <ArtDetailInfo item={infoItem} />
      <HistoryInfo
        title={'기관이력'}
        historyItem={historyItem}
        moreList={moreList}
      />

      <section className="venue-detail-info">
        <SectionHeader title={'전시와 소식'} />
        <div className="container">
          <ul>
            <li className="artist-d-item">
              <img src={require('../../../assets/gallery_02.png')}></img>
              <h2>Marco Fusinato</h2>
              <p>
                You could hear the deep droning hum even before the black
                granite block that housed the Australian pavilion came into
                view...
              </p>
            </li>
            <li className="artist-d-item">
              <img src={require('../../../assets/gallery_02.png')}></img>
              <h2>Marco Fusinato</h2>
              <p>
                You could hear the deep droning hum even before the black
                granite block that housed the Australian pavilion came into
                view...
              </p>
            </li>
            <li className="artist-d-item">
              <img src={require('../../../assets/gallery_02.png')}></img>
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
      <WorkHeader
        moreListChange={setMenu}
        moreMenu={menu}
        moreList={detailList}
        moreActive={1}
        title_k={'소장 작품'}
      ></WorkHeader>
      <div className="container artist-d-page-slide">
        <PageSlide items={pageItem} rows={3} slidesPerRow={3} />
      </div>
    </section>
  )
}
export default VenueDetail
