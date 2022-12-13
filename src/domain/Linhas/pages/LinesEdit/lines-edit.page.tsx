import React, { useRef } from "react";
import Breadcrumb from "../../../../common/components/breadcrumb/breadcrumb.component";
import Header from "../../../../common/components/header/header.component";

import {
  CardContainer,
  CardGrid,
  Content,
  AddLineButton,
  HeadContent,
  SubmitButton,
} from "./lines-edit.styles";

import { ReactComponent as PlusIcon } from "../../../../common/assets/plus-icon.svg";
import { LineProvider, useLines } from "../../hook/line.hook";
import AddLineModal from "../../components/addLineModal/add-line-modal.component";
import LineEditInfoCard from "../../components/LineEditInfoCard/line-edit-info-card.component";
import { useNavigate } from "react-router-dom";

const LinesEdit: React.FC = () => {
  const navigate = useNavigate();

  const {
    getAllLines,
    getModalVisible,
    setModalVisible,
    getUpdateLinesData,
    updateLine,
  } = useLines();

  const updateLinesData = getUpdateLinesData();

  const handleSubmit = () => {
    if (updateLinesData.length > 0)
      updateLinesData.map((lineData) => {
        const { driver, stopPoints, ...res } = lineData;
        updateLine(res);
      });
    navigate("/lines");
  };

  const allLines = getAllLines();
  const openAddLineModal = () => {
    setModalVisible();
  };
  return (
    <>
      <Header />
      {getModalVisible() && <AddLineModal />}
      <HeadContent>
        <Breadcrumb
          paths={[
            { path: "/home", label: "Home" },
            { path: "/lines", label: "Linhas" },
            { path: "/lines/edit", label: "Editar linhas" },
          ]}
        />
        <SubmitButton onClick={handleSubmit}>Salvar</SubmitButton>
      </HeadContent>
      <Content>
        <CardGrid>
          {allLines.map((i, idx) => (
            <CardContainer key={i.id}>
              <p>
                <b>{i.name}</b>
              </p>
              <LineEditInfoCard data={i} idx={idx} />
            </CardContainer>
          ))}

          <CardContainer>
            <AddLineButton>
              <button onClick={() => openAddLineModal()}>
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

const LinesEditPage: React.FC = () => (
  <LineProvider>
    <LinesEdit />
  </LineProvider>
);

export default LinesEditPage;
