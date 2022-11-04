import { React, useState,useContext }from 'react';
import {StyledLoginPage} from '../../styles/LoginPage.styled';
import LoginHero from '../../img/LoginHero.png';
import Navbar from '../Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from '../../context/AuthContext';

function Loginpage() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch({type: "LOGIN", payload: user})
            console.log(user);
            navigate("/home");
        })
        .catch((error) => {
            setError(true)
        });

        setEmail("");
        setPassword("");
    };

    return (
    <StyledLoginPage>
        <Navbar/>
        <div className="login__section">
            <div className="login__container">
                <div className="login__img__container">
                    <img src={LoginHero} alt="LoginHero" />
                </div>
                <div className="login__form__container">
                    <div className="login__form__content">
                        <h2>Welcome Back!</h2>
                        <p>Welcome to TrackXp, please put your login credentials to start using the app
                        </p>
                        <form className="login__form" onSubmit={handleLogin}>

                            <h4>Email</h4>
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Enter your email" 
                            onChange={e=>setEmail(e.target.value)} />

                            <h4>Password</h4>
                            <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter your password" 
                            onChange={e=>setPassword(e.target.value)} />

                            <button type="submit">Login</button>
                        </form>
                        {error && <span className="error"><p>Invalid Credentials!</p></span>}
                        <h3>Don't have an account? <Link to="/Signup">Signup</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    </StyledLoginPage>
    )
}

export default Loginpage