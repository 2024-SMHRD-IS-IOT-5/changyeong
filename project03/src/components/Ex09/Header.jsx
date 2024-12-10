import React, { useContext } from 'react'
import { ModeContext } from '../../context/Ex09ModeContext'


const Header = () => {

    const {isDark} = useContext(ModeContext)
    console.log('isDark', isDark)

  return (
    <div 
        className='header'
        style={{
          backgroundColor : isDark ? 'white' : 'skyblue',
          color : isDark ? 'black' : 'white'

        }}>
      <h1>스마트인재개발원</h1>
    </div>
  )
}

export default Header