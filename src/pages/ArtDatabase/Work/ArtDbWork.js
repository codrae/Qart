import React, { useState } from 'react'

import RPaddingSlide from '../../../components/RPaddingSlide/RPaddingSlide'
import WorkHeader from '../../../components/WorkHeader/WorkHeader'
import PageSlide from '../../../components/PageSlide/PageSlide'
import './ArtDbWork.css'
import HeaderSmall from '../../../components/Header/HeaderSmall/HeaderSmall'
import ArtMoveDetail from '../../../components/ArtMoveDetail/ArtMoveDetail'
function ArtDbWork() {
  const bannerList1 = [
    {
      info: 'qart_test/고미술/작가미상, 나전칠연상, 높이 26.7cm, 너비 24.4cm, 길이 36.7cm, 조선시대.jpg',
      author: '작가미상',
      title: '나전칠연상, 조선시대',
      link: '/artdb/work3',
    },
    {
      info: 'qart_test/고미술/작가미상, 백자 달항아리, 높이 46cm, 입지름 20.3cm, 조선시대.jpg',
      author: '작가미상',
      title: '백자 달항아리, 조선시대',
      link: '/artdb/work3',
    },
    {
      info: 'qart_test/고미술/작가미상, 석조나한좌상, 22.2x13.4cm(대좌높이 5.4cm, 머리높이 8.8cm), 19세기.jpg',
      author: '작가미상',
      title: '석조나한좌상, 19세기',
      link: '/artdb/work3',
    },
    {
      info: 'qart_test/고미술/KakaoTalk_Photo_2022-07-13-17-18-21.jpeg',
      author: 'Kim HoDeuk',
      title: 'Distant Mountain, 2015',
      link: '/artdb/work3',
    },
  ]
  const bannerList2 = [
    {
      info: 'qart_test/미디어/김문정_looseroutside_pespective, 3d모델링모션, 2020.jpg',
      size: '719px',
      author: '김문정',
      title: 'looseroutside_pespective, 2020',
      link: '/artdb/work3',
    },
    {
      info: 'qart_test/미디어/node00, 내재율의 외적 파동, 2019.jpg',
      size: '475px',
      author: 'node00',
      title: '내재울의 외적 파동, 2019',
      link: '/artdb/work3',
    },
    {
      info: 'qart_test/미디어/node00, 내재율의 외적 파동2, 2019.jpg',
      size: '430px',
      author: 'node00',
      title: '내재울의 외적 파동2, 2019',
      link: '/artdb/work3',
    },
  ]

  const moreList = [
    '전체(0000)',
    '회화(0000)',
    '판화(0000)',
    '사진(0000)',
    '조각/입체(0000)',
    '미디어(0000)',
  ]

  var pageItem = []
  for (var i = 0; i < 36; i++) {
    pageItem.push({
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      title: '곰순이, 2010년대',
    })
  }
  const menuList = {
    menu: [
      {
        title: 'Art Work',
        link: '/artdb',
      },
      {
        title: 'NFT',
        link: '/artdb/work/nft',
      },
    ],
  }
  return (
    <div>
      <HeaderSmall moreList={menuList} detail={1} active={0} />
      <ArtMoveDetail
        title_e={'Antique Art'}
        title_k={'고미술(000)'}
        items={bannerList1}
        represent={3}
      />
      <ArtMoveDetail
        title_e={'Modern&Contemporary'}
        title_k={'근현대'}
        items={bannerList2}
        represent={3}
      />
      <ArtMoveDetail
        title_e={'by genre'}
        title_k={'유형별'}
        moreList={moreList}
        items={pageItem}
        represent={6}
      />
    </div>
  )
}
export default ArtDbWork
