import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Certificate from './pages/Certificate'
import Activities from './pages/Activities'
import './App.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/certificate">Certificate</Link></li>
            <li><Link to="/activities">Awards & Activities</Link></li>
          </ul>
        </nav>
      </header>
      <main>
          <Routes>                                           {/* 총 3개의 페이지를 라우팅으로 구현 */}
            <Route path="/" element={<Home />}></Route>      {/* 기본 페이지는 Home이 나오게 설정 */}
            <Route path="/certificate" element={<Certificate />}></Route>
            <Route path="/activities" element={<Activities />}></Route>
          </Routes>
      </main>
      </BrowserRouter>
    </>
  )
}

export default App
