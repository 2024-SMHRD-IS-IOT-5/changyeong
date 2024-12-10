import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// ======================= [STEP 01. STATE] ======================
// 01. useState 개념 + react Event 사용 
// import App from './example/Ex01';

// 02. useState 좋아요 예제 + 이미지 띄우는 방법 
// import App from './example/Ex02';

// 02 혼자 풀어보기
// import App from './example/Ex02_p';

// 03. useState 랜덤게임 예제 
// import App from './example/Ex03';

// 03 혼자 풀어보기
//import App from './example/Ex03_p';

// 04. useState 주사위게임 실습 (+ 웹폰트 등록, 부트스트랩 사용방법)
// import App from './example/Ex04';

// 04 혼자 풀어보기 
// import App from './example/Ex04_p';


// ======================= [STEP 02. 배열함수를 위한 렌더링] ======================

// 05. map함수 기초,filter 함수 기초
//import App from './example/Ex05';

// 06. map함수 실습(+card,json 파일을 가져오기)
// import App from './example/Ex06';


// ======================= [STEP 03. 양방향 데이터 전달] ======================
// 07. 함수를 이용한 양방향 데이터 전달
// 

// 08. context API (useContext)
// import App from './example/Ex08';

// 09. context API 실습 (모드변경)
//import App from './example/Ex09'

// 10. Mini Project - Todo List 만들기!
//import App from './example/Ex10'

// ======================= [STEP 04. React에서 사용하는 DOM, useRef] ======================

//11. useRef 개념, react hook
//import App from './example/Ex11'

//12. useRef 실습 ( 도형의 크기 조절)
//import App from './example/Ex12'


// ======================= [STEP 05.LIfecycle & useEffect] ======================

//13. React Class Component
//import App from './example/Ex13'

//14. Funtion Component에서 사용하는 LIfecycle 대체제 useEffect
//import App from './example/Ex14'

//15. useEffect예제 - 참참참 게임
//import App from './example/Ex15'

// 16.useEffect를 이용한 oopenAPI 활용법
// import App from './example/Ex16'

// 17.useEffect를 이용한 oopenAPI 실습 (날씨)
import App from './example/Ex17'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
