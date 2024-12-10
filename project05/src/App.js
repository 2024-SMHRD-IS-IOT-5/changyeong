import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import { useEffect, useState } from 'react';
import api from './api';

function App() {

  // STEP 1 
  // 1. 저 정보를 담아줄 list 라는 배열 state를 선언 
  const [list, setList] = useState([])

  // 2. 화면 첫 렌더링이 완료 됐다면, "http://localhost:3000/bestList.json" 에서 정보를 가져온다 (axios, get방식)
  useEffect(()=>{
    //axios를 바로 사용해도 되지만, 다양한 기능을 쓰는방법이 있다
    api
    .get('/bestList.json')
    .then(res => setList(res.data.list))
  },[])
  // 3. 가져온 정보 중, 배열을 찾아서 해당 배열을 list 안에 세팅 
  // 4. 그 정보는 ProductList 컴포넌트의 props 로 보내준다 
  // ProductList.jsx 로 STEP 2 이동 

  

  

  return (
    <div className="container"> 
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/list' element={<ProductList list ={list}/>}></Route>
          <Route path='/detail/:num' element={<ProductDetail/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
