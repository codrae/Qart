import React, { useContext, useState } from 'react'
import DropDown from '../../../../../components/DropDown/DropDown'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import SectionHeader from '../../../../../components/SectionHeader/SectionHeader'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import { setComma, onChangePoints, checkNumber } from '../../../../../hook/utils/comma'
import './MyWorkAdd.css'
import './MyWorkEdit.css'

import work from '../../../../../services/myArchive/work/work'
import { workMainImage, workSubImage } from '../../../../../services/imageRoute'


import readXlsxFile from 'read-excel-file'
import { getDateStr, setBidTime } from '../../../../../hook/utils/getDateStr'
import { checkDate, emailCheck } from '../../../../../hook/utils/validation'
import ModalPortal from '../../../../../components/Modal/ModalPortal'
import PinModal from '../../../../../components/Modal/PinModal'
import market from '../../../../../services/public/market/market'
import { WalletState } from '../../../../../context/walletStateProvider'
import metamask from '../../../../../services/web3/metamask'
import { checkMainImageSize, checkSubImageSize } from '../../../../../hook/utils/fileSize'
import trade from '../../../../../services/myArchive/work/trade'
import { LoadingState } from '../../../../../context/loadingStateProvider'


function MyWorkEdit() {

  const walletState = useContext(WalletState);
  const loadingState = React.useContext(LoadingState);

  const { workId } = useParams();
  const navigate = useNavigate();
  const { undefinedList, timeSetList, rowWorkTypeList, marketList, editionList, archiveList, unitList, saleTypeList, exhibitList } = useSelector(v => v.setting.work, shallowEqual)
  const { min, today } = useSelector(v => v.setting.date, shallowEqual)
  const { lang } = useSelector(v => v.setting, shallowEqual)
  const { artist } = useSelector(v => v.auth, shallowEqual)
  const [workTypeList, setWorkTypeList] = useState([])

  
  const [offLinePinModal, setOffLinePinModal] = useState(false)
  const [dEmail, setDEmail] = useState('')
  const [data, setData] = useState(null);
  
  const [newPinModal, setNewPinModal] = useState(false);
  const [newPin, setNewPin] = useState('')
  React.useEffect(() => {
    if(data === null) return;

    const checkPin = async() => {
      const res = await trade.sell.checkPin(data.unique_KEY)
      setNewPinModal(res.data)
    }

    checkPin()
  },[data])

  React.useEffect(() => {
    const item = [];
    for (let i = 0; i < rowWorkTypeList.length - 1; i++) {
      item.push(rowWorkTypeList[i][`${lang}`])
    }
    setWorkTypeList(item)
  }, [rowWorkTypeList])

  const [mainImage, setMainImage] = useState(null)
  const [mainImageShow, setMainImageShow] = useState(null)
  const [subImage, setSubImage] = useState([])
  const [subImageShow, setSubImageShow] = useState([])
  const [newSubImage, setNewSubImage] = useState([])
  const [oldSubImage, setOldSubImage] = useState([])

  const [koTitle, setKoTitle] = useState('')
  const [enTitle, setEnTitle] = useState('')
  const [timeSet, setTimeSet] = useState()
  const [workType, setWorkType] = useState()
  const [know, setKnow] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [material, setMaterial] = useState('')
  const [unit, setUnit] = useState('')
  const [edition, setEdition] = useState('')
  const [totalEdition, setTotalEdition] = useState('')
  const [totalIssue, setTotalIssue] = useState('')
  const [vertical, setVertical] = useState('')
  const [horizontal, setHorizontal] = useState('')
  const [width, setWidth] = useState('')
  const [collection, setCollection] = useState('')
  const [detail, setDetail] = useState('')
  const [saleType, setSaleType] = useState('')
  const [price, setPrice] = useState('')
  const [view, setView] = useState('')
  const [sale, setSale] = useState('')
  const [history, setHistory] = useState([])
  const [lock, setLock] = useState(false)
  const [coa, setCoa] = useState(false)

  const [bidStart, setBidStart] = useState('')
  const [bidEnd, setBidEnd] = useState('')

  

  React.useEffect(() => {
    getDetail(workId)
  }, [workId])

  const getDetail = async (pk) => {
    const res = await work.getDetail(pk)
    setData(res.work)
  }

  React.useEffect(() => {
    if (data === null) {
      return
    }
    setMainImage(`${workMainImage}/${data.image}`)
    setMainImageShow(`${workMainImage}/${data.image}`)


    const sub = []
    for (let i = 0; i < data.sub_IMAGE.length; i++) {
      sub.push(`${workSubImage}/${data.sub_IMAGE[i].image}`)
    }
    setSubImage(sub)
    setSubImageShow(sub)
    setKoTitle(data.title)
    setEnTitle(data.eng_TITLE)
    setWorkType(data.date_TYPE)
    setWorkType(data.work_TYPE)


    if (data.start_CREATE === undefinedList[1]) {
      setKnow(undefinedList[1])
    } else {
      setKnow(undefinedList[0])
    }

    setStart(data.start_CREATE)
    setEnd(data.end_CREATE)

    setMaterial(data.material)
    setUnit(data.unit)
    setEdition(data.edition === 0 ? '없음' : '있음')
    setTotalEdition(data.edition)
    setTotalIssue(data.edition_TOTAL)
    setVertical(data.size_X)
    setHorizontal(data.size_Y)
    setWidth(data.size_W === 0 ? '' : data.size_W)
    setCollection(data.collection)
    setDetail(data.detail_NOTE)
    setSaleType(data.price_UNIT === 1 ? '원화 (원)' : 'Dollar ($)')
    setPrice(data.price)
    setView(data.view === 0 ? '비공개' : '공개')
    setSale(marketList[data.market])
    setCoa(data.coa === 'true')
    setHistory(data.exhibit_HISTORY)

    if (data.market === 2) {
      bidData()
    }
  }, [data])

  const bidData = async () => {
    const res = await market.getWorkBid(workId)
    setBidStart(setBidTime(res.auction.start_TIME))
    setBidEnd(setBidTime(res.auction.end_TIME))
  }

  React.useEffect(() => {
    if (price !== '' && price !== data.price) {
      setPrice('')
    }
  }, [saleType])

  const saveImgFile = e => {
    e.preventDefault();
    const fileList = e.target.files
    const file = fileList[fileList.length - 1]

    const check = checkMainImageSize(file.size)
    if (!check) return

    setMainImage(file);
    setMainImageShow(URL.createObjectURL(file));
  }

  const saveSubImgFile = e => {
    e.preventDefault();
    const fileList = e.target.files
    const file = fileList[fileList.length - 1]

    const check = checkSubImageSize(file.size)
    if (!check) return

    setSubImage([...subImage, file]);
    setSubImageShow([...subImageShow, URL.createObjectURL(file)]);
    // 새로운 서브 이미지
    setNewSubImage([...newSubImage, file]);
  }

  const deleteSubImgFile = (e, i) => {
    e.preventDefault();
    setSubImage(subImage.filter((img, index) => index !== i))
    setSubImageShow(subImageShow.filter((img, index) => index !== i))
    // 삭제할 서브 이미지
    setOldSubImage([...oldSubImage, subImageShow[i].toString().replace(`${workSubImage}/`, '')])
  }

  const excelToList = (e) => {
    e.preventDefault();
    const fileList = e.target.files
    const file = fileList[fileList.length - 1]


    const data = []
    readXlsxFile(file).then((rows) => {
      for (let i = 1; i < rows.length; i++) {
        if (rows[i][0] !== null) {
          const json = {
            exhi_NAME: rows[i][0],
            place: rows[i][1],
            country: rows[i][2],
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



  const editWork = async () => {
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
    if (know === undefinedList[0]) {
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
    const res = await work.editByArtist(data.unique_KEY, `${workMainImage}/${data.image}` === mainImage ? '' : mainImage, newSubImage, oldSubImage, koTitle, enTitle, sendTimeSetIndex, setSendWorkTypePk, sendStart, sendEnd, material, unit, vertical, horizontal, sendWidth, collection, detail, sendSaleType, price, sendView, sendSale, history, sendTotalEdition, sendTotalIssue)
    // setLock(false)
    if (!res.resultCode) {
      alert('수정에 실패했습니다.')
      return
    }
    alert('수정이 완료되었습니다.')
    navigate(-1)
  }


  // const checkRegister = () => {
  //   if (artist.status !== 2) {
  //     alert('e-KYC 인증이 필요합니다.');
  //     return
  //   }
  //   // TODO
  //   // showPinModal()
  //   marketRegister()
  // }



  // const marketRegister = async () => {
  //   // const checkWorkPassword = await scan.lend1()

  //   let change
  //   if (data.market === 0) {
  //     // 판매 등록
  //     change = await market.fixWork(data.unique_KEY, data.view, data.market, price, saleTypeList.indexOf(saleType) + 1)
  //   } else {
  //     // 판매 중지
  //     change = await market.fixWork(data.unique_KEY, data.view, data.market, data.price, data.price_UNIT)
  //   }

  //   if (!change.resultCode) return

  //   const res = await market.register(workId, myPin);
  //   if (!res.resultCode) return

  //   alert(data.market === 0 ? '마켓플레이스에 등록되었습니다.' : '판매중지되었습니다.')
  //   navigate(-1)
  // }

    
  const register = async () => {

    if (marketList.indexOf(sale) === 2) {
      if (bidStart === '' || bidEnd === '') {
        alert('경매시간을 입력해주세요.')
        return
      }
    }

    const setMySale = marketList.indexOf(sale) === 3 ? data.market : marketList.indexOf(sale)
    const res = await market.fixWork(data.unique_KEY, archiveList.indexOf(view), setMySale, price, saleTypeList.indexOf(saleType) + 1)

    if (!res.resultCode) return

    if (marketList.indexOf(sale) === 2) {
      const toTimeStamp = (str) => {
        const date = new Date(str);
        const timestamp = date.getTime();
        return timestamp.toString()
      }
      const bidRes = await market.setWorkBid(data.pk, toTimeStamp(bidStart), toTimeStamp(bidEnd), price)
      if (!bidRes.resultCode) return
      alert('경매등록이 완료되었습니다.')
    } else {
      alert('수정이 완료되었습니다.')
    }
    navigate(-1)
  }

  const offLindSale = async(pin) => {
    if(!emailCheck(dEmail)){
      alert('정확한 이메일을 입력해주세요.')
      return
    }
    loadingState.setText('소유권을 이전중입니다.\n잠시만 기다려주세요.')
    loadingState.setOpen(true)
    const res = await trade.sell.offlineSell(dEmail, data.unique_KEY, price, pin)
    loadingState.setOpen(false)
    loadingState.setText('')
    if(!res.data){
      alert('관리자에게 문의해주세요.')
      return
    }
    alert('오프라인 판매가 완료되었습니다.')
    navigate(-1)
  }

  const resetNewPin = async(pin) => {
    loadingState.setText('간편패스워드 설정중입니다.\n잠시만 기다려주세요.')
    loadingState.setOpen(true)
    const res = await trade.sell.registerPin(data.pk, data.unique_KEY, pin)
    if(!res.data){
      alert('관리자에게 문의해주세요.')
      return
    }
    alert('간편패스워드 설정이 완료되었습니다.')
    loadingState.setOpen(false)
    loadingState.setText('')
  }

  return (
    <>
    {
      newPinModal && 
      <ModalPortal>
        <PinModal
                  time={2}
                  title={'간편패스워드 초기화가 필요합니다.\n사용하실 간편패스워드를 입력해주세요.'}
                  // subTitle={'간편패스워드 초기화가 필요합니다.\n사용하실 간편패스워드를 입력해주세요.'}
                  setModalOpen={setNewPinModal}
                  setMyPin={setNewPin}
                  afterAction={true}
                  action={resetNewPin}
                  />
      </ModalPortal>
    }
      <div className="ma-work-add">
        <Header login={true} colored="black" detail={true} />
        <nav className="search">
          <div className="container search__container">
            <h2 className="search__title">My Archive</h2>
          </div>
        </nav>
        <SectionHeader title={'Edit Work'} />
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
                className={coa ? 'edit-photo ma-img-hide' : mainImage ? 'edit-photo' : 'edit-photo ma-img-hide'}
                onClick={() => { setMainImage(null); setMainImageShow(null) }}
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
                  <div className="sub-image-container" key={i}>
                    <img
                      className={subImage[i] ? 'ma-img-show' : 'ma-img-hide'}
                      src={subImageShow[i]}
                      alt="선택 이미지"
                    />
                    <button
                      className={coa ? 'edit-photo ma-img-hide' : subImage[i] ? 'edit-photo' : 'edit-photo ma-img-hide'}
                      onClick={e => deleteSubImgFile(e, i)}
                    ></button>
                  </div>
                )
              })
            }
            {coa ? <></> :
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
              <input autoComplete='off' type="text" placeholder='한글' disabled={coa} value={koTitle} onChange={e => setKoTitle(e.target.value)}></input>
            </li>
            <li>
              <h2> </h2>
              <input autoComplete='off' type="text" placeholder='ENG' disabled={coa} value={enTitle} onChange={e => setEnTitle(e.target.value)}></input>
            </li>
            <li>
              <h2>구분 *</h2>
              <div className="ma-add-date-mb">
                <DropDown options={timeSetList} disabled={coa} select={timeSet - 1} setValue={setTimeSet} />
              </div>
            </li>
            <li>
              <h2>유형 *</h2>
              <div className="ma-add-date-mb">
                <DropDown options={workTypeList} disabled={coa} select={workTypeList.indexOf(workType)} setValue={setWorkType} />
              </div>
            </li>
            <li>
              <h2>제작 연도 *</h2>
              <div className="ma-add-date-mb">
                <DropDown options={undefinedList} disabled={coa} select={undefinedList.indexOf(know)} setValue={setKnow} />
              </div>
            </li>
            {know !== undefinedList[1] &&
              <li>
                <h2></h2>
                <div className="ma-add-date-mb" style={{ flex: 1 }}>
                  <input autoComplete='off'
                    disabled={coa}
                    type="date"
                    id="date"
                    min={min}
                    max={today}
                    className="date-input"
                    value={start}
                    onChange={e => checkDate(setStart, e)}
                  ></input>
                  <input
                    disabled={coa}
                    autoComplete='off'
                    type="date"
                    id="date"
                    min={min}
                    max={today}
                    className="date-input"
                    value={end}
                    onChange={e => checkDate(setEnd, e)}
                  ></input>
                </div>
              </li>
            }
            <li>
              <h2>재질 *</h2>
              <input autoComplete='off' type="text" value={material} disabled={coa} onChange={e => setMaterial(e.target.value)}></input>
            </li>
            <li>
              <h2>단위 *</h2>
              <div className="ma-add-date-mb">
                <DropDown options={unitList} disabled={coa} select={unitList.indexOf(unit)} setValue={setUnit} />
              </div>
            </li>
            <li>
              <h2>사이즈 *</h2>
              <div className="ma-info-02-input">
                <input
                  disabled={coa}
                  autoComplete='off'
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
                <input
                  disabled={coa}
                  autoComplete='off'
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
                <input
                  disabled={coa}
                  autoComplete='off'
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
                <DropDown disabled={coa} options={editionList} select={editionList.indexOf(edition)} setValue={setEdition} />
              </div>
            </li>
            {edition === editionList[1] &&
              <>
                <li>
                  <h2>에디션 번호 *</h2>
                  <div className="ma-info-02-input">
                    <input
                      disabled={coa}
                      autoComplete='off'
                      style={{ textAlign: 'end' }}
                      type="text"
                      onKeyPress={checkNumber}
                      inputMode="numeric"
                      maxLength="5"
                      placeholder='1,000'
                      value={setComma(totalEdition)}
                      onChange={e => setTotalEdition(onChangePoints(e))}
                    ></input>
                    <span>번</span>
                  </div>
                </li>
                <li>
                  <h2>총 발행 수 *</h2>
                  <div className="ma-info-02-input">
                    <input
                      disabled={coa}
                      autoComplete='off'
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
              <input disabled={coa} autoComplete='off' type="text" value={collection} onChange={e => setCollection(e.target.value)}></input>
            </li>
            <li>
              <h2>상세 설명</h2>
              <textarea disabled={coa} placeholder="상세한 설명입니다." value={detail} onChange={e => setDetail(e.target.value)}></textarea>
            </li>
          </div>
        </ul>
        <ul className="ma-add-info ma-add-info-02">
          <div className="container">
            {coa &&
              <>
                <li>
                  <h2>판매 방식 *</h2>
                  <DropDown options={marketList} select={marketList.indexOf(sale)} setValue={setSale} />
                </li>
              </>}
            {marketList.indexOf(sale) === 3 && 
            <li>
            <h2>구매자 Email *</h2>
            <input autoComplete='off' type="text" value={dEmail} onChange={e => setDEmail(e.target.value)}></input>
          </li>
          }
            {marketList.indexOf(sale) === 2 &&
              <>
                <li>
                  <h2>경매 기간 *</h2>
                  <div className="ma-add-date-mb" style={{ flex: 1 }}>
                    <input
                      autoComplete='off'
                      type="datetime-local"
                      id="date"
                      min={today}
                      className="date-input-nft"
                      value={bidStart}
                      onChange={e => checkDate(setBidStart, e)}
                    ></input>
                  </div>
                </li>
                <li>
                  <h2> </h2>
                  <div className="ma-add-date-mb" style={{ flex: 1 }}>
                    <input
                      autoComplete='off'
                      type="datetime-local"
                      id="date"
                      min={today}
                      className="date-input-nft"
                      value={bidEnd}
                      onChange={e => checkDate(setBidEnd, e)}
                    ></input>
                  </div>
                </li>
              </>
            }
            <li>
              <h2>{marketList.indexOf(sale) === 2 ? '시작가' : '가격'} *</h2>
              <div className="ma-add-date-mb">
                <DropDown options={saleTypeList} select={saleTypeList.indexOf(saleType)} setValue={setSaleType} />
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
            {marketList.indexOf(sale) === 3 &&
              <>
                <li>
                  <h2> </h2>
                  <div className="ma-add-info-03 button-container">
                    <button onClick={ () => setOffLinePinModal(true) }>{'오프라인 판매'}</button>
                  </div>
                </li>
              </>
            }
            {offLinePinModal &&
              <ModalPortal>
                <PinModal
                  time={1}
                  title={'작품의 간편패스워드를 입력해주세요.'}
                  setModalOpen={setOffLinePinModal}
                  // setMyPin={setDPin}
                  afterAction={true}
                  action={offLindSale}
                  />
              </ModalPortal>
            }
          </div>
        </ul>
        <ul className="ma-add-info-03 ma-add-info">
          <div className="container">
            <li>
              <h2>아트 아카이브 공개 *</h2>
              <DropDown options={archiveList} select={archiveList.indexOf(view)} setValue={setView} />
            </li>
            {coa &&
              <>
                <li>
                  <h2>NFT 민팅</h2>
                  <div className="button-container">
                    {walletState.address === null ?
                      <button onClick={() => metamask.connect(walletState)}>지갑 연결하기</button>
                      :
                      <button onClick={() => metamask.minting(walletState, data, navigate)}>민팅하기</button>
                    }
                  </div>
                </li>
              </>}

            <li className="ma-info-03-drop-03">
              <h2>전시이력</h2>
              <div className="ma-add-date-mb">
                <a href='/excel/workExhibitionExcel.xlsx'>
                  <DropDown options={['엑셀폼 다운받기']} disabled={true} pointer={true} />
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
                    return (
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
            <button onClick={() => coa ? register() : editWork()}>저장</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default MyWorkEdit
