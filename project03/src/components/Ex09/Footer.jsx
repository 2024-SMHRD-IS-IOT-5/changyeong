import React, { useContext } from 'react'
import { ModeContext } from '../../context/Ex09ModeContext'


const Footer = () => {


  const {isDark, setIsDark} = useContext(ModeContext)

  return (
    <div className='footer' 
    style={{
      backgroundColor : isDark ? 'black' : 'lightgray'
    }}>
        <button className='button' 
                onClick={ () => { setIsDark(!isDark) }
        }>Dark Mode</button>
    </div>
  )
}

export default Footer