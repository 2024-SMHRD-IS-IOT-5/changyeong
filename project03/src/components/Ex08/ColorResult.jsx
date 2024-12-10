import React, { useContext } from 'react'
import { ColorContext } from '../../context/Ex08ColorContext'

const ColorResult = () => {

    // "저 데이터 보관함에서 데이터 꺼내쓸래요 or 새로운 데이터 넣어줄래요" == useContext
    // "어떤 계좌에서 데이터 꺼내실래요?" == useContext(계좌이름)
    // 객체 형태로 들어가 있는 state나 함수 뺼 때 {} <- 으로 꺼내오기

    const { choiceColor } = useContext(ColorContext)
    console.log('choiceColor',choiceColor)

  return (
    <div>
        <div style={{
            width : '100px',
            height : '100px',
            backgroundColor : choiceColor
        }}></div>
    </div>
  )
}

export default ColorResult