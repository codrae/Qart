import React, { useEffect, useRef, useState } from 'react'
import DropDown from '../../../../../components/DropDown/DropDown'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import HeaderSmall from '../../../../../components/Header/HeaderSmall/HeaderSmall'
import CheckModal from '../../../../../components/Modal/CheckModal'
import HistoryModal from '../../../../../components/Modal/HistoryModal'
import ModalPortal from '../../../../../components/Modal/ModalPortal'
import SectionHeader from '../../../../../components/SectionHeader/SectionHeader'
import './MyWorkAdd.css'
import './MyWorkEdit.css'

function MyWorkEdit() {
  const [imgFile, setImgFile] = useState('')
  const [subImgFile, setSubImgFile] = useState('')
  const imgRef = useRef()
  const subImgRef = useRef()
  const [file, setFile] = useState('')

  const countryList = [
    'Korea, Republic of',
    'Korea, Republic of',
    'Korea, Republic of',
  ]
  const datesList = ['Unknown', 'Unknown', 'Unknown']
  const typeList = ['개인전', '단체전', '아트페어', '기타']
  const archiveList = ['공개', '비공개']

  const archiveList2 = []
  for (var i = 0; i < 30; i++) {
    archiveList2.push('숲속에서-리움미술관 /  2000-00-00')
  }
  const marketList = ['판매하기', '판매종료']
  const saveImgFile = () => {
    const file = imgRef.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImgFile(reader.result)
    }
  }
  const saveSubImgFile = () => {
    const file = subImgRef.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setSubImgFile(reader.result)
    }
  }
  const changeFile = e => {
    var fileName = e.target.value
    setFile(fileName)
  }
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false)

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true)
    document.body.style.overflow = 'hidden' // 모달 창 오픈 시 스크롤 불가
  }
  return (
    <div className="ma-work-edit ma-work-add">
      <Header login={true} colored="black" />
      <SectionHeader title={'Add Work'} />
      <div className="ma-edit-image">
        <div className="container ma-edit-image-container">
          <h2 className="ma-img-tlt">대표 이미지</h2>
          <img
            className={imgFile ? 'ma-img-show' : 'ma-img-hide'}
            src={imgFile}
            alt="선택 이미지"
          />
          <button
            className={imgFile ? 'edit-photo' : 'edit-photo ma-img-hide'}
            onClick={() => setImgFile('')}
          ></button>
          <form method="post" enctype="multipart/form-data">
            <div className="button">
              <label className="image-button" for="chooseFile"></label>
            </div>
            <input
              type="file"
              id="chooseFile"
              name="chooseFile"
              accept="image/*"
              onChange={saveImgFile}
              ref={imgRef}
            />
          </form>
        </div>
      </div>
      <div className="ma-edit-image-02">
        <div className="container ma-edit-image-container">
          <h2 className="ma-img-tlt">서브 이미지</h2>
          <div className="sub-image-container">
            <img
              className={subImgFile ? 'ma-img-show' : 'ma-img-hide'}
              src={subImgFile}
              alt="선택 이미지"
            />
            <button
              className={subImgFile ? 'edit-photo' : 'edit-photo ma-img-hide'}
              onClick={() => setSubImgFile('')}
            ></button>
            <form method="post" enctype="multipart/form-data">
              <div className="button">
                <label className="image-button" for="chooseFile-02"></label>
              </div>
              <input
                type="file"
                id="chooseFile-02"
                name="chooseFile-02"
                accept="image/*"
                onChange={saveSubImgFile}
                ref={subImgRef}
              />
            </form>
          </div>
          <div className="sub-image-container">
            <img
              className={subImgFile ? 'ma-img-show' : 'ma-img-hide'}
              src={subImgFile}
              alt="선택 이미지"
            />
            <button
              className={subImgFile ? 'edit-photo' : 'edit-photo ma-img-hide'}
              onClick={() => setSubImgFile('')}
            ></button>
            <form method="post" enctype="multipart/form-data">
              <div className="button">
                <label className="image-button" for="chooseFile-03"></label>
              </div>
              <input
                type="file"
                id="chooseFile-03"
                name="chooseFile-03"
                accept="image/*"
                onChange={saveSubImgFile}
                ref={subImgRef}
              />
            </form>
          </div>
          <div className="sub-image-container">
            <img
              className={subImgFile ? 'ma-img-show' : 'ma-img-hide'}
              src={subImgFile}
              alt="선택 이미지"
            />
            <button
              className={subImgFile ? 'edit-photo' : 'edit-photo ma-img-hide'}
              onClick={() => setSubImgFile('')}
            ></button>
            <form method="post" enctype="multipart/form-data">
              <div className="button">
                <label className="image-button" for="chooseFile-04"></label>
              </div>
              <input
                type="file"
                id="chooseFile-04"
                name="chooseFile-04"
                accept="image/*"
                onChange={saveSubImgFile}
                ref={subImgRef}
              />
            </form>
          </div>
          <div className="sub-image-container">
            <img
              className={subImgFile ? 'ma-img-show' : 'ma-img-hide'}
              src={subImgFile}
              alt="선택 이미지"
            />
            <button
              className={subImgFile ? 'edit-photo' : 'edit-photo ma-img-hide'}
              onClick={() => setSubImgFile('')}
            ></button>
            <form method="post" enctype="multipart/form-data">
              <div className="button">
                <label className="image-button" for="chooseFile-05"></label>
              </div>
              <input
                type="file"
                id="chooseFile-05"
                name="chooseFile-05"
                accept="image/*"
                onChange={saveSubImgFile}
                ref={subImgRef}
              />
            </form>
          </div>
          <div className="sub-image-container">
            <img
              className={subImgFile ? 'ma-img-show' : 'ma-img-hide'}
              src={subImgFile}
              alt="선택 이미지"
            />
            <button
              className={subImgFile ? 'edit-photo' : 'edit-photo ma-img-hide'}
              onClick={() => setSubImgFile('')}
            ></button>
            <form method="post" enctype="multipart/form-data">
              <div className="button">
                <label className="image-button" for="chooseFile-06"></label>
              </div>
              <input
                type="file"
                id="chooseFile-06"
                name="chooseFile-06"
                accept="image/*"
                onChange={saveSubImgFile}
                ref={subImgRef}
              />
            </form>
          </div>
        </div>
      </div>
      <ul className="ma-add-info ma-add-info-01">
        <div className="container">
          <li>
            <h2>재질</h2>
            <input type="text"></input>
          </li>
          <li>
            <h2>Dates</h2>
            <DropDown options={datesList} />
            <input
              type="date"
              id="date"
              className="date-input"
              data-placeholder="YYYY.MM.DD"
              pattern="(?:19|20)\[0-9\]{2}.(?:(?:0\[1-9\]|1\[0-2\]).(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
              // value={toStringByFormatting(new Date())}
              required
            ></input>
          </li>
          <li>
            <h2>소장처</h2>
            <input type="text"></input>
          </li>
          <li>
            <h2>상세 설명</h2>
            <textarea placeholder="상세한 설명입니다."></textarea>
          </li>
        </div>
      </ul>
      <ul className="ma-add-info ma-add-info-02">
        <div className="container">
          <li>
            <h2>가격</h2>
            <div className="ma-info-02-input">
              <input type="text" placeholder="원화"></input>
              <span>원</span>
            </div>
          </li>
          <li>
            <h2></h2>
            <div className="ma-info-02-input">
              <input type="text" placeholder="원화"></input>
              <span>$</span>
            </div>
          </li>
        </div>
      </ul>
      <ul className="ma-add-info-03 ma-add-info">
        <div className="container">
          <li>
            <h2>아트 아카이브 공개</h2>
            <DropDown options={archiveList} />
          </li>
          <li>
            <h2>온라인마켓플레이스</h2>
            <DropDown options={marketList} />
          </li>
          <li>
            <h2>Q-CoA</h2>
            <div class="filebox">
              <label for="file">인장 업로드</label>
              <input type="file" id="file" onChange={changeFile} />
              <input class="upload-name" value={file} readOnly />
            </div>
          </li>
          <li>
            <h2>NFT 전환</h2>
            <div className="button-container">
              <button>등록하기</button>
            </div>
          </li>
          <li className="ma-info-03-drop-03">
            <h2>전시이력</h2>
            <DropDown options={archiveList2} />
            <button onClick={setModalOpen}>직접입력</button>
            {modalOpen && (
              <ModalPortal>
                <HistoryModal setModalOpen={setModalOpen} />
              </ModalPortal>
            )}
          </li>
          <li className="history-container">
            <h2></h2>
            <div className="history-list">
              <div className="history-item">
                <h4>{archiveList2[0]}</h4>
                <button></button>
              </div>
              <div className="history-item">
                <h4>{archiveList2[0]}</h4>
                <button></button>
              </div>
              <div className="history-item">
                <h4>{archiveList2[0]}</h4>
                <button></button>
              </div>
              <div className="history-item">
                <h4>{archiveList2[0]}</h4>
                <button></button>
              </div>
              <div className="history-item">
                <h4>{archiveList2[0]}</h4>
                <button></button>
              </div>
            </div>
          </li>
        </div>
      </ul>
      <div className="ma-add--button">
        <div className="container">
          <button>취소</button>
          <button>저장</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default MyWorkEdit
