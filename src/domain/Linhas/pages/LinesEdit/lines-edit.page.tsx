import React from "react";
import Breadcrumb from "../../../../common/components/breadcrumb/breadcrumb.component";
import Header from "../../../../common/components/header/header.component";
import LineInfoCard from "../../components/LineInfoCard/line-info-card.component";
import { ILineInfo } from "../../types/line-info.type";
import {
  CardContainer,
  CardGrid,
  Content,
  AddLineButton,
  HeadContent,
} from "./lines-edit.styles";

import {ReactComponent as PlusIcon} from "../../../../common/assets/plus-icon.svg";

const LinesEdit: React.FC = () => {
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

  const addLine = () => {
    console.log("adicionar linha");
  };
  return (
    <>
      <Header />
      <HeadContent>
        <Breadcrumb
          paths={[
            { path: "/home", label: "Home" },
            { path: "/lines", label: "Linhas" },
            { path: "/lines/edit", label: "Editar linhas" },
          ]}
        />
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
          <CardContainer>
            <AddLineButton>
              <button onClick={() => addLine()}>
                <PlusIcon />
                <p>Adicione uma linhas</p>
              </button>
            </AddLineButton>
          </CardContainer>
        </CardGrid>
      </Content>
    </>
  );
};

export default LinesEdit;
