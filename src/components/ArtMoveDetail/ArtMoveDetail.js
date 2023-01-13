import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import WorkHeader from '../WorkHeader/WorkHeader'
import './ArtMoveDetail.css'

function ArtMoveDetail(props) {
  //console.log(props.items)
  function RepresentingItems(item) {
    const result = []

    for (var i = 0; i < props.represent; i++) {
      result.push(
        <Link
          to={`./work/${item[i].id}`}
          state={{
            item: item[i],
          }}
          className="art-md__list-item"
        >
          <img src={require('../../' + item[i].info)}></img>
          <h3>{item[i].author}</h3>
          <h2>{item[i].title}</h2>
          <h4>{item[i].date}</h4>
        </Link>
      )
    }
    return result
  }
  return (
    <div className="art-md">
      <WorkHeader
        moreList={props.moreList}
        moreActive={props.moreActive}
        title_e={props.title_e}
        title_k={props.title_k}
        move={'./work/detail'}
        items={props.items}
      ></WorkHeader>
      <section className="art-md--content">
        <div className="container">
          <section className="art-md--content__list">
            {RepresentingItems(props.items)}
          </section>
        </div>
      </section>
    </div>
  )
}
export default ArtMoveDetail
