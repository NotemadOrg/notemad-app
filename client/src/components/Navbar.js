import React from "react";
import logo from "../images/logo-icon.png"
import journal from "../images/journal-icon.png"
import logout from "../images/logout-icon.png"
import map from "../images/map-icon.png"
import profile from "../images/profile-icon.png"
import togolist from "../images/togolist-icon.png"

import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";


function Navbar() {
	return (
		<div className="nav-wrapper">
			<nav className="sidebar">
				<li><img src={logo}></img></li>
				<li><Link to="/map-page"><img src={map}></img></Link></li>
				<li><Link to="/list"><img src={togolist}></img></Link></li>
				<li><Link to="/journal"><img src={journal}></img></Link></li>
				<li><Link to="/profile"><img src={profile}></img></Link></li>
				<li><Link to="/login"><img src={logout}></img></Link></li>
			</nav>
		</div>
    )
}

export default Navbar