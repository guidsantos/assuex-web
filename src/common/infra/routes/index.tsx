import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../../domain/Home/home.page";
import SignIn from "../../../domain/Login/SignIn/pages/signin.page";
import SignUp from "../../../domain/Login/SignUp/pages/signup.page";
import { Route as AuthRoute } from "./Router.component";
import QRCode from "../../../domain/QRCode/pages/QRcode/QRCode.pages";
import Validation from "../../../domain/QRCode/pages/Validation/Validation.page";
import Profile from "../../../domain/Profile/Profile.pages";
import Linhas from "../../../domain/Linhas/pages/Linhas/linhas.page";
import LinesEdit from "../../../domain/Linhas/pages/LinesEdit/lines-edit.page";

export const RoutesFC: React.FC = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/home"
        element={<AuthRoute isPrivate={true} outlet={<Home />} />}
      />
      <Route
        path="/qrcode"
        element={<AuthRoute isPrivate={true} outlet={<QRCode />} />}
      />
      <Route
        path="/validation"
        element={<AuthRoute isPrivate={true} outlet={<Validation />} />}
      />
      <Route
        path="/profile"
        element={<AuthRoute isPrivate={true} outlet={<Profile />} />}
      />
      <Route
        path="/lines"
        element={<AuthRoute isPrivate={true} outlet={<Linhas />} />}
      />
      <Route
        path="/lines/edit"
        element={<AuthRoute isPrivate={true} outlet={<LinesEdit />} />}
      />
    </Routes>
  );
};

export default RoutesFC;
