import './App.css';
import React from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={ <Contact/> } />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
