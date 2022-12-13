import React, { useCallback, useRef } from "react";
import Breadcrumb from "../../../common/components/breadcrumb/breadcrumb.component";
import Header from "../../../common/components/header/header.component";
import { Card, Content, User, Body } from "./Profile.style";
import profileIcon from "../../../common/assets/profile-icon.svg";
import api from "../../../common/infra/services/api";
import { useAuth } from "../../../common/infra/hooks/Auth.hook";

const Profile: React.FC = () => {
  const formRef = useRef(null);
  const { user } = useAuth();

  const handleSubmit = useCallback(async (event: any) => {
    event.preventDefault();
    const response = await api.put("/user", {
      id: user.id,
      name: event.currentTarget.elements.name.value,
      last_name: event.currentTarget.elements.last_name.value,
      phone: event.currentTarget.elements.phone.value,
      bith_date: event.currentTarget.elements.bith_date.value,
      cep: event.currentTarget.elements.cep.value,
      address: event.currentTarget.elements.address.value,
      number: event.currentTarget.elements.number.value,
      complement: event.currentTarget.elements.complement.value,
      bairro: event.currentTarget.elements.bairro.value,
      cidade: event.currentTarget.elements.cidade.value,
      linha_interesse: event.currentTarget.elements.linha_interesse.value,
      start_point: event.currentTarget.elements.start_point.value,
      end_point: event.currentTarget.elements.end_point.value,
      back_point: event.currentTarget.elements.back_point.value,
      finish_point: event.currentTarget.elements.finish_point.value,
    });
    return false;
  }, []);

  let profile_photo = profileIcon;

  var loadFile = function(event: any) {
    var image = document.getElementById("output") as HTMLImageElement | null;
    if (image) image.src = URL.createObjectURL(event.target.files[0]);
  };

  const inputs = [
    { label: "Nome", id: "name" },
    { label: "Sobrenome", id: "last_name" },
    { label: "Data de Nascimento", id: "bith_date" },
    { label: "Telefone", id: "phone" },
    { label: "CEP", id: "cep" },
    { label: "Endereço", id: "address" },
    { label: "Numero", id: "number" },
    { label: "Complemento", id: "complement" },
    { label: "Bairro", id: "bairro" },
    { label: "Cidade", id: "cidade" },
    { label: "Linha de Interesse", id: "linha_interesse" },
    { label: "Ponto de embarque", id: "start_point" },
    { label: "Ponto de desembarque", id: "end_point" },
    { label: "Ponto de volta", id: "back_point" },
    { label: "Ponto de chegada", id: "finish_point" },
  ];

  return (
    <>
      <Header />
      <Breadcrumb
        paths={[
          { path: "/home", label: "Home" },
          { path: "/profile", label: "Profile" },
        ]}
      />
      <Body>
        <Content>
          <User>
            <label>
              <span className="glyphicon glyphicon-camera"></span>
              <span>Change Image</span>

              <input id="file " type="file" onChange={() => loadFile(event)} />
            </label>
            <img src={profile_photo} id="output" width="200" />
          </User>
          <Card ref={formRef} onSubmit={handleSubmit}>
            {inputs.map((i) => {
              return (
                <div>
                  <p>{i.label}</p>
                  <input name={i.id} />
                </div>
              );
            })}

            <div>
              <button type="submit">Salvar</button>
            </div>
          </Card>
        </Content>
      </Body>
    </>
  );
};

export default Profile;
