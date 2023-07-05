import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
        StayHealthy <i style={{color:'#2190FF'}} className="fa fa-user-md"></i></Link>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={click ? 'nav__links active' : 'nav__links'}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/">Appointment</Link>
        </li>
        <li className="link">
          <Link to="/">Pricing</Link>
        </li>
        <li className="link">
          <Link to="/">Reviews</Link>
        </li>
      </ul>
    </nav>
    // <div>
    //     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
    //     <nav className="navbar" onClick={e => e.stopPropagation()}>
    //         <div className="nav-container">
    //             <a href="/" className="nav-logo">
    //                 StayHealthy <i style={{color:'#2190FF'}} className="fa fa-user-md"></i>
    //             </a>
    //             <ul className={click ? "nav-menu active" : "nav-menu"}>
    //                 <li className="nav-item">
    //                     Home
    //                 </li>
    //                 <li className="nav-item">
    //                     About
    //                 </li>
    //                 <li className="nav-item">
    //                     Contact
    //                 </li>
    //                 <li className="nav-item">
    //                     Appointment
    //                 </li>
    //                 <li className="nav-item">
    //                     Login/Signup <i className="fa fa-user"></i>
    //                 </li>
    //                 {/* Add search field as an input with search icon */}
    //                 <li className="nav-item">
    //                     <i className="fa fa-search"></i>
    //                 </li>
                    
    //             </ul>
    //             <div className="nav-icon" onClick={handleClick}>
    //                 <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
    //             </div>
    //         </div>
    //     </nav>
    // </ div>
  );
};

export default Navbar;
