import React, { useCallback, useRef } from "react";
import Header from "../../common/components/header/header.component";
import { Card, Content, User, Body } from "./Profile.style";

const Profile: React.FC = () => {
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (event: any) => {
    event.preventDefault();
    console.log(event.currentTarget.elements.name.value);
    return false;
  }, []);

  const apiresponse = {
    name: "Nome",
    sobrenome: "Sobrenome",
    linha: "Linha de interesse",
  };

  let profile_photo =
    "https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg";

  var loadFile = function(event: any) {
    var image = document.getElementById("output") as HTMLImageElement | null;
    if (image) image.src = URL.createObjectURL(event.target.files[0]);
  };

  return (
    <>
      <Header />
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
            <div>
              <p>{apiresponse.name}</p>
              <input name="token" />
            </div>
            <div>
              <p>{apiresponse.sobrenome}</p>
              <input type="token" />
            </div>
            <div>
              <p>{apiresponse.linha}</p>
              <input type="token" />
            </div>
            <button type="submit">Salvar</button>
          </Card>
        </Content>
      </Body>
    </>
  );
};

export default Profile;
