import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  Container,
  MenuItem,
  Paper,
  Typography,
  Button,
  Box,
  makeStyles,
  Stack,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";

const root = {
  margin: 2,
};
const datePicker = {
  marginRight: 2,
};

export const FormAddBooking = () => {
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [dates, setDates] = React.useState([]);
  const navigate = useNavigate();
  const { vehicleId } = useParams();

  console.log(moment(startDate.$d).format("ll"));
  console.log(moment(endDate.$d).format("ll"));

  const saveBooking = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/bookings/${vehicleId}`, {
        startDate: startDate,
        endDate: endDate,
      });
      navigate("/bookings");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  React.useEffect(() => {
    getDates();
  }, []);

  const getDates = async () => {
    const response = await axios.get(
      `http://localhost:5000/bookingsDates/${vehicleId}`
    );
    setDates(response.data);
  };

  const shouldDisableDate = (date) => {
    for (const d of dates) {
      if (date.isBetween(d.startDate, d.endDate, "day", "[]")) {
        return true;
      }
    }
    return false;
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
        Booking
      </Typography>

      <form onSubmit={saveBooking}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DatePicker
              label="Start Date"
              value={startDate}
              disablePast
              shouldDisableDate={shouldDisableDate}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
              label="End Date"
              value={endDate}
              minDate={startDate}
              shouldDisableDate={shouldDisableDate}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
        {msg && <p style={{ color: "red" }}>{msg}!</p>}
        <Button
          variant="contained"
          style={{ marginTop: "20px", backgroundColor: "#0652DD" }}
          type="submit"
        >
          Add booking
        </Button>
      </form>
    </Container>
  );
};
