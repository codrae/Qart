import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import SectionHeader from '../../../../components/SectionHeader/SectionHeader'
import './AddWorkToExcel.css'

function AddWorkToExcel() {
  const [file, setFile] = useState('')
  const changeFile = e => {
    var fileName = e.target.value
    setFile(fileName)
  }
  return (
    <div className="ma-excel-add">
      <Header login={true} colored="black" />
      <SectionHeader title={'Add Work to Excel'} />
      <div className="ma-excel-content">
        <div className="container">
          <div className="excel-item-01">
            <h2>엑셀 파일 업로드</h2>
            <div class="filebox">
              <label for="file">파일 업로드</label>
              <input type="file" id="file" onChange={changeFile} />
              <input class="upload-name" value={file} readOnly />
            </div>
          </div>
          <div className="excel-item-02">
            <h2>양식 참고사항</h2>
            <div className="excel-info">
              <h3>엑셀 양식 파일.xls</h3>
              <p>
                # 작품 규격 ex) 10x10x10,cm / 10x20,inch / 100x100,pixel /
                1h20m30s <br></br># 제작 연도 ex) 미상 / 2000 / 2000~2001 /
                2000-01-01~2001-01-01 <br></br>( ※ 양식에 맞지 않게 입력할 시
                저장에 실패할 수 있습니다. )
              </p>
            </div>
          </div>
          <div className="ma-add--button">
            <button>취소</button>
            <button>저장</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default AddWorkToExcel
