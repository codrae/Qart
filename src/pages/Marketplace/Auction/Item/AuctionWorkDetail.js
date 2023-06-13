import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import AuctionModal from '../../../../components/Modal/AuctionModal'
import ModalPortal from '../../../../components/Modal/ModalPortal'
import './AuctionDetail.css'
import { artViewDate, artViewPrice, artViewSize } from '../../../../hook/utils/artdbView'
import { shallowEqual, useSelector } from 'react-redux'
import useInterval from '../../../../hook/useInterval'
import SectionHeader from '../../../../components/SectionHeader/SectionHeader'
import {handleImgError, userImage, workMainImage, workSubImage} from '../../../../services/imageRoute'
import publicWork from '../../../../services/public/publicWork'
import DetailInfo from '../../../../components/DetailIfo/DetailInfo'
import HistoryInfo from '../../../../components/HistoryInfo/HistoryInfo'
import { checkUseName } from '../../../../hook/utils/checkUseName'

function AuctionWorkDetail() {
  const { active } = useLocation().state;
  const { rowWorkTypeList } = useSelector(v => v.setting.work, shallowEqual)

  const { login, type, artist, gallery } = useSelector(v => v.auth, shallowEqual)
  const { lang } = useSelector(v => v.setting, shallowEqual)

  const [data, setData] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [info, setInfo] = React.useState(null);
  const [auction, setAuction] = React.useState(null);
  const [bidList, setBidList] = React.useState([]);
  const [topBid, setTopBid] = React.useState(null);

  const [history, setHistory] = React.useState([]);
  const [historyItem, setHistoryItem] = React.useState(null); // 작품 전시 이력

  const [leftTime, setLeftTime] = React.useState('');
  const navigate = useNavigate();
  const { itemId } = useParams();
  React.useEffect(() => { getData(itemId) }, [itemId])
  const getData = async (pk) => {
    const res = await publicWork.getAuctionDetail(pk)
    setData(res.work)
    setUser(res.artist)
    setHistory(res.exhibition_history)
    setAuction(res.auction)
    setBidList(res.bid_list)
    setTopBid(res.top_bid?.bid_PRICE ?? res.work.price)
  }

  React.useEffect(() => {
    if(user === null) return
    const infos = [
      {
        title: '국적',
        content: user.country,
      },
      {
        title: '출생연도',
        content: `${user.birthday} -`,
      },
      {
        title: '작가소개',
        content: user.introduce,
      },
    ]
    setInfo(infos)
  },[user])

    // 전시 이력
    React.useEffect(() => {
      if(history.length === 0){
        return
      }
      let item = []
      for (let i = 0; i < history.length; i++) {
        item.push({
          period: `${history[i].start_DATE} ~ ${history[i].end_DATE}`,
          category: history[i].type,
          title: `${history[i].exhi_NAME}, ${history[i].place}`,
        })
      }
      setHistoryItem(item)
    },[history])

  const InfoItem = items => {
    if(info === null) return
    return Object.values(items).map((item, i) => {
      return (
        <li className="art-detail__item" key={i}>
          <span className="art-detail__name">{item.title}</span>
          <span className="art-detail__content">{item.content}</span>
        </li>
      )
    })
  }


  // 모달창 노출 여부 state
  const [aucOpen, setAucOpen] = useState(false)

  // 모달창 노출
  const showAucModal = () => {

    const _email =  type === 2 ? gallery.email : artist.email

    if(_email === data.email){
      alert('본인이 올린 경매는 참여 불가능합니다.')
      return
    }
    

    if(active === 0){
      alert('지간 경매입니다.')
      return
    }
    if(active === 2){
      alert('경매 시작전입니다.')
      return
    }
    if(leftTime === '마감'){
      alert('마감된 경매에 참여는 불가능합니다.');
      navigate('/market/auction/now')
      return;
    }
    setAucOpen(true)
  }

  const setLike = async () => {
    if (!login) {
      alert('로그인이 필요한 서비스입니다.')
      navigate('/login')
      return
    }

      const res = await publicWork.setLike(data.pk)
      if (!res.resultCode) {
        return
      }
      setData({...data, heart: !data.heart})
  }

  const diffDay = () => {
    const masTime = auction.end_TIME
    const todayTime = new Date();
    
    const diff = masTime - todayTime;

    if(diff <= 0){
      setLeftTime('마감')
      return
    }
    
    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor((diff / (1000*60*60)) % 24);
    const diffMin = Math.floor((diff / (1000*60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);
    
    setLeftTime(`${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`);
}

const setType = () => {
  const checkWorkType = rowWorkTypeList.filter(t => t.ko === data.work_TYPE)
    const workType = checkWorkType.length === 0 ? [{ko: data.work_TYPE,eng: data.work_TYPE}] : checkWorkType
    return workType[0][`${lang}`]
}

useInterval(() => {
  diffDay();
}, 1000);

  if(data === null){
    return <></>
  }
  return (
    <div className="autcion-detail">
      <section className="market-detail">
        <Header active="2" colored="black" detail={true} />
        <header className="auction-detail-header">
          <div className="container ad-header-container">
            <div className="ad-haeder__route">
              <Link to="/market">
                <span>Marketplace</span>
              </Link>
              <span className="next"></span>
              <Link to="/market/auction">
                <span>Auction</span>
              </Link>
              <span className="next"></span>
            </div>
            <h1>Now</h1>
          </div>
        </header>
        <div className="container">
          <div className="market-art">
            <section className="market-art-image">
              <img
                className="market-image__image"
                src={`${workMainImage}/${data.image}`}
                alt=''
              ></img>
            </section>
            <section className="market-art-info">
              <ul className="market-info__list">
                <li className="aution-detail-title">
                  <h1>{data.title}</h1>
                  <button
                onClick={setLike}
               className={data.heart ? 'market-item--heart_active' : 'market-item--heart'}> 
                <span className="ir_pm">좋아요</span>
              </button>
                </li>
                <li>
                  <span>작품 번호</span>
                  <span>{data.unique_KEY}</span>
                </li>
                <li>
                  <span>장르</span>
                  <span>{setType()}</span>
                </li>
                <li>
                  <span>에디션</span>
                  <span>{data.edition_TOTAL === 0 ? '없음' : `${data.edition}/${data.edition_TOTAL}`}</span>
                </li>
                <li>
                  <span>작품크기</span>
                  <span>{artViewSize(data.size_X, data.size_Y, data.size_W, data.unit)}</span>
                </li>
                <li>
                  <span>재료</span>
                  <span>{data.material}</span>
                </li>
                <li>
                  <span>제작 연도</span>
                  <span>{artViewDate(data.start_CREATE, data.end_CREATE)}</span>
                </li>
              </ul>
              <div className="market-art-sell">
                <p className="market-sell__price">
                  <span>시작가</span>
                  <span>{artViewPrice(1, data.price)}</span>
                </p>
                <p className="market-sell__price color-red">
                  <span>현재가</span>
                  <span>{artViewPrice(1, topBid)}</span>
                </p>
                <span className="market-sell__time">
                  {active === 0 ? '종료' : active === 1 ? `남은 시간: ${leftTime}` : '시작전'}
                  
                </span>
                <div className="market-sell__button">
                  <button onClick={showAucModal}>응찰하기</button>
                </div>
                {aucOpen && (
                  <ModalPortal>
                    <AuctionModal
                      setModalOpen={setAucOpen}
                      isNft={false}
                      pk={data.pk}
                      leftTime={leftTime}
                      bidList={bidList}
                      setBidList={setBidList}
                      topBid={topBid}
                      setTopBid={setTopBid} />
                  </ModalPortal>
                )}
                <span className="market-sell__warn">
                  * 구매 수수료와 배송비는 별도입니다.
                </span>
              </div>
            </section>
          </div>
          <div className="market-image__list">
            {
              work.sub_IMAGE.map(item => {
                return (
                    <img
                        key={item.image}
                        className="market-image__item"
                        src={`${workSubImage}/${item.image}`}
                        alt=''
                    />
                )
              })
            }
          </div>


        </div>
        <SectionHeader title={'작가 정보'} />
        <section className="art-detail-section">
          <div className='container section-header-container' style={{flexDirection: 'row', padding: '30rem 0'}}>
            <img
              className="art-detail__image"
              src={`${userImage}/${artist.picture}`}
              onError={handleImgError}
              alt=''
            ></img>

            <ul className="art-detail__list">
              <li className="art-detail__item">{checkUseName(lang, user.use_NAME, user.name, user.eng_NAME, user.nickname, user.eng_NICKNAME)}</li>
              {InfoItem(info)}
            </ul>
            </div>
          </section>
          <HistoryInfo title={'전시이력'} historyItem={historyItem} />

        {/* <HistoryInfo2
          title={'기본 정보'}
          historyItem={historyItem}
          moreList={moreList}
      /> */}
        <DetailInfo item={data === undefined ? '' : data.detail_NOTE} />
      </section>
      <Footer />
    </div>
  )
}
export default AuctionWorkDetail
