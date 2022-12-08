import React from "react";
import logo from "../images/logo-icon.png"
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";


function SignInPage(prop)
{
    let navigate = useNavigate()

    return(
        <div className="signuppage">
            <Logo />
            <div className="entire-content">
                <div className="content-p">
                    <p>Email</p>
                    <p>Username</p>
                    <p>Password</p>
                </div>
                <div className="content-input">
                    <input type="email"></input>
                    <input type="text"></input>
                    <input type="password"></input>
                </div>
            </div>
            {/* <button onClick={() => {navigate("/homepage");}} className="login-signup-button">Sign Up</button> */}
            <Link to="/homepage"><button className="login-signup-button">Sign Up</button></Link>

        </div>
    );
}

export default SignInPage;