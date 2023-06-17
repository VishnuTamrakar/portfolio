import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from "../common/Footer"
import { Header } from "../common/Header"
import { About } from "./About"
import { Blog } from "./Blog"
import { Contact } from "./Contact"
import { Portfolio } from "./Portfolio"
import { Services } from "./Services"
import { Testimonials } from "./Testimonials"
import { Home } from "../home/Home"
 const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/skill' element={<Services/>} />
          <Route  path='/portfolio' element={<Portfolio/>} />
          <Route  path='/testimonials' element={<Testimonials/>} />
          <Route  path='/blog' element={<Blog/>} />
          <Route  path='/contact' element={<Contact/>} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages;