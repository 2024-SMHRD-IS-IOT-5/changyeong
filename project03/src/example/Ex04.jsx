import React from 'react'
import Ex04Board from '../components/Ex04Board'
import '../style/ex04.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'


const Ex04 = () => {



    /* 주사위게임을 해보자! 
        1. 유저는 '던지기'버튼을 클릭 시, throwDice 함수를 실행시킨다
        2. 이 때, 주사위의 눈이 둘 다 랜덤으로 표시된다
        3. 나와 상대의 주사위 눈을 비교한다
            - 내가 더 크면 승리, 같거나 작으면 패배
        4. RESET 버튼 클릭 시, resetDice 함수를 실행시킨다
        5. resetDice는 모든 주사위의 눈을 1로 만든다

        - 실력 UP) makeRandom 이라는 함수를 만들어서 랜덤한 수를 쉽게 뽑아내게 할 수 있음
    */

    
        const [myDice, setMyDice] = useState(1);
        const [comDice, setComDice] = useState(1);

        const makeRandom = () => {
            return parseInt(Math.random()*6)+1
        }


        const throwDice = () => {
            console.log('makeRandom', makeRandom())
            setMyDice(makeRandom())
            setComDice(makeRandom())
        }

        const resetDice = () => {
            setMyDice(1)
            setComDice(1)
        }


  return (
    <div className='box'>
        <h1>주사위 게임</h1>
        <div>

            <Button variant="dark" onClick={throwDice}>던지기</Button>
            <Button variant="light" onClick={resetDice}>RESET</Button>
        </div>

        <div className='board-container'>
            <Ex04Board name='나' num={myDice}></Ex04Board>
            <Ex04Board name='컴퓨터' num={comDice}></Ex04Board>
        </div>

        {myDice > comDice
        ? <h1>승리!</h1>
        : <h1>패배...</h1>
        }

    </div>
  )
}

export default Ex04