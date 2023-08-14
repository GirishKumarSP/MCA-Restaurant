import './App.css';
import React, { useState } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
// import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import NoteState from './context/notes/NoteState';
import Notes from './components/Notes';
import Alert from './components/Alert';
import Login from './components/Login';
import Signin from './components/Signin';
import Reservation from './components/Reservation';
import DishList from './components/DishList';
import Confirmatoin from './components/Confirmatoin';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    console.log("this is app.js",message, type)
      setAlert({
        message: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  return (
    <div className="App ">
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <Routes>
            {/* <Route path="/" element={<Banner />} /> */}
            <Route path="/" element={<DishList/>} />
            {/* <Route path="/" element={<Confirmatoin/>} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notes" element={<Notes showAlert={showAlert} />} />
            <Route path="/login" element={<Login showAlert={showAlert}/>} />
            <Route path="/signin" element={<Signin showAlert={showAlert}/>} />
            <Route path="/reservation" element={<Reservation/>} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
