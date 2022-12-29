import React from "react";
import "./DicModal.css";
function ModalBasic({ setModalOpen }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset"; // 모달 창 종료 시 스크롤 가능
  };

  return (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div className="modal-item__dic">
          <ul>
            <li>
              <button className="click">ㄱ</button>
            </li>
            <li>
              <button>ㄴ</button>
            </li>
            <li>
              <button>ㄷ</button>
            </li>
            <li>
              <button>ㄹ</button>
            </li>
            <li>
              <button>ㅁ</button>
            </li>
            <li>
              <button>ㅂ</button>
            </li>
            <li>
              <button>ㅅ</button>
            </li>
            <li>
              <button>ㅇ</button>
            </li>
            <li>
              <button>ㅈ</button>
            </li>
            <li>
              <button>ㅊ</button>
            </li>
            <li>
              <button>ㅋ</button>
            </li>
            <li>
              <button>ㅌ</button>
            </li>
            <li>
              <button>ㅍ</button>
            </li>
            <li>
              <button>ㅎ</button>
            </li>
            <li>
              <button>기타</button>
            </li>
          </ul>
          <ul>
            <li>
              <button>A</button>
            </li>
            <li>
              <button>B</button>
            </li>
            <li>
              <button>C</button>
            </li>
            <li>
              <button>D</button>
            </li>
            <li>
              <button>E</button>
            </li>
            <li>
              <button>F</button>
            </li>
            <li>
              <button>G</button>
            </li>
            <li>
              <button>H</button>
            </li>
            <li>
              <button>I</button>
            </li>
            <li>
              <button>J</button>
            </li>
            <li>
              <button>K</button>
            </li>
            <li>
              <button>L</button>
            </li>
            <li>
              <button>M</button>
            </li>
            <li>
              <button>N</button>
            </li>
            <li>
              <button>O</button>
            </li>
            <li>
              <button>P</button>
            </li>
            <li>
              <button>Q</button>
            </li>
            <li>
              <button>R</button>
            </li>
            <li>
              <button>S</button>
            </li>
            <li>
              <button>T</button>
            </li>
            <li>
              <button>U</button>
            </li>
            <li>
              <button>V</button>
            </li>
            <li>
              <button>W</button>
            </li>
            <li>
              <button>X</button>
            </li>
            <li>
              <button>Y</button>
            </li>
            <li>
              <button>Z</button>
            </li>
          </ul>
        </div>
        <button className="modal-close" onClick={closeModal}>
          <span className="ir_pm">카테고리 닫기</span>
        </button>
      </div>
    </div>
  );
}
export default ModalBasic;
