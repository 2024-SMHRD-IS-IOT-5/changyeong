import React, { useRef } from 'react'
import'../style/ex12.css'

const Ex12 = () => {

  // 1. 버튼 클릭 시, ckBtn 이라는 함수 실행 
    //     이벤트 타겟을 통해 작게, 원본, 크게인지 구별 

    // 2. 작게라면 sqaure의 width, height를 100으로 
    //     원본이라면 square의 width, height를 200으로 
    //     크게라면 square의 width, height 300으로 

    // 3. square를 참조하는 ref 만들기! 

    // +) 응용 - 함수까지 새로 만들어보기! 
    // 다 된 사람은 '작게'를 클릭해서 캡쳐해서 업로드! 
  
  const divRef = useRef()
  
  
    const changeSize =(size)=>{
      divRef.current.style.width = size+'px'
      divRef.current.style.height = size+'px'
  }

  const ckBtn = (e)=>{
      console.log('ckBtn', e.target.innerText)
      if(e.target.innerText === "작게"){
        changeSize(100)
      }else if(e.target.innerText === "원본"){
        changeSize(200)
      }else{
        changeSize(300)
      }
  }
  
  return (
    <div className='container'>
      <button onClick={ckBtn}>작게</button>
      <button onClick={ckBtn}>원본</button>
      <button onClick={ckBtn}>크게</button>

      <div className='square' ref={divRef}></div>
    </div>
  )
}

export default Ex12