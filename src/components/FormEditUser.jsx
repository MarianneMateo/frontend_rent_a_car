import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, MenuItem, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const roles = [
  {
    value: "admin",
    label: "ADMIN",
  },
  {
    value: "user",
    label: "USER",
  },
];

export const FormEditUser = () => {
  return (
    <Container
      style={{
        textAlign: "center",
        width: "35ch",
        marginTop: "10%",
        padding: "20px",
      }}
      component={Paper}
    >
      <Typography variant="button" style={{ color: "#777", fontWeight: "700" }}>
        User
      </Typography>
      <TextField
        margin="dense"
        id="balance"
        label="Name"
        type="text"
        fullWidth
        multiline
        /* value={amount}
            onChange={({ target }) => setAmount(target.value)} */
      />
      <TextField
        margin="dense"
        id="balance"
        label="Email"
        type="text"
        fullWidth
        multiline
        /* value={amount}
            onChange={({ target }) => setAmount(target.value)} */
      />
      <TextField
        margin="dense"
        id="balance"
        label="Password"
        type="text"
        fullWidth
        multiline
        /* value={amount}
            onChange={({ target }) => setAmount(target.value)} */
      />
      <TextField
        margin="dense"
        id="balance"
        label="Confirm Password"
        type="text"
        fullWidth
        multiline
        /* value={amount}
            onChange={({ target }) => setAmount(target.value)} */
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="ADMIN"
        fullWidth
        margin="dense"
      >
        {roles.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        style={{ marginTop: "20px", backgroundColor: "#0652DD" }}
      >
        Edit User
      </Button>
    </Container>
  );
};
