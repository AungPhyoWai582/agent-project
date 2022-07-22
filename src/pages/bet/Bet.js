import { Close } from "@mui/icons-material";
import {
  Alert,
  Autocomplete,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BetButtonCom from "../../components/BetButtonCom";
import BetCom from "../../components/BetCom";
import BetListCom from "../../components/BetListCom";
import TwoDSign from "../../components/TwoDSign";
import Axios from "../../shared/Axios";
// import { content } from "../../components/TwoDSign";

const Bet = ({}) => {
  // const choseFun = useContext(content);
  // console.log(choseFun);

  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    Axios.get(`/customer`, {
      headers: {
        authorization: `Bearer ` + localStorage.getItem("access-token"),
      },
    })
      .then((res) => {
        console.log(res.data.customers[0]._id);
        const { customers } = res.data;
        if (customers) {
          setCustomer(res.data.customers);

          setAutoCompleteValue(res.data.customers[0]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(customer);

  const { lotteryId } = useParams();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  //For twoD sign state
  const [autoCompleteValue, setAutoCompleteValue] = useState();

  const [call, setCall] = useState({
    customer: "",
    numbers: [],
  });

  const [onchange, setOnchange] = useState({
    number: "",
    amount: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setOnchange({
      ...onchange,
      [name]: value,
    });
  };

  const choice = (e) => {
    e.preventDefault();

    if (
      // onchange.number === "1" ||
      // onchange.number === "2" ||
      // onchange.number === "3" ||
      // onchange.number === "4" ||
      // onchange.number === "5" ||
      // onchange.number === "6" ||
      // onchange.number === "7" ||
      // onchange.number === "8" ||
      // onchange.number === "9" ||
      // onchange.number === "0"
      onchange.number.length <= 2
    ) {
      setCall({
        ...call,
        numbers: [...call.numbers, onchange],
      });
      setOnchange({ number: "", amount: onchange.amount });
    } else {
      console.log("error");
    }
  };

  const bet = (e) => {
    e.preventDefault();
    console.log(call);

    Axios.post(`/call/${lotteryId}`, call, {
      headers: {
        authorization: `Bearer ` + localStorage.getItem("access-token"),
      },
    })
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
        setCall({
          callname: "",
          numbers: [],
        });
        setOnchange({
          number: "",
          amount: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Stack height={"100%"}>
      {success && (
        <Alert
          severity="success"
          sx={{
            color: "green",
            // fontWeight: "bold",
            bgcolor: green[200],
          }}
          action={
            <IconButton
              aria-label="close"
              color="success"
              size="small"
              onClick={() => {
                setSuccess(false);
              }}
            >
              <Close fontSize="12" />
            </IconButton>
          }
        >
          Lottery Updated !
        </Alert>
      )}
      {error && (
        <Alert
          severity="error"
          sx={{
            color: "red",
            // fontWeight: "bold",
            bgcolor: red[200],
          }}
          action={
            <IconButton
              aria-label="close"
              color="error"
              size="small"
              onClick={() => {
                setError(false);
              }}
            >
              <Close fontSize="12" />
            </IconButton>
          }
        >
          Error
        </Alert>
      )}
      <Stack
        padding={1}
        spacing={1}
        direction={"row"}
        justifyContent={"space-around"}
        boxShadow={1}
      >
        <BetCom
          name="number"
          value={onchange.number}
          onChange={onChangeHandler}
          label={"နံပါတ်"}
        />

        <TwoDSign />
        <BetCom
          name="amount"
          value={onchange.amount}
          onChange={onChangeHandler}
          label={"ထိုးငွေ"}
        />
      </Stack>
      <Stack padding={1}>
        <BetButtonCom onClick={choice} btnText={"ရွေးမည်"} color={"success"} />
      </Stack>
      <Stack alignItems={"start"} paddingX={{ md: 4 }}>
        {/* <BetCom
          style={{ marginTop: 1 }}
          value={call.callname}
          onChange={(e) => setCall({ ...call, callname: e.target.value })}
          label="အမည်"
        /> */}
        <Autocomplete
          id="combo-box-demo"
          options={customer}
          value={autoCompleteValue}
          getOptionLabel={(cus) => cus.name}
          sx={{ width: 300 }}
          onChange={(e, value) => {
            setAutoCompleteValue(value);
            setCall({ ...call, customer: value._id });
          }}
          renderInput={(params) => <TextField {...params} label="Customer" />}
        />
      </Stack>
      <Stack
        alignItems={"center"}
        width={"100%"}
        maxHeight={500}
        // height={"100%"}
        // minHeight={400}
        overflow={"scroll"}
        boxShadow={1}
        borderBottom={1}
      >
        {call.numbers.map((cal, key) => (
          <BetListCom call={cal} key={key} />
        ))}
      </Stack>
      <Stack
        component={"button"}
        height={"5%"}
        sx={{
          ":hover": {
            cursor: "pointer",
          },
        }}
        // textAlign="center"
        position={"absolute"}
        bottom={4}
        width="100%"
        alignItems={"center"}
        bgcolor="success.main"
        onClick={bet}
      >
        <Typography margin={"auto"} textAlign={"center"}>
          Bet
        </Typography>
      </Stack>
      {/* <Stack
        width={"100%"}
        // padding={1}
        position={"absolute"}
        bottom={3}
        left={3}
        right={3}
      >
        <BetButtonCom fullWidth={true} btnText={"ရွေးမည်"} color={"success"} />
      </Stack> */}
    </Stack>
  );
};

export default Bet;
