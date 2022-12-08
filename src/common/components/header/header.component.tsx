import React, { useCallback, useRef } from "react";
import {Content} from "./header.styles";
import logo from "../../assets/logo-assuex.png";
import { FiLogOut } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <Content>
            <img src={logo} alt="assuex logo" />
            <Link to="/signin"><FiLogOut size='2rem'/></Link>
        </Content>
    );
};

export default Header;