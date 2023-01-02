import React, { useEffect, useState, Component } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../assets/css/core.css";
import L from "leaflet";
import { Typography } from "@mui/material";

export const MapView = ({ vehicles }) => {
  const data = vehicles.map((v, index) => {
    return {
      ...v,
      icon: `../../../node_modules/leaflet/dist/images/${v.type}.png`,
    };
  });

  console.log(
    "data ",
    data.map((d) => d.icon)
  );
  console.log("vehicles", vehicles);

  const icon = new L.icon({
    iconUrl: data.map((d) => d.icon),
    iconSize: [50, 41],
    iconAnchor: [12, 41],
  });

  console.log(icon);

  const getIcon = (type) => {
    let icon;
    switch (type) {
      case "car":
        icon = new L.icon({
          iconUrl: "https://api.iconify.design/icon-park/car.svg",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
        break;
      case "bike":
        icon = new L.icon({
          iconUrl: "https://api.iconify.design/fluent-emoji-flat/bicycle.svg",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
        break;
      case "motorcycle":
        icon = new L.icon({
          iconUrl:
            "https://api.iconify.design/fluent-emoji-flat/motorcycle.svg",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
        break;
      case "bus":
        icon = new L.icon({
          iconUrl: "https://api.iconify.design/fluent-emoji-flat/bus.svg",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
        break;
      case "truck":
        icon = new L.icon({
          iconUrl: "https://api.iconify.design/noto/delivery-truck.svg",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
        break;
      default:
        icon = new L.icon({
          iconUrl:
            "https://static.vecteezy.com/system/resources/previews/004/897/431/non_2x/location-red-icon-simple-design-free-vector.jpg",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
        break;
    }
  };

  return (
    <MapContainer
      center={[18.735693, -70.162651]}
      zoom={9}
      scrollWheelZoom={false}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {vehicles.map((v, index) => {
        return (
          <Marker key={index} position={[v.latitude, v.longitude]}>
            <Popup icon={v.photo}>
              <img src={v.photo} alt={v.brand} />
              <Typography variant="h6">Brand: {v.brand}</Typography>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};
