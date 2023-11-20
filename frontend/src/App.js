import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './signup';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Create';
import Update from './Update';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
