import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Layout.css'
import AppointmentCard from '../../../AppointmentCard/AppointmentCard'
const Layout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [appointmentData, setAppointmentData] = useState(null);

    useEffect(() => {
      const storedUsername = sessionStorage.getItem('name');
      const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));
      if (storedUsername) {
        setIsLoggedIn(true);
        setUsername(storedUsername);
      }
      if (storedAppointmentData) {
        setAppointmentData(storedAppointmentData);
      }
    }, []);
  return (
    <div>
        <Navbar />
        {children}
        {isLoggedIn && appointmentData && (
          <AppointmentCard username={username} appointmentData={appointmentData} />
        )}
        <div className="footer">
        <Footer />
        </div>
       
    </div>
  )
}

export default Layout