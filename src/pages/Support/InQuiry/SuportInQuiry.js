import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderSmall from '../../../components/Header/HeaderSmall/HeaderSmall'
import './SupportInQuiry.css'

function SupportInQuiry() {
  const [choice, setChoice] = useState(0)
  const moreList = {
    menu: [
      {
        title: 'Art Database',
      },
      {
        title: 'Q-CoA',
      },
      {
        title: 'NFT',
      },
      {
        title: 'Use',
      },
      {
        title: 'Etc.',
      },
    ],
  }
  return (
    <div className="support-inq">
      <HeaderSmall
        moreList={moreList}
        active={true}
        choice={choice}
        setMenu={setChoice}
      />
      <div className="support-inq-content">
        <div className="container">
          <ul>
            <li>
              <h2>E-mail</h2>
              <input type={'text'}></input>
            </li>
            <li>
              <h2>Title</h2>
              <input type={'text'}></input>
            </li>
            <li>
              <h2>Inquiries</h2>
              <textarea></textarea>
            </li>
          </ul>
          <Link to={'.'} className="si-admit">
            <h1>Agree and contact</h1>
            <span className="si-admit-icon"></span>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default SupportInQuiry
