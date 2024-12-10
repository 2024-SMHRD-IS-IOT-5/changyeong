import React from 'react'

const Ex05 = () => {

    let numArr = [1,2,3,4,5]

    //만약 numArr 라는 배열 가지고, X10 을 하는 규칙을 적용시킨
    // 새로운 배열을 만들고 싶다면? => map함수

    let newNumArr = numArr.map(item => item*10)
    console.log('새로운 숫자 배열',newNumArr)

    /** map 사용방법
     * 기존 배열.map(새로운 배열을 꾸릴조건)
     * map안에는 함수형태가 들어갈것
     * 원래형태 : map((매개변수)=>{return 조건~})
     * 1단계 축약 : map((매개변수)=>(조건~))
     * 2단계 축약, 매개변수도 1개, 조건도 1줄 => map(매개변수=>조건)
    */
   
    let trArr = ['손병권', '선영표', '정형', '양상권']
    // trArr 배열을 이용해서 각 선생님들 뒤에 "선생님"이라는 글자를 붙인
    // newTrArr 배열을 생성해보자. => 다 되면 console 캡쳐 업로드
    let newTrArr = trArr.map(name =><h1>{name} 선생님</h1>)
    console.log('선생님',newTrArr)

    /*
        - map함수는 내가 작성한 함수에 따른 새로운 배열을 반환한다
        - 이 때 , 단순히 글자를 더하거나 숫자르르 곱 하는 데이터 배열도 사용할수 있지만 
            태그나 , 컴포넌트 배열로 만들 경우 반복되는 구성을 쉽게 꾸릴 수 있다.
     */


    let lunchList = ['행복한 담벼락','그냥집밥','시루시루','김밥집']
    let newLunchList = lunchList.map(item => <li>{item}</li>)

   //===========================================

   // Filter 함수 : 주어진 함수의 테스트르르 통과하는 요소들을 모아서 새로운 배열 반환
   let numArray = [1,18,26,54,77,99]
   let filteredNum = numArray.filter(item => item > 50)
   console.log('필터링 된 결과',filteredNum)

   let mappedNum = filteredNum.map(item => <button>{item}</button>)

  return (
    <div>

      {newTrArr}
      
        <h1>오늘의 점심메뉴!</h1>
        <ul type="square">{newLunchList}</ul>

        {mappedNum}
    </div>
  )
}

export default Ex05