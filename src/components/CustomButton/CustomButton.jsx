import React from "react";
import "./ButtonDashb.css";
import { CircularProgress } from "@mui/material";

const CustomButton = ({ editButton, background, padding, height, width, textButton, handleClick, className, loading }) => {
  const buttonClass = background === "red" ? "btn-purple" : "btn-transparent";

  const style = {
    height: height,
    width: width,
    padding: padding,
    background: editButton,
    borderColor: editButton,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: loading ? "not-allowed" : "pointer",
    opacity: loading ? 0.7 : 1, // Reduce opacity when loading
    pointerEvents: loading ? "none" : "auto", // Disable all events when loading
    borderRadius:"8px"
  };

  return (
    <div onClick={!loading ? handleClick : null} className={`btn-button-dashboard ${buttonClass} ${className}`} style={style}>
      {loading ? (
        <CircularProgress size={24} sx={{ color: "white" }} />
      ) : (
        <p className="btn-paragraph">{textButton}</p>
      )}
    </div>
  );
};

export default CustomButton;


