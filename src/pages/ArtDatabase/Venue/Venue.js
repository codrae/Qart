import React, { useState } from 'react'

import SearchSlide from '../../../components/SearchSlide/SearchSlide'
import GalleryInfo from '../../../components/GalleryInfo/GalleryInfo'
import './Venue.css'
import BannerSlide from '../../../components/BannerSlide/BannerSlide'
function Venue() {
  var searchItem = []
  for (var i = 0; i < 90; i++) {
    searchItem.push({
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      name: '기관이름',
      name_e: 'Eng name',
      email: '00000@naver.com',
      link: '/artdb/venue/1',
    })
  }

  const galleryInfo = [
    {
      info: 'assets/gallery_01.png',
      size: 'contain',
      title: 'Marco Fusinato',
      order: 0,
      detail:
        'You could hear the deep droning hum even before the black granite block that housed the Australian pavilion came into view...',
    },
    {
      info: 'qart_test/ȸȭ/KIM TAEHO, Internal Rythem 2005-21, 50x65.1 cm, Acrylic on canvas, 2005.jpg',
      size: 'none',
      title: 'Marco Fusinato',
      order: -1,
      detail:
        'You could hear the deep droning hum even before the black granite block that housed the Australian pavilion came into view...',
    },
    {
      info: 'assets/gallery_02.png',
      size: 'contain',
      title: 'Marco Fusinato',
      order: 0,
      detail:
        'You could hear the deep droning hum even before the black granite block that housed the Australian pavilion came into view...',
    },
  ]

  const info = [
    {
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      title: 'YOSIGO',
      link: '.',
      detail:
        '아날로그의 낭만을 사랑하는 스페인 출신 예술가 요시고. 그가 셔터를 누르는 순간 일상적 풍경에 영화적 숨결이 깃든다.',
    },
    {
      id: 2,
      info: 'qart_test/미디어/김문정_looseroutside_pespective, 3d모델링모션, 2020.jpg',
      title: 'YOSIGO',
      link: '.',
      detail:
        '아날로그의 낭만을 사랑하는 스페인 출신 예술가 요시고. 그가 셔터를 누르는 순간 일상적 풍경에 영화적 숨결이 깃든다.',
    },
    {
      id: 3,
      info: 'qart_test/미디어/김문정_looseroutside_pespective, 3d모델링모션, 2020.jpg',
      title: 'YOSIGO',
      link: '.',
      detail:
        '아날로그의 낭만을 사랑하는 스페인 출신 예술가 요시고. 그가 셔터를 누르는 순간 일상적 풍경에 영화적 숨결이 깃든다.',
    },
  ]
  return (
    <div className="artdb-venue">
      <BannerSlide items={info} />
      <SearchSlide
        title_e={'Venue'}
        title_k={'기관'}
        rows={7}
        slidesPerRow={3}
        items={searchItem}
        breakRows={2}
        breakSlidesPerRow={4}
      />
      <GalleryInfo
        title_e={'Issue +'}
        title_k={'이슈 플러스'}
        items={galleryInfo}
      />
    </div>
  )
}
export default Venue
