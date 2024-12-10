import React from 'react'
import img1 from '../img/img1.jpg'
import { useState } from 'react'


    // 1. 흰색 하트 클릭 시, 하트가 꽉찬 하트로 변경 + 0개 -> 1개 
    // 2. 꽉찬 하트 클릭 시, 하트가 흰색 하트로 변경 + 1개 -> 0개 
    // 단, 사용하는 함수는 handleLike 라는 함수 1개, 사용하는 state는 2개 
    // 완성한 사람은 좋아요가 눌려진 상태를 캡쳐해서 단톡방에 업로드 


const Ex02_p = () => {
 const [num1, setNum1] = useState('🤍')
 const [num2, setNum2] = useState(0)

const handLike = ()=>{
    if(num1 === '🤍'){
        setNum1 ('🧡')
        setNum2 (1)
    }else{
        setNum1 ('🤍')
        setNum2 (0)
    }
}


  return (
    <div>
        <img width='300px' src={img1}></img>

       <p className='text'>
            <span onClick={handLike}>{num1}</span>
            <span>좋아요 {num2}개</span>
        </p>
    </div>
  )
}

export default  Ex02_p