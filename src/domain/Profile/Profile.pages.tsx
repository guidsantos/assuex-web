import React, { useCallback, useRef } from "react";
import Header from "../../common/components/header/header.component";
import {Card, Content, User, Body} from "./Profile.style";

const Profile: React.FC = () => {
    const formRef = useRef(null);

    const handleSubmit = useCallback(
        async (event: any) => {
          event.preventDefault();
          console.log(event.currentTarget.elements.name.value)
          return false;
        },
        []
      );

    const apiresponse = {
        name: 'Nome',
        sobrenome: 'Sobrenome',
        linha: 'Linha de interesse'
    }

    return (
        <>
            <Header/>
            <Body>
                <Content>
                    <User></User>
                    <Card ref={formRef} onSubmit={handleSubmit}>
                    <p>{apiresponse.name}</p>
                    <input name="token" />
                    <p>{apiresponse.sobrenome}</p>
                    <input type="token" />
                    <p>{apiresponse.linha}</p>
                    <input type="token" />
                    </Card>
                </Content>
            </Body>
        </>
    );

};

export default Profile;