import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && <Navbar />}
      <Outlet />
    </div>
  );
};
export default Layout;
