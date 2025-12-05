import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
interface LoginFormProps {
  /* eslint-disable no-unused-vars */
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <Box
      sx={{
        height: "80vh",
        margin: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper elevation={3} sx={{ width: 350, margin: "80px auto", padding: 3 }}>
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginForm;
