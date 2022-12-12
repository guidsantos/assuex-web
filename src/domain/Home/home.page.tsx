import React from "react";
import { Link } from "react-router-dom";
import Header from "../../common/components/header/header.component";
import api from "../../common/infra/services/api";
import {
  Content,
  NavBarContainer,
  NotificationsContainer,
  Notification,
  NavCard,
  TextContainer,
  NotificaitonText,
} from "./home.styles";

import busIcon from "../../common/assets/bus-icon.svg";
import idIcon from "../../common/assets/id-icon.svg";
import profileIcon from "../../common/assets/profile-icon.svg";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <NavBarContainer>
          <Link to="/lines">
            <NavCard>
              <img src={busIcon} />
              <TextContainer>
                <p className="title">Linhas</p>
                <p className="sub-title">Veja todas as rotas disponiveis</p>
              </TextContainer>
            </NavCard>
          </Link>
          <Link to="/qrcode">
            <NavCard>
              <img src={idIcon} />
              <TextContainer>
                <p className="title">Qrcode</p>
                <p className="sub-title">Veja seu QRCode de acesso ao ônibus</p>
              </TextContainer>
            </NavCard>
          </Link>
          <Link to="/profile">
            <NavCard>
              <img src={profileIcon} />
              <TextContainer>
                <p className="title">Perfil</p>
                <p className="sub-title">
                  Veja e edite suas informações pessoais
                </p>
              </TextContainer>
            </NavCard>
          </Link>
        </NavBarContainer>
        <NotificationsContainer>
          <p className="title">Notificações</p>
          <Notification>
            <img src={busIcon} />
            <NotificaitonText>
              <p>
                O onibus chegará em 5min no seu ponto da volta (Av jundiai -
                Hospital Unimed)
              </p>
            </NotificaitonText>
          </Notification>
        </NotificationsContainer>
      </Content>
    </>
  );
};

export default Home;
