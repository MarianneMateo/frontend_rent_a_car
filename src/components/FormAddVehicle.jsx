import * as React from "react";
import TextField from "@mui/material/TextField";
import { Container, MenuItem, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const types = [
  {
    value: "car",
  },
  {
    value: "bike",
  },
  {
    value: "motorcycle",
  },
  {
    value: "bus",
  },
  {
    value: "truck",
  },
];

export const FormAddVehicle = () => {
  const [brand, setBrand] = React.useState("");
  const [pricePerDay, setPricePerDay] = React.useState("");
  const [type, setType] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const navigate = useNavigate();

  const saveVehicle = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/vehicles", {
        brand: brand,
        pricePerDay: pricePerDay,
        type: type,
        photo: photo,
        latitude: latitude,
        longitude: longitude,
      });
      navigate("/vehicles");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Container
      style={{
        textAlign: "center",
        width: "35ch",
        marginTop: "5%",
        padding: "20px",
      }}
      component={Paper}
    >
      <Typography variant="button" style={{ color: "#777", fontWeight: "700" }}>
        Vehicle
      </Typography>
      <form onSubmit={saveVehicle}>
        <TextField
          margin="dense"
          id="brand"
          label="Brand"
          type="text"
          fullWidth
          multiline
          value={brand}
          onChange={({ target }) => setBrand(target.value)}
        />
        <TextField
          margin="dense"
          id="pricePerDay"
          label="Price per day"
          type="number"
          fullWidth
          multiline
          value={pricePerDay}
          onChange={({ target }) => setPricePerDay(target.value)}
        />
        <TextField
          id="type"
          select
          label="Type of Vehicle"
          fullWidth
          margin="dense"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="dense"
          id="photo"
          label="Photo (URL)"
          type="text"
          fullWidth
          multiline
          value={photo}
          onChange={({ target }) => setPhoto(target.value)}
        />
        <TextField
          margin="dense"
          id="latitude"
          label="Latitude"
          type="number"
          fullWidth
          multiline
          value={latitude}
          onChange={({ target }) => setLatitude(target.value)}
        />
        <TextField
          margin="dense"
          id="longitude"
          label="Longitude"
          type="number"
          fullWidth
          multiline
          value={longitude}
          onChange={({ target }) => setLongitude(target.value)}
        />
        {msg && <p style={{ color: "red" }}>{msg}!</p>}
        <Button
          variant="contained"
          style={{ marginTop: "20px", backgroundColor: "#0652DD" }}
          type="submit"
        >
          Add vehicle
        </Button>
      </form>
    </Container>
  );
};
