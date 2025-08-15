import React, { useEffect, useState } from 'react'
import './login_signup.css'
import logo_img from "../../assets/logo-img.png"
import { BsArrowRight } from "react-icons/bs";
import logimg from "../../assets/logimg.png"
import { HiArrowSmallLeft } from "react-icons/hi2";

const Login_signup = ({ loginsignup, setLoginsignup, setPopupnotifi, setPopupnotifi1, setPopupnotifi_1, setPopupnotifi_2, setSucff }) => {
  const [logsign, setLogsign] = useState(true);
  const [toatTime, setToatTime] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const alrt = (e) => {
    e.preventDefault();
    setSucff();
    console.log("login successful");
    setLoginsignup(false);
    setPopupnotifi();
    // setSucff();
    setTimeout(() => setPopupnotifi1(), 2000);
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    // if(isLoggedIn) setSucff()
  }

  const sialrt = (e) => {
    e.preventDefault();
    setSucff();
    console.log("signup successful");
    setLoginsignup(false);
    setPopupnotifi_1();
    setTimeout(() => setPopupnotifi_2(), 2000);
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    // if(isLoggedIn) setSucff()
  }
  const handleLogout = () => {
  localStorage.setItem("isLoggedIn", "false");
  setIsLoggedIn(false);
  setPopupnotifi(); // Optional: show a toast
  setTimeout(() => setPopupnotifi1(), 2000);
};

  return (
    <>
      <a className="lobtn" href='/'><HiArrowSmallLeft size={18} /> Home</a>
      <div className={`${loginsignup ? 'loginsign-container' : ""}`}>
        {toatTime && <div className="toast">Login Successful</div>}

        <div className="mainContINER">
          <div className="left">
            <div className="logo-autho">
              <img src={logo_img} alt="logo" className='logo-img' style={{ height: "30px", width: "30px" }} />
              <h2 className="logo-name">Pandas</h2>
            </div>
            <h4>{isLoggedIn ? "Welcome Back! You're already logged in." : "Welcome back !!!"}</h4>

            {!isLoggedIn && <div className='logsign'>
              <div className={`log ${logsign ? "clickon" : ""}`} onClick={() => setLogsign(true)}>Log In</div>
              <div className={`log ${!logsign ? "clickon" : ""}`} onClick={() => setLogsign(false)}>Sign Up</div>
            </div>}

            {isLoggedIn ? (
              <div className="form">
                <p style={{ color: 'white', marginTop: '20px' }}>You're already logged in.</p>
                 <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            ) : logsign ? (
              <form className='form' onSubmit={alrt}>
                <label>Email</label>
                <input type="email" placeholder="Enter your Email" name="Email" required />
                <label>Password</label>
                <input className="passi" type="Password" placeholder='Enter your Password' name="Password" required />
                <button type="submit" className='losibtn'>LOGIN <BsArrowRight size={15} /></button>
                <div className='parag'>
                  <p>Don't have an account yet?</p>
                  <p className='Signfr' onClick={() => setLogsign(false)}>Sign up for free</p>
                </div>
              </form>
            ) : (
              <form className='form' onSubmit={sialrt}>
                <label>Name</label>
                <input type="text" placeholder="Enter your name" name="Name" required />
                <label>Email</label>
                <input type="email" placeholder="Enter your Email" name="Email" required />
                <label>Password</label>
                <input className="passi" type="Password" placeholder='Enter your Password' name="Password" required />
                <button type="submit" className='losibtn'>SIGNUP <BsArrowRight size={18} /></button>
                <div className='parag'>
                  <p>Have an account yet?</p>
                  <p className='Signfr' onClick={() => setLogsign(true)}>Login for free</p>
                </div>
              </form>
            )}
          </div>
          <div className="right">
            <img src={logimg} alt="" />
            <div className='color'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_signup;
