import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/bootstrap.min.css'
import Regist from './components/Regist/Regist'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/regisztráció' element={<Regist/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
