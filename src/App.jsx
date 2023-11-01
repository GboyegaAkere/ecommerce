import React from 'react'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'



function App() {
  return (
    <>
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App