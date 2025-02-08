import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Khatabook from './pages/Khatabook.'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/khatabook' element={<Khatabook/>} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
