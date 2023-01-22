import React from 'react'

import './ArtDbArtist.css'
import BigTopArrow from '../../../components/TopArrowSlider/BigTopArrow/BigTopArrow'
import SearchSlide from '../../../components/SearchSlide/SearchSlide'
import GalleryInfo from '../../../components/GalleryInfo/GalleryInfo'
import TopArrowSlider from '../../../components/TopArrowSlider/TopArrowSlider'
function ArtDbArtist() {
  const bannerList = [
    {
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      title: '곰순이, 2010년대',
      link: '/artdb/artist',
      date: '2010년대',
    },
    {
      id: 2,
      info: 'qart_test/판화/민정기, 묵안리, 2015.jpg',
      author: '민정기',
      title: '묵안리2, 2015',
      link: '/artdb/artist',
      date: '2010년대',
    },
    {
      id: 3,
      info: 'qart_test/회화/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png',
      author: 'Chang SangEui',
      title: 'Flower Rain, 2019',
      link: '/artdb/artist',
      date: '2010년대',
    },
    {
      id: 4,
      info: 'qart_test/회화/Kim HoDeuk, Distant Mountain3, 161 × 112 cm, Acrylic on canvas, 2015.png',
      author: 'Kim HoDeuk',
      title: 'Distant Mountain, 2015',
      link: '/artdb/artist',
      date: '2010년대',
    },
  ]
  var searchItem = []
  for (var i = 0; i < 90; i++) {
    searchItem.push({
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      author_e: 'Kim dongsun',
      link: '/artdb/artist',
      email: '00000@naver.com',
    })
  }

  const galleryInfo = [
    {
      info: 'assets/gallery_01.png',
      title: 'Marco Fusinato',
      order: 0,
      detail:
        'You could hear the deep droning hum even before the black granite block that housed the Australian pavilion came into view...',
    },
    {
      info: 'assets/gallery_02.png',
      title: 'Marco Fusinato',
      order: -1,
      detail:
        'You could hear the deep droning hum even before the black granite block that housed the Australian pavilion came into view...',
    },
    {
      info: 'assets/gallery_02.png',
      title: 'Marco Fusinato',
      order: 0,
      detail:
        'You could hear the deep droning hum even before the black granite block that housed the Australian pavilion came into view...',
    },
  ]

  return (
    <div>
      <BigTopArrow
        title_e={'Today’s Artists'}
        title_k={'오늘의 작가'}
        items={bannerList}
      />
      <SearchSlide
        title_e={'Discover Artist'}
        title_k={'작가 탐방하기'}
        rows={3}
        slidesPerRow={5}
        items={searchItem}
      />
      <GalleryInfo title_e={'News On'} title_k={'새소식'} items={galleryInfo} />
    </div>
  )
}
export default ArtDbArtist
