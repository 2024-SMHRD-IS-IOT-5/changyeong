import React, { useState } from 'react'
import ColorList from '../components/Ex08/ColorList'
import ColorResult from '../components/Ex08/ColorResult'

import { ColorContext } from '../context/Ex08ColorContext'


const Ex08 = () => {

     /* Context란? 리액트 컴포넌트 간에 값을 전역적으로 공유할 수 있게 해주는 기능 
    
    Q. props로만 데이터를 전달했을 때 발생할 수 있는 문제는?
    A. 깊숙히 위치한 컴포넌트에 데이터를 전달해야하거나,
        자식에서 부모로 데이터 전달이 잦은경우
        => 여러 컴포넌트에 연달아 props를 설정 -> 실수가 잦고 불편하다. 
            => props drilling 

    그래서 context를 이용해서 상태를 전역적으로 관리해준다. 
    */

    /* Context 세팅 순서 

    1. context 파일을 만들어준다. (== 계좌생성)
        -context 폴더 내에 파일 생성
        -
        - export 

    2. context를 사용할 곳에 import 
        - 보통 상위 컴포넌트에 import 함 

    3. context Provider 만들어주기 
        - value 라는 속성을 사용, value 안에 우리가 주고받을 데이터를 씀 

    4. 데이터가 필요한 곳에서 useContext 선언 
        - "나 계좌에서 출금할게" == useContext 

    */

    const [choiceColor, setChoiceColor] = useState('orange')

  return (
    <ColorContext.Provider value ={{choiceColor, setChoiceColor}}>
        <div>
             <h1>색상 변경하기</h1>
             <ColorList/>
             <hr/>
             <h1>선택된 색상</h1>
             <ColorResult/>
        </div>
    </ColorContext.Provider>
  )
}

export default Ex08