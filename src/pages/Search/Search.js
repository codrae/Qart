import React, { useState } from 'react'
import DropDown from '../../components/DropDown/DropDown'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Search.css'
import SearchResult from './SearchResult'
function Search() {
  const [result, setResult] = useState(1)
  var genre = [
    '전체(000)',
    '고미술(000)',
    '근현대(000)',
    '회화(000)',
    '입체(000)',
  ]
  var filter = ['최신등록순', '작품명순', '작가명순', '제작연도순']
  return (
    <div className="search-page">
      <Header active="0" colored="black" login={false} />
      <section className="search-bar">
        <div className="container">
          <DropDown options={genre} />
          <section className="search__block">
            <input
              type={'text'}
              placeholder={'작가, 작품, 기관을 검색하세요'}
              className="search__block__input"
            />
            <button className="search__block__button">
              <span className="ir_pm">검색</span>
            </button>
          </section>
        </div>
      </section>
      <section className="search-result">
        <div className="container">
          <div className="search-filter">
            <DropDown options={filter} />
          </div>
          {result == 0 ? (
            <div className="no-result">
              <h1>검색 결과가 없습니다</h1>
            </div>
          ) : (
            <SearchResult />
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default Search
