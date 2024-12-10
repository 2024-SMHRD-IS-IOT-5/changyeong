import React from 'react'
import Ex04Board from '../components/Ex04Board'
import '../style/ex04.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Ex04_p = () => {
    return (
        <div className='box'>
            <h1>주사위 게임</h1>
            <div>
                <Button variant="secondary">던지기</Button>
                <Button variant="danger" >RESET</Button>
            </div>

            <div className='board-container'>
                <Ex04Board></Ex04Board>
            </div>

            <h1>승리!</h1>



        </div>
    )
}

export default Ex04_p