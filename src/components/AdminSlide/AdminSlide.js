import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './AdminSlide.css'
function AdminSlide(props) {
  const sliderRef = useRef()
  const PAGE_PER_ITEM = props.rows * props.slidesPerRow
  const TOTAL_PAGE = Math.round(props.items.length / PAGE_PER_ITEM)
  const [dotArr, setDotArr] = useState(new Array(TOTAL_PAGE).fill(0))

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    rows: props.rows,
    slidesPerRow: props.slidesPerRow,
    appendDots: dots => (
      <div>
        <ul className="slick-dots-container">
          {dots.map((item, index) => {
            return (
              <li
                key={index}
                style={
                  dotArr[index]
                    ? { display: 'none' }
                    : { display: 'inline-block' }
                }
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    ),
    customPaging: i => <div className="dots-number">{i + 1}</div>,
    beforeChange: (prev, next) => {
      ShowPaginationNumbers(next + 1)
    },
  }

  const slider_items = imgList => {
    return imgList.map((item, i) => {
      return item
    })
  }

  function ShowPaginationNumbers(currentPage) {
    let startPage
    let endPage
    if (TOTAL_PAGE <= 10) {
      // 전체 페이지가 10보다 작을 경우 모두 보여준다.
      startPage = 1
      endPage = TOTAL_PAGE
    } else if (currentPage + 1 == 1) {
      startPage = TOTAL_PAGE - 10
      endPage = TOTAL_PAGE
    } else {
      // 전체 페이지가 10 보다 많을 경우 시작과 끝을 계산한다.
      if (currentPage <= 5) {
        startPage = 1
        endPage = 10
      } else if (currentPage + 4 >= TOTAL_PAGE) {
        startPage = TOTAL_PAGE - 6
        endPage = TOTAL_PAGE
      } else {
        startPage = currentPage - 5
        endPage = currentPage + 4
      }
    }

    let numArr = new Array(TOTAL_PAGE).fill(1)
    for (var i = startPage - 1; i <= endPage - 1; i++) {
      numArr[i] = false // 시작 - 끝 만 보이도록
    }
    setDotArr(numArr)
  }
  return (
    <section className="container page-slider">
      <div className="page-slider__list">
        <button
          className="slick-first"
          onClick={() => {
            sliderRef.current.slickGoTo(0)
          }}
        >
          <span className="ir_pm">처음으로</span>
        </button>

        <button
          className="slick-last"
          onClick={() => {
            sliderRef.current.slickGoTo(
              Math.ceil(props.items.length / PAGE_PER_ITEM) - 1
            )
          }}
        >
          <span className="ir_pm">끝으로</span>
        </button>
        <Slider ref={sliderRef} {...settings}>
          {slider_items(props.items)}
        </Slider>
      </div>
    </section>
  )
}
export default AdminSlide
