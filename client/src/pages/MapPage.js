import React from "react";
import MapView from "../components/MapView";
import Navbar from "../components/Navbar";

function MapPage(prop)
{
    return(
        <div className="page-with-navbar">
            <Navbar/>
            <div className="page-content-container">
                <MapView/>

            </div>
        </div>
    );
}

export default MapPage;