import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const TwoDSign = (e) => {
  const [age, setAge] = useState([]);
  const handleChange = () => {
    setAge(e);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      {/* <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel> */}
      <Select
        size="small"
        // labelId="demo-simple-select-autowidth-label"
        // id="demo-simple-select-autowidth"
        // value={age}
        onChange={handleChange}
        // autoWidth
        // label="Age"
      >
        <MenuItem value={age}>ဒဲ့</MenuItem>
        <MenuItem value={age}>အာ</MenuItem>
        <MenuItem value={age}>ခွေ</MenuItem>
        <MenuItem value={age}>ထိတ်ပိတ်</MenuItem>
        <MenuItem value={age}>နောက်ပိတ်</MenuItem>
        <MenuItem value={age}>ခွေ</MenuItem>
        <MenuItem value={age}>ခွေ</MenuItem>
        <MenuItem value={age}>ခွေ</MenuItem>
        <MenuItem value={age}>ခွေ</MenuItem>
        <MenuItem value={age}>ခွေ</MenuItem>
        <MenuItem value={age}>ခွေ</MenuItem>
        <MenuItem value={age}>ခွေ</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TwoDSign;
