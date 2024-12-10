import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {

  /** Link 태그
   * - 웹페이지는 원래 페이지 이동 시에 a태그를 사용
   * - a태그는 클릭 시, 다른 페이지로 새로 이동하기 때문에 SPA인 React에는 적합 X
   * - Link 컴포넌트 사용 => History API를 통해 브라우저 주소의 경로만 바꿔주는 기능
   */

  
  return (
    <div>
      Main
      <hr/>
          <Link to="/about">About Page</Link>

    </div>
  )
}

export default Main