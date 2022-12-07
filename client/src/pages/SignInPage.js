import React from "react";
import logo from "../images/logo-icon.png"
import Logo from "../components/Logo";

function SignInPage(prop)
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
            <button className="login-signup-button">Sign Up</button>
        </div>
    );
}

export default SignInPage;