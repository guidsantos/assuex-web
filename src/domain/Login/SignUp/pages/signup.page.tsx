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

interface ISignUpFormData {
  email: String;
  password: String;
}

const SignUp: React.FC = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();
      const response = await signUp({
        name: event.currentTarget.elements.name.value,
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
      });
      if(!!response){
        navigate("/signin");
      }
      return false;
    },
    []
  );

  return (
    <>
      <Content>
        <LoginBox ref={formRef} onSubmit={handleSubmit}>
          <LogoContainer>
            <img src={logo} alt="assuex logo" />
          </LogoContainer>
          <input name="name" placeholder="name" />
          <input name="email" placeholder="email" />
          <input name="password" placeholder="password" type="password" />
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
