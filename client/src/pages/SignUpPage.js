import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import logo from "../images/logo-icon.png"
import Logo from "../components/Logo";

function SignUpPage(prop)
{
    return(
        <div className="signuppage">
            {/* <img src={logo}></img>
            <h1>NoteMad</h1> */}
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
            <Link to="/map-page"><button className="login-signup-button">Sign Up</button></Link>
            <Link className="signuploginlink" to="/Login">Login</Link>
        </div>
    );
}

export default SignUpPage;