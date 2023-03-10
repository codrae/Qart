import React, { useState } from 'react'
import './AdminTerm.css'
import AdminTermEdit from './AdminTermEdit'

const AdminTerm = () => {
  const [edit, setEdit] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  return (
    <div className="admin-term">
      {edit === false ? (
        <div className="container">
          <section className="admin-term-content">
            <div className="admin-term-c-header">
              <h1>개인정보 취급방침</h1>
              <button
                onClick={() => {
                  setTitle('개인정보 취급방침')
                  setEdit(true)
                }}
              >
                수정
              </button>
            </div>
            <div className="admin-term-c-item">
              <p>
                [개인정보 취급방침] <br></br> 1. 개인정보의 수집목적, 이용목적
                및 이용보유기간 <br></br>1.1 ‘회사’가 회원의 개인정보를 수집하는
                목적은 회원의 신분을 확인하고 ‘회사’ 서비스를 이용하고자 하는
                의사를 확인하며, 회원에게 최적의 서비스를 제공하고자 하는
                것입니다.
                <br></br> 1.2 ‘회사’는 전자상거래 및 이와 관련한 다양한 서비스를
                회원들의 특성, 기호에 맞추어 제공하기 위하여 아래와 같이
                수집정보 별 목적에 따라 개인정보를 이용하고 있습니다.<br></br>{' '}
                1.3 ‘Qart’는 유/무료로 서비스를 제공하기 위해 광고를 게재할 수
                있으며, 이때에도 회원님 개인에 대한 정보를 바탕으로 좀 더 유용한
                정보로서의 가치가 있는 광고를 선별적으로 전달할 수 있습니다.{' '}
                <br></br>1.4 수집항목은 수집목적 및 이용목적을 을 벗어나지 않는
                범위에서 추가 서비스제공을 위해 확장될 수 있으며, 이 경우에는
                미리 회원께 그 사실을 알려 드립니다. <br></br>1.5 수집 항목{' '}
                <br></br>1.5.1 필수수집항목 회원가입 시 필수적으로 입력-수집하는
                항목 및 수집목적입니다. 이메일주소, 이름, 휴대폰번호, 비밀번호:
                공지사항 전달, 본인 의사 확인, 불만처리 등의 소통경로 확보 및
                신규제품 안내/이벤트 정보제공을 비롯한 마케팅 및 광고에 활용 등
                1.5.2 선택수집항목 작가 등록시 입력-수집하는 항목 및
                수집목적입니다. 이름, 국적, 생년월일, 출생지, 연락처, 학력 정보
                : 작품에 대한 작가 정보 제공 제품 소유권 이전시 입력-수집하는
                항목 및 수집목적입니다. 제품 비밀번호 : 제품 진품인증 작가
                지원비 수령을 위한 항목 및 수집 목적입니다. 페이팔 계좌 정보 :
                작가 지원지 제공 작가 KYC시 입력-수집하는 <br></br>
                [개인정보 취급방침] <br></br>1. 개인정보의 수집목적, 이용목적 및
                이용보유기간 <br></br>1.1 ‘회사’가 회원의 개인정보를 수집하는
                목적은 회원의 신분을 확인하고 ‘회사’ 서비스를 이용하고자 하는
                의사를 확인하며, 회원에게 최적의 서비스를 제공하고자 하는
                것입니다. <br></br>1.2 ‘회사’는 전자상거래 및 이와 관련한 다양한
                서비스를 회원들의 특성, 기호에 맞추어 제공하기 위하여 아래와
                같이 수집정보 별 목적에 따라 개인정보를 이용하고 있습니다.{' '}
                <br></br>1.3 ‘Qart’는 유/무료로 서비스를 제공하기 위해 광고를
                게재할 수 있으며, 이때에도 회원님 개인에 대한 정보를 바탕으로 좀
                더 유용한 정보로서의 가치가 있는 광고를 선별적으로 전달할 수
                있습니다.
                <br></br> 1.4 수집항목은 수집목적 및 이용목적을 을 벗어나지 않는
                범위에서 추가 서비스제공을 위해 확장될 수 있으며, 이 경우에는
                미리 회원께 그 사실을 알려 드립니다. <br></br>1.5 수집 항목{' '}
                <br></br>
                1.5.1 필수수집항목 회원가입 시 필수적으로 입력-수집하는 항목 및
                수집목적입니다. 이메일주소, 이름, 휴대폰번호, 비밀번호: 공지사항
                전달, 본인 의사 확인, 불만처리 등의 소통경로 확보 및 신규제품
                안내/이벤트 정보제공을 비롯한 마케팅 및 광고에 활용 등 1.5.2
                선택수집항목 작가 등록시 입력-수집하는 항목 및 수집목적입니다.
                이름, 국적, 생년월일, 출생지, 연락처, 학력 정보 : 작품에 대한
                작가 정보 제공 제품 소유권 이전시 입력-수집하는 항목 및
                수집목적입니다. 제품 비밀번호 : 제품 진품인증 작가 지원비 수령을
                위한 항목 및 수집 목적입니다. 페이팔 계좌 정보 : 작가 지원지
                제공 작가 KYC시 입력-수집하는 <br></br>
                [개인정보 취급방침] <br></br>1. 개인정보의 수집목적, 이용목적 및
                이용보유기간<br></br> 1.1 ‘회사’가 회원의 개인정보를 수집하는
                목적은 회원의 신분을 확인하고 ‘회사’ 서비스를 이용하고자 하는
                의사를 확인하며, 회원에게 최적의 서비스를 제공하고자 하는
                것입니다.
                <br></br> 1.2 ‘회사’는 전자상거래 및 이와 관련한 다양한 서비스를
                회원들의 특성, 기호에 맞추어 제공하기 위하여 아래와 같이
                수집정보 별 목적에 따라 개인정보를 이용하고 있습니다.<br></br>{' '}
                1.3 ‘Qart’는 유/무료로 서비스를 제공하기 위해 광고를 게재할 수
                있으며, 이때에도 회원님 개인에 대한 정보를 바탕으로 좀 더 유용한
                정보로서의 가치가 있는 광고를 선별적으로 전달할 수 있습니다.
                <br></br> 1.4 수집항목은 수집목적 및 이용목적을 을 벗어나지 않는
                범위에서 추가 서비스제공을 위해 확장될 수 있으며, 이 경우에는
                미리 회원께 그 사실을 알려 드립니다.<br></br> 1.5 수집 항목{' '}
                <br></br>1.5.1 필수수집항목 회원가입 시 필수적으로 입력-수집하는
                항목 및 수집목적입니다. 이메일주소, 이름, 휴대폰번호, 비밀번호:
                공지사항 전달, 본인 의사 확인, 불만처리 등의 소통경로 확보 및
                신규제품 안내/이벤트 정보제공을 비롯한 마케팅 및 광고에 활용 등
                1.5.2 선택수집항목 작가 등록시 입력-수집하는 항목 및
                수집목적입니다. 이름, 국적, 생년월일, 출생지, 연락처, 학력 정보
                : 작품에 대한 작가 정보 제공 제품 소유권 이전시 입력-수집하는
                항목 및 수집목적입니다. 제품 비밀번호 : 제품 진품인증 작가
                지원비 수령을 위한 항목 및 수집 목적입니다. 페이팔 계좌 정보 :
                작가 지원지 제공 작가 KYC시 입력-수집하는
              </p>
            </div>
          </section>
          <section className="admin-term-content">
            <div className="admin-term-c-header">
              <h1>이용약관</h1>
              <button
                onClick={() => {
                  setTitle('이용약관')

                  setEdit(true)
                }}
              >
                수정
              </button>
            </div>
            <div className="admin-term-c-item">
              <p>
                [개인정보 취급방침] <br></br> 1. 개인정보의 수집목적, 이용목적
                및 이용보유기간 <br></br>1.1 ‘회사’가 회원의 개인정보를 수집하는
                목적은 회원의 신분을 확인하고 ‘회사’ 서비스를 이용하고자 하는
                의사를 확인하며, 회원에게 최적의 서비스를 제공하고자 하는
                것입니다.
                <br></br> 1.2 ‘회사’는 전자상거래 및 이와 관련한 다양한 서비스를
                회원들의 특성, 기호에 맞추어 제공하기 위하여 아래와 같이
                수집정보 별 목적에 따라 개인정보를 이용하고 있습니다.<br></br>{' '}
                1.3 ‘Qart’는 유/무료로 서비스를 제공하기 위해 광고를 게재할 수
                있으며, 이때에도 회원님 개인에 대한 정보를 바탕으로 좀 더 유용한
                정보로서의 가치가 있는 광고를 선별적으로 전달할 수 있습니다.{' '}
                <br></br>1.4 수집항목은 수집목적 및 이용목적을 을 벗어나지 않는
                범위에서 추가 서비스제공을 위해 확장될 수 있으며, 이 경우에는
                미리 회원께 그 사실을 알려 드립니다. <br></br>1.5 수집 항목{' '}
                <br></br>1.5.1 필수수집항목 회원가입 시 필수적으로 입력-수집하는
                항목 및 수집목적입니다. 이메일주소, 이름, 휴대폰번호, 비밀번호:
                공지사항 전달, 본인 의사 확인, 불만처리 등의 소통경로 확보 및
                신규제품 안내/이벤트 정보제공을 비롯한 마케팅 및 광고에 활용 등
                1.5.2 선택수집항목 작가 등록시 입력-수집하는 항목 및
                수집목적입니다. 이름, 국적, 생년월일, 출생지, 연락처, 학력 정보
                : 작품에 대한 작가 정보 제공 제품 소유권 이전시 입력-수집하는
                항목 및 수집목적입니다. 제품 비밀번호 : 제품 진품인증 작가
                지원비 수령을 위한 항목 및 수집 목적입니다. 페이팔 계좌 정보 :
                작가 지원지 제공 작가 KYC시 입력-수집하는 <br></br>
                [개인정보 취급방침] <br></br>1. 개인정보의 수집목적, 이용목적 및
                이용보유기간 <br></br>1.1 ‘회사’가 회원의 개인정보를 수집하는
                목적은 회원의 신분을 확인하고 ‘회사’ 서비스를 이용하고자 하는
                의사를 확인하며, 회원에게 최적의 서비스를 제공하고자 하는
                것입니다. <br></br>1.2 ‘회사’는 전자상거래 및 이와 관련한 다양한
                서비스를 회원들의 특성, 기호에 맞추어 제공하기 위하여 아래와
                같이 수집정보 별 목적에 따라 개인정보를 이용하고 있습니다.{' '}
                <br></br>1.3 ‘Qart’는 유/무료로 서비스를 제공하기 위해 광고를
                게재할 수 있으며, 이때에도 회원님 개인에 대한 정보를 바탕으로 좀
                더 유용한 정보로서의 가치가 있는 광고를 선별적으로 전달할 수
                있습니다.
                <br></br> 1.4 수집항목은 수집목적 및 이용목적을 을 벗어나지 않는
                범위에서 추가 서비스제공을 위해 확장될 수 있으며, 이 경우에는
                미리 회원께 그 사실을 알려 드립니다. <br></br>1.5 수집 항목{' '}
                <br></br>
                1.5.1 필수수집항목 회원가입 시 필수적으로 입력-수집하는 항목 및
                수집목적입니다. 이메일주소, 이름, 휴대폰번호, 비밀번호: 공지사항
                전달, 본인 의사 확인, 불만처리 등의 소통경로 확보 및 신규제품
                안내/이벤트 정보제공을 비롯한 마케팅 및 광고에 활용 등 1.5.2
                선택수집항목 작가 등록시 입력-수집하는 항목 및 수집목적입니다.
                이름, 국적, 생년월일, 출생지, 연락처, 학력 정보 : 작품에 대한
                작가 정보 제공 제품 소유권 이전시 입력-수집하는 항목 및
                수집목적입니다. 제품 비밀번호 : 제품 진품인증 작가 지원비 수령을
                위한 항목 및 수집 목적입니다. 페이팔 계좌 정보 : 작가 지원지
                제공 작가 KYC시 입력-수집하는 <br></br>
                [개인정보 취급방침] <br></br>1. 개인정보의 수집목적, 이용목적 및
                이용보유기간<br></br> 1.1 ‘회사’가 회원의 개인정보를 수집하는
                목적은 회원의 신분을 확인하고 ‘회사’ 서비스를 이용하고자 하는
                의사를 확인하며, 회원에게 최적의 서비스를 제공하고자 하는
                것입니다.
                <br></br> 1.2 ‘회사’는 전자상거래 및 이와 관련한 다양한 서비스를
                회원들의 특성, 기호에 맞추어 제공하기 위하여 아래와 같이
                수집정보 별 목적에 따라 개인정보를 이용하고 있습니다.<br></br>{' '}
                1.3 ‘Qart’는 유/무료로 서비스를 제공하기 위해 광고를 게재할 수
                있으며, 이때에도 회원님 개인에 대한 정보를 바탕으로 좀 더 유용한
                정보로서의 가치가 있는 광고를 선별적으로 전달할 수 있습니다.
                <br></br> 1.4 수집항목은 수집목적 및 이용목적을 을 벗어나지 않는
                범위에서 추가 서비스제공을 위해 확장될 수 있으며, 이 경우에는
                미리 회원께 그 사실을 알려 드립니다.<br></br> 1.5 수집 항목{' '}
                <br></br>1.5.1 필수수집항목 회원가입 시 필수적으로 입력-수집하는
                항목 및 수집목적입니다. 이메일주소, 이름, 휴대폰번호, 비밀번호:
                공지사항 전달, 본인 의사 확인, 불만처리 등의 소통경로 확보 및
                신규제품 안내/이벤트 정보제공을 비롯한 마케팅 및 광고에 활용 등
                1.5.2 선택수집항목 작가 등록시 입력-수집하는 항목 및
                수집목적입니다. 이름, 국적, 생년월일, 출생지, 연락처, 학력 정보
                : 작품에 대한 작가 정보 제공 제품 소유권 이전시 입력-수집하는
                항목 및 수집목적입니다. 제품 비밀번호 : 제품 진품인증 작가
                지원비 수령을 위한 항목 및 수집 목적입니다. 페이팔 계좌 정보 :
                작가 지원지 제공 작가 KYC시 입력-수집하는
              </p>
            </div>
          </section>
          <section className="admin-term-content02 filebox">
            <div className="admin-term-c-header">
              <h1>첨부파일</h1>
              <label for="file">수정</label>
              {/* 파일 선택 처리 */}
              <input type="file" id="file" />
            </div>
            <div className="admin-term-c02-item">
              <div id="attachFile">
                {/* 다중 파일 처리 후 .file-preview div 추가해준다 */}
                <div className="file-preview">
                  <h2>banner_01.png</h2>
                  <button>
                    <span className="ir_pm">삭제</span>
                  </button>
                </div>
                <div className="file-preview">
                  <h2>banner_01.png</h2>
                  <button>
                    <span className="ir_pm">삭제</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <AdminTermEdit title={title} content={content} setEdit={setEdit} />
      )}
    </div>
  )
}
export default AdminTerm
