import React from 'react'
import { useState } from 'react'
import img1 from '../img/img1.gif'

const Ex02 = () => {

    /* React에서 이미지 경로 지정하는 방법
    1. src 폴더
        1-1) import 변수이름 from '경로'
        1-2) <img src={변수이름}/>

        - 장점 : React의 모듈 시스템 안에서 동작하기 때문에 최적화가 자동으로 이루어짐
        - 단점 : 반드시 import가 필요하다
        - 권장 사용 사례 : 아이콘, 로고, 컴포넌트와 매우 밀접한 이미지

    2. public 폴더
        1-1) public 폴더에 있는 파일의 경로대로 주소 입력
        1-2) 그 주소를 src에 입력

        - public 폴더는 서버와 통신이 가능하다
        - 장점 : 외부파일처럼 유연하게 파일 사용이 가능, import 필요x
        - 단점 : 파일 최적화가 자동으로 이루어지지 않고, 경로 오타가 잦다
    
    */

    // 1. 흰색 하트 클릭 시, 하트가 꽉찬 하트로 변경 + 0개 -> 1개
    // 2. 꽉찬 하트 클릭 시, 하트가 흰색 하트로 변경 + 1개 -> 0개
    // 단, 사용하는 함수는 handleLike 라는 함수 1개, 사용하는 state는 2개
    // 완성한 사람은 좋아요가 눌려진 상태를 캡쳐해서 단톡방에 업로드


    const [emoji, setEmoji] = useState('🤍')
    const [likeNum, setLikeNum] = useState(0)


    const handleLike = () => {
        
      
        if (likeNum === 0){
            setLikeNum(1)
            setEmoji('💗')
        } else {
            setLikeNum(0)
            setEmoji('🤍')
        }
    }


  return (
    <div>
        {/* 1. src 폴더 */}
        {/* <img width='300px' src={img1}></img> */}

        {/* 2. public 폴더 */}
        <img width='300px' src="http://localhost:3000/img/img2.gif"></img>
        <p className='text'>
            <span onClick={handleLike}>{emoji} </span>
            <span>좋아요 {likeNum}개</span>

        </p>

    </div>
  )
}

export default Ex02