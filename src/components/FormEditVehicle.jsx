import * as React from "react";
import TextField from "@mui/material/TextField";
import { Container, MenuItem, Paper, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
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

export const FormEditVehicle = () => {
  const [brand, setBrand] = React.useState("");
  const [pricePerDay, setPricePerDay] = React.useState("");
  const [type, setType] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    const getVehicleById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/vehicles/${id}`
        );
        setBrand(response.data.brand);
        setPricePerDay(response.data.pricePerDay);
        setType(response.data.type);
        setPhoto(response.data.photo);
        setLatitude(response.data.latitude);
        setLongitude(response.data.longitude);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getVehicleById();
  }, [id]);

  const updateVehicle = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/vehicles/${id}`, {
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
        Edit Vehicle
      </Typography>
      <form onSubmit={updateVehicle}>
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
        <Button
          variant="contained"
          style={{ marginTop: "20px", backgroundColor: "#0652DD" }}
          type="submit"
        >
          Save Changes
        </Button>
      </form>
    </Container>
  );
};
