import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/Index";
import type { JSX } from "react";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuth = useSelector((s: RootState) => s.auth.isAuthenticated);
  return isAuth ? children : <Navigate to="/login" replace />;
}
