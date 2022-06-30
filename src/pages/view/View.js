import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  RemoveRedEye,
  VisibilityOutlined,
} from "@mui/icons-material";
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
  TableContainer,
  Paper,
  Collapse,
  Box,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "../../shared/Axios";
import { DataGrid } from "@mui/x-data-grid";
import { id } from "date-fns/locale";

const Row = ({ lag }) => {
  // const { row } = props;
  const [open, setOpen] = React.useState(false);
  const { _id, _date, _time, totalAmount, lottery } = lag;
  const date = new Date(_date);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" }, padding: 0.5 }}>
        {/* <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell> */}
        <TableCell>
          <Checkbox></Checkbox>
        </TableCell>
        <TableCell component="th" scope="row">
          {_id}
        </TableCell>
        <TableCell align="center">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}/ ${_time}`}</TableCell>
        <TableCell align="center">{totalAmount}</TableCell>

        <TableCell align="center">
          <NavLink
            to={`/view/lager/${lottery}`}
            state={{ lager: lag }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <IconButton>
              <VisibilityOutlined />
            </IconButton>
          </NavLink>
        </TableCell>
      </TableRow>
      {/* <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> */}
    </React.Fragment>
  );
};

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

  //Table

  // const date = new Date(lag._date);
  // const rows = lager.map((lag, key) => {
  //   createData(
  //     lag._id,
  //     `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${lag._time}`,
  //     lag.totalAmount,
  //     "10000"
  //   );
  // });

  // const columns = [
  //   { field: "id", headerName: "ID", width: 70 },
  //   { field: "date", headerName: "Date", width: 130 },
  //   {
  //     field: "total",
  //     headerName: "Total",
  //     type: "number",
  //     width: 90,
  //   },
  //   { field: "com", type: "number", headerName: "Commission", width: 130 },
  //   {
  //     field: "count",
  //     headerName: "Count",
  //     type: "number",
  //     width: 90,
  //   },
  //   {
  //     field: "win_lose",
  //     headerName: "Win/Lose",
  //     type: "number",
  //     width: 90,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 90,
  //   },

  //   // {
  //   //   field: "fullName",
  //   //   headerName: "Full name",
  //   //   description: "This column has a value getter and is not sortable.",
  //   //   sortable: false,
  //   //   width: 160,
  //   //   valueGetter: (params) =>
  //   //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   // },
  // ];

  // const rows = [
  //   {
  //     id: 1,
  //     date: "Snow",
  //     action: <Button>ok</Button>,
  //     com: "Jon",
  //     total: 35,
  //   },
  // ];
  // const rows = lager.map((lag, key) => {
  //   console.log(actionComp(lag));
  //   const date = new Date(lag._date);

  //   return {
  //     id: lag._id,
  //     date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${
  //       lag._time
  //     }`,
  //     total: lag.totalAmount,
  //     com: key,
  //     count: lag.call.length,
  //     win_lose: "90000",
  //     action: (lag) => <Button>ok</Button>,
  //   };
  // });
  // const date = new Date(lag._date);
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
      {/* <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div> */}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>
                {" "}
                <Checkbox></Checkbox>{" "}
              </TableCell>
              <TableCell>id</TableCell>
              <TableCell align="center">date</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lager.map((lag, key) => (
              <Row
                // id={lag._id}
                // date={lag._date}
                // totalAmount={lag.totalAmount}
                lag={lag}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* {lager.map((lgr, key) => {
        // const date = new Date(lgr._date);
        // return (
        // <Stack direction={"column"} spacing={1} key={key}>
        //   <Stack
        //     direction={"row"}
        //     justifyContent={"space-between"}
        //     sx={{
        //       borderRadius: 2,
        //       ":hover": {
        //         cursor: "pointer",
        //         bgcolor: teal[100],
        //       },
        //     }}
        //     boxShadow={1}
        //     padding={1}
        //     borderLeft={3}
        //     borderRight={3}
        //     borderColor={"success.light"}
        //   >
        //     <Checkbox />
        //     <Stack direction={"column"}>
        //       <Typography fontSize={"small"}>
        //         {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}{" "}
        //         {lgr._time}
        //       </Typography>
               <Typography fontSize={"small"}>{lgr._id}</Typography> 
        //     </Stack>
        //     <Stack direction={"column"}>
        //       <Typography fontSize={"small"}>{lgr.user.username}</Typography>
        //       <Typography fontSize={"small"}>{lgr.call.length}</Typography>
        //     </Stack>
        //     <Stack direction={"column"}>
        //       <Typography fontSize={"small"}>
        //         Total : {lgr.totalAmount}
        //       </Typography>
        //       <Typography fontSize={"small"}>Com : -</Typography>
        //     </Stack>
        //     <Stack direction={"column"}>
              // <NavLink
              //   to={`/view/lager/${lgr.lottery}`}
              //   state={{ lager: lgr }}
              //   style={{ textDecoration: "none", color: "inherit" }}
              // >
              //   <IconButton>
              //     <VisibilityOutlined />
              //   </IconButton>
              // </NavLink>
        //     </Stack>
        //   </Stack>
        // </Stack>
        // );
      })} */}
    </Stack>
  );
};

export default View;
