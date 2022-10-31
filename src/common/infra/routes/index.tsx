import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../../domain/Home/home.page";
import SignIn from "../../../domain/Login/SignIn/pages/signin.page";
import SignUp from "../../../domain/Login/SignUp/pages/signup.page";
import { Route as AuthRoute } from "./Router.component";

export const RoutesFC: React.FC = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/home"
        element={<AuthRoute isPrivate={true} outlet={<Home />} />}
      />
    </Routes>
  );
};

export default RoutesFC;
