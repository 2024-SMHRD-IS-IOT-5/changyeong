import React from 'react'
import Ex04Board from '../components/Ex04Board';
import '../style/ex04.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react'

/* 주사위 게임을 해보자! 
    1. 유저는 '던지기'버튼을 클릭 시, throwDice 함수를 실행시킨다. 
    2. 이 때, 주사위의 눈이 둘 다 랜덤으로 표시된다. 
    3. 나와 상대의 주사위 눈을 비교한다. 
        - 내가 더 크면 승리, 같거나 작으면 패배 
    4. RESET 버튼 클릭 시, resetDice 함수를 실행시킨다
    5. resetDice는 모든 주사위의 눈을 1로 만든다
*/

const Ex04 = () => {


    const [mynum, setMyNum] = useState(1)
    const [dnum, setDNum] = useState(1)
    const [result, setResult] = useState("시작")

    const makeRandom = ()=>{
        return parseInt(Math.random()*6)+1
    }

    const throwDice =  (event) => {
      console.log('throwDice 함수', event.target.innerText)
      setMyNum (makeRandom())
      setDNum (makeRandom())

      

    }
    const resetDice = () => {
      setMyNum(1);
      setDNum(1);
    
    }

  return (
    <div className='box'>
      <h1>주사위 게임</h1>
      <div>
        <Button variant="danger" onClick={resetDice}>RESET</Button>
        <Button variant="secondary" onClick={throwDice}>던지기</Button>
      </div>

      <div className='board-container'>
        <Ex04Board name="나" num={mynum}></Ex04Board>
        <Ex04Board name="컴퓨터" num={dnum}></Ex04Board>
      </div>
      
        {mynum > dnum
        ? <h1>승리</h1>
        : <h1>패배</h1>
        }
    </div>
  )
}
export default Ex04