import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({ item }) => {

  // console.log('받아온 item', item)

  // STEP 3
  // 1. ProductList에서 받아온 정보를 가지고 화면 구성
  // 2. 가장 큰 부모 className product-container
  // 3. 그 안에 <img> (너비 100px), 아이템 제목 p태그, 아이템 가격 p태그

  const nav = useNavigate()

  return (
    <div className='product-container' onClick={()=>{nav(`/detail/${item.no}`)}}>
      <img width="100px" src={item.src}></img>
      <p>{item.title}</p>
      <p>{item.price}원</p>

    </div>
  )
}

export default ProductItem