import React, { useState } from 'react'

import WorkHeader from '../../../components/WorkHeader/WorkHeader'
import DetailInfo from '../../../components/DetailIfo/DetailInfo'
import TopArrowSlider from '../../../components/TopArrowSlider/TopArrowSlider'
import ArtDetailInfo from '../../../components/ArtDetailInfo/ArtDetailInfo'
import { useLocation } from 'react-router-dom'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import HistoryInfo from '../../../components/HistoryInfo/HistoryInfo'

import './ArtDbWork3.css'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
function ArtDbWork3() {
  const item = useLocation().state.item
  const [isShowMore, setIsShowMore] = useState(false) // 더보기 열고 닫는 스위치

  const detailItem = [
    {
      info: item.info,
      height: '866rem',
      detail:
        '2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독',
    },
    {
      info: item.info,
      width: '1277rem',
      height: '866rem',
      detail:
        '2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독 2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 등을 수상하며 지금도 명실공히 국내 최정상 뮤지컬 음악감독',
    },
  ]

  var moreItem = []
  for (var i = 0; i < 9; i++) {
    moreItem.push({
      info: 'qart_test/회화/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png',
      author: 'Chang SangEui ',
      title: 'Flower Rain, 2019',
      link: '/artdb/work/1',
    })
  }
  const infoItem = {
    image: item.info,
    author: {
      image: 'qart_test/고미술/KakaoTalk_Photo_2022-07-13-17-18-21.jpeg',
      name: item.author,
      e_name: 'eeeeee',
      email: '00000@naver.com',
    },
    infos: [
      {
        title: '장르',
        content: '판화',
      },
      {
        title: '에디션',
        content: '2/7',
      },
      {
        title: '작품크기',
        content: '70 X 70',
      },
      {
        title: '재료',
        content: 'Giclée print on Canvas',
      },
      {
        title: '제작년도',
        content: '2015',
      },
      {
        title: '소장정보',
        content: 'Hand-signed by the artist on the front side',
      },
      {
        title: 'Q-CoA 유무',
        content: 'Q-CoA 등록',
      },
      {
        title: '기타',
        content:
          '2021 대한민국 대중문화예술상 국무총리 표창, 2019 문화체육관광부 장관 표창 ',
      },
    ],
  }

  var imageItem = []
  for (var i = 0; i < 4; i++) {
    imageItem.push({
      image: item.info,
    })
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
  ]

  return (
    <div className="artdb-work3">
      <Header active="0" colored="black" detail={true} />
      <WorkHeader title_k={item.title} />
      <ArtDetailInfo item={infoItem} />
      <HistoryInfo title={'전시이력'} historyItem={historyItem} />
      <DetailInfo item={detailItem} />
      <TopArrowSlider title={'작가의 다른 작품'} item={moreItem} />
      <Footer />
    </div>
  )
}
export default ArtDbWork3
