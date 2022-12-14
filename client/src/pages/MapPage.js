import React, { useState, useEffect } from "react";
import MapView from "../components/MapView";
import Navbar from "../components/Navbar";

function MapPage(prop) {
    let visited = [{ long: 40.768100, lat: -73.958530, name: "Two Wheels", address: "1382 2nd Ave, New York, NY 10021" }, { long: 40.747879, lat: -73.987091, name: "Machi Machi", address: "33 W 32nd St, New York, NY 10001" }, { long: 40.779450, lat: -73.953760, name: "IT'SUGAR", address: "1542 3rd Ave, New York, NY 10028" }, { long: 40.761002, lat: -73.976990, name: "The Museum of Modern Art", address: "11 W 53rd St, New York, NY 10019" }];
    let unvisited = [{ long: 40.752710, lat: -73.971700, name: "Blue Gallery", address: "222 E 46th St, New York, NY 10017" }, { long: 40.7572385, lat: -73.9766532, name: "Casa Limone", address: "20 E 49th St, New York, NY 10017" }, { long: 40.7031586, lat: -73.9839381, name: "Beat The Bomb Brooklyn", address: "255 Water St, Brooklyn, NY 11201" }, { long: 40.6560354, lat: -74.0069391, name: "Sushi Uesugi", address: "267 36th St, Brooklyn, NY 11232" }];

    const [data, setData] = useState(unvisited);
    const [dataState, setDataState] = useState("Unvisited");

    function toggleMarker() {
        if (data === unvisited) {
            setData(visited);
            setDataState("Visited");
        } else {
            setData(unvisited);
            setDataState("Unvisited");
        }
    }
    return (
        <div className="page-with-navbar">
            <Navbar />
            <div className="page-content-container">
                <MapView data={data} />
                <label className="mapSwitch">
                    <input type="checkbox" defaultChecked={unvisited} onClick={toggleMarker} />
                    <span />
                    <strong>{dataState}</strong>
                </label>
            </div>
        </div>
    );
}

export default MapPage;