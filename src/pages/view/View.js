import { FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";
import { NavLink } from "react-router-dom";
const View = () => {
  return (
    <Stack
      width={{ xs: "100%", md: "50%" }}
      margin={{ md: "auto" }}
      //   component={"table"}
      boxShadow={1}
      // padding={1}
      // marginX={0}
    >
      <Stack direction={"row"} spacing={1} padding={2}>
        <TextField type={"date"} />
        <TextField type={"date"} />
      </Stack>
      <Stack direction={"column"} spacing={1}>
        <NavLink
          to="/view/lager-report"
          style={{ textDecoration: "none", color: "inherit" }}
        >
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
            <Stack direction={"column"}>
              <Typography fontSize={"small"}>28/6/2022 AM</Typography>
              <Typography fontSize={"small"}>128837</Typography>
            </Stack>
            <Stack direction={"column"}>
              <Typography fontSize={"small"}>tha</Typography>
              <Typography fontSize={"small"}>number : 59</Typography>
            </Stack>
            <Stack direction={"column"}>
              <Typography fontSize={"small"}>Total : 590000</Typography>
              <Typography fontSize={"small"}>Com : 59000</Typography>
            </Stack>
          </Stack>
        </NavLink>
      </Stack>
    </Stack>
  );
};

export default View;
