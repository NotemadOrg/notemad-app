import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
// Delete the below import
import JournalPreview from "./components/JournalPreview"
import JournalDisplay from "./pages/JournalDisplay";

import Navbar from "./components/Navbar.js"
import LoginPage from "./pages/LoginPage";
import SignInPage from "./pages/SignInPage";
import Homepage from "./pages/Homepage.js";
import MapPage from "./pages/MapPage"
import ToGoListPage from "./pages/ToGoListPage"
import JournalView from "./pages/JournalView"
import ProfilePage from "./pages/ProfilePage"

import "./App.css";
import ErrorAlert from "./components/ErrorAlert";
import JournalForm from "./pages/JournalForm";

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Micro Blog
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts/new">
              Create a Micro Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    // <Navbar/>
    // <LoginPage/>
    // <SignInPage/>
    // <Homepage />
    // <JournalDisplay/>

    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/journal" element={<JournalDisplay/>}/>
        <Route path="/new-entry" element={<JournalForm/>}></Route>
      </Routes>
    </Router>

    // <Router>
    //   <Routes>
    //     <Route path="/homepage" element={<Homepage />}/>
    //     <Route path="/login" element={<LoginPage/>}/>
    //     <Route path="/signup" element={<SignInPage/>}/>
    //     <Navbar/>
    //     <Route path="/map" element={<MapPage/>}></Route>
    //     <Route path="/list" element={<ToGoListPage/>}></Route>
    //     <Route path="/journal" element={<JournalView/>}></Route>
    //     <Route path="/profile" element={<ProfilePage/>}></Route>
    //     <Route path="/login" element={<Homepage/>}></Route>
    //     {/* An error route */}
    //     {/* <Route path="*" element={<ErrorAlert/>}/> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
