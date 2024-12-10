import "./App.css"
function App() {

/* JSX 
- 하나의 파일 안에 HTML, JS를 동시에 작성할 수 있는 확장자 
- 가독성이 좋고, 작성이 쉽다 
- 보통 확장자를 .jsx 혹은 .js 둘 중 하나 사용 
- return 문 내에 HTML 문법 작성 

[JSX 문법]
1. 여러 요소가 있다면 반드시 하나의 부모요소로 감싸줄 것 
   이 때, 감싸는 태그는 <div> 태그가 굳이 아니어도 가능 
   <></> <- 공태그로 감싸는 것도 가능 

2. 만약 return 안에서 JS 문법을 사용하고 싶다면 {} 안에 작성 가능 
   표현식 사용 가능! 
   - 단, if문 사용 불가 

   만약 조건에 대한 결과값이 1개라면 &&연산자 (2-2참고)
        조건에 대한 결과값이 2개라면 삼항연산자 (2-1참고)
        조건에 대한 결과값이 3개 이상이라면, return 문 밖에서 if 사용 

3. 기존 문법과 다른 문법 
  3-1) class 대신 className 사용 
  3-2) HTML 태그 사용 시, 무조건 소문자만 사용 
    -> 대문자는 컴포넌트로 활용하기 때문에! 
  3-3) 끝태그 생략 불가 (content가 없더라도)
    -> <태그></태그>가능
    -> <태그 /> 가능
    -> <태그> 불가능

 4. 디자인 
      4-1) 객체 형태로 style 삽입 
      4-2) css에 작성 후 import 
       
*/

let name = "양상권"
let date = "11월 14일"
let sub = "리액트"

if(name === "선영표"){
 sub = "리액트"
} else if (name === "정형"){
 sub = "노드"
} else if (name === "양상권"){
 sub = "자바스크립트"
}

//4-1
let blueStyle = {
  color : "blue"
}

return (
 <>

   {/* 2-1) 삼항연산자 사용 */}
   {name === "선영표" 
     ? <div className="App">{name}의 {sub} 홈페이지에 오신걸 환영합니다!</div>
     : <div>{name}님, {sub} 홈페이지는 다음에 다시 방문해주세요. </div>
   }
   
   {/* 2-2) && 연산자 사용 */}

   <div style={blueStyle}>오늘은 {date} 즐거운 목요일입니다~ </div>
   {date === "11월 14일" && <p className="red">수험생분들, 수능 파이팅!!</p>}
 </>
);
}

export default App;
