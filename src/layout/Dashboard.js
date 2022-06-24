import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Lottery from "../pages/lottery/Lottery";
import Report from "../pages/report/Report";
import Main from "../pages/main/Main";
import AppTopbar from "../components/AppTopbar";

const Dashboard = () => {
  const routes = (
    <Routes>
      <Route path="/*" element={<Navigate to="/main" replace />} />
      <Route path="/main" element={<Main />} />
      <Route path="/lottery" element={<Lottery />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppTopbar name={"nnz"} />
        {routes}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
