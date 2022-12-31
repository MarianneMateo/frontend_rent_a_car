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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useState } from "react";

export const Bookinglist = () => {
  const [search, setSearch] = useState("");

  /* const handleSearch = () => {
    return coins?.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.symbol.toLowerCase().includes(search.toLowerCase())
    );
  }; */

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
          style={{ float: "left", margin: "20px", backgroundColor: "#0652DD" }}
        >
          Add
        </Button>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {["No", "Name", "Email", "Role", "Actions"].map((head) => (
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
              <TableCell>
                <Button
                  variant="text"
                  /* style={TypographyStyles}
                          onClick={() =>
                            navigate(`/app/crypto_details/${row.id}`)
                          } */
                >
                  Details
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
