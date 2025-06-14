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
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/certificate" element={<Certificate />}></Route>
            <Route path="/activities" element={<Activities />}></Route>
          </Routes>
      </main>
      </BrowserRouter>
    </>
  )
}

export default App
