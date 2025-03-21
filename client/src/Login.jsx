import React from "react";
import { TextField, Button, Link, Box, Typography, Container } from "@mui/material";
import heart from "../images/heart.png";


const Login = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/path-to-your-cloud-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Top Navigation */}
      <Box sx={{ position: "absolute", top: 10, right: 20, display: "flex", gap: 2 }}>
        <Link href="#" variant="body2" sx={{ color: "white", fontWeight: "bold" }}>
          FAQs
        </Link>
        <Link href="#" variant="body2" sx={{ color: "white", fontWeight: "bold" }}>
          HELP
        </Link>
      </Box>

      <Container
        maxWidth="xs"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: 3,
          p: 4,
          boxShadow: 5,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: "white", fontWeight: "bold" }}>
          LOGIN
        </Typography>
        <TextField fullWidth label="Username" variant="outlined" margin="normal" InputProps={{ style: { color: "white" } }} sx={{ input: { bgcolor: "rgba(255, 255, 255, 0.2)", borderRadius: 1 } }} />
        <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal" InputProps={{ style: { color: "white" } }} sx={{ input: { bgcolor: "rgba(255, 255, 255, 0.2)", borderRadius: 1 } }} />
        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2, bgcolor: "rgba(255, 255, 255, 0.4)", color: "black", fontWeight: "bold" }}>
          LOGIN
        </Button>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Link href="#" variant="body2" sx={{ color: "white" }}>
            Register?
          </Link>
          <Link href="#" variant="body2" sx={{ color: "white" }}>
            Skip Login
          </Link>
        </Box>
      </Container>

      {/* Heart Image */}
      <Box sx={{ position: "absolute", bottom: 10, right: 10 }}>
        <img src={heart} alt="Heart" width={50} height={50} />
      </Box>
    </Box>
  );
};

export default Login;
