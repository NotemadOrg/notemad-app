import React from "react";
import logo from "../images/logo-icon.png"

function LoginPage(prop)
{
    return(
        <div className="loginpage">
            <img src={logo}></img>
            <h1>NoteMad</h1>
            <div className="login-username-content">
                <p>Username</p>
                <input type="text"></input>
            </div>
            <div className="login-password-content">
                <p>Password</p>
                <input type="password"></input>
            </div>
            <button>Login</button>
        </div>
    );
}

export default LoginPage;