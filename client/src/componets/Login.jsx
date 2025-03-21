import React from "react";
import { TextField, Button, Link, Box, Typography, Container } from "@mui/material";
import logo from "../images/logo.png"
import cloud from "../images/cloud.jpg"

const Login = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          `url(${cloud})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Lighter Transparent Black Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Light black tint for readability
        }}
      />

      {/* Top Navigation */}
      <Box sx={{ position: "absolute", top: 10, right: 20, display: "flex", gap: 2, zIndex: 2 }}>
        <Link href="#" variant="body2" sx={{ color: "white", fontWeight: "bold" }}>
          FAQs
        </Link>
        <Link href="#" variant="body2" sx={{ color: "white", fontWeight: "bold" }}>
          HELP
        </Link>
      </Box>

      {/* Transparent Login Box */}
      <Container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          zIndex: 2,
          border: "2px solid rgba(0, 162, 255, 0.6)", // Thin blue border
          borderRadius: 3,
          p: 4,
          boxShadow: "0 0 10px rgba(0, 162, 255, 0.4)", // Light blue glow
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight white tint but transparent
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: "black", fontWeight: "bold" }}>
          LOGIN
        </Typography>

        <Box sx={{ textAlign: "left", mb: 2 }}>
          <Typography sx={{ color: "black", fontWeight: "bold" }}>USERNAME</Typography>
          <TextField
            fullWidth
            variant="standard"
            InputProps={{
              style: { color: "black" },
            }}
            sx={{
              input: { color: "black" },
              "& .MuiInput-underline:before": { borderBottom: "2px solid black" },
              "& .MuiInput-underline:hover:before": { borderBottom: "2px solid black" },
            }}
          />
        </Box>

        <Box sx={{ textAlign: "left", mb: 3 }}>
          <Typography sx={{ color: "black", fontWeight: "bold" }}>PASSWORD</Typography>
          <TextField
            fullWidth
            type="password"
            variant="standard"
            InputProps={{
              style: { color: "black" },
            }}
            sx={{
              input: { color: "black" },
              "& .MuiInput-underline:before": { borderBottom: "2px solid black" },
              "& .MuiInput-underline:hover:before": { borderBottom: "2px solid black" },
            }}
          />
        </Box>

        {/* Login Button (Decreased Width) */}
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={{
              mt: 2,
              width: "60%",
              bgcolor: "#4A90E2",
              color: "white",
              fontWeight: "bold",
              borderRadius: "20px",
              p: 1.5,
              "&:hover": { bgcolor: "#357ABD" },
            }}
          >
            LOGIN
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Link href="#" variant="body2" sx={{ color: "blue", fontWeight: "bold" }}>
            Register?
          </Link>
        </Box>
      </Container>

      {/* Skip Login Button (Bottom Center) */}
      <Box sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
        <Link href="#" variant="body2" sx={{ color: "black", fontWeight: "bold", fontSize: "16px" }}>
          Skip Login
        </Link>
      </Box>

      {/* Heart Image (Bottom Right) */}
      <Box sx={{ position: "absolute", bottom: 10, right: 10, zIndex: 2 }}>
        <img src={logo} alt="Heart" width={50} height={50} />
      </Box>
    </Box>
  );
};

export default Login;
