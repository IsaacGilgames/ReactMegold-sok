import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './bootstrap.min.css'
import Openpage from "./components/openpage/openpage2"
import Versenyzok from './components/tablazat/Versenyzok'
import Urlap from './components/urlap/Urlap';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Openpage/>}></Route>
            <Route path="/versenyzok" element={<Versenyzok />}></Route>
            <Route path="/regisztracio" element={<Urlap />}></Route>
            
          </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;