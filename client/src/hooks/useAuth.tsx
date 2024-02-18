// src/hooks/useAuth.tsx
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const useAuth = () => {
  const { user, login, logout, authToken } = useContext(UserContext);
  const isAuthenticated = !!user;

  return {
    user,
    isAuthenticated,
    login,
    logout,
    authToken
  };
};

export default useAuth;
