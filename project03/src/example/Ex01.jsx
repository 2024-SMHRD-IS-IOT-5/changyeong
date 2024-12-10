import React from 'react'
import { useState } from 'react'

const Ex01 = () => {

    /* React Event
    1. 이벤트를 걸어줄 요소에 onClick 속성 입력 
    2. {} : 함수 형태의 값을 전달 
        예) {함수이름}
            {()=>{}}
    3. DOM 요소에만 이벤트를 설정할 수 있다. 
        => 내가 만든 컴포넌트에 이벤트 설정 X 
        => 만약 이벤트를 걸고 싶다면 들어가서 컴포넌트 내 div에 이벤트걸기
    */

    
    /* State
        - 컴포넌트 내부에서 관리되는 변경이 가능한 데이터
        - 일반변수와 다르게 값이 변하면 그 즉시 화면이 다시 렌더링

        [사용방법]
        import { useState } from 'react';
        const [ state이름, setState이름] = setState(초기값)

        - 값 변경시킬때는
        setState이름(변견시킬값)

    */

    // Case 1)변수 사용
    //let num1 = 0    
    
    //Case 2) state 사용
    const [num2, setNum2] = useState(0)

    const increase = (plusNum)=>{
        //console.log('increase func');
        
        //num1 += 1
        //console.log('num1', num1);

        setNum2(num2+plusNum);
        
    }
    const decrease = (minusNum)=>{
        setNum2(num2-minusNum);
    }
  return (
    <div>
        <p>{num2}</p>
        <button onClick={()=>{increase(1)}}>+1</button>
        <button onClick={()=>{decrease(1)}}>-1</button>
        <button onClick={()=>{increase(5)}}>+5</button>
        <button onClick={()=>{decrease(5)}}>-5</button>
    </div>
  )
}

export default Ex01