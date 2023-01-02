// import { AppBar, Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

function Navbar() {
  function MyNavbar() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ height: "15rem", background: "Red", width: "100%" }}></Box>
    );
  }
}

export default Navbar;
