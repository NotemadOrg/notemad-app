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
import SignUpPage from "./pages/SignUpPage";
import Homepage from "./pages/Homepage.js";
import MapPage from "./pages/MapPage"
import ToGoListPage from "./pages/ToGoListPage"
import ToGoListForm from "./pages/ToGoListForm"
import JournalView from "./pages/JournalView"
import ProfilePage from "./pages/ProfilePage"

import "./App.css";
import ErrorAlert from "./components/ErrorAlert";
import JournalForm from "./pages/JournalForm";

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
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/map-page" element={<MapPage />} />
        <Route path="/journal" element={<JournalDisplay/>}/>
        <Route path="/list" element={<ToGoListPage/>}/>
        <Route path="/new-togo-entry" element={<ToGoListForm/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/new-entry" element={<JournalForm/>}/>
        <Route path="/view-entry" element={<JournalView/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
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
