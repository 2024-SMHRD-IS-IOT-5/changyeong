import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../style/ex17.css'
import { Button } from 'react-bootstrap';
import axios from 'axios'

const Ex17 = () => {

    /* url 에 있는 데이터를 가져와서 도시별 세팅을 해보자. 
        조건1) 화면이 처음 렌더링 됐을 때, gwangju에 대한 데이터가 화면에 뜬다. 
        조건2) 버튼을 클릭했을 때, 내가 누른 그 버튼에 대한 데이터가 화면에 뜬다. 
        
        * 우리가 쓰는 함수 : getData(), handleCity()
        * 사용하는 state : city, temp, cloud
        
        1. 화면이 최초 렌더링 되었을 때, getData를 호출한다. 
            - city의 초기값은 뭘까? 
        2. getData호출 시, url을 선언하고 axios를 통해 데이터를 불러온다
            - url : 카톡 참조 
            - axios 방식 get 
            - console로 데이터 확인해보기 {} 이용하기 
        3. 넘어오는 데이터에 따라 state를 세팅 
            - 온도 : 내가받아온 온도 - 273 = 섭씨온도 
            - 구름의 양 
                구름의 양 > 90 : 매우 흐림
                구름의 양 > 60 : 흐림 
                구름의 양  > 30 : 약간 흐림 
                나머지 : 맑음 
        4. 버튼 클릭 시, handleCity 함수 실행 
        5. 내가 누른 그 버튼의 대한 데이터로 city를 세팅하고, 
            getData에도 영향이 가도록 할 것 

    */
            const [city, setCity] = useState('gwangju')
            const [temp, setTemp] = useState()
            const [cloud, setCloud] = useState()
        
            const cityList = ['Auckland', 'London', 'Seoul'];
        
            const getData = ()=>{
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=08ff855ec12eff8a1ca99e87cd89eff7`
                axios.get(url)
                .then(res => {
                    console.log(res.data.clouds.all)
                    setTemp(parseInt(res.data.main.temp-273))
        
                    if(res.data.clouds.all > 90){
                        setCloud('매우 흐림')
                    } else if (res.data.clouds.all > 60){
                        setCloud('흐림')
                    } else if (res.data.clouds.all > 30){
                        setCloud('약간 흐림')
                    } else {
                        setCloud('맑음')
                    }
                })
            }
            const handleCity = (e)=>{
                setCity(e.target.innerText)
            }
        
            useEffect(()=>{
                getData()
            },[city])
        
            return (
                <div className='weather-container'>
                    <div className='weather-item'>
                        <h1>오늘의 날씨</h1>
                        <div className='weather-data'>
                            <h3>{city}</h3>
                            <h1>{temp}°C</h1>
                            <h4>{cloud}</h4>
                        </div>
                        <div>
                            {/* 예시 버튼 */}
                            {cityList.map(item => 
                                <Button variant='light' onClick={handleCity}>{item}</Button>
                            )}
                        </div>
                    </div>
                </div>
              )
            }
            
            export default Ex17