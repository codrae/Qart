import React from 'react'
import { Link } from 'react-router-dom'
import './SearchResult.css'

function SearchResult() {
  var item = []
  for (var i = 0; i < 6; i++) {
    item.push({
      id: 1,
      info: 'qart_test/회화/김동선, 곰순이, 종이에 수묵, 64×48.5cm, 2010년대.JPG',
      author: '김동선',
      author_e: 'Kim dongsun',
      title: 'Distant Mountain',
      created: '2010년대',
      link: '/market/',
    })
  }

  const search_items = imgList => {
    return imgList.map((item, i) => (
      <Link
        to={item.link + item.id}
        state={{
          item: item,
        }}
      >
        <div key={i} className="search-item">
          <img src={require('../../' + item.info)}></img>
          <div className="search-item-info">
            <h3>
              {item.author} {item.author_e}
            </h3>
            <h2>{item.title}</h2>
            <h4>{item.created}</h4>
          </div>
        </div>
      </Link>
    ))
  }
  return <div className="search-result-list">{search_items(item)}</div>
}
export default SearchResult
