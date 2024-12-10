import React from 'react'
import Ex07SubItem from '../components/Ex07SubItem'
import { useState } from 'react'

const Ex07 = () => {

    /* 리액트는 단방향 데이터 흐름을 가지고 있다. (oneway reactive data flow)
    1) 부모 -> 자식 : props를 사용
    2) 자식 -> 부모 : 불가능
        - 부모가 자식에게 props로 Function을 전달
        - 자식은 부모에게 주고자하는 데이터를 함수의 매개변수에 입력
        - 부모의 함수는 매개변수를 통해 데이터 전달 받기 완료!
    
    */

        const [subData, setSubData] = useState()
        const changeText = (text)=>{
            console.log('changeText Func', text)
            setSubData(text)
        }

  return (
    <div>
        <h2>컴포넌트끼리 값 전달을 해보자</h2>

        <p>하위 컴포넌트에서 넘어온 데이터 : ABCD</p>
        <Ex07SubItem changeText={changeText}/>
    </div>
  )
}

export default Ex07