import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ILineInfo } from "../../types/line-info.type";
import {
  Content,
  CoordNameDiv,
  ImgDiv,
  InfoDiv,
  RoteLinkDiv,
  TextDiv,
} from "./line-edit-info-card.styles";
import busImg from "../../../../common/assets/busImg.png";
import clockIcon from "../../../../common/assets/clock-icon.svg";
import busIcon from "../../../../common/assets/bus-icon.svg";
import stopPointIcon from "../../../../common/assets/stop-point-icon.svg";
import { useLines } from "../../hook/line.hook";
import { format } from "path";

interface ILineInfoCard {
  data: ILineInfo;
  idx: number;
}

const LineEditInfoCard: React.FC<ILineInfoCard> = (props) => {
  const { getAllLines, setUpdateLinesData } = useLines();

  const [data, setData] = useState(props.data as ILineInfo);

  const oldData = getAllLines();

  useEffect(() => {
    let newArr = [...oldData];
    newArr[props.idx] = data;

    setUpdateLinesData(newArr);
  }, [data]);

  return (
    <Content>
      <ImgDiv>
        <img src={busImg} />
      </ImgDiv>
      <InfoDiv>
        <CoordNameDiv>
          <input
            className="title"
            value={data.coordName}
            onChange={(e) => {
              setData({ ...data, coordName: e.currentTarget.value });
            }}
          />
          <p className="label">Coodernador</p>
        </CoordNameDiv>
        <TextDiv>
          <img src={stopPointIcon} />
          <p>
            <b>Embarque:</b>
          </p>
          <input
            className="title"
            value={data.startPoint}
            onChange={(e) => {
              setData({ ...data, startPoint: e.currentTarget.value });
            }}
          />
        </TextDiv>
        <TextDiv>
          <img src={stopPointIcon} />
          <p>
            <b>Desembarque:</b>
          </p>
          <input
            className="title"
            value={data.endPoint}
            onChange={(e) => {
              setData({ ...data, endPoint: e.currentTarget.value });
            }}
          />
        </TextDiv>
        <TextDiv>
          <img src={busIcon} />
          <p>
            <b>Onibus:</b>
          </p>
          <input
            className="title"
            value={data.bus}
            onChange={(e) => {
              setData({ ...data, bus: e.currentTarget.value });
            }}
          />
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

export default LineEditInfoCard;
