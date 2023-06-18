import { React, useState, useContext, useEffect } from "react";
import { StyledLoginPage } from "../../styles/LoginPage.styled";
import LoginHero from "../../img/LoginHero.png";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import { collection, getDocs, query, where } from "firebase/firestore";

function Loginpage() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const q = query(
      collection(db, "users"),
      where("email", "==", email),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });

    if (querySnapshot.size > 0) {
      dispatch({ type: "LOGIN", payload: querySnapshot.docs[0].data() });
      navigate("/home");
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <StyledLoginPage>
      <Navbar isLogin={isLogin} />
      <div className="login__section">
        <div className="login__container">
          <div className="login__img__container">
            <img src={LoginHero} alt="LoginHero" />
          </div>
          <div className="login__form__container">
            <div className="login__form__content">
              <h2>Welcome Back!</h2>
              <p>
                Welcome to TrackXp, please put your login credentials to start
                using the app
              </p>
              <form className="login__form" onSubmit={handleLogin}>
                <h4>Email</h4>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <h4>Password</h4>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="show__container">
                  {showPassword ? (
                    <i
                      className="bx bx-hide"
                      onClick={() => setShowPassword(!showPassword)}
                    ></i>
                  ) : (
                    <i
                      className="bx bx-show"
                      onClick={() => setShowPassword(!showPassword)}
                    ></i>
                  )}
                  {showPassword ? (
                    <span>Hide password</span>
                  ) : (
                    <span>Show password</span>
                  )}
                </div>

                <button className="loginButton" type="submit">
                  Login
                </button>
              </form>
              {error &&
                setTimeout(() => {
                  setError(false);
                }, 3000) && (
                  <span className="error">
                    <p>Invalid Credentials!</p>
                  </span>
                )}
              {/* <h3>
                Don't have an account? <Link to="/Signup">Signup</Link>
              </h3> */}
            </div>
          </div>
        </div>
      </div>
    </StyledLoginPage>
  );
}

export default Loginpage;
