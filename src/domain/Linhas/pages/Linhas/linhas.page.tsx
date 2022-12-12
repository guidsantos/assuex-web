import React from "react";
import Breadcrumb from "../../../../common/components/breadcrumb/breadcrumb.component";
import Header from "../../../../common/components/header/header.component";
import LineInfoCard from "../../components/LineInfoCard/line-info-card.component";
import { ILineInfo } from "../../types/line-info.type";
import {
  CardContainer,
  CardGrid,
  Content,
  EditButton,
  HeadContent,
} from "./linhas.styles";

import editIcon from "../../../../common/assets/edit-icon.svg";
import { Link } from "react-router-dom";

const Linhas: React.FC = () => {
  const apiResponse = [
    {
      coordName: "Luiz Claudio",
      lineName: "Alphaville 1",
      startPoint: "Jundiai",
      endPoint: "São Paulo",
      bus: "13601",
    },
    {
      coordName: "Luiz Claudio",
      lineName: "Alphaville 2",
      startPoint: "Itupeva",
      endPoint: "São Paulo",
      bus: "13601",
    },
    {
      coordName: "Luiz Claudio",
      lineName: "Alphaville 3",
      startPoint: "Jundiai",
      endPoint: "São Paulo",
      bus: "13601",
    },
  ] as ILineInfo[];
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
        <Link to="edit" style={{textDecoration: "none",color:"#000"}}>
        <EditButton>
          <img src={editIcon} />
          <p>Edite as linhas</p>
        </EditButton>
        </Link>
      </HeadContent>
      <Content>
        <CardGrid>
          {apiResponse.map((i) => (
            <CardContainer>
              <p>
                <b>{i.lineName}</b>
              </p>
              <LineInfoCard data={i} />
            </CardContainer>
          ))}
        </CardGrid>
      </Content>
    </>
  );
};

export default Linhas;
