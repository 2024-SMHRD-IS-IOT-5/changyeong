import React, { useEffect, useState } from 'react'

const Ex14 = () => {

    // 1. 생성자 대체
    // => 화면을 구성하기 위한 준비물 선언 (state, 변수 ..)
    console.log('1. constructor 대체')
    const [num, setNum] = useState(0)

    /* Class Component 

    1. constructor 생성자
    2. render 화면렌더링
    3. componentDidMount 화면 렌더링 직후
    4. componentDidUpdate state 변화 직후 
    
    */

    // 3. componenetDidMount 대체
    // - 사용방법 : useEffect(콜백함수, 배열)
    // - 콜백함수 : 그 시점에 실행할 내용
    // - 배열 : 비워놓으면 componentDidMount 대체
    //          어떤 state값을 채워두면 componentDidUpdate 대체
    useEffect(()=>{
        console.log('3. mount 완료')
    }, [])

    useEffect(()=>{
        console.log('4. num 변화 완료')
    },[num])

  return (
    <div>
        {console.log("2. render 대체")}
        <h1>Counter {num}</h1>
        <button onClick={()=>{setNum(num+1)}}>+1</button>
    </div>
  )
}

export default Ex14