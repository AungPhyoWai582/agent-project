import { Stack, Table, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

const MemberList = () => {
  return (
    <Stack>
      <Typography
        variant={"h6"}
        textAlign={"center"}
        padding={1}
        fontWeight={800}
      >
        Customer List
      </Typography>
      <Stack padding={1}>
        <Table>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Commission</TableCell>
            <TableCell>Report</TableCell>
          </TableRow>
        </Table>
      </Stack>
    </Stack>
  );
};

export default MemberList;
