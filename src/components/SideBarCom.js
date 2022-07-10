import { AccountCircle, ListAlt } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { grey, teal } from "@mui/material/colors";

const SideBarCom = ({ setHandleOpen, handdleopen, name, setAuthUser }) => {
  // console.log(name);
  const logout = () => {
    console.log("LOGOUT");
    localStorage.removeItem("access-token");
    localStorage.removeItem("user-info");
    setAuthUser({
      token: null,
      authorize: false,
      user_info: {},
    });
  };
  return (
    <Drawer
      open={handdleopen}
      anchor={"left"}
      onClose={() => setHandleOpen(false)}
    >
      <Box
        display={"flex"}
        sx={{ marginTop: "10" }}
        width={{ xs: 200, md: 400 }}
      >
        <Stack width={"100%"}>
          <Stack width={"100%"} height={80} bgcolor={grey[300]}>
            <Avatar
              sx={{
                margin: "auto",
                width: 56,
                height: 56,
                fontWeight: "bold",
                border: 3,
                color: "green",
                borderColor: "green",
              }}
            >
              {name}
            </Avatar>
          </Stack>
          <Divider />
          <List>
            <NavLink
              style={{ textDecoration: "none" }}
              to="/lotery"
              onClick={() => setHandleOpen(false)}
            >
              <ListItem sx={{ ":hover": { bgcolor: teal[100] } }}>
                <ListItemIcon>
                  <NoteAddIcon />
                </ListItemIcon>
                <ListItemText primary="Lotery" />
              </ListItem>
            </NavLink>

            <NavLink
              style={{ textDecoration: "none" }}
              to="/view"
              onClick={() => setHandleOpen(false)}
            >
              <ListItem sx={{ ":hover": { bgcolor: teal[100] } }}>
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="View" />
              </ListItem>
            </NavLink>

            <NavLink
              style={{ textDecoration: "none" }}
              to="/account_info"
              onClick={() => setHandleOpen(false)}
            >
              <ListItem sx={{ ":hover": { bgcolor: teal[100] } }}>
                <ListItemIcon>
                  <NoteAddIcon />
                </ListItemIcon>
                <ListItemText primary="Account" />
              </ListItem>
            </NavLink>

            <NavLink
              style={{ textDecoration: "none" }}
              to="/change_password"
              onClick={() => setHandleOpen(false)}
            >
              <ListItem sx={{ ":hover": { bgcolor: teal[100] } }}>
                <ListItemIcon>
                  <FormatListNumberedIcon />
                </ListItemIcon>
                <ListItemText primary="Change Password"></ListItemText>
              </ListItem>
            </NavLink>
            {/* <NavLink
              style={{ textDecoration: "none" }}
                to={"/login"}
              onClick={logout}
            > */}
            <ListItem
              sx={{ ":hover": { bgcolor: teal[100] }, cursor: "pointer" }}
              onClick={logout}
            >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
            {/* </NavLink> */}
          </List>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default SideBarCom;
