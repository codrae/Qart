import React, { useEffect, useRef, useState } from 'react'
import ModalPortal from '../Modal/ModalPortal'
import './DropDown.css'
import DicModal from '../Modal/DicModal'
import DropModal from '../Modal/DropModal'

function DropDown(props) {
  const [show, setShow] = useState(false)
  const [select, setSelect] = useState(0)
  const el = useRef()

  const changeSelect = e => {
    props.setSelect ? props.setSelect(e) : setSelect(e)
  }
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

  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false)

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true)
    // document.body.style.overflow = 'hidden' // 모달 창 오픈 시 스크롤 불가
  }
  const getOptions = () => {
    return props.options.map((option, i) => {
      return (
        <li
          key={i}
          value={i}
          onClick={e => {
            if (props.select ? props.select != i : select != i) {
              // 자기 자신 선택 아닌 경우
              changeSelect(i)
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
          showModal()
        }}
      >
        {props.options[props.select ? props.select : select]}
      </div>
      <ul ref={el} className={show ? 'show-drop-list' : 'drop-list'}>
        {getOptions()}
      </ul>
      {modalOpen && (
        <ModalPortal>
          <DropModal
            setModalOpen={setModalOpen}
            setFunc={changeSelect}
            select={select}
            options={props.options}
          />
        </ModalPortal>
      )}
    </div>
  )
}
export default DropDown
