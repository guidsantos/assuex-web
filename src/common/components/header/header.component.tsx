import React, { useCallback, useRef } from "react";
import { Content } from "./header.styles";
import logo from "../../assets/logo-assuex.png";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../infra/hooks/Auth.hook";

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Content>
      <img src={logo} alt="assuex logo" />
      <Link to="/signin" onClick={() => signOut()}>
        <FiLogOut size="2rem" />
      </Link>
    </Content>
  );
};

export default Header;
