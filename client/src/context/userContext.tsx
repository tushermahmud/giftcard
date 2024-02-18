import React, { createContext, useState } from "react";
import { User } from "../types/types";
import axios from "axios";
interface UserContextProps {
  user: User | null;
  authToken: string | null;
  login: (userData: User) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextProps>({
  authToken: null,
  user: null,
  login: () => {},
  logout: () => {},
});

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );
  const [authToken, setAuthToken] = useState<string | null>(
    JSON.parse(localStorage.getItem("authToken") || "null")
  );

  console.log(authToken);

  const login = async (userData: User) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/user/login`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Important for cookies to be sent and received
        }
      );
      setUser(data.data);
      localStorage.setItem("user", JSON.stringify(data.data));
      setAuthToken(data.data.token);
      localStorage.setItem("authToken", JSON.stringify(data.data.token));
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, authToken }}>
      {children}
    </UserContext.Provider>
  );
};
