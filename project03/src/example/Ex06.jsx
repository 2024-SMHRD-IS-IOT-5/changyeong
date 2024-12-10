import React from 'react'
import Ex06Card from '../components/Ex06Card'
import data from '../json/ex06data.json'
import '../style/ex06.css'

const Ex06 = () => {

    console.log('data', data.result)

    let cardArr = data.result.map(item =>
                    <Ex06Card key={item.title} item={item}></Ex06Card>)
  

    // 실습) 각 가수가 나오는 카드를 만들어보자 !
    // 1. data 안을 잘 분석해서 사용 가능한 배열을 찾아낼 것
    // 2. map 함수를 통해서 Ex06Card를 반복 렌더링 해줄 것
    //    이 때, 각 요소에는 정보를 props로 넘긴다.
    //    힌트 * props는 객체데이터도 넘길 수 있다.
    //    오류가 뜰건데, key와 관련된 오류는 무시, 결과만 잘 나오면

    // 컴포넌트를 map으로 반복 렌더링 할 때, key값이 반드시 필요하다⭐⭐⭐
    // key값은 고유한 값을 가져야한다.

    /*
    console.log('data', data)

    console.log('data', data.result[0].title)
    console.log('data', data.result[0].birthYear)
    console.log('data', data.result[0].content)
    console.log('data', data.result[0].imgSrc)
    console.log('data', data.result[0].SNS)

    let iu = data.result[0]
    let suzy = data.result[1]
    let nayeon = data.result[2]

    let nameArr = [iu.title,suzy.title,nayeon.title]
    let newNameArr = nameArr.map(item => <h2>{item}</h2>)

    let yearArr = [iu.birthYear,suzy.birthYear,nayeon.birthYear]
    let newYearArr = yearArr.map(item => <h2>{item}</h2>)

    let contArr = [iu.content,suzy.content,nayeon.content]
    let newContArr = contArr.map(item => <h2>{item}</h2>)

    let imgArr = [iu.imgSrc,suzy.imgSrc,nayeon.imgSrc]
    let newImgArr = imgArr.map(item => item)

    let Sns = [iu.SNS,suzy.SNS,nayeon.SNS]
    let newSNSArr = Sns.map(item => item)
    */
    
    let filteredCard = cardArr.filter(item => item.birthYear < 1994)
    console.log('필터링 된 결과', filteredCard)

    let mappedCard = filteredCard.map(item => item)

    let filteredData = data.result.filter(item => item.birthYear <= 1994)
    console.log('filter', filteredData)

    let filteredCardArr = filteredData.map(item =>
      <Ex06Card key={item.title} item={item}></Ex06Card>
    )

  return (

    <div>
        <h1>MAP 실습</h1>
        <div className='map-container'>
        {cardArr}
        </div>

        

        <h1>나이가 94년생 이상인 사람만 출력해보자.</h1>
        <div className='map-container'>{filteredCardArr}</div>
    </div>

    /*
    <div>
        <h1>MAP 실습</h1>
        <Ex06Card newImgArr={iu.imgSrc} newNameArr={iu.title} newYearArr={iu.birthYear} newContArr={iu.content} newSnsArr={iu.Sns}></Ex06Card>
        <Ex06Card newImgArr={suzy.imgSrc} newNameArr={suzy.title} newYearArr={suzy.birthYear} newContArr={suzy.content} newSnsArr={suzy.Sns}></Ex06Card>
        <Ex06Card newImgArr={nayeon.imgSrc} newNameArr={nayeon.title} newYearArr={nayeon.birthYear} newContArr={nayeon.content} newSnsArr={nayeon.Sns}></Ex06Card>
    </div>
    */
  )
}

export default Ex06