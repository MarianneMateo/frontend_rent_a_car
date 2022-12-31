import React, { useState } from "react";
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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { style } from "@mui/system";
import { Navigate, useNavigate } from "react-router-dom";

export const Vehicleslist = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");


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
        <Button
          variant="contained"
          endIcon={<AddCircleIcon />}
          style={{ float: "left", margin: "20px", backgroundColor: '#0652DD' }}
        >
          Add
        </Button>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {["No", "Brand", "Price", "Type", "Photo"].map(
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
                  <TableCell style={{
                      color: "#777",
                      fontWeight: "700",
                    }}>
                    Actions
                  </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              /* key={row.name} */
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Name
              </TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>
                <Button
                  variant="text"
                  style={{ color: '#0652DD' }}
                          /* onClick={() =>
                            navigate(`/app/crypto_details/:id`)
                          } */
                >
                  Edit
                </Button>
                <Button
                  variant="text"
                  style={{ color: '#eb2f06' }}
                          /* onClick={() =>
                            navigate(`/app/crypto_details/:id`)
                          } */
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
