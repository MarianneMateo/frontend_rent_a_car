import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  IconButton,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { style } from "@mui/system";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/core.css";
import { useSelector } from "react-redux";

export const Vehicleslist = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getVehicles();
  }, []);

  const getVehicles = async () => {
    const response = await axios.get("http://localhost:5000/vehicles");
    setVehicles(response.data);
  };

  const deleteVehicle = async (vehicleId) => {
    await axios.delete(`http://localhost:5000/vehicles/${vehicleId}`);
    getVehicles();
  };

  const handleSearch = () => {
    return vehicles?.filter(
      (c) =>
        c.brand.toLowerCase().includes(search.toLowerCase()) ||
        c.type.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <div
        style={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <TextField
          label="Search"
          color="info"
          style={{
            marginBottom: 20,
            width: "30%",
            height: "35px",
            display: "flex",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <TableContainer component={Paper}>
      {user && user.role === "admin" && (
        <Button
          variant="contained"
          endIcon={<AddCircleIcon />}
          style={{
            float: "left",
            margin: "20px",
            backgroundColor: "#0652DD",
          }}
          onClick={() => navigate(`/vehicles/add`)}
        >
          Add New
        </Button>
      )}
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {["No", "Brand", "Price", "Type", "Photo", "Actions"].map(
                (head) => (
                  <TableCell
                    style={{
                      color: "#777",
                      fontWeight: "700",
                    }}
                    key={head}
                  >
                    {head}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {handleSearch()
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((vehicle, index) => (
                <TableRow
                  key={vehicle.uuid}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {vehicle.brand}
                  </TableCell>
                  <TableCell>{vehicle.pricePerDay}</TableCell>
                  <TableCell>{vehicle.type}</TableCell>
                  <TableCell>
                    <img
                      src={vehicle.photo}
                      alt={vehicle.brand}
                      className="rounded-circle"
                    />
                  </TableCell>
                  {user && user.role === "admin" ? (
                    <TableCell>
                      <Button
                        variant="text"
                        style={{ color: "#0652DD" }}
                        onClick={() =>
                          navigate(`/vehicles/edit/${vehicle.uuid}`)
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        variant="text"
                        style={{ color: "#eb2f06" }}
                        onClick={() => deleteVehicle(vehicle.uuid)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  ) : (
                    <TableCell>
                      <Button variant="text" style={{ color: "#0652DD" }}>
                        Booking
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={10}
        style={{
          padding: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 450);
        }}
      />
    </Container>
  );
};
