import { Add } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  IconButton,
  Stack,
  Table,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Customer = () => {
  //   const [cusCreate, setCusCreate] = useState({});
  const [cusName, setCusName] = useState({});

  const CustomerCreate = () => {
    console.log(cusName);
    setOpen(false);
  };
  //date picker
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = useState(false);
  const DiaOpen = () => {
    setOpen(!open);
  };
  return (
    <Stack>
      <Stack
        padding={1}
        // width={"100%"}
        direction={"row"}
        spacing={{ xs: 1, sm: 3, md: 3 }}
        // alignItems={"end"}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} size={"small"} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="End Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} size={"small"} />}
          />
        </LocalizationProvider>
        <IconButton size={"small"} onClick={DiaOpen}>
          <Typography>Create Customer</Typography>
          <Add fontSize={"small"} />
        </IconButton>
        <Dialog open={open}>
          <DialogActions>
            <Stack spacing={2}>
              <Typography>Name</Typography>
              <TextField
                variant={"outlined"}
                size={"small"}
                onChange={(e) => setCusName(e.target.value)}
              />
              <Button
                variant={"contained"}
                size={"small"}
                onClick={CustomerCreate}
              >
                Submit
              </Button>
            </Stack>
          </DialogActions>
        </Dialog>
      </Stack>
      <Stack padding={1}>
        <Table>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Total Bet</TableCell>
            <TableCell>Report</TableCell>
          </TableRow>
        </Table>
      </Stack>
    </Stack>
  );
};

export default Customer;
