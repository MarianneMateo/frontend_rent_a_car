import { useEffect, useState } from "react";
import {
  Button,
  Container,
  InputAdornment,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import moment from "moment";

export const Paymentslist = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getPayments();
  }, []);

  const getPayments = async () => {
    const response = await axios.get("http://localhost:5000/payments");
    setPayments(response.data);
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
                "Name",
                "Email",
                "Brand",
                "PricePerDay",
                "Type",
                "Photo",
                "startDate",
                "endDate",
                "Amount",
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
            {payments
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((payment, index) => (
                <TableRow
                  key={payment.uuid}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {payment.user.name}
                  </TableCell>
                  <TableCell>{payment.user.email}</TableCell>
                  <TableCell>{payment.booking.vehicle.brand}</TableCell>
                  <TableCell>{payment.booking.vehicle.pricePerDay}</TableCell>
                  <TableCell>{payment.booking.vehicle.type}</TableCell>
                  <TableCell>
                    <img
                      src={payment.booking.vehicle.photo}
                      alt={payment.booking.vehicle.brand}
                      className="rounded-circle"
                    />
                  </TableCell>
                  <TableCell>
                    {moment(payment.booking.startDate).format("LL")}
                  </TableCell>
                  <TableCell>
                    {moment(payment.booking.endDate).format("LL")}
                  </TableCell>
                  <TableCell>${Math.trunc(payment.amount)}</TableCell>
                  <TableCell>
                    <Button
                      variant="text"
                      style={{ color: "#0652DD" }}
                      onClick={() => navigate(`/invoice/${payment.uuid}`)}
                    >
                      <ReceiptLongIcon />
                    </Button>
                  </TableCell>
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
