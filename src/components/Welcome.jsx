import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const legend = [
  { text: "cars", icon: "https://api.iconify.design/icon-park/car.svg" },
  {
    text: "bikes",
    icon: "https://api.iconify.design/fluent-emoji-flat/bicycle.svg",
  },
  {
    text: "motorcycles",
    icon: "https://api.iconify.design/fluent-emoji-flat/motorcycle.svg",
  },
  { text: "bus", icon: "https://api.iconify.design/fluent-emoji-flat/bus.svg" },
  { text: "truck", icon: "https://api.iconify.design/noto/delivery-truck.svg" },
];

export const Welcome = () => {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ width: 260, float: "right", marginTop: 2 }}
      >
        <Table sx={{ width: 260 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>Location Legend</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {legend.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">
                  <img src={row.icon} alt={row.text} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.text}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
