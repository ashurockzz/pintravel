import * as React from 'react';
import Map, { NavigationControl } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './app.css';
import { Marker, Popup } from "react-map-gl";
// import { useEffect, useState } from "react";
import { Room, Star, StarBorder } from "@material-ui/icons";
// import axios from "axios";
// import { format } from "timeago.js";
// import Register from "./components/Register";
// import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Map mapLib={maplibregl}
        initialViewState={{
          longitude: 81.878357,
          latitude: 25.473034,
          zoom: 14
        }}
        style={{ width: "100%", height: "100vh " }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=5WaNep1zZFBIl1QeDFcp"
      >
        <NavigationControl position="top-left" />

        <Marker
          latitude={25.483498}
          longitude={81.862732}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Room style={{ color: "red" }} />
        </Marker>

        <Popup
          latitude={25.483498}
          longitude={81.862732}
          closeButton={true}
          closeOnClick={false}
          anchor="top-left"
        >
          <div className="card">
            <label>Place</label>
            <h4 className="place">MNNIT</h4>
            <label>Review</label>
            <p className="description">Best College. I love it.</p>
            <label>Rating</label>
            <div className="stars">
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
            </div>
            <label>Information</label>
            <span className="username">Created by <b>Sunidhi</b></span>
            <span className="date">1 hour ago</span>
          </div>
        </Popup>
      </Map>
    </div>
  );
}

export default App;