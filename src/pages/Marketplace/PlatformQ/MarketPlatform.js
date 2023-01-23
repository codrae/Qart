import React from 'react'
import { Link } from 'react-router-dom'
import ArtDetail from '../../../components/ArtDetail/ArtDetail'
import BannerSlide from '../../../components/BannerSlide/BannerSlide'
import './MarketPlatform.css'

function MarketPlatform() {
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

  var item = []
  for (var i = 0; i < 36; i++) {
    item.push({
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      profile:
        'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      name: '60화랑',
      category: '아트',
      link: '.',
    })
  }
  const result = []

  for (var i = 0; i < 36; i++) {
    result.push(
      <div className="slider__item">
        <Link
          to={`${item[i].link}/${item[i].id}`}
          state={{
            item: item[i],
          }}
        >
          <div>
            <img
              className="item-image"
              src={require('../../../' + item[i].info)}
              alt="item"
            ></img>
            <div className="item-info">
              <img
                src={require('../../../' + item[i].profile)}
                alt="item"
              ></img>
              <div>
                <h2>{item[i].name}</h2>
                <h4>{item[i].category}</h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
  return (
    <div className="market-platform">
      <BannerSlide items={info} />
      <div className="market-platform-slider">
        <ArtDetail
          title_e={'All Nodes'}
          title_k={'모든 판매자(000)'}
          rows={4}
          slidersPerRow={3}
          divItem={true}
          items={result}
        />
      </div>
    </div>
  )
}
export default MarketPlatform
