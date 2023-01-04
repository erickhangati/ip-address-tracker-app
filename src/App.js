import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import IPDetails from "./components/IPDeatails/IPDetails";
import Map from "./components/Map/Map";

import styles from "./App.module.scss";

const App = () => {
  const [showMap, setShowMap] = useState(false);
  const [error, setError] = useState(null);

  // IP State Defination
  const [details, setDetails] = useState({
    ipAddress: "",
    city: "",
    country: "",
    timeZone: "",
    isp: "",
    latitude: "",
    longitude: "",
  });

  // API request function.
  const getDetails = async (ip) => {
    // Reset map and error states
    setShowMap(false);
    setError(null);

    try {
      const response = await fetch(
        `https://api.ipgeolocation.io/ipgeo?apiKey=44c455a4f73344e78002968e784002c4${
          ip ? `&ip=${ip}` : ""
        }`
      );

      // Throw error if encountered.
      if (!response.ok) throw new Error();

      const data = await response.json();

      // Set IP state with data received.
      setDetails({
        ipAddress: data.ip,
        city: data.city,
        country: data.country_name,
        timeZone: data.time_zone.name,
        isp: data.isp,
        latitude: data.latitude,
        longitude: data.longitude,
      });

      // Show map.
      setShowMap(true);
    } catch (error) {
      // Set error.
      setError(ip);

      // Show map with error warning.
      setShowMap(true);
    }
  };

  // Get IP automatic using location browser API on page load.
  useEffect(() => {
    getDetails();
  }, []);

  // Get coordinates.
  const coords = [Number(details.latitude), Number(details.longitude)];

  return (
    <main className={styles.app}>
      {/* Render search component. */}
      <Search getDetails={getDetails} />

      {/* Render IP Address Details */}
      <IPDetails details={details} error={error} />

      {/* Render map. */}
      {showMap && <Map coords={coords} error={error} />}
    </main>
  );
};

export default App;
