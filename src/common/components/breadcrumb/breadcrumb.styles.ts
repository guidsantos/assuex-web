import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  width: 100%;

  div:last-child a {
    color: #000;
    text-decoration: underline;
  }
`;

export const LinkText = styled.div`
  display: flex;

  a, p {
    font-weight: 600;
  }

  p {
    font-size: 25px;
    color: #686868;
  }

  a {
    font-size: 25px;
    color: #686868;
    text-decoration: none;
    margin: 0 1rem;
  }

  a:hover {
    color: #000;
    text-decoration: underline;
  }
`;
