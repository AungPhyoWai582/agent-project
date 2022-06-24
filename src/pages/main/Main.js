import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
// import MuiAppBar from "../../../components/MuiAppbar";
// import MuiAppBar from "../../components/MuiAppbar";

const Main = () => {
  return (
    <div>
      {/* <MuiAppBar /> */}
      <Stack marginTop={5} padding={5} spacing={2}>
        <NavLink to="/lottery" style={{ textDecoration: "none" }}>
          <Stack
            component={"div"}
            bgcolor={"success.light"}
            alignItems="center"
            height={100}
            borderRadius={1}
            boxShadow={1}
          >
            <Typography
              margin={"auto"}
              fontWeight={700}
              fontSize={25}
              color="white"
            >
              Lottery
            </Typography>
          </Stack>
        </NavLink>
        <NavLink to="/report" style={{ textDecoration: "none" }}>
          <Stack
            component={"div"}
            bgcolor={"success.light"}
            alignItems="center"
            height={100}
            borderRadius={1}
            boxShadow={1}
          >
            <Typography
              margin={"auto"}
              fontWeight={700}
              fontSize={25}
              color="white"
            >
              Report
            </Typography>
          </Stack>
        </NavLink>
      </Stack>
    </div>
  );
};
export default Main;
