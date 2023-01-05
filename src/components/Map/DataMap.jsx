import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MapView } from "./MapView";

export const DataMap = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getVehicles();
  }, []);

  const getVehicles = async () => {
    const { data } = await axios.get("http://localhost:5000/vehicles");
    setVehicles(data);
  };

  return (
    <>
      <MapView vehicles={vehicles} />
      {/* {vehicles.map((v) => (
        <>
          <p>{`${v.brand}, ${v.latitude}, ${v.longitude}`}</p>
        </>
      ))} */}
    </>
  );
};
