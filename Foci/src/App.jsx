import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./components/homepage"
import Versenyzok from "./components/Versenyzok"
import "./bootstrap.min.css"
import './App.css'

function App() {
  

  return (
   <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/resztvevok" element={<Versenyzok />}></Route>
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App
