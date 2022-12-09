import React from "react";
import MapView from "../components/MapView";
import Navbar from "../components/Navbar";

function MapPage(prop)
{
    return(
        <div className="page-with-navbar">
            <Navbar/>

            <MapView/>
        </div>
    );
}

export default MapPage;