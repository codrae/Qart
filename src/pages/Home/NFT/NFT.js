import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import TopArrowSlider from '../../../components/TopArrowSlider/TopArrowSlider'
import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import './NFT.css'
function NFT() {
  /* 배너 셋팅 */
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 0,
  }
  var item = []
  for (var i = 0; i < 36; i++) {
    item.push({
      id: 1,
      info: 'qart_test/판화/민정기, 묵안리2, 2015.jpg',
      author: '김동선 Kim dongsun',
      title: '곰순이',
      link: '.',
      created: '2010년대',
      sell: '총 1개중 1개 판매중',
    })
  }

  const result = []

  for (var i = 0; i < 36; i++) {
    result.push(
      <Link
        to={`${item[i].link}/${item[i].id}`}
        state={{
          item: item[i],
        }}
        key={i}
      >
        <div key={i} className="art-d-slider__item">
          <img
            className="art-d-item-image"
            src={require('../../../' + item[i].info)}
            //   src={require('../../../../../' + item.info)}
          ></img>
          <h4>{item[i].author}</h4>
          <h3>{item[i].title}</h3>
          <div className="nft-item">
            <p>
              <span className="nft-item-title">제작년도</span>
              <span className="nft-item-created">{item[i].created}</span>
            </p>
            <p>
              <span className="nft-item-title">판매</span>
              <span className="nft-item-sell">{item[i].sell}</span>
            </p>
          </div>
        </div>
      </Link>
    )
  }
  const slider_items = imgList => {
    return imgList.map((r_item, i) => {
      return (
        <Link
          to={`${r_item.link}/${r_item.id}`}
          state={{
            item: r_item,
          }}
          key={i}
        >
          <div className="nft-mb__item">
            <img src={require('../../../' + r_item.info)}></img>
            <h1>{r_item.author}</h1>
            <h2>{r_item.title}</h2>
          </div>
        </Link>
      )
    })
  }
  return (
    <div className="main-nft">
      <TopArrowSlider title={'NFT'} divItem={true} item={result} />
      <div className="main-nft-mb">
        <SectionHeader title={'NFT'}></SectionHeader>
        <div className="main-nft-mb-container">
          <Slider {...settings} className="main-nft-slider">
            {slider_items(item)}
          </Slider>
        </div>
      </div>
    </div>
  )
}
export default NFT
