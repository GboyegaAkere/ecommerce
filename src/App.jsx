import React from 'react'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Login from './auth/Login'
import { AnimatePresence } from 'framer-motion'
import Register from './auth/Register'
import Reset from './auth/Reset'




function App() {
  return (
    
    <AnimatePresence>
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/reset' element={<Reset/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </AnimatePresence>
  
  )
}

export default App