import { VisibilityOutlined } from "@mui/icons-material";
import {
  Button,
  FormControlLabel,
  Stack,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "../../shared/Axios";
const View = () => {
  const [lager, setLager] = useState([]);
  useEffect(() => {
    Axios.get(`/lagers`, {
      headers: {
        authorization: `Bearer ` + localStorage.getItem("access-token"),
      },
    }).then((res) => {
      setLager(res.data.data);
    });
  }, []);
  console.log(lager);
  return (
    <Stack
      width={{ xs: "100%" }}
      margin={{ md: "auto" }}
      //   component={"table"}
      boxShadow={1}
      spacing={1}
      padding={1}
      // marginX={0}
    >
      <Stack
        direction={"row"}
        spacing={1}
        padding={2}
        justifyContent={"space-between"}
      >
        {/* <TextField type={"date"} />
        <TextField type={"date"} /> */}
        <FormControlLabel label={"All"} control={<Checkbox />} />
        <Button variant="contained" size="small" color={"success"}>
          Send Lager
        </Button>
      </Stack>

      {lager.map((lgr, key) => {
        const date = new Date(lgr._date);
        return (
          <Stack direction={"column"} spacing={1} key={key}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{
                borderRadius: 2,
                ":hover": {
                  cursor: "pointer",
                  bgcolor: teal[100],
                },
              }}
              boxShadow={1}
              padding={1}
              borderLeft={3}
              borderRight={3}
              borderColor={"success.light"}
            >
              <Checkbox />

              <Stack direction={"column"}>
                <Typography fontSize={"small"}>
                  {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}{" "}
                  {lgr._time}
                </Typography>
                {/* <Typography fontSize={"small"}>{lgr._id}</Typography> */}
              </Stack>
              <Stack direction={"column"}>
                <Typography fontSize={"small"}>{lgr.user.username}</Typography>
                <Typography fontSize={"small"}>{lgr.call.length}</Typography>
              </Stack>
              <Stack direction={"column"}>
                <Typography fontSize={"small"}>
                  Total : {lgr.totalAmount}
                </Typography>
                <Typography fontSize={"small"}>Com : -</Typography>
              </Stack>
              <Stack direction={"column"}>
                <NavLink
                  to={`/view/lager/${lgr.lottery}`}
                  state={{ lager: lgr }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <IconButton>
                    <VisibilityOutlined />
                  </IconButton>
                </NavLink>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default View;
