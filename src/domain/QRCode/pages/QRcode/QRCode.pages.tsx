import React from "react";
import { Card, Content } from "./QRCode.style";
import { QRCodeSVG } from "qrcode.react";
import Header from "../../../../common/components/header/header.component";
import Breadcrumb from "../../../../common/components/breadcrumb/breadcrumb.component";
import { useAuth } from "../../../../common/infra/hooks/Auth.hook";

const QRCode: React.FC = () => {
  const { user } = useAuth();

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
          <QRCodeSVG value={user.token} size={240} />
          <p>{user.name}</p>
        </Card>
      </Content>
    </>
  );
};

export default QRCode;
