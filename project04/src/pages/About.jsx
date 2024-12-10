import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

    /** useNavigate
     * 페이지 이동을 도와주는 역할 
     */

    let auth = true; // 로그인 권한
    const nav = useNavigate()

  return (
    <div>About
        <hr/>
        <button onClick={()=>{
            auth ? nav('/mypage') : nav('/')
        }}>마이페이지로 이동</button>
    </div>
  )
}

export default About