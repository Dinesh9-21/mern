import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Dropdown = ({ handleOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    handleOptionChange(selectedValue); // Pass the selected value to the parent component
  };

  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel id="dropdown-label">Select an option</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
      >
        <MenuItem value="option1">25%</MenuItem>
        <MenuItem value="option2">50%</MenuItem>
        <MenuItem value="option3">75%</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
