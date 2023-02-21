import React from 'react'
import ArtDetail from '../../../../components/ArtDetail/ArtDetail'
import './NftMain.css'

function NftMain() {
  const itemList = [
    {
      id: 1,
      info: 'qart_test/고미술/작가미상, 나전칠연상, 높이 26.7cm, 너비 24.4cm, 길이 36.7cm, 조선시대.jpg',
      author: '작가미상',
      email: '000@naver.com',
      title: '나전칠연상, 조선시대',
      created: '2000.00.00',
      sell: '총 1개중 1개 판매중',
      link: '.',
    },
    {
      id: 2,
      info: 'qart_test/고미술/작가미상, 백자 달항아리, 높이 46cm, 입지름 20.3cm, 조선시대.jpg',
      author: '작가미상',
      email: '000@naver.com',
      title: '백자 달항아리, 조선시대',
      created: '2000.00.00',
      sell: '총 1개중 1개 판매중',
      link: '.',
    },
    {
      id: 3,
      info: 'qart_test/고미술/작가미상, 석조나한좌상, 22.2x13.4cm(대좌높이 5.4cm, 머리높이 8.8cm), 19세기.jpg',
      author: '작가미상',
      email: '000@naver.com',
      title: '석조나한좌상, 19세기',
      created: '2000.00.00',
      sell: '총 1개중 1개 판매중',
      link: '.',
    },
    {
      id: 4,
      info: 'qart_test/고미술/KakaoTalk_Photo_2022-07-13-17-18-21.jpeg',
      author: 'Kim HoDeuk',
      email: '000@naver.com',
      title: 'Distant Mountain, 2015',
      created: '2000.00.00',
      sell: '총 1개중 1개 판매중',
      link: '.',
    },
  ]
  for (var i = 0; i < 50; i++) {
    itemList.push({
      id: 1,
      info: 'qart_test/고미술/작가미상, 나전칠연상, 높이 26.7cm, 너비 24.4cm, 길이 36.7cm, 조선시대.jpg',
      author: '작가미상',
      email: '000@naver.com',
      title: '나전칠연상, 조선시대',
      created: '2000.00.00',
      sell: '총 1개중 1개 판매중',
      link: '.',
    })
  }
  const options = ['최신등록순', '인기순', '작가명순', '작품명순']
  return (
    <section className="nft-main">
      <ArtDetail title_k="NFT(000)" items={itemList} options={options} />
    </section>
  )
}
export default NftMain
