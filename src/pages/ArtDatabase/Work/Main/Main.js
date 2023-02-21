import React from 'react'
import ArtMoveDetail from '../../../../components/ArtMoveDetail/ArtMoveDetail'
import ArtTopic from '../../../../components/ArtTopic/ArtTopic'
function Main() {
  const bannerList1 = [
    {
      id: 1,
      info: 'qart_test/고미술/작가미상, 나전칠연상, 높이 26.7cm, 너비 24.4cm, 길이 36.7cm, 조선시대.jpg',
      author: '작가미상',
      title: '나전칠연상, 조선시대',
      date: '2010년대',
      link: '/artdb/work',
    },
    {
      id: 2,
      info: 'qart_test/고미술/작가미상, 백자 달항아리, 높이 46cm, 입지름 20.3cm, 조선시대.jpg',
      author: '작가미상',
      title: '백자 달항아리, 조선시대',
      date: '2010년대',
      link: '/artdb/work',
    },
    {
      id: 3,
      info: 'qart_test/고미술/작가미상, 석조나한좌상, 22.2x13.4cm(대좌높이 5.4cm, 머리높이 8.8cm), 19세기.jpg',
      author: '작가미상',
      title: '석조나한좌상, 19세기',
      date: '2010년대',
      link: '/artdb/work',
    },
    {
      id: 4,
      info: 'qart_test/고미술/KakaoTalk_Photo_2022-07-13-17-18-21.jpeg',
      author: 'Kim HoDeuk',
      title: 'Distant Mountain, 2015',
      date: '2010년대',
      link: '/artdb/work',
    },
  ]
  for (var i = 0; i < 100; i++) {
    bannerList1.push({
      id: 1,
      info: 'qart_test/고미술/작가미상, 나전칠연상, 높이 26.7cm, 너비 24.4cm, 길이 36.7cm, 조선시대.jpg',
      author: '작가미상',
      title: '나전칠연상, 조선시대',
      date: '2010년대',
      link: '/artdb/work',
    })
  }
  const bannerList2 = [
    {
      id: 5,
      info: 'qart_test/미디어/김문정_looseroutside_pespective, 3d모델링모션, 2020.jpg',
      author: '김문정',
      title: 'looseroutside_pespective, 2020',
      date: '2010년대',
      link: '/artdb/work',
    },
    {
      id: 6,
      info: 'qart_test/미디어/node00, 내재율의 외적 파동, 2019.jpg',
      author: 'node00',
      title: '내재울의 외적 파동, 2019',
      date: '2010년대',
      link: '/artdb/work',
    },
    {
      id: 7,
      info: 'qart_test/미디어/node00, 내재율의 외적 파동2, 2019.jpg',
      author: 'node00',
      title: '내재울의 외적 파동2, 2019',
      date: '2010년대',
      link: '/artdb/work',
    },
  ]
  for (var i = 0; i < 100; i++) {
    bannerList2.push({
      id: 5,
      info: 'qart_test/미디어/김문정_looseroutside_pespective, 3d모델링모션, 2020.jpg',
      author: '김문정',
      title: 'looseroutside_pespective, 2020',
      link: '/artdb/work',
      date: '2010년대',
    })
  }
  const moreList = [
    '전체(0000)',
    '회화(0000)',
    '판화(0000)',
    '사진(0000)',
    '조각/입체(0000)',
    '미디어(0000)',
  ]
  const detailList = [
    '전체(0000)',
    '서화(0000)',
    '조각(0000)',
    '공예(0000)',
    '기타(0000)',
  ]
  const detailList2 = [
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
      id: 9,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      title: '곰순이, 2010년대',
      date: '2010년대',
      link: '/artdb/work',
    })
  }
  // const topicList = [
  //   {
  //     id: 1,
  //     info: 'qart_test/고미술/작가미상, 나전칠연상, 높이 26.7cm, 너비 24.4cm, 길이 36.7cm, 조선시대.jpg',
  //   },
  //   {
  //     id: 2,
  //     info: 'qart_test/고미술/작가미상, 백자 달항아리, 높이 46cm, 입지름 20.3cm, 조선시대.jpg',
  //   },
  //   {
  //     id: 3,
  //     info: 'qart_test/고미술/작가미상, 석조나한좌상, 22.2x13.4cm(대좌높이 5.4cm, 머리높이 8.8cm), 19세기.jpg',
  //   },
  // ]
  const options01 = ['연도순', '작품명']
  const options02 = ['연도순', '작품명', '작가명']
  return (
    <div>
      <ArtTopic
        title_e={'Focus on'}
        title_k={'오늘의 작품'}
        items={bannerList1}
      />
      <ArtMoveDetail
        title_e={'Antique Art'}
        title_k={'고미술(000)'}
        items={bannerList1}
        represent={3}
        moreList={detailList}
        moreActive={false}
        options={options01}
      />
      <ArtMoveDetail
        title_e={'Modern&Contemporary'}
        title_k={'근현대(000)'}
        items={bannerList2}
        represent={3}
        moreList={detailList2}
        moreActive={false}
        options={options02}
      />
      <div className="art-md-with-header">
        <ArtMoveDetail
          title_e={'by genre'}
          title_k={'유형별'}
          moreList={moreList}
          moreActive={true}
          items={pageItem}
          represent={6}
          options={options02}
        />
      </div>
    </div>
  )
}
export default Main
