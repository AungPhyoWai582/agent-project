import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Lottery from "../pages/lottery/Lottery";
import Report from "../pages/report/Report";
import Main from "../pages/main/Main";
import AppTopbar from "../components/AppTopbar";
import Bet from "../pages/bet/Bet";
import ChangePassword from "../pages/changepassword/ChangePassword";
import AccountInfo from "../pages/accountInfo/AccountInfo";
import Login from "../pages/login/Login";
import ReportCalls from "../pages/report/ReportCalls";
import CallDetail from "../pages/report/CallDetail";
import Lager from "../pages/lager/Lager";
import View from "../pages/view/View";

const Dashboard = () => {
  const [authUser, setAuthUser] = useState({
    token: null,
    authorize: false,
    user_info: {},
  });

  useEffect(() => {
    if (localStorage.getItem("access-token")) {
      setAuthUser({
        token: localStorage.getItem("access-token"),
        authorize: true,
        user_info: JSON.parse(localStorage.getItem("user-info")),
      });
    }
  }, []);

  console.log(authUser);
  const routes = (
    <Routes>
      <Route path="/*" element={<Navigate to="/lottery" replace />} />
      {/* <Route path="/main" element={<Main />} /> */}
      <Route path="/lottery" element={<Lottery />} />
      <Route path="/view" element={<View />} />

      <Route path="/lottery/bet/:lotteryId" element={<Bet />} />
      <Route path="/lottery/lager/:lotteryId" element={<Lager />} />

      <Route path="/reports/agent/:lotteryId" element={<Report />} />
      <Route
        path="/reports/agent/:agentId/calls/:lotteryId"
        element={<ReportCalls />}
      />
      <Route
        path="/reports/agent/:agentId/calls/:lotteryId/:callId"
        element={<CallDetail />}
      />
      <Route path="/change_password" element={<ChangePassword />} />
      <Route
        path="/account_info"
        element={<AccountInfo authUser={authUser} />}
      />
    </Routes>
  );
  return (
    <>
      {!authUser.authorize ? (
        <Routes>
          <Route
            path="/login"
            element={<Login authUser={authUser} setAuthUser={setAuthUser} />}
          />
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        <Grid container>
          <Grid item xs={12} margin={{ md: 0 }}>
            <AppTopbar
              // name={"nnz"}
              authUser={authUser}
              setAuthUser={setAuthUser}
            />
          </Grid>
          <Grid item xs={12} padding={{ xs: 0, md: 1 }}>
            {routes}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Dashboard;
