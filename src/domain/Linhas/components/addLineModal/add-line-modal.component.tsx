import React, { useCallback, useRef } from "react";
import { useLines } from "../../hook/line.hook";
import {
  Content,
  ModalCard,
  CreateLineForm,
  InputDiv,
  SubmitButton,
  FormHead,
} from "./add-line-modal.styles";

import closeIcon from "../../../../common/assets/close-icon.svg";
import { ICreateLine } from "../../types/line-info.type";

const AddLineModal: React.FC = () => {
  const formRef = useRef(null);

  const { setModalVisible, addLine } = useLines();

  const handleSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();
      addLine({
        name: event.currentTarget.elements.lineName.value,
        coordName: event.currentTarget.elements.coordName.value,
        driverId: Number(event.currentTarget.elements.driverId.value),
        bus: event.currentTarget.elements.bus.value,
        startPoint: event.currentTarget.elements.startPoint.value,
        endPoint: event.currentTarget.elements.endPoint.value,
      } as ICreateLine);

      handleCloseModal();
    },
    [addLine]
  );

  const handleCloseModal = () => {
    setModalVisible();
  };

  return (
    <Content>
      <ModalCard>
        <CreateLineForm ref={formRef} onSubmit={handleSubmit}>
          <FormHead>
            <h1>Criar nova linha</h1>
            <button className="close" onClick={() => handleCloseModal()}>
              <img src={closeIcon} />
            </button>
          </FormHead>
          <InputDiv>
            <h3>Nome da linha</h3>
            <input name="lineName" />
          </InputDiv>
          <InputDiv>
            <h3>Nome do Coordenador</h3>
            <input name="coordName" />
          </InputDiv>
          <InputDiv>
            <h3>Motorista</h3>
            <input name="driverId"/>
          </InputDiv>
          <InputDiv>
            <h3>Ponto de embarque</h3>
            <input name="startPoint" />
          </InputDiv>
          <InputDiv>
            <h3>Ponto de desembarque</h3>
            <input name="endPoint" />
          </InputDiv>
          <InputDiv>
            <h3>Onibus</h3>
            <input name="bus" />
          </InputDiv>
          <SubmitButton type="submit">Criar</SubmitButton>
        </CreateLineForm>
      </ModalCard>
    </Content>
  );
};

export default AddLineModal;
