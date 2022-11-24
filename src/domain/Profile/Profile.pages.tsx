import React, { useCallback, useRef } from "react";
import Header from "../../common/components/header/header.component";
import {Card, Content} from "./Profile.style";

const Profile: React.FC = () => {

    const apiresponse = {
        name: 'Nome',
        sobrenome: 'Sobrenome',
        linha: 'Linha de interesse'
    }

    return (
        <>
            <Header/>
            <Content>
                <Card>
                <p>{apiresponse.name}</p>
                <input name="token" />
                <p>{apiresponse.sobrenome}</p>
                <input type="token" />
                <p>{apiresponse.linha}</p>
                <input type="token" />
                </Card>
            </Content>
        </>
    );

};

export default Profile;