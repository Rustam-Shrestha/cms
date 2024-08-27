//import react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { About } from './pages/About';
import Home from '../src/pages/Home/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    {/* create router here */}
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
    </BrowserRouter>
    );
  
}

export default App
