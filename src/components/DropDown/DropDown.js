import React, { useEffect, useRef, useState } from 'react'
import './DropDown.css'

function DropDown(props) {
  const [show, setShow] = useState(false)
  const [select, setSelect] = useState(0)
  const el = useRef()

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])
  const handleClickOutside = ({ target }) => {
    if (!show && !el.current.contains(target)) {
      setShow(false)
    }
  }

  const getOptions = () => {
    return props.options.map((option, i) => {
      return (
        <li
          key={i}
          value={i}
          onClick={e => {
            if (select != i) {
              // 자기 자신 선택 아닌 경우
              setSelect(i)
              // 선택 후 닫기

              setShow(false)
            }
          }}
        >
          {option}
        </li>
      )
    })
  }

  return (
    <div ref={el} className="drop-container">
      <div
        className="drop-select"
        onClick={() => {
          if (!props.disabled) setShow(!show)
        }}
      >
        {props.options[select]}
      </div>
      <ul ref={el} className={show ? 'show-drop-list' : 'drop-list'}>
        {getOptions()}
      </ul>
    </div>
  )
}
export default DropDown
