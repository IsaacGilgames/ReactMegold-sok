import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css'
import HomePage from'./components/homePage/homePage'
import Kinalat from './components/kinalat/kinalat'


function App() {
  return (
   <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kinalat" element={<Kinalat />} />
        </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App;
