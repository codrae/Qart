import React, { useRef, useState } from 'react'
import './CalendarModal.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
function CalendarModal({ setModalOpen }) {
  const imgRef = useRef()

  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false)
    //document.body.style.overflow = 'unset' // 모달 창 종료 시 스크롤 가능
  }
  const [value, onChange] = useState(new Date())
  const date = ['일', '월', '화', '수', '목', '금', '토']
  return (
    <div className="calendar-modal">
      <div className="modal-container" onClick={closeModal}>
        <div className="modal-body" onClick={e => e.stopPropagation()}>
          <div className="date-select-layer">
            <Calendar
              calendarType="US"
              onChange={onChange}
              value={value}
              formatDay={(locale, date) =>
                date.toLocaleString('en', { day: 'numeric' })
              }
              nextLabel={<div className="next-icon"></div>}
              prevLabel={<div className="prev-icon"></div>}
              next2Label={null}
              prev2Label={null}
              showNeighboringMonth={false}
            />
          </div>
          <section className="time-slect-layer">
            <button>01:00</button>
            <button>02:00</button>
            <button>03:00</button>
            <button>04:00</button>
            <button>05:00</button>
            <button>06:00</button>
            <button>07:00</button>
            <button>08:00</button>
            <button>09:00</button>
            <button>10:00</button>
            <button>11:00</button>
            <button>12:00</button>
          </section>
          <div className="admin-edit-button">
            <button onClick={closeModal}>취소</button>
            <button onClick={closeModal}>저장</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CalendarModal
