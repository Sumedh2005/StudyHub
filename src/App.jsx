import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Academics from './components/Academics';
import Announcements from './components/Announcements';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
   <div className="main bg-gradient-to-t from bg-yellow-100 to-yellow-900 pt-10 h-screen ">
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
     
   </div>
   <About/>
   
   </>
  )
}

export default App