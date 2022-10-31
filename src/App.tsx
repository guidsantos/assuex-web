import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./common/infra/hooks/Auth.hook";
import RoutesFC from "./common/infra/routes";
import GlobalStyle from './common/styles/global.styles';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
       <GlobalStyle/>
        <RoutesFC />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
