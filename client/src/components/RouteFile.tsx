import React, { Fragment } from "react";
import UserDashboard from "../pages/UserDashboard";
import Login from "../pages/Login";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layouts/Layout";
import RequireAuth from "./RequireAuth";
import Unauthorized from "./Unauthorized";
import Catalogue from "../pages/Catalogue ";

const RouteFile: React.FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path="catalogue" element={<Catalogue  />} />
            <Route path="userdashboard" element={<UserDashboard />} />
            <Route path="unauthorized" element={<Unauthorized />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default RouteFile;
