import React from "react";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  Stack,
  Typography,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  TableBody,
  TableRow,
  IconButton,
} from "@mui/material";
import { teal } from "@mui/material/colors";

const Report = () => {
  return (
    <Stack>
      {/* <TableContainer component={Paper} sx={{ padding: "1px" }}> */}
      <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
        <TableHead sx={{ bgcolor: teal[700] }}>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Item</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Qty</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Order</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>More</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody sx={{ overflow: "scroll" }}>
          {report.map((rp) => {
            return (
              <TableRow>
                <TableCell>{rp.userId.username}</TableCell>
                <TableCell>{rp.bet}</TableCell>
                <TableCell>{rp.commission}</TableCell>
                <TableCell>{rp.win}</TableCell>
                <TableCell>
                  <IconButton color="success">
                    <NavLink
                      to={`/report/master/agents/${lotteryId}`}
                      state={{ lotteryId: lotteryId }}
                    >
                      <VisibilityOutlined />
                    </NavLink>
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody> */}
      </Table>
      {/* </TableContainer> */}
    </Stack>
  );
};

export default Report;
