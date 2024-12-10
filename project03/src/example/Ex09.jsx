import React, { useState } from 'react'
import Header from '../components/Ex09/Header'
import Content from '../components/Ex09/Content'
import Footer from '../components/Ex09/Footer'
import '../style/ex09.css'
import { ModeContext } from '../context/Ex09ModeContext'


const Ex09 = () => {

  const [isDark, setIsDark] = useState(false)

  return (
    <ModeContext.Provider value={{isDark, setIsDark}}>
    <div className='page'>
        <Header/>
        <Content/>
        <Footer/>
    </div>
    </ModeContext.Provider>
  )
}

export default Ex09