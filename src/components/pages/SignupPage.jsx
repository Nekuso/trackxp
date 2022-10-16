import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSignupPage } from '../../styles/SignupPage.stlyed';
import LoginHero from '../../img/LoginHero.png';
import Navbar from '../Navbar';

function SignupPage() {
    
  return (
    <StyledSignupPage>
        <Navbar/>
        <div className="signup__section">
            <div className="signup__container">
                <div className="signup__img__container">
                    <img src={LoginHero} alt="signupHero" />
                </div>
                <div className="signup__form__container">
                    <div className="signup__form__content">
                        <h2>Welcome to TrackXP!</h2>
                        <p>Welcome to TrackWash, please put your signup credentials to start using the app
                        </p>
                        <form className="signup__form">
                            <h4>Full Name</h4>
                            <input type="text" name="name" id="name" placeholder="Enter your Full Name" />
                            <h4>Email</h4>
                            <input type="email" name="email" id="email" placeholder="Enter your email" />
                            <h4>Password</h4>
                            <input type="password" name="password" id="password" placeholder="Enter your password" />
                        </form>
                        <button type="submit">Signup</button>
                        <h3>Already have an account? <Link to="/Login">Login</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    </StyledSignupPage>
  )
}

export default SignupPage