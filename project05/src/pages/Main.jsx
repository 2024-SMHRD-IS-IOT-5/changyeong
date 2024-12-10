import React from 'react'
import { Link } from 'react-router-dom'


const Main = () => {
  return (
    <div className='main-container'>
      Main
      <hr/>
          <Link to="/productlist">Page</Link>
    </div>
  )
}

export default Main