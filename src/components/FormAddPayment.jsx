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
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";

export const FormAddPayment = () => {
  const [amount, setAmount] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const navigate = useNavigate();
  const { bookingId } = useParams();

  const createPayment = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/payments/${bookingId}`, {
        amount: amount,
      });
      navigate("/bookings");
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
        marginTop: "15%",
        padding: "20px",
      }}
      component={Paper}
    >
      <Typography variant="button" style={{ color: "#777", fontWeight: "700" }}>
        Payments
      </Typography>

      <form onSubmit={createPayment}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </FormControl>
        {msg && <p style={{ color: "red" }}>{msg}!</p>}
        <Button
          variant="contained"
          style={{ marginTop: "20px", backgroundColor: "#0652DD" }}
          type="submit"
        >
          Create Payment
        </Button>
      </form>
    </Container>
  );
};
