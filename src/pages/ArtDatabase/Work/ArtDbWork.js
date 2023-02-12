import React, { useState } from 'react'
import HeaderSmall from '../../../components/Header/HeaderSmall/HeaderSmall'
import ArtMoveDetail from '../../../components/ArtMoveDetail/ArtMoveDetail'
function ArtDbWork(props) {
  const bannerList2 = [
    {
      info: 'qart_test/미디어/김문정_looseroutside_pespective, 3d모델링모션, 2020.jpg',
      size: '719rem',
      author: '김문정',
      title: 'looseroutside_pespective, 2020',
      link: '/artdb/work3',
    },
    {
      info: 'qart_test/미디어/node00, 내재율의 외적 파동, 2019.jpg',
      size: '475rem',
      author: 'node00',
      title: '내재울의 외적 파동, 2019',
      link: '/artdb/work3',
    },
    {
      info: 'qart_test/미디어/node00, 내재율의 외적 파동2, 2019.jpg',
      size: '430rem',
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
        link: '/',
      },
      {
        title: 'NFT',
        link: '/artdb/work/nft',
      },
    ],
  }
  return (
    <div>
      <HeaderSmall
        moreList={menuList}
        detail={1}
        active={1}
        choice={props.active}
      />
      {props.children}
    </div>
  )
}
export default ArtDbWork
