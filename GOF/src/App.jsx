import { useState } from 'react'
import Home from './components/Home/Home'
import "./bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Table from './components/Table/Table'
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/szereplok' element={<Table/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
