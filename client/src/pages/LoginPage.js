import React from "react";
import logo from "../images/logo-icon.png"
import Logo from "../components/Logo"
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginPage(prop)
{
    let navigate = useNavigate();

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
            {/* <button onClick={() => {navigate("/homepage")}} className="login-signup-button">Login</button> */}
            <Link to="/homepage"><button className="login-signup-button">Login</button></Link>

        </div>
    );
}

export default LoginPage;