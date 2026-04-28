import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from'./components/homePage/homePage'


function App() {
  return (
   <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App;
