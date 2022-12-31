import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Welcome } from "../components/Welcome";
import { Layout } from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
      <Container style={{ textAlign: "center" }}>
        <Welcome />
      </Container>
    </Layout>
  );
};
