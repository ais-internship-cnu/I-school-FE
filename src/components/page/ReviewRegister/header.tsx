import { Button, Typography, Grid, TextField } from "@mui/material";
import useReview from "hooks/useReview";
import { useState } from "react";
import "styles/review-register.css";

const header = () => {

  return (
    <Typography variant="h6" className="rating-title">
        강의평 등록
    </Typography>
  );
};

export default header;
