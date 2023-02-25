import React, { useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import './HistoryInfo.css'

function HistoryInfo(props) {
  const [isShowMore, setIsShowMore] = useState(false) // 더보기 열고 닫는 스위치
  const [menu, setMenu] = useState(0)
  return (
    <section>
      <SectionHeader
        title={props.title}
        moreList={props.moreList}
        setMenu={setMenu}
        active={menu}
      ></SectionHeader>
      <ul className="display-history__list">
        <div className="container">
          {props.historyItem ? (
            props.historyItem[menu].map((item, i) => {
              return item.divItem ? (
                item.divItem
              ) : (
                <li key={i}>
                  <span className="display-history__item-period">
                    {item.period}
                  </span>
                  <span className="display-history__item-category">
                    [{item.category}]
                  </span>
                  <span className="display-history__item-title">
                    {item.title}
                  </span>
                </li>
              )
            })
          ) : (
            <></>
          )}
          <button
            className="display-history__more"
            onClick={() => setIsShowMore(!isShowMore)}
          >
            <p>
              <span>더보기</span>
              <span className="more-arrow ir_pm">더보기버튼</span>
            </p>
          </button>
        </div>
      </ul>
    </section>
  )
}
export default HistoryInfo
