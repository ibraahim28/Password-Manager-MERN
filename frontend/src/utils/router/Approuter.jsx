import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Dashboard from "../../pages/Dashboard";

import routes from "./router";
import SidebarLayout from "../../Layouts/SidebarLayout";
import AddPassword from "../../pages/AddPassword";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="/add-password" element={<AddPassword />} />
        </Route>
          <Route path={routes.Login} element={<Login />} />
          <Route path={routes.Signup} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
