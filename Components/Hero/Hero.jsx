import { Stack, Typography } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <>
      <Stack
        justifyContent="center"
        sx={{ marginY: "1.2rem", background: "", minHeight: "38vh" }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "10rem", textAlign: "center" }}
        >
          Background Works
        </Typography>
      </Stack>
    </>
  );
}

export default Hero;
