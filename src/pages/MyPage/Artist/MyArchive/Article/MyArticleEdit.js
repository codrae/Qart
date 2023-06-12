import React, { useState } from 'react'
import DropDown from '../../../../../components/DropDown/DropDown'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import SectionHeader from '../../../../../components/SectionHeader/SectionHeader'
import { useSelector, shallowEqual } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import './MyArticleAdd.css'
import article from '../../../../../services/myArchive/article'
import { articleMainImage, articleSubImage } from '../../../../../services/imageRoute'
import { checkDate } from '../../../../../hook/utils/validation'
import { checkMainImageSize, checkSubImageSize } from '../../../../../hook/utils/fileSize'

function MyArticleAdd() {
  const { pk } = useParams();

  const navigate = useNavigate();
  const { countryList } = useSelector(v => v.setting, shallowEqual)
  const { min, today } = useSelector(v => v.setting.date, shallowEqual)

  const [data, setData] = useState(null);
  const [mainImage, setMainImage] = useState(null)
  const [mainImageShow, setMainImageShow] = useState(null)
  const [subImage, setSubImage] = useState([])
  const [subImageShow, setSubImageShow] = useState([])
  const [newSubImage, setNewSubImage] = useState([])
  const [oldSubImage, setOldSubImage] = useState([])


  const [title, setTitle] = useState([])
  const [date, setDate] = useState([])
  const [country, setcountry] = useState([])
  const [source, setSource] = useState([])
  const [producer, setProducer] = useState([])
  const [publisher, setPublisher] = useState([])
  const [reference, setReference] = useState([])

  const [lock, setLock] = useState(false)
  

  React.useEffect(() => {
    getDetail(pk)
  },[pk])

  const getDetail = async(pk) => {
    const res = await article.getDetail(pk)
    setData(res.article)
  }

  React.useEffect(() => {
    if(data === null){
      return
    }
    setMainImage(`${articleMainImage}/${data.image}`)
    setMainImageShow(`${articleMainImage}/${data.image}`)
    const sub = []
    for(let i = 0; i < data.article_SUB_IMAGE.length; i ++){
      sub.push(`${articleSubImage}/${data.article_SUB_IMAGE[i].image}`)
    }
    setSubImage(sub)
    setSubImageShow(sub)

    setTitle(data.title)
    setDate(data.date)
    setcountry(data.country)
    setSource(data.source)
    setProducer(data.producer)
    setPublisher(data.publisher)
    setReference(data.reference)
  },[data])


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
    // 새로운 서브 이미지
    setNewSubImage([...newSubImage, file]); 
  }


  const deleteSubImgFile = (e, i) => {
    e.preventDefault();
    setSubImage(subImage.filter((img, index) => index !== i))
    setSubImageShow(subImageShow.filter((img, index) => index !== i))
    // 삭제할 서브 이미지
    setOldSubImage([...oldSubImage, subImageShow[i].toString().replace(`${articleSubImage}/`, '')])
  }
  const addArticle = async () => {
    if (lock) {
      return
    }
    // setLock(true)
    if (mainImage === null) {
      alert('대표 이미지를 설정해주세요.')
      setLock(false)
      return
    }
    if (title === '') {
      alert('자료명을 입력해주세요.')
      setLock(false)
      return
    }
    if (date === '') {
      alert('발행일을 입력해주세요.')
      setLock(false)
      return
    }
    if (source === '') {
      alert('출처를 입력해주세요.')
      setLock(false)
      return
    }
    if (producer === '') {
      alert('발행처를 입력해주세요.')
      setLock(false)
      return
    }
    if (publisher === '') {
      alert('발행자를 입력해주세요.')
      setLock(false)
      return
    }
    if (reference === '') {
      alert('상세 설명을 입력해주세요.')
      setLock(false)
      return
    }
    
    const res = await article.editArticle(data.pk, mainImage, newSubImage, oldSubImage, title, date, country, source, producer, publisher, reference)

    if (!res.resultCode) {
      alert('수정에 실패했습니다.')
      setLock(false)
      return
    }
    alert('수정이 완료되었습니다.')
    setLock(false)
    navigate(-1)
  }


  return (
    <div className="ma-article-add">
      <Header login={true} colored="black" detail={true} />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">My Archive</h2>
        </div>
      </nav>
      <SectionHeader title="Edit News" />
      {/* <SectionHeader title="Eidt Article" /> */}
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
      <ul className="ma-add-info ma-article-add-info">
        <div className="container">
          <li>
            <h2>자료명 *</h2>
            <input autoComplete='off' type="text" value={title} onChange={e => setTitle(e.target.value)}></input>

          </li>
          <li>
            <h2>발행일 *</h2>
            <input
              type="date"
              id="date"
              className="date-input"
              value={date}
              onChange={e => checkDate(setDate, e)}
              min={min}
              max={today}
            ></input>
          </li>
          <li>
            <h2>발행 국가 *</h2>
            <DropDown options={countryList} select={countryList.indexOf(country)} setValue={setcountry} />
          </li>
          <li>
            <h2>출처 *</h2>
            <input autoComplete='off' placeholder='https://qart.art' type="text" value={source} onChange={e => setSource(e.target.value)}></input>
          </li>
          <li>
            <h2>발행처 *</h2>
            <input autoComplete='off' type="text" value={producer} onChange={e => setProducer(e.target.value)}></input>
          </li>
          <li>
            <h2>발행자 *</h2>
            <input autoComplete='off' type="text" value={publisher} onChange={e => setPublisher(e.target.value)}></input>
          </li>
          <li>
            <h2>상세 설명 *</h2>
            <textarea autoComplete='off' placeholder="상세한 설명입니다." value={reference} onChange={e => setReference(e.target.value)}></textarea>
          </li>
        </div>
      </ul>
      <div className="ma-add--button">
        <div className="container">
          <button onClick={() => navigate(-1)}>취소</button>
          <button onClick={addArticle}>저장</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default MyArticleAdd
