import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Ex16 = () => {

    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=009b639e013bb59e18404834ecf009b8&targetDt=20241125"


    /** 비동기 통신을 통해 데이터를 가져와보자.
     *  => 생성자 위치나 렌더링 위치에서는 절대 비동기 통신을 하지 않도록 할 것
     *  => useEffect, 이벤트 함수에서만 가져올 것
     * 
     *  1. Fetch
     *      - 장점 : JS 내장 라이브러리, 별도의 설치가 필요하지 않음
     *      - 단점 : 기능이 단조로움, json 형태로 변환작업이 필요함

     *  2. Axios
     *      - 장점 : 기능이 다양함
     *      - 단점 : 별도의 설치 O
     * 
     */
  

    const [list, setlist] = useState([])


    const getDataFetch = ()=>{
        fetch(url)
        .then(res => res.json())
        .then(res => 
            setlist(res.boxOfficeResult.weeklyBoxOfficeList)
        )
    }

    const getDataAxios = ()=>{
        // 1. 설치 : npm i axios
        // 2. import axios from 'axios'
        axios.get(url)
        .then(res => (setlist(res.data.boxOfficeResult.weeklyBoxOfficeList)))
    }
    
    useEffect(()=>{
        // 데이터 가져오기!
        
        // Case 1) Fetch
        // getDataFetch()

        // Case 2) Axios
        getDataAxios()
    },[])  
  return (
    <div>
        <h1>영화순위</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>순위</th>
                    <th>영화이름</th>
                    <th>개봉일</th>
                    <th>신규&기존</th>
                </tr>
            </thead>
            <tbody>
                {list.map(item => 
                    <tr key={item.rnum}>
                        <td>{item.rnum}위</td>
                        <td>{item.movieNm}</td>
                        <td>{item.openDt}</td>
                        <td>{item.rankOldAndNew}</td>
                    </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Ex16