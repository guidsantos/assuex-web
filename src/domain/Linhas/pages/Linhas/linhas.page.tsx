import React from "react";
import Breadcrumb from "../../../../common/components/breadcrumb/breadcrumb.component";
import Header from "../../../../common/components/header/header.component";
import LineInfoCard from "../../components/LineInfoCard/line-info-card.component";
import {
  CardContainer,
  CardGrid,
  Content,
  EditButton,
  HeadContent,
} from "./linhas.styles";

import editIcon from "../../../../common/assets/edit-icon.svg";
import { Link } from "react-router-dom";
import { useLines, LineProvider } from "../../hook/line.hook";

const Linhas: React.FC = () => {
  const { getAllLines } = useLines();

  const allLines = getAllLines();
  return (
    <>
      <Header />
      <HeadContent>
        <Breadcrumb
          paths={[
            { path: "/home", label: "Home" },
            { path: "/lines", label: "Linhas" },
          ]}
        />
        <Link to="edit" style={{ textDecoration: "none", color: "#000" }}>
          <EditButton>
            <img src={editIcon} />
            <p>Edite as linhas</p>
          </EditButton>
        </Link>
      </HeadContent>
      <Content>
        <CardGrid>
          {allLines.length > 0 &&
            allLines.map((i) => (
              <CardContainer>
                <p>
                  <b>{i.name}</b>
                </p>
                <LineInfoCard data={i} />
              </CardContainer>
            ))}
        </CardGrid>
      </Content>
    </>
  );
};

const LinhasPage: React.FC = () => (
  <LineProvider>
    <Linhas />
  </LineProvider>
);

export default LinhasPage;
