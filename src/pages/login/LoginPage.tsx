import React from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/AuthSlice";
import users from "../../config/users.json";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (email: string, password: string) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      dispatch(login(user.token));
      localStorage.setItem("token", user.token);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;
