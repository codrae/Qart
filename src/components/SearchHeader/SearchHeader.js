import React from 'react'
import './SearchHeader.css'
const SectionHeader = props => {
  return (
    <nav className="search" style={!props.active ? { display: 'none' } : {}}>
      <div className="container search__container">
        <h2 className="search__title">{props.title}</h2>
        <section className="search__block">
          <input
            type={'text'}
            placeholder={'작가 이름을 검색해주세요'}
            className="search__block__input"
          />
          <button className="search__block__button">
            <span className="ir_pm">검색</span>
          </button>
        </section>
      </div>
    </nav>
  )
}
export default SectionHeader
