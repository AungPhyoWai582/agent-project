import { Delete, Edit, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  IconButton,
  Stack,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../../shared/Axios";
import CallComponent from "./CallComponent";
import CallListComponent from "./CallListComponent";

const CallsList = () => {
  const { lotteryId } = useParams();

  const [call, setCall] = useState([]);

  useEffect(() => {
    Axios.get(`/call/${lotteryId}`, {
      headers: {
        authorization: `Bearer ` + localStorage.getItem("access-token"),
      },
    }).then((res) => {
      console.log(res.data);
      setCall(res.data.data);
    });
  }, []);

  const [subopen, setSubopen] = useState({
    key: null,
    checked: null,
  });
  const subMember = (e, key) => {
    setSubopen({ key: key, checked: !subopen.checked });
  };
  console.log(subopen);
  return (
    <Stack
      width={{ xs: "100%", md: "50%" }}
      margin={{ md: "auto" }}
      //   component={"table"}
      //   boxShadow={1}
      //   padding={1}
      spacing={1}
      //   height={"100vh"}
      //   overflow={"scroll"}
    >
      {call.map((cal, key) => (
        <Box
          key={key}
          sx={{ backgroundColor: grey[200] }}
          paddingLeft={1}
          paddingRight={1}
          borderRadius={1}
        >
          <CallComponent
            cal={cal}
            subopen={subopen}
            key={key}
            subMember={(e) => subMember(e, key)}
          />
          {/* <Stack bgcolor="white" padding={1} maxHeight={200} overflow="auto"> */}
          {subopen.key === key &&
            cal.numbers.map((nums, key) => (
              <Collapse
                key={key}
                in={subopen.checked}
                timeout="auto"
                unmountOnExit
              >
                <Stack
                  // key={key}
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
              // <CallListComponent
              //   nums={nums}
              //   subopen={subopen}
              //   subMember={subMember}
              //   key={key}
              // />
            ))}
          {/* </Stack> */}
          {/* <Stack direction={"row"} justifyContent={"flex-end"}></Stack> */}
        </Box>
      ))}
    </Stack>
  );
};
export default CallsList;
