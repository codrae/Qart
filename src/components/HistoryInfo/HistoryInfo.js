import React, { useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import './HistoryInfo.css'

function HistoryInfo(props) {
  const [isShowMore, setIsShowMore] = useState(false) // 더보기 열고 닫는 스위치
  return (
    <section>
      <SectionHeader title="전시 이력"></SectionHeader>
      <ul className="container display-history__list">
        {props.historyItem ? (
          props.historyItem.map((item, i) => {
            return (
              <li key={i}>
                <span className="display-history__item-period">
                  {item.period}
                </span>
                <span className="display-history__item-title">
                  <b>[{item.category}]</b> {item.title}
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
      </ul>
    </section>
  )
}
export default HistoryInfo
