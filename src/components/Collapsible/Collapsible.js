import React, { useState } from 'react'
const Collapsible = props => {
  const [open, setOPen] = useState(false)

  const toggle = () => {
    setOPen(!open)
  }
  return (
    <div className="sf-col-item">
      <a className="sf-col-tit" onClick={toggle}>
        {!open && (
          <button className="toggle-btn">
            <span className="ir_pm">열기</span>
          </button>
        )}
        {open && (
          <button className="toggle-btn toggle-btn__close">
            <span className="ir_pm">닫기</span>
          </button>
        )}
        {props.title}
      </a>
      {open && <div className="toggle">{props.children}</div>}
    </div>
  )
}
export default Collapsible
