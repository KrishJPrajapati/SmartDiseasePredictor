import React from "react";
import { TextField, Button, Link, Box, Typography, Container } from "@mui/material";
// import heart from "../images/heart.png";


const Login = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg?semt=ais_hybrid')",
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
        <img src="data:image/jpeg;base64,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" alt="Heart" width={50} height={50} />
      </Box>
    </Box>
  );
};

export default Login;
