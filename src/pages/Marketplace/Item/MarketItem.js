import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DetailInfo from '../../../components/DetailIfo/DetailInfo'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import TopArrowSlider from '../../../components/TopArrowSlider/TopArrowSlider'
import WorkHeader from '../../../components/WorkHeader/WorkHeader'
import './MarketItem.css'
import market from '../../../services/public/market/market'
import { userImage, workMainImage, workSubImage } from '../../../services/imageRoute'
import { artViewDate, artViewSize } from '../../../hook/utils/artdbView'
import { shallowEqual, useSelector } from 'react-redux'
import { artViewPrice } from '../../../hook/utils/artdbView'
import { checkUseName } from '../../../hook/utils/checkUseName'
import MarketHistoryInfo from '../../../components/MarketHistoryInfo/MarketHistoryInfo'

function MarketItem() {
  const navigate = useNavigate();
  const { marketId } = useParams();
  const { rowWorkTypeList } = useSelector(v => v.setting.work, shallowEqual)
  const { lang } = useSelector(v => v.setting, shallowEqual)
  const { login } = useSelector(v => v.auth, shallowEqual)
  React.useEffect(() => { getData(marketId) }, [marketId])

  const [data, setData] = React.useState(null);
  const [work, setWork] = React.useState(null);
  const [workType, setWorkType] = React.useState();
  const [moreList, setMoreList] = React.useState([]);
  const [artist, setArtist] = React.useState(null);
  const [history, setHistory] = React.useState([]);
  const [sale, setSale] = React.useState([]);
  const [another, setAnother] = React.useState([]);

  const getData = async (pk) => {
    const res = await market.getDetail(pk)
    setData(res)
  }

  const setAnotherItem = (items) => {
    if (items.length === 0) {
      return
    }
    let itemList = []
    for (let i = 0; i < items.length; i++) {
      itemList.push({
        info: `${workMainImage}/${items[i].image}`,
        author: items[i].title,
        title: items[i].eng_TITLE,
        link: `/market/${items[i].pk}`,
      })
    }
    setAnother(itemList)
  }

  const setHistoryItem = (items) => {
    if (items.length === 0) {
      return
    }
    let item = []
    for (let i = 0; i < items.length; i++) {
      item.push({
        period: `${items[i].start_DATE} ~ ${items[i].end_DATE}`,
        category: items[i].type,
        title: `${items[i].exhi_NAME}, ${items[i].place}`,
      })
    }
    setHistory(item)
  }

  const setArtistItem = (items) => {
    if (items === null) {
      return
    }

    const date = () => {
      if (items.user_TYPE === '1') {
        return `${items.birth_SINCE === '' || items.birth_SINCE === null ?
            '미상' : `${items.birth_SINCE}`}`
      } else {
        return items.birth_SINCE
      }
    }
    const infos = [
      {
        title: items.user_TYPE === '1' ? '국적' : '주소',
        content: items.country,
      },
      {
        title: items.user_TYPE === '1' ? '출생연도' : '설립일',
        content: date(),
      },
      {
        title: '소개',
        content: items.introduce === 'null' ? '' : items.introduce,
      },
    ]
    const origin = {
      artist: checkUseName(lang, items.use_NAME, items.name, items.eng_NAME, items.nickname, items.eng_NICKNAME),
      image: `${userImage}/${items.image}`,
      text: infos
    }
    setArtist(origin)
  }

  React.useEffect(() => {
    if (data === null) {
      return
    }
    // 작품
    setWork(data.work)
    const checkWorkType = rowWorkTypeList.filter(t => t.ko === data.work.work_TYPE)
    // menu
    setMoreList([data.work.user_TYPE === 1 ? '작가정보' : '기관정보', '전시이력', '최근 거래'])
    setWorkType(checkWorkType.length === 0 ? [{ ko: data.work.work_TYPE, eng: data.work.work_TYPE }] : checkWorkType)
    // 작가
    setArtistItem(data.origin_artist)
    // 히스토리
    setHistoryItem(data.exhibition_history)
    // 또다른 작품
    setAnotherItem(data.another_work)
  }, [data])

  var moreItem = []
  for (var i = 0; i < 9; i++) {
    moreItem.push({
      info: 'qart_test/회화/CHANG Sang-Eui, Flower Rain,Ink and colors on ramie fabric, 165 × 118 cm, 2019.png',
      author: 'Chang SangEui ',
      title: 'Flower Rain, 2019',
      price: '000,000,000원',
      link: '/market/1',
    })
  }


  const moveOrigin = () => {
    if (work.user_TYPE === 1) {
      navigate(`/artdb/artist/${work.user_ID}`)
    } else {
      navigate(`/artdb/venue/${work.user_ID}`)
    }
  }

  const payment = () => {

    if(!login){
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login')
      return
    }

    navigate('/market/payment', { state: {item: work} })
  }

  return (
      <section className="market-detail">
        <Header active="0" colored="black" detail={true} />
        {work !== null &&
            <>
              <WorkHeader
                  title_k={lang === 'ko' ? work.title : work.eng_TITLE} //작가명
                  title_e={lang === 'ko' ? work.artist : work.eng_ARTIST} // 작품명
              />
              <div className="container">
                <div className="market-art">
                  <section className="market-art-image">
                    <img
                        className="market-image__image"
                        src={`${workMainImage}/${work.image}`}
                        alt=''
                    ></img>

                  </section>

                  <section className="market-art-info">
                <span className="market-info__gallery" to="#" onClick={moveOrigin}>
                  {checkUseName(lang, work.owner_USE_NAME, work.owner_KO_NAME, work.owner_ENG_NAME, work.owner_KO_NICK_NAME, work.owner_ENG_NICK_NAME)}
                  <span className="info__arrow"></span>
                </span>
                    <ul className="market-info__list">
                      <li>
                        <span>작품 번호</span>
                        <span style={{ whiteSpace: 'nowrap' }}>{work.unique_KEY}</span>
                      </li>
                      <li>
                        <span>장르</span>
                        <span>{workType[0][`${lang}`]}</span>
                      </li>
                      <li>
                        <span>에디션</span>
                        <span>{work.edition_TOTAL === 0 ? '1/1' : `${work.edition}/${work.edition_TOTAL}`}</span>
                      </li>
                      <li>
                        <span>작품 크기</span>
                        <span>{artViewSize(work.size_X, work.size_Y, work.size_W, work.unit)}</span>
                      </li>
                      <li>
                        <span>재료</span>
                        <span>{work.material}</span>
                      </li>
                      <li>
                        <span>제작 연도</span>
                        <span>{artViewDate(work.start_CREATE, work.end_CREATE)}</span>
                      </li>
                    </ul>
                    <div className='market-info__warn'>
                      *큐아트에서 거래되는 모든 작품은 블록체인 기반 거래이력 인증서인 Q-CoA가 발급됩니다.
                    </div>
                    <div className="market-art-sell">
                      <p className="market-sell__price">
                        <span>판매가</span>
                        <span>{artViewPrice(work.price_UNIT, work.price)}</span>
                      </p>

                      <div className='market-info__warn' style={{ color: '#2f80ed' }}>
                        큐아트는 판매 수수료의 일부를 원작자에게 지급하여, 건강한 창작생태계를 지원합니다.
                      </div>

                      <div className="market-sell__button">
                        <button style={{ display: 'none' }}>
                          <span className="ir_pm">판매자 문의하기</span>
                        </button>
                        <button onClick={payment}>
                          구매하기
                        </button>
                        {/* <Link
                      to={'/market/payment'}
                      state={{
                        item: work,
                      }}
                    >
                      구입하기
                    </Link> */}
                      </div>
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
            </>
        }

        <MarketHistoryInfo
            title={'기본 정보'}
            artistItem={artist}
            historyItem={history}
            saleItem={sale}
            moreList={moreList}
        />

        {work !== null &&
            <DetailInfo item={work.detail_NOTE} />
        }
        <TopArrowSlider title={'작가의 다른 작품'} item={another} />
        <Footer />
      </section>
  )
}
export default MarketItem
