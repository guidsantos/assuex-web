import React from "react";
import { Link } from "react-router-dom";
import { ILineInfo } from "../../types/line-info.type";
import {
  Content,
  CoordNameDiv,
  ImgDiv,
  InfoDiv,
  RoteLinkDiv,
  TextDiv,
} from "./line-info-card.styles";
import busImg from "../../../../common/assets/busImg.png";
import clockIcon from "../../../../common/assets/clock-icon.svg";
import busIcon from "../../../../common/assets/bus-icon.svg";
import stopPointIcon from "../../../../common/assets/stop-point-icon.svg";

interface ILineInfoCard {
  data: ILineInfo;
}

const LineInfoCard: React.FC<ILineInfoCard> = (props) => {
  return (
    <Content>
      <ImgDiv>
        <img src={busImg} />
      </ImgDiv>
      <InfoDiv>
        <CoordNameDiv>
          <p className="title">
            <b>{props.data.coordName}</b>
          </p>
          <p className="label">Coodernador</p>
        </CoordNameDiv>
        <TextDiv>
          <img src={stopPointIcon} />
          <p>
            <b>Embarque:</b>
          </p>
          <p className="value">{props.data.startPoint}</p>
        </TextDiv>
        <TextDiv>
          <img src={stopPointIcon} />
          <p>
            <b>Desembarque:</b>
          </p>
          <p className="value">{props.data.endPoint}</p>
        </TextDiv>
        <TextDiv>
          <img src={busIcon} />
          <p>
            <b>Onibus:</b>
          </p>
          <p className="value">{props.data.bus}</p>
        </TextDiv>
        <Link to={`/lines/routes/${props.data.id}`}>
          <RoteLinkDiv>
            <img src={clockIcon} />
            <p>Rotas e horários</p>
          </RoteLinkDiv>
        </Link>
      </InfoDiv>
    </Content>
  );
};

export default LineInfoCard;
