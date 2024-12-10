import React from 'react'
import Ex06Card from '../components/Ex06Card'
import data from '../json/ex06data.json'
import '../style/ex06.css'

const Ex06 = () => {
  console.log('data',data)

  // 실습) 각 가수가 나오는 카드를 만들어보자! 
  // 1. data 안을 잘 분석해서 사용 가능한 배열을 찾아낼 것 
  // 2. map 함수를 통해서 Ex06Card를 반복 렌더링해줄 것 
  //    이 때, 각 요소에는 정보를 props 로 넘긴다. 
  //    힌트 * props 는 객체데이터도 넘길 수 있다.  
  //    오류가 뜰건데, key 와 관련된 오류는 무시 

  // 컴포넌트를 map으로 반복 렌더링 할때 ,key값이 만드시 필요하다 ★★★★★
  // key값은 고유한 값을 가져야 한다.

let cardArr = data.result.map(item =><Ex06Card key={item.title} item={item}></Ex06Card>)
  
let cardArray = data.result.filter(item => item.birthYear  <= "1994")
let mappedNum = cardArray.map(item => <Ex06Card key={item.title} item={item}></Ex06Card>)
  return (
    <div>
        <h1>MAP 실습</h1>
        <div className='map-container'>
            {cardArr}
        </div>

        <h1>나이가 94년생 이상인사람만 출력해보자.</h1>
        <div className='map-container'>
        {mappedNum}
        </div>
    </div>
  )
}

export default Ex06