import React, { useState } from 'react'

const Ex07SubItem = ({changeText}) => {

    const [inputTxt, setInputTxt] = useState('')

  return (
    <div>
        <input type='text' onChange={(e)=>{setInputTxt(e.target.value)}}></input>
        <button onClick={()=>{changeText(inputTxt)}}>데이터 보내기</button>
    </div>
  )
}

export default Ex07SubItem