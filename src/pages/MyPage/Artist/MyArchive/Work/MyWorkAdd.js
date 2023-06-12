import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DropDown from '../../../../../components/DropDown/DropDown'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import SectionHeader from '../../../../../components/SectionHeader/SectionHeader'
import work from '../../../../../services/myArchive/work/work'
import { setComma, onChangePoints, checkNumber } from '../../../../../hook/utils/comma'
import { useSelector, shallowEqual } from 'react-redux'

import './MyWorkAdd.css'

import readXlsxFile from 'read-excel-file'
import { getDateStr } from '../../../../../hook/utils/getDateStr'
import { checkDate } from '../../../../../hook/utils/validation'
import { checkMainImageSize, checkSubImageSize } from '../../../../../hook/utils/fileSize'


function MyWorkAdd() {

  const navigate = useNavigate();
  const { undefinedList ,timeSetList, rowWorkTypeList, editionList, archiveList, unitList, saleTypeList } = useSelector(v => v.setting.work, shallowEqual)
  const { min, today } = useSelector(v => v.setting.date, shallowEqual)
  const { lang } = useSelector(v => v.setting, shallowEqual)
  const [workTypeList, setWorkList] = useState([])

  React.useEffect(() => {
    const item = [];
    for (let i = 0; i < rowWorkTypeList.length -1; i++) {
      item.push(rowWorkTypeList[i][`${lang}`])
    }
    setWorkList(item)
  }, [rowWorkTypeList])

  const [mainImage, setMainImage] = useState(null)
  const [mainImageShow, setMainImageShow] = useState(null)
  const [subImage, setSubImage] = useState([])
  const [subImageShow, setSubImageShow] = useState([])

  const [koTitle, setKoTitle] = useState('')
  const [enTitle, setEnTitle] = useState('')
  const [timeSet, setTimeSet] = useState()
  const [workType, setWorkType] = useState()
  const [know, setKnow] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [material, setMaterial] = useState('')
  const [unit, setUnit] = useState('cm')
  const [edition, setEdition] = useState('없음')
  const [totalEdition, setTotalEdition] = useState('')
  const [totalIssue, setTotalIssue] = useState('')
  const [vertical, setVertical] = useState('')
  const [horizontal, setHorizontal] = useState('')
  const [width, setWidth] = useState('')
  const [collection, setCollection] = useState('')
  const [detail, setDetail] = useState('')
  const [saleType, setSaleType] = useState('원화 (원)')
  const [price, setPrice] = useState('')

  const [view, setView] = useState('공개')
  const [history, setHistory] = useState([])
  const [lock, setLock] = useState(false)


  React.useEffect(() => {
    if (price !== '') {
      setPrice('')
    }
  }, [saleType])

  const saveImgFile = e => {
    e.preventDefault();

    const fileList = e.target.files
    const file = fileList[fileList.length - 1]

    const check = checkMainImageSize(file.size)
    if(!check) return

    setMainImage(file);
    setMainImageShow(URL.createObjectURL(file));
  }

  const saveSubImgFile = e => {
    e.preventDefault();
    const fileList = e.target.files
    const file = fileList[fileList.length - 1]

    const check = checkSubImageSize(file.size)
    if(!check) return

    setSubImage([...subImage, file]);
    setSubImageShow([...subImageShow, URL.createObjectURL(file)]);
  }

  const deleteSubImgFile = (e, i) => {
    e.preventDefault();
    setSubImage(subImage.filter((img, index) => index !== i))
    setSubImageShow(subImageShow.filter((img, index) => index !== i))
  }

  const excelToList = (e) => {
    e.preventDefault();
    const fileList = e.target.files
    const file = fileList[fileList.length - 1]


    const data = []
    readXlsxFile(file).then((rows) => {
      for(let i = 1; i < rows.length ; i ++){
        if(rows[i][0] !== null){
          const json = {
            exhi_NAME: rows[i][0],
            country: rows[i][2],
            place: rows[i][1],
            type: rows[i][3],
            start_DATE: getDateStr(rows[i][4], '-'),
            end_DATE: getDateStr(rows[i][5], '-'),
            hoster: rows[i][6],
            planner: rows[i][7],
            publisher: rows[i][8],
            note: rows[i][9]
          }
          data.push(json)
        }
      }
      setHistory([...history, ...data])
    })
  }

  const addWork = async () => {

    if (lock) {
      return
    }
    
    if (mainImage === null) {
      alert('대표 이미지를 설정해주세요.')
      return
    }
    if (koTitle === '' || enTitle === '') {
      alert('작품명을 입력해주세요.')
      return
    }


    const checkKnow = know ?? undefinedList[0]
    if(checkKnow === undefinedList[0]){
      if (start === '' || end === '') {
        alert('제작 연도를 선택해주세요.')
        return
      }
    }

    const sendStart = know === undefinedList[0] ? start : undefinedList[1]
    const sendEnd = know === undefinedList[0] ? end : ''
    
    if (material === '') {
      alert('재질을 입력해주세요.')
      return
    }
    if (vertical === '' || horizontal === '') {
      alert('사이즈를 입력해주세요.')
      return
    }

    
    const sendTimeSet = timeSet ?? timeSetList[0]
    const sendTimeSetIndex = timeSetList.indexOf(sendTimeSet) + 1
    
    const sendMyWorkType = workType ?? workTypeList[0]
    const setSendWorkTypePk = rowWorkTypeList[workTypeList.indexOf(sendMyWorkType)].pk
    const sendSaleType = saleType === saleTypeList[0] ? 1 : 2
    const sendView = view === archiveList[0] ? 1 : 0
    const sendSale = 0 // 마켓플레이스 미등록
    const sendEdition = edition === editionList[0]
    let sendTotalEdition = totalEdition
    let sendTotalIssue = totalIssue

    if (sendEdition) {
      sendTotalEdition = '0'
      sendTotalIssue = '0'
    } else {
      if (totalEdition === '') {
        alert('에디션 번호를 입력해주세요.')
        return
      }
      if (totalIssue === '') {
        alert('총 발행 수를 입력해주세요.')
        return
      }
    }

    if (price === '') {
      alert('가격을 입력해주세요.')
      return
    }

    const sendWidth = width === '' ? '0' : width

    // setLock(true)
    const res = await work.addByArtist(mainImage, subImage, koTitle, enTitle, sendTimeSetIndex, setSendWorkTypePk, sendStart, sendEnd, material, unit, vertical, horizontal, sendWidth, collection, detail, sendSaleType, price, sendView, sendSale, history, sendTotalEdition, sendTotalIssue)
    // setLock(false)
    if (!res.resultCode) {
      alert('저장에 실패했습니다.')
      return
    }
    alert('작품 등록이 완료되었습니다.')
    navigate(-1)
  }

  return (
    <div className="ma-work-add">
      <Header login={true} colored="black" detail={true} />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">My Archive</h2>
        </div>
      </nav>
      <SectionHeader title={'Add Work'} />
      <div className="ma-edit-image">
        <div className="container ma-edit-image-container">
          <h2 className="ma-img-tlt">대표 이미지 *</h2>
          <div className="main-image-container">
            <img
              className={mainImage ? 'ma-img-show' : 'ma-img-hide'}
              src={mainImageShow}
              alt="선택 이미지"
            />
            <button
              className={mainImage ? 'edit-photo' : 'edit-photo ma-img-hide'}
              onClick={() => {setMainImage(null); setMainImageShow(null)}}
            ></button>
            <form method="post" encType="multipart/form-data">
              <div className="button">
                <label className="image-button" htmlFor="mainImage"></label>
              </div>
              <input
                type="file"
                id="mainImage"
                name="mainImage"
                accept="image/*"
                onChange={saveImgFile}
                style={{ display: 'none' }}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="ma-edit-image-02">
        <div className="container ma-edit-image-container">
          <div className="ma-img-tlt-container">
          <h2 className="ma-img-tlt">
            서브 이미지
            <span className="ma-img-tlt--sub">*최대 8개까지 가능</span>
          </h2>
          </div>
          <div className="ma-sub-img-container">
          {
            subImage.map((item, i) => {
              return (
                <div className="sub-image-container">
                  <img
                    className={subImage[i] ? 'ma-img-show' : 'ma-img-hide'}
                    src={subImageShow[i]}
                    alt="선택 이미지"
                  />
                  <button
                    className={subImage[i] ? 'edit-photo' : 'edit-photo ma-img-hide'}
                    onClick={e => deleteSubImgFile(e, i)}
                  ></button>
                </div>
              )
            })
          }
          {
            subImage.length < 8 &&
            <div className="sub-image-container">
              <img
                className={subImage[subImage.length] ? 'ma-img-show' : 'ma-img-hide'}
                src={''}
                alt="선택 이미지"
              />
              <form method="post" encType="multipart/form-data">
                <div className="button">
                  <label className="image-button" htmlFor={`subImage_${subImage.length}`}></label>
                </div>
                <input
                  type="file"
                  id={`subImage_${subImage.length}`}
                  name={`subImage_${subImage.length}`}
                  accept="image/*"
                  onChange={saveSubImgFile}
                  style={{ display: 'none' }}
                />
              </form>
            </div>
          }
          </div>
        </div>
      </div>
      <ul className="ma-add-info ma-add-info">
        <div className="container">
          <li>
            <h2>작품명 *</h2>
            <input autoComplete='off' type="text" placeholder='한글' value={koTitle} onChange={e => setKoTitle(e.target.value)}></input>
          </li>
          <li>
            <h2> </h2>
            <input autoComplete='off' type="text" placeholder='ENG' value={enTitle} onChange={e => setEnTitle(e.target.value)}></input>
          </li>
          <li>
            <h2>구분 *</h2>
            <div className="ma-add-date-mb">
              <DropDown options={timeSetList} setValue={setTimeSet} />
            </div>
          </li>
          <li>
            <h2>유형 *</h2>
            <div className="ma-add-date-mb">
              <DropDown options={workTypeList} setValue={setWorkType} />
            </div>
          </li>
          <li>
            <h2>제작 연도 *</h2>
            <div className="ma-add-date-mb">
              <DropDown options={undefinedList} setValue={setKnow} />
            </div>
          </li>
          {know !== undefinedList[1] &&
          <li>
          <h2> </h2>
          <div className="ma-add-date-mb" style={{ flex: 1 }}>
            <input autoComplete='off'
              type="date"
              id="date"
              min={min}
              max={today}
              className="date-input"
              value={start}
              onChange={e => checkDate(setStart, e)}
              required
            ></input>
            <input autoComplete='off'
              type="date"
              id="date"
              min={min}
              max={today}
              className="date-input"
              value={end}
              onChange={e => checkDate(setEnd, e)}
              required
            ></input>
          </div>
        </li>}
          
          <li>
            <h2>재질 *</h2>
            <input autoComplete='off' type="text" value={material} onChange={e => setMaterial(e.target.value)}></input>
          </li>
          <li>
            <h2>단위 *</h2>
            <div className="ma-add-date-mb">
              <DropDown options={unitList} setValue={setUnit} />
            </div>
          </li>
          <li>
            <h2>사이즈 *</h2>
            <div className="ma-info-02-input">
              <input autoComplete='off'
                style={vertical === '' ? { textAlign: 'start' } : { textAlign: 'end' }}
                type="text"
                onKeyPress={checkNumber}
                inputMode="numeric"
                placeholder={unit === unitList[3] ? '시 *' : '높이 *'}
                value={setComma(vertical)}
                onChange={e => setVertical(onChangePoints(e))}></input>
              <span>{unit === unitList[3] ? 'H' : unit}</span>
            </div>
          </li>
          <li>
            <h2> </h2>
            <div className="ma-info-02-input">
              <input autoComplete='off'
                style={horizontal === '' ? { textAlign: 'start' } : { textAlign: 'end' }}
                type="text"
                onKeyPress={checkNumber}
                inputMode="numeric"
                placeholder={unit === unitList[3] ? '분 *' : '너비 *'}
                value={setComma(horizontal)}
                onChange={e => setHorizontal(onChangePoints(e))}></input>
              <span>{unit === unitList[3] ? 'M' : unit}</span>
            </div>
          </li>
          <li>
            <h2> </h2>
            <div className="ma-info-02-input">
              <input autoComplete='off'
                style={width === '' ? { textAlign: 'start' } : { textAlign: 'end' }}
                type="text"
                onKeyPress={checkNumber}
                inputMode="numeric"
                placeholder={unit === unitList[3] ? '초' : '폭'}
                value={setComma(width)}
                onChange={e => setWidth(onChangePoints(e))}></input>
              <span>{unit === unitList[3] ? 'S' : unit}</span>
            </div>
          </li>
          <li>
            <h2>에디션 *</h2>
            <div className="ma-add-date-mb">
              <DropDown options={editionList} setValue={setEdition} />
            </div>
          </li>
          {edition === editionList[1] &&
            <>
              <li>
                <h2>에디션 번호 *</h2>
                <div className="ma-info-02-input">
                  <input autoComplete='off'
                    style={{ textAlign: 'end' }}
                    type="text"
                    onKeyPress={checkNumber}
                    inputMode="numeric"
                    maxLength="5"
                    placeholder='1,000'
                    value={setComma(totalEdition)}
                    onChange={e => setTotalEdition(onChangePoints(e))}
                  ></input>
                  <span>개</span>
                </div>
              </li>
              <li>
                <h2>총 발행 수 *</h2>
                <div className="ma-info-02-input">
                  <input autoComplete='off'
                    style={{ textAlign: 'end' }}
                    type="text"
                    onKeyPress={checkNumber}
                    inputMode="numeric"
                    maxLength="5"
                    placeholder='1,000'
                    value={setComma(totalIssue)}
                    onChange={e => setTotalIssue(onChangePoints(e))}
                  ></input>
                  <span>개</span>
                </div>
              </li>
            </>
          }
          <li>
            <h2>소장처</h2>
            <input autoComplete='off' type="text" value={collection} onChange={e => setCollection(e.target.value)}></input>
          </li>
          <li>
            <h2>상세 설명</h2>
            <textarea placeholder="상세한 설명입니다." value={detail} onChange={e => setDetail(e.target.value)}></textarea>
          </li>
        </div>
      </ul>
      <ul className="ma-add-info ma-add-info-02">
        <div className="container">
          <li>
            <h2>가격 *</h2>
            <div className="ma-add-date-mb">
              <DropDown options={saleTypeList} setValue={setSaleType} />
            </div>
          </li>
          <li>
            <h2> </h2>
            <div className="ma-info-02-input">
              <input autoComplete='off'
                style={{ textAlign: 'end' }}
                type="text"
                onKeyPress={checkNumber}
                inputMode="numeric"
                placeholder="1,000,000"
                value={setComma(price)}
                onChange={e => setPrice(onChangePoints(e))}></input>
              <span>{saleType === saleTypeList[0] ? '원' : 'USD'}</span>
            </div>
          </li>
        </div>
      </ul>
      <ul className="ma-add-info-03 ma-add-info">
        <div className="container">
          <li>
            <h2>아트 아카이브 공개 *</h2>
            <DropDown options={archiveList} setValue={setView} />
          </li>
          <li className="ma-info-03-drop-03">
            <h2>전시이력</h2>
            <div className="ma-add-date-mb">
              <a href='/excel/workExhibitionExcel.xlsx'>
              <DropDown options={['엑셀폼 다운받기']} disabled={true} pointer={true}/>
              </a>
              <label className='excel' htmlFor="excel">
              엑셀 추가하기
              </label>
              <input
                  type="file"
                  id="excel"
                  name="excel"
                  accept=".xls,.xlsx"
                  onChange={excelToList}
                  style={{ display: 'none' }}
                />
            </div>
          </li>
          <li className="history-container">
            <h2></h2>
            <div className="history-list">
            {
              history.map((item, i) => {
                return(
                <div className="history-item" key={i}>
                <h4>{`[${item.type}]${item.exhi_NAME},${item.place}`}</h4>
                <button onClick={() => setHistory(history.filter((item, index) => index !== i))}></button>
              </div>
              )
              })
            }
            </div>
          </li>
        </div>
      </ul>
      <div className="ma-add--button">
        <div className="container">
          <button onClick={() => navigate(-1)}>취소</button>
          <button onClick={() => addWork()}>저장</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default MyWorkAdd
