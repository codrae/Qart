import React from 'react'
import './AdminManage.css'

const AdminManage = () => {
  return (
    <div className="admin-manage">
      <section className="ad-manage-section-01">
        <nav className="ad-manage-section-01--header">
          <h1>전체 데이터</h1>
        </nav>
        <div className="ad-m-section-01-content">
          <article className="ad-m-s-01-content-item">
            <div className="m-basic-info">
              <h3>전체 회원</h3>
              <h2>990,000 명</h2>
            </div>
            <div className="m-more-info">
              <h3>
                <span>개인 회원 </span>
                <span>000,000,000명</span>
              </h3>
              <h3>
                <span>작가 회원 </span>
                <span>000,000,000명</span>
              </h3>
              <h3>
                <span>기관 회원 </span>
                <span>000,000,000명</span>
              </h3>
            </div>
          </article>
          <article className="ad-m-s-01-content-item">
            <div className="m-basic-info">
              <h3>Art Database</h3>
              <h2>990,000,000 개</h2>
            </div>
            <div className="m-more-info">
              <h3>
                <span>Art Work </span>
                <span>000,000,000개</span>
              </h3>
              <h3>
                <span>NFT</span>
                <span>000,000,000개</span>
              </h3>
            </div>
          </article>
          <article className="ad-m-s-01-content-item">
            <div className="m-basic-info">
              <h3>Marketplace</h3>
              <h2>990,000,000 개</h2>
            </div>
            <div className="m-more-info">
              <h3>
                <span>Art Work </span>
                <span>000,000,000개</span>
              </h3>
              <h3>
                <span>NFT</span>
                <span>000,000,000개</span>
              </h3>
            </div>
          </article>
        </div>
      </section>
      <section className="ad-manage-section-01">
        <nav className="ad-manage-section-01--header">
          <h1>신규 데이터 (1개원 기준)</h1>
        </nav>
        <div className="ad-m-section-01-content">
          <article className="ad-m-s-01-content-item">
            <div className="m-basic-info">
              <h3>신규 회원</h3>
              <h2>990,000 명</h2>
            </div>
            <div className="m-more-info">
              <h3>
                <span>개인 회원 </span>
                <span>000,000,000명</span>
              </h3>
              <h3>
                <span>작가 회원 </span>
                <span>000,000,000명</span>
              </h3>
              <h3>
                <span>기관 회원 </span>
                <span>000,000,000명</span>
              </h3>
            </div>
          </article>
          <article className="ad-m-s-01-content-item">
            <div className="m-basic-info">
              <h3>신규 Art Database</h3>
              <h2>990,000,000 개</h2>
            </div>
            <div className="m-more-info">
              <h3>
                <span>Art Work </span>
                <span>000,000,000개</span>
              </h3>
              <h3>
                <span>NFT</span>
                <span>000,000,000개</span>
              </h3>
            </div>
          </article>
          <article className="ad-m-s-01-content-item">
            <div className="m-basic-info">
              <h3>신규 Marketplace</h3>
              <h2>990,000,000 개</h2>
            </div>
            <div className="m-more-info">
              <h3>
                <span>Art Work </span>
                <span>000,000,000개</span>
              </h3>
              <h3>
                <span>NFT</span>
                <span>000,000,000개</span>
              </h3>
            </div>
          </article>
        </div>
      </section>
      <section className="ad-manage-section-03">
        <div className="ad-m-s-03-content">
          <nav className="ad-manage-section-01--header">
            <h1>공지사항</h1>
            <span className="move-to"></span>
          </nav>
          <article className="ad-m-s-03-item">
            <h3>
              <span>공지사항입니다.</span>
              <span>2023-12-31</span>
            </h3>
            <h3>
              <span>공지사항입니다.</span>
              <span>2023-12-31</span>
            </h3>
            <h3>
              <span>공지사항입니다.</span>
              <span>2023-12-31</span>
            </h3>
            <h3>
              <span>공지사항입니다.</span>
              <span>2023-12-31</span>
            </h3>
            <h3>
              <span>공지사항입니다.</span>
              <span>2023-12-31</span>
            </h3>
          </article>
        </div>
        <div className="ad-m-s-03-content">
          <nav className="ad-manage-section-01--header">
            <h1>공지사항</h1>
            <span className="move-to"></span>
          </nav>
          <article className="ad-m-s-03-item">
            <h3>
              <span>공지사항입니다.</span>
              <span>2023-12-31</span>
            </h3>
            <h3>
              <span>공지사항입니다.</span>
              <span>2023-12-31</span>
            </h3>
            <h3>
              <span>공지사항입니다.</span>
              <span>2023-12-31</span>
            </h3>
            <h3>
              <span>공지사항입니다.</span>
              <span>2023-12-31</span>
            </h3>
            <h3>
              <span>공지사항입니다.</span>
              <span>2023-12-31</span>
            </h3>
          </article>
        </div>
      </section>
    </div>
  )
}
export default AdminManage
