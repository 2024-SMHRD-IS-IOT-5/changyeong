import React from 'react'

const Ex05 = () => {

    let numArr = [1,2,3,4,5]

    // 만약 numArr 라는 배열을 가지고, X10을 하는 규칙을 적용시킨
    // 새로운 배열을 만들고 싶다면? => map 함수

    let newNumArr = numArr.map(item => item*10)
    console.log('새로운 숫자 배열', newNumArr)

    /** map 사용 방법
     * 기존배열.map(새로운배열을꾸릴조건)
     * map 안에는 함수형태가 들어갈 것
     * 원래 형태 : map((매개변수)=>{return 조건~})
     * 1단계 축약 : map((매개변수)=>(조건~))
     * 2단계 축약, 매개변수도 1개 조건도 1줄 => map(매개변수=>조건)
     */

    let trArr = ['손병권', '선영표', '정형', '양상권']
    // trArr 배열을 이용해서 각 선생님들 뒤에 "선생님"이라는 글자를 붙인
    // newTrArr 배열을 생성해보자. => 다 되면 console 캡쳐 업로드

    let newTrArr = trArr.map(item => <h1>{item} 선생님</h1>)
    console.log('선생님', newTrArr)

    /*
        - map 함수는 내가 작성한 함수에 따른 새로운 배열을 반환한다
        - 이 때, 단순히 글자를 더하거나 숫자를 곱하는 데이터 배열도 사용할 수 있지만
          태그나, 컴포넌트 배열로 만들 경우 반복되는 구성을 쉽게 꾸릴 수 있다
     */


    let lunchList = ['과자', '밥', '빵', '아이스크림']
    let newLunchArr = lunchList.map(item => <li>{item}</li>)
    console.log('점심', newLunchArr)

    // =======================================
    
    // Filter 함수 : 주어진 함수의 테스트를 통과하는 요소들을 모아서 새로운 배열 반환
    let numArray = [5,9,10,30,98]
    let filteredNum = numArray.filter(item => item < 50)
    console.log('필터링 된 결과', filteredNum)

    let mappedNum = filteredNum.map(item => <button>{item}</button>)
    



  return (
    <div>
        <h1>오늘의 점심메뉴</h1>
        <ul type="square">{newLunchArr}</ul>


        {mappedNum}
    </div>
  )
}

export default Ex05