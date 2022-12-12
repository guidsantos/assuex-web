import {
  ButtonsContainer,
  Content,
  LoginBox,
  LogoContainer,
} from "./signup.styles";

import logo from "../../../../common/assets/logo-assuex.png";

import React, { useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../hooks/signup.hook";

const SignUp: React.FC = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (event: any) => {
    event.preventDefault();
    const response = await signUp({
      name: event.currentTarget.elements.name.value,
      last_name: event.currentTarget.elements.last_name.value,
      cpf: event.currentTarget.elements.cpf.value,
      phone: event.currentTarget.elements.phone.value,
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    });
    if (!!response) {
      navigate("/signin");
    }
    return false;
  }, []);

  return (
    <>
      <Content>
        <LoginBox ref={formRef} onSubmit={handleSubmit}>
          <LogoContainer>
            <img src={logo} alt="assuex logo" />
          </LogoContainer>
          <input name="name" placeholder="Nome" />
          <input name="last_name" placeholder="Sobrenome" />
          <input name="cpf" placeholder="CPF" />
          <input name="phone" placeholder="Telefone" />
          <input name="email" placeholder="Email" />
          <input name="password" placeholder="Senha" type="password" />
          <ButtonsContainer>
            <button type="submit">Cadastrar</button>
            <Link to="/signin">Voltar</Link>
          </ButtonsContainer>
        </LoginBox>
      </Content>
    </>
  );
};

export default SignUp;
