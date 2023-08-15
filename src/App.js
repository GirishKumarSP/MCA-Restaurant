import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from './context/notes/Notestate';
import Footer from './components/Footer';
import Alert from './components/Alert';

//user files
import Navbar from './components/Navbar';
import UserHome from './components/UserHome';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signin from './components/Signin';
import Reservation from './components/Reservation';
import DishList from './components/DishList';
import CheckOut from './components/CheckOut';
// import Confirmatoin from './components/Confirmatoin';

//notes
import Notes from './components/Notes';

//admin files
import AdminNavbar from './components/AdminNavbar';
import AdminDineinOrders from './components/AdminDineinOrders';
import AdminLogin from './components/AdminLogin';
import AdminSignin from './components/AdminSignin';
import Confirmatoin from './components/Confirmatoin';
import Feedback from './components/Feedback';
import AdminFeedback from './components/AdminFeedback';
import AdminHome from './components/AdminHome';
import DishIngredients from './components/DishIngredients';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    console.log("this is app.js", message, type)
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  //toggle between user and user profile
  //even after user navbar is set to true and displayed, once we verify in localstorage we get to know who was the previous user and set navbar accordingly
  const [isUserNav, setIsUserNav] = useState(true);


  const toggleNavbar = () => {
    setIsUserNav(prevState => !prevState);
    const loggedInType = localStorage.getItem("loggedIn");

    //we store the user identidy in localstorage because when we toggle we should get components of the perticular user
    if (loggedInType === "user") {
      localStorage.setItem("loggedIn", "admin");
      localStorage.removeItem('token');
    } else {
      localStorage.setItem("loggedIn", "user");
      localStorage.removeItem('Admintoken');
    }

  };

  useEffect(() => {
    // useeffect will run after all the components are rendered
    const loggedInType = localStorage.getItem("loggedIn");
    if (loggedInType === "user") {
      setIsUserNav(true)
    }else{
      setIsUserNav(false)
    }
  }, [])


  return (
    <div className="App ">
      <NoteState>
        <BrowserRouter>
          {isUserNav ? <Navbar toggleNavbar={toggleNavbar}/> : <AdminNavbar  toggleNavbar={toggleNavbar} />}
          <Alert alert={alert} />
          <Routes>

            {/* user links */}
            <Route path="/notes" element={<Notes showAlert={showAlert} />} />


            {/* user links */}
            <Route path="/" element={<UserHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route path="/signin" element={<Signin showAlert={showAlert} />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/dishlist" element={<DishList />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/confirmation" element={<Confirmatoin />} />
            <Route path="/feedback" element={<Feedback />} />
            {/* <Route path="/" element={<Confirmatoin/>} /> */}

            {/* Admin links */}
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/orders" element={<AdminDineinOrders />} />
            <Route path="/adminlogin" element={<AdminLogin showAlert={showAlert} />} />
            <Route path="/adminsignin" element={<AdminSignin showAlert={showAlert} />} />
            <Route path="/adminfeedback" element={<AdminFeedback />} />
            <Route path="/inventory" element={<DishIngredients />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
