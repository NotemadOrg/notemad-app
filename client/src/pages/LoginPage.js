import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import logo from "../images/logo-icon.png"
import Logo from "../components/Logo"

function LoginPage(prop)
{
    return(
        <div className="loginpage">
            <Logo />
            {/* Should the line below be className="entire-content" ? */}
            <div className="entire-content">
                <div className="content-p">
                    <p>Username</p>
                    <p>Password</p>
                </div>
                <div className="content-input">
                    <input type="text"></input>
                    <input type="password"></input>
                </div>
            </div>
            <Link className="signuploginlink" to="/map-page"><button className="login-signup-button">Login</button></Link>
            <Link className="signuploginlink" to="/signup">Sign Up</Link>
        </div>
    );
}

export default LoginPage;