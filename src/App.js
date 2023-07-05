
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Product from './page/Product';
import ProductDetail from './page/ProductDetail';
import Navbar from './componets/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


function App() {
  const [authenticate,setAuthenicate]=useState(false);//true 로그인 false 로그아웃
  useEffect(()=>{
    console.log("로그인")
  },[authenticate]);
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenicate = {setAuthenicate}/>
    <Routes>
      <Route path='/'element={<Product/>}/>
      <Route path='/login'element={<Login setAuthenicate = {setAuthenicate} />}/>
      <Route path='/product/:id'element={<PrivateRoute authenticate={authenticate}/>}/>
    </Routes>
    </>
    
  );
}

export default App;
