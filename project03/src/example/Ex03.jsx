import React from 'react'
import { useState } from 'react'

const Ex03 = () => {
    const [ranNum, setRanNum] = useState(0)
    const [userNum, setUserNum] = useState(0)

    console.log('랜덤한 숫자 추출', parseInt(Math.random()*3)+1)

    // 1. 랜덤한 숫자를 1~3 사이로 추출해준다. 
    // 2. 사용자가 누른 버튼의 숫자를 내가 선택한 숫자로 지정해준다. 
    //  함수의 이름 : btnCk 
    //  => 매개변수안에 event를 넣고, 출력해보면 => event.target
    // 3. 그 숫자가 같으면 사용자의 승리, 그렇지 않으면 패배 
    // 단, 조건문에서 if문을 사용하지 않고 return 문 안에서 삼항연산자를
    //     사용해서 결과를 내라. 

//let rn = parseInt(Math.random() * 3) + 1

    const btnCk =  (event) => {
    console.log('btnCk 함수', event.target.innerText)
    setRanNum (parseInt(Math.random()*3)+1)
    setUserNum (event.target.innerText)
}



  return (
    <div>
        <p>내가 선택한 숫자 : {userNum}</p>
        <p>랜덤한 숫자 : {ranNum}</p>
        <div>
            <button onClick={btnCk}>1</button>
            <button onClick={btnCk}>2</button>
            <button onClick={btnCk}>3</button>
        </div>

        {userNum == ranNum ?
            <h2>정답입니다</h2>
            :<h2>오답입니다</h2>
        }
    </div>
  )
}

export default Ex03;




