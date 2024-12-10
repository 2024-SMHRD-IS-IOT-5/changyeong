import React, { useContext } from 'react'
import { ColorContext } from '../../context/Ex08ColorContext'

const ColorList = () => {

    const { setChoiceColor}=useContext(ColorContext)

    let list = ['red','orange','yellow','green','blue']

  return (
    <div style={{display :'flex'}}>
      {list.map(item => 
         <div 
         onClick={(e)=>{
            setChoiceColor(e.target.style.backgroundColor)
         }}
         key={item}
         style={{
          width : '100px',
          height : '100px',
          backgroundColor : item
         }}></div>
      )}
    </div>
  )
}

export default ColorList