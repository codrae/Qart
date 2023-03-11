import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AdminMenu.css'

const AdminMenu = props => {
  const [open, setOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  const toggle = e => {
    /* 메뉴 하나만 열리도록 */
    let beforeState = open[e]
    const newArr = Array(open.length).fill(false)
    newArr[e] = !beforeState
    setOpen(newArr)
  }
  const menuList = [
    {
      icon: 'admin-icon.png',
      activeIcon: 'admin-icon-active.png',
      title: '관리자 메인',
      buttonList: [
        { link: '/admin', title: '운영지표' },
        { link: '/admin/main/info', title: '사이트 정보수정' },
        { link: '/admin/main/term', title: '약관본문 수정' },
      ],
    },
    {
      icon: 'admin-icon2.png',
      activeIcon: 'admin-icon2-active.png',
      title: '회원 관리',
      buttonList: [
        { link: '/admin/member/general', title: '개인 회원' },
        { link: '/admin/member/artist', title: '작가 회원' },
        { link: '/admin/member/gallery', title: '기관 회원' },
      ],
    },
    {
      icon: 'admin-icon3.png',
      activeIcon: 'admin-icon3-active.png',
      title: '인증서 발급 내역 열람 및 관리',
      buttonList: [
        { link: '/admin/cert/kyc', title: 'KYC 인증' },
        { link: '/admin/cert/qcoa', title: 'Q-CoA 인증' },
      ],
    },
    {
      icon: 'admin-icon4.png',
      activeIcon: 'admin-icon4-active.png',
      title: '문의 및 공지 관리',
      buttonList: [
        { link: '/admin/inform/inquiry', title: '문의 관리' },
        { link: '/admin/inform/notice', title: '공지 관리' },
      ],
    },
    {
      icon: 'admin-icon5.png',
      activeIcon: 'admin-icon5-active.png',
      title: '팝업 및 배너 등록 / 변경 관리',
      buttonList: [
        { link: '/admin/banner', title: '메인' },
        { link: '/admin/banner/market', title: '마켓플레이스' },
        { link: '/admin/banner/platform', title: '플렛폼Q' },
      ],
    },
    {
      icon: 'admin-icon6.png',
      activeIcon: 'admin-icon6-active.png',
      title: '자체 기획전 정보',
      buttonList: [
        { link: '/', title: '기획경매' },
        { link: '/', title: 'Art Tok!' },
        { link: '/', title: '플렛폼Q' },
      ],
    },
    {
      icon: 'admin-icon7.png',
      activeIcon: 'admin-icon7-active.png',
      title: '작품 등록 기능',
      buttonList: [
        { link: '/', title: '작품 리스트' },
        { link: '/', title: '작가 등록' },
        { link: '/', title: '작품 등록' },
      ],
    },
    {
      icon: 'admin-icon8.png',
      activeIcon: 'admin-icon8-active.png',
      title: '새소식',
      link: '/admin/new',
    },

    {
      icon: 'admin-icon9.png',
      activeIcon: 'admin-icon9-active.png',
      title: 'NFT',
    },
  ]

  const menu_item_list = () => {
    return menuList.map((item, index) => {
      return (
        <li key={index}>
          <div className="ad-m-col-item">
            <Link to={item.link ? item.link : ''}>
              <a
                className="ad-m-col-tit"
                onClick={() => (item.buttonList ? toggle(index) : '')}
              >
                <div className="ad-m-col-tlt-container">
                  {open[index] == true || props.bm == index ? (
                    <img
                      className="ad-m-col-tlt-icon"
                      src={require('../../../assets/' + item.activeIcon)}
                    ></img>
                  ) : (
                    <img
                      className="ad-m-col-tlt-icon"
                      src={require('../../../assets/' + item.icon)}
                    ></img>
                  )}
                  <h2
                    className={
                      open[index] == true || props.bm == index
                        ? 'ad-m-col-tlt-name active-title'
                        : 'ad-m-col-tlt-name '
                    }
                  >
                    {item.title}
                  </h2>
                </div>
                {!open[index] == true && item.buttonList && (
                  <button className="ad-m-toggle-btn">
                    <span className="ir_pm">열기</span>
                  </button>
                )}
                {open[index] == true && item.buttonList && (
                  <button className="ad-m-toggle-btn ad-m-toggle-btn__close">
                    <span className="ir_pm">닫기</span>
                  </button>
                )}
              </a>
            </Link>
            {open[index] == true && (
              <div className="ad-m-content">
                <div className="admin-menu-content">
                  {item.buttonList.map((bitem, bi) => {
                    return (
                      <Link to={bitem.link}>
                        <button
                          className={
                            index == props.bm && bi == props.sm
                              ? 'admin-menu-item active-content'
                              : 'admin-menu-item'
                          }
                        >
                          {bitem.title}
                        </button>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </li>
      )
    })
  }
  return (
    <nav className="admin-menu">
      <div className="admin-menu-icon"></div>
      <ul className="admin-menu-list">{menu_item_list()}</ul>
    </nav>
  )
}
export default AdminMenu
