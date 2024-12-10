import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ProductItem from '../components/ProductItem'

const ProductList = ({list}) => {

    // STEP 2 시작
    // 1. App.js 에서 props로 보내온 정보를 이곳에서 받아준다.
    // console.log('받아온 list', list)

    // 2. 받아온 list로 map 함수를 사용해 반복된 ProductItem을 렌더링해준다
    // 3. 이 때, 각 Item 에게 필요한 것은 객체 전체이므로, 객체 하나를 item으로 보내준다. 
    // STEP 3는 ProductItem으로 이동 


    let { num } = useParams()

    const [query, setQuery] = useSearchParams()
    console.log('query',query.get('best'))
    console.log('query',query.get('new'))

  return (
    <div className='list-container'>
        {list.map(item => <ProductItem key={item.no} item={item}/>)}
    </div>
  )
}

export default ProductList