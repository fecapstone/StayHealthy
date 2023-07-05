import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [role, setRole] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  let loginRoleText = '';
  if (!!role && role === "doctor")
    loginRoleText = 'Login as a Doctor';
  else if (!!role && role === "patient")
    loginRoleText = 'Login as a Patient';

  return (
        <div>
          <div className="container">
            <div className="login-grid">
              <div className="login-text">
                <h2>Login</h2>
                {loginRoleText && <div className="login-role">{loginRoleText}</div>}
              </div>
              <div className="login-text">
                    Are you New Member? <span ><Link to="/signup" style={{color:'#2190FF'}}> Signup Here</Link></span>
                </div>  
              <div className="login-form">
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="loginRole">Login Role</label>
                    <select name="loginRole" id="loginRole" className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
                      <option value="">Select Role</option>
                      <option value="doctor">Doctor</option>
                      <option value="patient">Patient</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" id="username" className="form-control" placeholder="Enter your username" aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type={passwordVisible ? 'text' : 'password'} name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                        <div className="password-visibility" onClick={togglePasswordVisibility}>
                            <i class={passwordVisible ? 'fa fa-eye' : 'fa fa-eye-slash'}></i>
                        </div>  
                    </div>
                  
                  <div className="btn-group">
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Login