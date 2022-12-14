import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function MapView(prop) {
    let display = prop.data.map((place) => 
        <Marker position={[place.long, place.lat]}>
            <Popup>
                <div className="popup-place">{place.name}</div>
                <div className="popup-address">{place.address}</div>
            </Popup>
        </Marker>);   
    return (
        <MapContainer center={[40.74, -73.93]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {display}
        </MapContainer>

    );
}

export default MapView;