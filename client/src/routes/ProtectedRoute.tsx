import { ReactNode } from "react";
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children, user }: { children: ReactNode; user: boolean }) => {
  return user ? children : <Navigate to='/login'></Navigate>;
}