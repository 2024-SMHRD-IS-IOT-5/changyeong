import React from 'react'

const Ex04Board = ({num,name}) => {
  return (
    <div className='board-area'>
        <h3>{name}</h3>
        <img src={`http://localhost:3000/img/diceImg/dice${num}.png`}/>
    </div>

  )
}

export default Ex04Board