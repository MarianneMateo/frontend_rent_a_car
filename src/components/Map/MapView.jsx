import React, { useEffect, useState, Component, Fragment } from "react";
import {
  Circle,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../assets/css/core.css";
import L from "leaflet";
import { Typography } from "@mui/material";

export const MapView = ({ vehicles }) => {
  const iconCar = new L.icon({
    iconUrl: "https://api.iconify.design/icon-park/car.svg",
    iconSize: [30, 30],
    iconAnchor: [12, 41],
  });

  const iconBike = new L.icon({
    iconUrl: "https://api.iconify.design/fluent-emoji-flat/bicycle.svg",
    iconSize: [50, 41],
    iconAnchor: [12, 41],
  });

  const iconMotor = new L.icon({
    iconUrl: "https://api.iconify.design/fluent-emoji-flat/motorcycle.svg",
    iconSize: [50, 41],
    iconAnchor: [12, 41],
  });

  const iconBus = new L.icon({
    iconUrl: "https://api.iconify.design/fluent-emoji-flat/bus.svg",
    iconSize: [50, 41],
    iconAnchor: [12, 41],
  });

  const iconTruck = new L.icon({
    iconUrl: "https://api.iconify.design/noto/delivery-truck.svg",
    iconSize: [50, 41],
    iconAnchor: [12, 41],
  });

  const legend = L.control({ position: "bottomright" });

  return (
    <MapContainer
      center={[18.735693, -70.162651]}
      zoom={9}
      scrollWheelZoom={true}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {vehicles.map((v, index) => {
        if (v.type === "car") {
          return (
            <Marker
              key={index}
              position={[v.latitude, v.longitude]}
              icon={iconCar}
            >
              <Popup>
                <img src={v.photo} alt={v.brand} />
                <Typography variant="h6">Brand: {v.brand}</Typography>
                <Typography variant="p">Type: {v.type}</Typography>
                <br />
                <Typography variant="p">Price: {v.pricePerDay}$</Typography>
              </Popup>
            </Marker>
          );
        } else if (v.type === "bike") {
          return (
            <Marker
              key={index}
              position={[v.latitude, v.longitude]}
              icon={iconBike}
            >
              <Popup>
                <img src={v.photo} alt={v.brand} />
                <Typography variant="h6">Brand: {v.brand}</Typography>
                <Typography variant="p">Type: {v.type}</Typography>
                <br />
                <Typography variant="p">Price: {v.pricePerDay}$</Typography>
              </Popup>
            </Marker>
          );
        } else if (v.type === "motorcycle") {
          return (
            <Marker
              key={index}
              position={[v.latitude, v.longitude]}
              icon={iconMotor}
            >
              <Popup>
                <img src={v.photo} alt={v.brand} />
                <Typography variant="h6">Brand: {v.brand}</Typography>
                <Typography variant="p">Type: {v.type}</Typography>
                <br />
                <Typography variant="p">Price: {v.pricePerDay}$</Typography>
              </Popup>
            </Marker>
          );
        } else if (v.type === "bus") {
          return (
            <Marker
              key={index}
              position={[v.latitude, v.longitude]}
              icon={iconBus}
            >
              <Popup>
                <img src={v.photo} alt={v.brand} />
                <Typography variant="h6">Brand: {v.brand}</Typography>
                <Typography variant="p">Type: {v.type}</Typography>
                <br />
                <Typography variant="p">Price: {v.pricePerDay}$</Typography>
              </Popup>
            </Marker>
          );
        } else if (v.type === "truck") {
          return (
            <Marker
              key={index}
              position={[v.latitude, v.longitude]}
              icon={iconTruck}
            >
              <Popup>
                <img src={v.photo} alt={v.brand} />
                <Typography variant="h6">Brand: {v.brand}</Typography>
                <Typography variant="p">Type: {v.type}</Typography>
                <br />
                <Typography variant="p">Price: {v.pricePerDay}$</Typography>
              </Popup>
            </Marker>
          );
        } else {
          return (
            <Marker key={index} position={[v.latitude, v.longitude]}>
              <Popup>
                <img src={v.photo} alt={v.brand} />
                <Typography variant="h6">Brand: {v.brand}</Typography>
                <Typography variant="p">Type: {v.type}</Typography>
                <br />
                <Typography variant="p">Price: {v.pricePerDay}$</Typography>
              </Popup>
            </Marker>
          );
        }
      })}
    </MapContainer>
  );
};
