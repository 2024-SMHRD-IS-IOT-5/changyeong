import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../api'

const ProductDetail = () => {

  const {num} = useParams()
  console.log('params num', num)

  const [obj, setObj] = useState({})

  useEffect(()=>{
    api
    .get('bestList.json')
    .then(res => {
      console.log('res', res.data.list.filter(item => item.no == num)[0])
      setObj(res.data.list.filter(item => item.no == num)[0])
    })
  },[])


  return (
    <div className='list-container'>
      <div className='detail-item'>
        <h3>{obj.title}</h3>
        <img width= "200px" src={obj.src}></img>
        <p>
          <span>가격 : {obj.price}원</span>
          <br/>
          {obj.delivery == "free"
          ? <span>배송비 무료</span>
          : <span>배송비 : {obj.delivery}원</span>
          }
        </p>

        <Link to="/list">목록으로 돌아가기</Link>
      </div>
    </div>
  )
}

export default ProductDetail