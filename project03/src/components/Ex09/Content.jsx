import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { ModeContext } from '../../context/Ex09ModeContext'

const Content = () => {

    // const {darkmode} = useContext(createContext)
    // console.log('darkmode', darkmode)

    const {isDark} = useContext(ModeContext)


  return (
    <div className='content'
        style={{
          backgroundColor : isDark ? 'black' : 'white',
          color : isDark ? 'white' : 'black'
        }}
    >
        {/* <div style={{
            backgroundColor : 'green'
        }}>
        </div> */}
        <div>지각하지 않기! 결석하지 않기!</div>
        
    </div>
  )
}

export default Content