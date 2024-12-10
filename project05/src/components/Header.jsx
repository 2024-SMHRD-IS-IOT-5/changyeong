import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header-container'>
        <div className='link-container'>
            <Link to="/">메인로고</Link>
        </div>
        <div className='link-container'>
            <Link to="/list">상품목록</Link>
        </div>
        <div className='link-container'>
            <Link to="/">로그인</Link>
        </div>
    </div>
  )
}

export default Header