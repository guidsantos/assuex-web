import React from "react";
import { Link } from "react-router-dom";
import { Content, LinkText } from "./breadcrumb.styles";

interface IBreadcrumb {
  paths: {
    path: string;
    label: string;
  }[];
}

const Breadcrumb: React.FC<IBreadcrumb> = (props) => {
  return (
    <Content>
      {props.paths.map((i, idx) => {
        return (
          <LinkText>
            <Link to={i.path}>{i.label}</Link>
            <p>{props.paths.length > idx+1 ? ">" : ""}</p>
          </LinkText>
        );
      })}
    </Content>
  );
};

export default Breadcrumb;
