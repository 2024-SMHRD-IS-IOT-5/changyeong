import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import About from './pages/About';
import MyPage from './pages/MyPage';
import Product from './pages/Product';

function App() {

  /* React-Router-Dom
   1) npm i react-router-dom 설치 
   2) router를 사용해줄 범위를 BrowserRouter라는 기능으로 감싸주기 
    -> 보편적으로 index.js 로 이동해서 <App/> 을 BrowserRouter로 감싸주기 
      "Type Error : Cannot read properties of undefined (reading 'pathname')"
    -> BrowserRouter를 감싸주지 않았기 때문에 생기는 오류, 라우팅 잘못한 경우 
    -> HTML5의 History API를 사용하여 URL과 UI를 동기화 시켜주는 기능 

    3) 페이지 만들기 
    - 페이지 역할을 해줄 컴포넌트 생성 
    - 컴포넌트를 요청할 조건 path (Routes, Route)
    - Routes : 여러 Route들을 감싸서 그 중 사용자 요청 조건에 맞는 Route 하나만 
              렌더링해주는 역할 (과거 ver에서는 Switch라는 이름으로 사용이 됨)
    
    - Route : 경로에 따른 컴포넌트 지정 
              > 필수속성 2가지 : path, element 
              > path(경로) : 사용자가 이렇게 요청했을 때~ 
              > element (컴포넌트) : 어떤 컴포넌트를 보여줄게! 
  */

  return (
    <div >
      <h1>React Router에 대해 알아보자!</h1>

      <Routes>
        {/* 사용자가 path 주소를 요청한다면, element에 있는 값을 반환해주겠다.*/}
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        <Route path='/product/:num' element={<Product/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
