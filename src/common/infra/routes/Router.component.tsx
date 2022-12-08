import React, { Component } from "react";
import { Navigate, Route as RouteDom, RouteProps } from "react-router-dom";

import { useAuth } from "../hooks/Auth.hook";

interface IRoute {
  isPrivate: boolean;
  outlet: JSX.Element;
}

export const Route: React.FC<RouteProps & IRoute> = ({
  isPrivate = false,
  outlet,
}) => {
  const { user } = useAuth();

  console.log(user);

  if (isPrivate === !!user) {
    return outlet;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Route;