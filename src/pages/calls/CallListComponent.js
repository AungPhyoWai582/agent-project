import { Collapse, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const CallListComponent = ({ subopen, nums, subMember, key }) => {
  return (
    <Collapse in={subopen} timeout="auto" unmountOnExit>
      <Stack
        key={key}
        direction={"row"}
        justifyContent="space-between"
        // bgcolor="white"
        borderBottom={1}
        borderColor={grey[300]}
      >
        <Typography fontSize={14}>{nums.number}</Typography>
        <Typography fontSize={14}>{nums.amount}</Typography>
      </Stack>
    </Collapse>
  );
};

export default CallListComponent;
