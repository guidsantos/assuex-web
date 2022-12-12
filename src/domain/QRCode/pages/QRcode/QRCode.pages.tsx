import React from "react";
import { Card, Content } from "./QRCode.style";
import { QRCodeSVG } from "qrcode.react";
import Header from "../../../../common/components/header/header.component";
import Breadcrumb from "../../../../common/components/breadcrumb/breadcrumb.component";

const QRCode: React.FC = () => {
  const apiresponse = {
    token: "www.google.com.br",
    name: "Nome do passageiro",
    linha: "Linha de interesse",
  };

  return (
    <>
      <Header />
      <Breadcrumb
        paths={[
          { path: "/home", label: "Home" },
          { path: "/qrcode", label: "Qrcode" },
        ]}
      />

      <Content>
        <Card>
          <h1>Carteirinha Virtual</h1>
          <QRCodeSVG value={apiresponse.token} size={240} />
          <p>{apiresponse.name}</p>
          <p>{apiresponse.linha}</p>
        </Card>
      </Content>
    </>
  );
};

export default QRCode;
