import React, { useContext } from 'react'
import { ModeContext } from '../../context/Ex09ModeContext'



const Content = () => {

  const { isDark } = useContext(ModeContext)
  return (
    <div
        className ='content'
        style={{ 
          backgroundColor : isDark ? 'black' : 'white',
          color : isDark ? 'white' : 'black'
        }}
        >
        <h1>지각하지 않기! 결석하지 않기!</h1>
    </div>
  )
}

export default Content