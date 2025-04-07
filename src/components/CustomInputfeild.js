import { useState } from "react";

const { TextField } = require("@mui/material");

export  const CustomInput = ({ label, type = "text", name, value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      variant="filled"
      placeholder={label}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      InputLabelProps={{
        style: { color: "black" }, // Black label color
      }}
      InputProps={{
        style: {
          backgroundColor: "#f6f6f6",
          borderRadius: "8px",
          color: "#000",
          
        },
        placeholder: isFocused ? label : "", // Grey when inactive, black when focused
      }}
      sx={{
        "& .MuiFilledInput-root": {
          backgroundColor: "#f6f6f6",
          borderRadius: "8px",
          "&:hover": { backgroundColor: "#f0f0f0" },
          "&.Mui-focused": {
            backgroundColor: "#ffffff",
            boxShadow: "none",
            border: "none",
          },
          "&:before, &:after": { borderBottom: "none !important" },
        },
      }}
    />
  );
};