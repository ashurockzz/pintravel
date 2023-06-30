import * as React from 'react';
import Map, { NavigationControl } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './app.css';
import { Marker, Popup } from "react-map-gl";
import { useEffect, useState } from "react";
import { Room, Close, Star, StarBorder } from "@material-ui/icons";
import axios from "axios";
// import { format } from "timeago.js";
// import Register from "./components/Register";
// import Login from "./components/Login";

function App() {
  const [pins, setPins] = useState([]);
  const [currentPlaceId , setCurrentPlaceId]=useState(null)

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("http://localhost:8800/pins");
        setPins(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPins()
  }, []);

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
    console.log(currentPlaceId);
  }

  return (
    <div className="App">
      <Map mapLib={maplibregl}
        initialViewState={{
          longitude: 81.878357,
          latitude: 25.473034,
          zoom: 10
        }}

        style={{ width: "100%", height: "100vh " }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=5WaNep1zZFBIl1QeDFcp"
      >
        <NavigationControl position="top-left" />
        {pins.map(p => (
          <>
            <Marker
              latitude={p.lat}
              longitude={p.long}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <Room style={{ color: "red", cursor:"pointer" }} 
                onClick={()=>handleMarkerClick(p._id)}
              />
            </Marker>
            {p._id === currentPlaceId && (
             
            <Popup
              latitude={p.lat}
              longitude={p.long}
              closeButton={false}
              closeOnClick={false}
              anchor="top-left"
            >
              <Close onClick={()=>handleMarkerClick(null)} className='close'/>
              <div className="card">
                <label>Place</label>
                <h4 className="place">{p.title}</h4>
                <label>Review</label>
                <p className="desc">{p.desc}</p>
                <label>Rating</label>
                <div className="stars">
                  <Star className="star" />
                  <Star className="star" />
                  <Star className="star" />
                  <Star className="star" />
                  <Star className="star" />
                </div>
                <label>Information</label>
                <span className="username">Created by <b>{p.username}</b></span>
                {/* <span className="date">{format(p.createdAt)}</span> */}
              </div>
            </Popup>
            )}
          </>
        ))}
      </Map>
    </div>
  );
}

export default App;