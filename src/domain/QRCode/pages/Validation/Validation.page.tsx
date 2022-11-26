import React, { useCallback, useRef } from "react";
import Header from "../../../../common/components/header/header.component";
import { Card, Content, Histcard, Histrow} from "./Validation.style";

const Validation: React.FC = () => {
    const formRef = useRef(null);

    const handleSubmit = useCallback(
        async (event: any) => {
          event.preventDefault();
          alert(event.currentTarget.elements.token.value)
          return false;
        },
        []
      );

    const apiresponse = {
        linha: 'Linha de interesse',
        passageiros: [{
            name: 'Passageiro 1',
            horario: '10:50'
        }, {
            name: 'Passageiro 2',
            horario: '14:30'
        }, {
            name: 'Passageiro 3',
            horario: '19:00'
        }]
    }

    return (
        <>
            <Header/>
            <Content>
                <Card ref={formRef} onSubmit={handleSubmit}>
                    <p>{apiresponse.linha}</p>
                    <h1>Validar QRcode</h1>
                    <input name="token" placeholder="Digite o token" />
                    <button type="submit">Validar</button>
                </Card>
                <Histcard>
                    <h1>Histórico</h1>
                    {apiresponse.passageiros.map(item=>{
                        return (<Histrow>
                            <p>{item.name}</p>
                            <p>{item.horario}</p>
                            </Histrow>)
                    })}
                </Histcard>
            </Content>
        </>
    );
};

export default Validation;