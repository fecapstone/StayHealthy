import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components/LandingPage/Components/Layout/Layout';
import AOS from 'aos';
import { BookAppointments, Home, Login, SignUp } from './components';

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 3000,
    })
  }, [])
  return (
    <div className="App">
        <Router>
          <Layout>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/search/doctors" element={<BookAppointments />} />


              </Routes>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
