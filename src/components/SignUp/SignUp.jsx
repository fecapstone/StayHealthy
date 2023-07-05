import React, { useState } from 'react';

import "./SignUp.css";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [role, setRole] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };
    const updateSignupRoleText = (value) => {
        setRole(value);
    };

    let signupRoleText = '';

    if (role === 'doctor') {
        signupRoleText = 'Signup as a Doctor';
    } else if (role === 'patient') {
        signupRoleText = 'Signup as a Patient';
    }

    return (
        <div className="container">
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Signup</h1>
                    {signupRoleText && <div className="signup-role">{signupRoleText}</div>}
                </div>
                <div className="signup-text1">
                    Already a member? <span ><Link to="/login" style={{color:'#2190FF'}}> Login In</Link></span>
                </div>
                <div className="signup-form">
                <form action="" method="post">
                    <div className="form-group">
                        <label htmlFor="role">Signup Role</label>
                        <select name="role" id="role" className="form-control" onChange={(e) => updateSignupRoleText(e.target.value)}>
                            <option value="">Select Role</option>
                            <option value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">UserName</label>
                        <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type={passwordVisible ? 'text' : 'password'} name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                        <div className="password-visibility" onClick={togglePasswordVisibility}>
                            <i class={passwordVisible ? 'fa fa-eye' : 'fa fa-eye-slash'}></i>
                        </div>  
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type={confirmPasswordVisible ? 'text' : 'password'} name="confirmPassword" id="confirmPassword" className="form-control" placeholder="Enter your confirm password" aria-describedby="helpId" />
                        <div className="password-visibility" onClick={toggleConfirmPasswordVisibility}>
                            <i class={confirmPasswordVisible ? 'fa fa-eye' : 'fa fa-eye-slash'}></i>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                    </div>
                    
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp