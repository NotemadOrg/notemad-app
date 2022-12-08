import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function MapView(prop)
{
    return(
        <MapContainer center={[40.71, -73.93]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[40.71, -73.93]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    );
}

export default MapView;