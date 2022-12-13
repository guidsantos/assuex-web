import React, { useEffect } from "react";
import Breadcrumb from "../../../../common/components/breadcrumb/breadcrumb.component";
import Header from "../../../../common/components/header/header.component";
import {
  Content,
  HeadContent,
  ItinerarioCard,
  ItinerarioContainer,
  ItinerarioTable,
  TableHead,
} from "./line-stop-points.styles";

import { useLines, LineProvider } from "../../hook/line.hook";
import { useParams } from "react-router-dom";

import clockIcon from "../../../../common/assets/clock-icon.svg";
import stopPointIcon from "../../../../common/assets/stop-point-icon.svg";
import moment from "moment";

const LineStopPoints: React.FC = () => {
  const { getLineData } = useLines();

  const lineData = getLineData();

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
      </HeadContent>
      <Content>
        <h1>Itinerário</h1>
        <ItinerarioContainer>
          <ItinerarioTable>
            <TableHead>
              <div>
                <img src={stopPointIcon} />
                <h3>Ida</h3>
              </div>
              <div>
                <img src={clockIcon} />
                <h3>Horário</h3>
              </div>
            </TableHead>
            {lineData.stopPoints.length > 0 &&
              lineData.stopPoints
                .filter((e) =>
                  moment(e.stop_time, "hh:mm").isBefore(
                    moment("16:00", "hh:mm")
                  )
                )
                .map((i) => (
                  <ItinerarioCard>
                    <div>
                      <p className="title">{i.address}</p>
                      <p className="sub-title">{i.reference}</p>
                    </div>
                    <p>{i.stop_time}</p>
                  </ItinerarioCard>
                ))}
          </ItinerarioTable>
          <ItinerarioTable>
            <TableHead>
              <div>
                <img src={stopPointIcon} />
                <h3>Retorno</h3>
              </div>
              <div>
                <img src={clockIcon} />
                <h3>Horário</h3>
              </div>
            </TableHead>
            {lineData.stopPoints.length > 0 &&
              lineData.stopPoints
                .filter((e) =>
                  moment(e.stop_time, "hh:mm").isAfter(moment("16:00", "hh:mm"))
                )
                .map((i) => (
                  <ItinerarioCard>
                    <div>
                      <p className="title">{i.address}</p>
                      <p className="sub-title">{i.reference}</p>
                    </div>
                    <p>{i.stop_time}</p>
                  </ItinerarioCard>
                ))}
          </ItinerarioTable>
        </ItinerarioContainer>
      </Content>
    </>
  );
};

const LineStopPointsPage: React.FC = () => (
  <LineProvider>
    <LineStopPoints />
  </LineProvider>
);

export default LineStopPointsPage;
