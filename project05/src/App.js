import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import { useEffect, useState } from 'react';
import api from './api';

function App() {

  // STEP 1
  // 1. 저 정보를 담아줄 list 라는 배열 state를 선언 (지역적으로밖에 못쓰니까 전역적으로 쓸수있게)
  const [list, setList] = useState([])

  // 2. 화면 첫 렌더링이 완료 됐다면, "http://localhost:3000/bestList.json" 에서 정보를 가져온다 (axios, get방식)
  useEffect(()=>{
    // axios를 바로 사용해도 되지만, 다양한 기능을 쓰는 방법이 O
    api
    .get('/bestList.json')
    .then(res => setList(res.data.list))

  },[])

  // 3. 가져온 정보 중, 배열을 찾아서 해당 배열을 list 안에 세팅
  // 4. 그 정보는 ProductList 컴포넌트의 props 로 보내준다
  // ProductList.jsx STEP 2 이동


  return (
    <div className='container'>
      <Header/>
        <Routes>
          {/* 사용자가 path 주소를 요청한다면, element에 있는 값을 반환해주겠다. */}
          <Route path='/' element={<Main/>}></Route>
          <Route path='/list' element={<ProductList list={list}/>}></Route>
          <Route path='/detail/:num' element={<ProductDetail/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
