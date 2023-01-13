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
        >
          <img
            src={require('../../' + props.items[0].info)}
            className="art-topic--main"
          ></img>
        </Link>
        <div className="art-topic--sub">
          <Link
            to={`./work/${props.items[1].id}`}
            state={{
              item: props.items[1],
            }}
          >
            <img src={require('../../' + props.items[1].info)}></img>
          </Link>
          <Link
            to={`./work/${props.items[1].id}`}
            state={{
              item: props.items[1],
            }}
          >
            <img src={require('../../' + props.items[2].info)}></img>
          </Link>
        </div>
      </section>
    </section>
  )
}
export default ArtTopic
