import React, { Fragment } from "react";
import Login from "../pages/Login";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layouts/Layout";
import RequireAuth from "./RequireAuth";
import Catalogues from "../pages/Catalogues";
import Orders from "../pages/Orders";

const RouteFile: React.FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route index element={<Catalogues />} />
            <Route path="catalogue" element={<Catalogues  />} />
            <Route path="orders" element={<Orders  />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default RouteFile;
