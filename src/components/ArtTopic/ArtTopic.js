import React from 'react'
import { Link } from 'react-router-dom'
import WorkHeader from '../WorkHeader/WorkHeader'
import './ArtTopic.css'

function ArtTopic(props) {
  return (
    <section className="art-topic">
      <WorkHeader title_e={props.title_e} title_k={props.title_k}></WorkHeader>
      <section className="container art-topic-content">
        <Link
          to={`./work/${props.items[0].id}`}
          state={{
            item: props.items[0],
          }}
          className="art-topic-item"
        >
          <img
            src={require('../../' + props.items[0].info)}
            className="art-topic--main"
          ></img>
          {props.hover ? (
            <div className="art-topic__hover">
              <h2 className="art-topic-item--author">
                {props.items[0].author}
              </h2>
              <h2 className="art-topic-item--title">
                {props.items[0].title}, {props.items[0].created}
              </h2>
              <h1 className="art-topic-item--price">{props.items[0].price}</h1>
            </div>
          ) : (
            <></>
          )}
        </Link>
        <div className="art-topic--sub">
          <Link
            to={`./work/${props.items[1].id}`}
            state={{
              item: props.items[1],
            }}
            className="art-topic-item"
          >
            <img src={require('../../' + props.items[1].info)}></img>
            {props.hover ? (
              <div className="art-topic__hover">
                <h2 className="art-topic-item--author">
                  {props.items[1].author}
                </h2>
                <h2 className="art-topic-item--title">
                  {props.items[1].title}, {props.items[1].created}
                </h2>
                <h1 className="art-topic-item--price">
                  {props.items[1].price}
                </h1>
              </div>
            ) : (
              <></>
            )}
          </Link>
          <Link
            to={`./work/${props.items[2].id}`}
            state={{
              item: props.items[2],
            }}
            className="art-topic-item"
          >
            <img src={require('../../' + props.items[2].info)}></img>
            {props.hover ? (
              <div className="art-topic__hover">
                <h2 className="art-topic-item--author">
                  {props.items[2].author}
                </h2>
                <h2 className="art-topic-item--title">
                  {props.items[2].title}, {props.items[2].created}
                </h2>
                <h1 className="art-topic-item--price">
                  {props.items[2].price}
                </h1>
              </div>
            ) : (
              <></>
            )}
          </Link>
        </div>
      </section>
    </section>
  )
}
export default ArtTopic
