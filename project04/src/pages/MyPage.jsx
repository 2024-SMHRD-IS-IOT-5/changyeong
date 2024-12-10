import React from 'react'
import { Link } from 'react-router-dom'

const MyPage = () => {
  return (
    <div>
        MyPage
        <hr/>
        <h3>내 상품</h3>
        <div>
            <Link to="/product/1?best=true">
                <p>[1] 정보처리기사 실기 책 묶음 팝니다</p>
            </Link>

            <Link to="/product/2?new=true">
                <p>[2] 캠핑 용품 거래하실 분?</p>
            </Link>

            <Link to="/product/3">
                <p>[3] 페스티벌 좌석 의자 삽니다</p>
            </Link>
        </div>
      </div>
  )
}

export default MyPage