import {
  ButtonsContainer,
  Content,
  LoginBox,
  LogoContainer,
} from "./signin.styles";

import logo from "../../../../common/assets/logo-assuex.png";

import React, { useCallback, useRef } from "react";
import { useAuth } from "../../../../common/infra/hooks/Auth.hook";
import { Link, useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();
      await signIn({
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
      });

      navigate("/home");
      return false;
    },
    [signIn]
  );

  return (
    <>
      <Content>
        <LoginBox ref={formRef} onSubmit={handleSubmit}>
          <LogoContainer>
            <img src={logo} alt="assuex logo" />
          </LogoContainer>
          <input name="email" placeholder="email" />
          <input name="password" placeholder="password" type="password" />

          <ButtonsContainer>
            <button type="submit">Login</button>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "0.8rem",
                color: "#fff",
              }}
            >
              <p>Não possue conta?</p>
              <Link to="/signup">Cadastre-se</Link>
            </div>
          </ButtonsContainer>
        </LoginBox>
      </Content>
    </>
  );
};

export default SignIn;
