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
import moment from "moment";

export const Bookingslist = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const [booking, setBooking] = useState([]);
  const [totalToPay, setTotalToPay] = useState("");

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    const response = await axios.get("http://localhost:5000/bookings");
    setBooking(response.data);
  };

  const deleteBooking = async (bookingId) => {
    await axios.delete(`http://localhost:5000/bookings/${bookingId}`);
    getBookings();
  };

  const handleSearch = () => {
    const filter = booking?.filter(
      (c) =>
        c.vehicle.brand.toLowerCase().includes(search.toLowerCase()) ||
        c.user.name.toLowerCase().includes(search.toLowerCase())
    );
    return filter;
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
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {[
                "No",
                "Rented by",
                "Brand",
                "Photo",
                "Start date",
                "End date",
                "Days",
                "Price per day",
                "Total to pay",
                "Actions",
              ].map((head) => (
                <TableCell
                  style={{
                    color: "#777",
                    fontWeight: "700",
                  }}
                  key={head}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {handleSearch()
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((booking, index) => (
                <TableRow
                  key={booking.uuid}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {booking.user.name}
                  </TableCell>
                  <TableCell>{booking.vehicle.brand}</TableCell>
                  <TableCell>
                    <img
                      src={booking.vehicle.photo}
                      alt={booking.vehicle.brand}
                      className="rounded-circle"
                    />
                  </TableCell>
                  <TableCell>
                    {moment(booking.startDate).format("ll")}
                  </TableCell>
                  <TableCell>{moment(booking.endDate).format("ll")}</TableCell>
                  <TableCell>
                    {moment(booking.endDate).diff(
                      moment(booking.startDate),
                      "days"
                    )}
                  </TableCell>
                  <TableCell>{booking.vehicle.pricePerDay}$</TableCell>
                  <TableCell>
                    {moment(booking.endDate).diff(
                      moment(booking.startDate),
                      "days"
                    ) * booking.vehicle.pricePerDay}
                    $
                  </TableCell>
                  {user && user.role === "admin" ? (
                    <TableCell>
                      <Button
                        variant="text"
                        style={{ color: "#0652DD" }}
                        onClick={() =>
                          navigate(`/bookings/edit/${booking.vehicle.uuid}`)
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
                      {booking.user.name === "Admin" && (
                        <Button
                          variant="text"
                          style={{ color: "#4cd137" }}
                          onClick={() =>
                            navigate(`/bookings/${booking.vehicle.id}`)
                          }
                        >
                          Pay
                        </Button>
                      )}
                    </TableCell>
                  ) : (
                    <TableCell>
                      <Button
                        variant="text"
                        style={{ color: "#4cd137" }}
                        onClick={() =>
                          navigate(`/bookings/${booking.vehicle.id}`)
                        }
                      >
                        Pay
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

/* {user && user.role === 'admin' ? (<Button>Pay</Button>) : user && booking.user.name === 'admin' ? (<Button>Pay</Button>) : (<Button>Pay</Button>) } */
