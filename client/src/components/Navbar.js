import React from "react";
import logo from "../images/logo-icon.png"
import journal from "../images/journal-icon.png"
import logout from "../images/logout-icon.png"
import map from "../images/map-icon.png"
import profile from "../images/profile-icon.png"
import togolist from "../images/togolist-icon.png"


function Navbar() {
	return (
		<div className="wrapper">
			<nav className="sidebar">
				<li><img src={logo}></img></li>
				<li><a href="map.html"><img src={map}></img></a></li>
				<li><a href="list.html"><img src={togolist}></img></a></li>
				<li><a href="journal.html"><img src={journal}></img></a></li>
				<li><a href="profile.html"><img src={profile}></img></a></li>
				<li><a href="login.html"><img src={logout}></img></a></li>
			</nav>
		</div>
    )
}

export default Navbar