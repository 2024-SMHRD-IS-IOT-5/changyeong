import React, { useRef } from 'react'

const Ex11 = () => {


    /* useRef
    - React hook의 한 종류로, Ref는 reference(참조)의 줄임말
    - React는 Class, Function 모두 사용 가능 
        -> state, context, ref 등의 기능이 함수형에서는 사용할 수 없음
    - 이 기능들을 함수형에서도 사용할 수 있도록 react가 만들어준 것 -> react hook
    - use로 시작하는 대부분의 기능 -> react hook

    - 바닐라스크립트에서 script에서 특정 DOM 요소에 접근한 것 처럼,
        React에서도 DOM요소에 접근할 수 있다.
    - 대표적으로 쓰이는 예시 : input 태그에 focusing
    */

    /* useRef 사용방법

    1. import 해오기
        - import {useRef} from 'react

    2. 변수 이름 할당
        - const 이름 = useRef()

    3. 참조할 요소에 ref 속성으로 연결
        - <input ref={이름}/>

    4. 이름.current -> 참조한 그 요소를 반환하게 됨
        - 마치 바닐라 script에서 document.getElementBy ~ 구문처럼 사용 가능
        - 이름.current.innerText : 컨텐츠 반환
        - 이름.current.value : 값 반환
        - 이름.current.속성이름 : 속성값 반환
        - 이름.current.style.css속성 : 디자인정보 반환
    
    */

    const focusRef = useRef()

    // ref를 이용해서 빈칸을 초기화하고 포커싱하는 작업을 해보자.
    const handleReset = ()=>{
        console.log('focusRef', focusRef.current)
        focusRef.current.value = ""
        focusRef.current.focus()
    }

  return (
    <div>
        <h1>useRef</h1>
        <input type='text' ref={focusRef}></input>
        <button onClick={handleReset}>RESET</button>
    </div>
  )
}

export default Ex11