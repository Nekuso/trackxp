import React from 'react'
import {StyledLoginPage} from '../../../styles/LoginPage.styled'
import LoginHero from '../../../img/LoginHero.png'
import Navbar from '../../Navbar'
import { Link } from 'react-router-dom'

function Loginpage() {
    return (
    <StyledLoginPage>
        <Navbar/>
        <div className="login__section">
            <div className="login__container">
                <div className="login__img__container">
                    <img src={LoginHero} alt="LoginHero" />
                </div>
                <div className="login__form__container">
                    <h2>Welcome Back!</h2>
                    <p>Welcome to TrackWash, please put your login credentials to start using the app
                    </p>
                    <form className="login__form">
                        <h4>Email</h4>
                        <input type="email" name="email" id="email" placeholder="Enter your email" />
                        <h4>Password</h4>
                        <input type="password" name="password" id="password" placeholder="Enter your password" />
                    </form>
                    <button type="submit">Login</button>
                    <h3>Don't have an account? <Link to="/Signup">Signup</Link></h3>
                </div>
            </div>
        </div>
    </StyledLoginPage>
    )
}

export default Loginpage