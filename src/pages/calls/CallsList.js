import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../../shared/Axios";

const CallsList = () => {
  const { lotteryId } = useParams();

  const [call, setCall] = useState([]);

  useEffect(() => {
    Axios.get(`/call/${lotteryId}`).then((res) => {
      setCall(res.data.data);
    });
  }, []);

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
          <Stack direction={"row"} justifyContent="space-between">
            <Typography>{cal._id}</Typography>
            <Typography>{cal.callname}</Typography>
            <Stack direction={"row"}>
              <IconButton size="small">
                <Edit fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <Delete fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
          <Stack bgcolor="white" padding={1} maxHeight={200} overflow="auto">
            {cal.numbers.map((nums, key) => (
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
            ))}
          </Stack>
          <Stack direction={"row"} justifyContent={"flex-end"}>
            <Typography>Total {cal.totalAmount}</Typography>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};
export default CallsList;
