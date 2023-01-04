import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

import styles from "./Map.module.scss";
import icon from "../../images/icon-location.svg";

// Custom marker icon for Leaflet Library
const markerIcon = new L.Icon({
  iconUrl: icon,
});

const Map = ({ coords, error }) => {
  // If there is error render warning icon.
  if (error) {
    return (
      <div className={styles.error}>
        <span>⚠</span>
      </div>
    );
  }

  // Render map using Leaflet API.
  return (
    <MapContainer
      center={coords}
      zoom={15}
      style={{ width: "100%", height: "56vh" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={coords} icon={markerIcon} />
    </MapContainer>
  );
};

export default Map;
