import React, { useEffect, useRef, useState } from "react";
import {
  Paper,
  Table,
  TableRow,
  TableCell,
  TableHead,
  Button,
  Alert,
  Box,
  Typography,
  Grid,
  TableContainer,
  TableBody,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { Container } from "@mui/system";
import { useReactToPrint } from "react-to-print";

const banner = {
  backgroundImage:
    "url(https://images.unsplash.com/photo-1530543787849-128d94430c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  color: "#fff",
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  height: "180px",
};

const table = {
  borderRight: "1px solid gray",
};

const column = {
  display: "flex",
  alignItems: "center",
};

const footer = {
  backgroundImage:
    "url(https://images.unsplash.com/photo-1530543787849-128d94430c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const GetInvoice = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState('');
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `invoice-data-${invoice.uuid}`,
    onAfterPrint: () => (
      <Alert severity="success">This is a success alert — check it out!</Alert>
    ),
  });

  useEffect(() => {
    getPaymentData();
  }, []);

  const getPaymentData = async () => {
    const response = await axios.get(`http://localhost:5000/payments/${id}`);
    setInvoice(response.data);
  };

  /* console.log(invoice.user.name); */

  return (
    <Container>
      <Paper ref={componentRef}>
        User: {invoice.id}
        User: {invoice.id}
        User: {invoice.id}
        User: {invoice.id}
        User: {invoice.id}
      </Paper>
      <Button onClick={handlePrint}>Download PDF</Button>
    </Container>
  );
};
