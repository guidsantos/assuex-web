import React from "react";
import { ILineInfo } from "../../types/line-info.type";
import { Content } from "./add-line-modal.styles";

interface ILineInfoCard {
  data: ILineInfo;
}

const AddLineModal: React.FC<ILineInfoCard> = (props) => {
  return (
    <Content>
      <p>Add Line</p>
    </Content>
  );
};

export default AddLineModal;
