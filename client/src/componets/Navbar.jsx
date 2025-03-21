import React from "react";
import { AppBar, Toolbar, Box, Typography, Link } from "@mui/material";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none", borderBottom: "2px solid blue" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2 }}>
        {/* Left: Heart Logo */}
        <Box>
          <img src={logo} alt="Heart Logo" style={{ height: 40 }} /> 
        </Box>

        {/* Right: Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link href="#" sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>HOME</Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>NEWS</Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>HELP</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
