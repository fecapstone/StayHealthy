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
          <Link to="/">Appointments</Link>
        </li>
        <li className="link">
          <Link to="/">Health Blog</Link>
        </li>
        <li className="link">
          <Link to="/">Reviews</Link>
        </li>
        <li className="link">
          <Link to="/"><button className="btn1">SignUp</button></Link>
        </li>
        <li className="link">
          <Link to="/singup"><button className="btn1">LogIn</button></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
