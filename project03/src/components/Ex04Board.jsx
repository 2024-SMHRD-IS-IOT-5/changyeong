import React from 'react'

const Ex04Board = ({num,name}) => {
  return (
    <div className='board-area'>
        <h3>{name}</h3>
        <img src={`/img/diceImg/dice${num}.png`}/>
    </div>
  )
}

export default Ex04Board