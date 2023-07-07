import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Layout.css'
const Layout = ({ children }) => {
  return (
    <div>
        <Navbar />
        {children}
        <div className="footer">
        <Footer />
        </div>
       
    </div>
  )
}

export default Layout