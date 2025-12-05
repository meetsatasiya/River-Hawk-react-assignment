import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2", mb: 4 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ mr: 2, bgcolor: "#fff", color: "#1976d2" }}>D</Avatar>
          <Typography variant="h6" component="div">
            Demo Dashboard
          </Typography>
        </Box>

        <Button
          variant="outlined"
          color="inherit"
          onClick={handleLogout}
          sx={{ textTransform: "none" }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
